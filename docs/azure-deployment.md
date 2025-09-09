# 🚀 Azure Deployment Guide

This guide explains how to set up and use the Azure deployment workflow for the GitHub Actions Automation Showcase.

## 📋 Prerequisites

Before using the Azure deployment workflow, you need:

1. **Azure Subscription** - An active Azure subscription
2. **Azure App Service** - Two App Service instances (staging and production)
3. **Service Principal** - Azure service principal for authentication
4. **GitHub Secrets** - Repository secrets configured for Azure authentication

## 🏗️ Azure Setup

### 1. Create Azure App Services

Create two Azure App Service instances for different environments:

```bash
# Create resource group
az group create --name rg-actions-showcase --location "East US"

# Create App Service plan
az appservice plan create \
  --name plan-actions-showcase \
  --resource-group rg-actions-showcase \
  --sku B1 \
  --is-linux

# Create staging App Service
az webapp create \
  --name actions-showcase-staging \
  --resource-group rg-actions-showcase \
  --plan plan-actions-showcase \
  --runtime "NODE|20-lts"

# Create production App Service
az webapp create \
  --name actions-showcase-prod \
  --resource-group rg-actions-showcase \
  --plan plan-actions-showcase \
  --runtime "NODE|20-lts"
```

### 2. Create Service Principal

Create a service principal for GitHub Actions authentication:

```bash
# Create service principal
az ad sp create-for-rbac \
  --name "github-actions-showcase" \
  --role contributor \
  --scopes /subscriptions/{subscription-id}/resourceGroups/rg-actions-showcase \
  --sdk-auth
```

This command will output JSON credentials that you'll need for GitHub secrets.

### 3. Configure App Service Settings

Set up Node.js configuration for both App Services:

```bash
# Configure staging
az webapp config appsettings set \
  --name actions-showcase-staging \
  --resource-group rg-actions-showcase \
  --settings NODE_ENV=staging PORT=8080

# Configure production
az webapp config appsettings set \
  --name actions-showcase-prod \
  --resource-group rg-actions-showcase \
  --settings NODE_ENV=production PORT=8080
```

## 🔐 GitHub Secrets Configuration

Add these secrets to your GitHub repository:

### Required Secrets

| Secret Name | Description | Example Value |
|-------------|-------------|---------------|
| `AZURE_CREDENTIALS` | Service principal credentials | JSON from `az ad sp create-for-rbac` |

### Setting up AZURE_CREDENTIALS

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `AZURE_CREDENTIALS`
5. Value: The JSON output from the service principal creation command:

```json
{
  "clientId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "clientSecret": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "subscriptionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "tenantId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

## 🚀 Using the Azure Deployment Workflow

### Automatic Deployments

The workflow automatically triggers on:

- **Push to `main`** → Deploys to **production**
- **Push to `develop`** → Deploys to **staging**
- **Merged PR to `main`** → Deploys to **production**

### Manual Deployments

You can manually trigger deployments:

1. Go to **Actions** tab in your repository
2. Select **🚀 Deploy to Azure** workflow
3. Click **Run workflow**
4. Choose:
   - **Environment**: `staging` or `production`
   - **Force deploy**: Deploy even if no changes detected

### Deployment Process

The workflow performs these steps:

1. **🔍 Pre-deployment Checks**
   - Determines target environment
   - Checks if deployment is needed
   - Sets up webapp names and URLs

2. **🏗️ Build Application**
   - Installs production dependencies
   - Runs security audit
   - Creates deployment package
   - Generates Azure-specific configuration files

3. **🚀 Deploy to Azure**
   - Authenticates with Azure
   - Deploys to App Service
   - Runs health checks
   - Verifies deployment success

4. **📊 Notification**
   - Posts deployment status to PRs
   - Provides quick links to deployed application

## 🌐 Accessing Your Deployed Application

After successful deployment, your application will be available at:

- **Staging**: `https://actions-showcase-staging.azurewebsites.net`
- **Production**: `https://actions-showcase-prod.azurewebsites.net`

### Application Endpoints

- **Home**: `/` - Main application page with automation showcase info
- **Health**: `/health` - Health check endpoint for monitoring
- **Stats**: `/stats` - Application statistics and metrics

## 🔧 Customization

### Changing App Service Names

To use different App Service names, update the workflow file:

```yaml
# In .github/workflows/azure-deploy.yml
# Update the webapp_name logic in the "Determine Deployment Environment" step
if [[ "$ENVIRONMENT" == "production" ]]; then
  echo "webapp_name=your-prod-app-name" >> $GITHUB_OUTPUT
else
  echo "webapp_name=your-staging-app-name" >> $GITHUB_OUTPUT
fi
```

### Adding Environment Variables

Add application settings through Azure CLI or the Azure Portal:

```bash
az webapp config appsettings set \
  --name your-app-name \
  --resource-group your-resource-group \
  --settings CUSTOM_VAR=value
```

### Custom Deployment Conditions

Modify the deployment trigger conditions in the workflow file:

```yaml
# Add custom paths to ignore
paths-ignore:
  - '**.md'
  - 'docs/**'
  - 'custom-folder/**'

# Or add custom paths to include
paths:
  - 'src/**'
  - 'package*.json'
```

## 🔍 Troubleshooting

### Common Issues

1. **Authentication Failed**
   - Verify `AZURE_CREDENTIALS` secret is correctly set
   - Check service principal has proper permissions
   - Ensure subscription ID is correct

2. **App Service Not Found**
   - Verify App Service names match the workflow configuration
   - Check that the App Services exist in the correct resource group
   - Ensure service principal has access to the App Services

3. **Health Check Failed**
   - Check App Service logs in Azure Portal
   - Verify the application starts correctly
   - Check if the `/health` endpoint is accessible

4. **Build Failed**
   - Review build logs in GitHub Actions
   - Check for missing dependencies
   - Verify Node.js version compatibility

### Debugging Tips

1. **Check Deployment Logs**
   - Go to Azure Portal → App Service → Deployment Center → Logs
   - Review the deployment history and error messages

2. **Monitor Application Logs**
   - Azure Portal → App Service → Log stream
   - Check for runtime errors and application issues

3. **Test Locally**
   - Run `npm install && npm start` locally
   - Verify the application works before deployment

## 📊 Monitoring and Maintenance

### Application Insights

Enable Application Insights for monitoring:

```bash
az webapp config appsettings set \
  --name your-app-name \
  --resource-group your-resource-group \
  --settings APPINSIGHTS_INSTRUMENTATIONKEY=your-key
```

### Scaling

Scale your App Service based on demand:

```bash
# Scale up/down the App Service plan
az appservice plan update \
  --name plan-actions-showcase \
  --resource-group rg-actions-showcase \
  --sku S1

# Scale out (increase instance count)
az webapp scale set \
  --name your-app-name \
  --resource-group your-resource-group \
  --instance-count 2
```

### Cost Management

Monitor costs and set up budget alerts:

- Use Azure Cost Management to track spending
- Set up budget alerts for resource groups
- Consider using Azure Dev/Test pricing for non-production environments

## 🎯 Best Practices

1. **Environment Separation**
   - Keep staging and production completely separate
   - Use different resource groups for isolation
   - Apply different access policies per environment

2. **Security**
   - Regularly rotate service principal credentials
   - Use managed identities when possible
   - Enable App Service authentication if needed

3. **Monitoring**
   - Set up health checks and monitoring
   - Configure alerts for application failures
   - Monitor performance and resource usage

4. **Deployment**
   - Always test in staging before production
   - Use deployment slots for zero-downtime deployments
   - Keep deployment packages small and optimized

---

🎉 **Congratulations!** You now have a fully automated Azure deployment pipeline for your GitHub Actions automation showcase!