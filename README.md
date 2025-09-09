# 🚀 GitHub Actions Automation Showcase

Welcome to the **GitHub Actions Automation Showcase**! This repository demonstrates various cool automations you can implement with GitHub Actions.

## 🌟 Featured Automations

### 🎯 Branch-Based Workflows
- **New Branch Welcome**: Automatically greets new branches with custom messages
- **Branch Analysis**: Categorizes branches by naming convention (feature/, bugfix/, hotfix/, etc.)
- **Smart Suggestions**: Provides contextual tips based on branch activity

### 🏷️ Smart Labeling
- **Auto-labeling**: Automatically labels PRs based on file changes
- **Size Detection**: Labels PRs as small, medium, or large based on changes
- **Team Assignment**: Routes PRs to appropriate team members

### 🚀 CI/CD Pipeline
- **Multi-environment Testing**: Tests across different Node.js versions
- **Security Scanning**: Automated vulnerability detection
- **Performance Monitoring**: Tracks build times and performance metrics

### ☁️ Azure Deployment
- **Azure App Service**: Automated deployment to Azure cloud platform
- **Multi-environment**: Separate staging and production deployments
- **Health Monitoring**: Post-deployment verification and health checks

### 🎨 Fun Extras
- **Celebration GIFs**: Adds celebration comments on successful merges
- **Weekly Stats**: Generates weekly contribution reports
- **Code Quality Badges**: Dynamic README badges for build status

## 🎮 How to Demo

1. **Create a new branch** with different prefixes:
   - `feature/awesome-new-thing` - See feature workflow in action
   - `bugfix/critical-issue` - Watch bug fix automation
   - `hotfix/urgent-patch` - Experience hotfix prioritization

2. **Open a Pull Request** - Watch auto-labeling and team assignment

3. **Push commits** - See CI/CD pipeline and quality checks

4. **Merge PR** - Enjoy celebration automations!

5. **Deploy to Azure** - Experience cloud deployment automation!

## 🛠️ Workflows Included

| Workflow | Trigger | Description |
|----------|---------|-------------|
| `branch-automation.yml` | Branch creation | Welcomes new branches with smart analysis |
| `pr-automation.yml` | Pull requests | Auto-labels and assigns reviewers |
| `ci-cd.yml` | Push/PR | Runs tests, builds, and deployments |
| `azure-deploy.yml` | Push/Manual | Deploys application to Azure App Service |
| `celebration.yml` | PR merge | Adds fun celebration comments |
| `weekly-stats.yml` | Schedule | Generates weekly activity reports |

## ☁️ Azure Deployment Setup

To use the Azure deployment workflow:

1. **Set up Azure resources** - Create App Services for staging and production
2. **Configure GitHub secrets** - Add `AZURE_CREDENTIALS` with service principal details
3. **Trigger deployment** - Push to `main`/`develop` or run manually

📖 **Detailed setup guide**: [docs/azure-deployment.md](docs/azure-deployment.md)

---

**🤖 This repository showcases the power of GitHub Actions automation!**

*Perfect for demos, learning, and inspiring your own automation ideas.*