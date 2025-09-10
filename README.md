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

### 🌩️ AWS Integration
- **Infrastructure as Code**: Automated CloudFormation deployments
- **S3 Static Hosting**: Deploy static assets to Amazon S3
- **Lambda Functions**: Serverless application deployment
- **Parameter Store**: Secure configuration management
- **CloudWatch Monitoring**: Automated logging and metrics
- **Multi-environment Support**: Staging and production deployments

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

## 🛠️ Workflows Included

| Workflow | Trigger | Description |
|----------|---------|-------------|
| `branch-automation.yml` | Branch creation | Welcomes new branches with smart analysis |
| `pr-automation.yml` | Pull requests | Auto-labels and assigns reviewers |
| `ci-cd.yml` | Push/PR | Runs tests, builds, and deployments |
| `aws-integration.yml` | Push/PR/Manual | Deploys to AWS services with full automation |
| `celebration.yml` | PR merge | Adds fun celebration comments |
| `weekly-stats.yml` | Schedule | Generates weekly activity reports |

## 🌩️ AWS Integration Setup

The AWS integration workflow demonstrates real-world cloud deployment patterns:

### 🚀 Quick Demo (No AWS Account Required)
The workflow runs in **simulation mode** by default, showing exactly what would happen without requiring AWS credentials. Perfect for learning and demonstrations!

### 🔧 Full AWS Setup (Optional)
To deploy to real AWS resources:

1. **Create AWS Account** - Sign up at [aws.amazon.com](https://aws.amazon.com)

2. **Setup IAM Permissions** - Create an IAM user or OIDC role with these permissions:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [{
       "Effect": "Allow",
       "Action": [
         "s3:*", "lambda:*", "cloudformation:*", 
         "iam:PassRole", "logs:*", "ssm:*"
       ],
       "Resource": "*"
     }]
   }
   ```

3. **Configure GitHub Secrets** - Add to repository Settings > Secrets:
   - `AWS_ACCESS_KEY_ID` - Your AWS access key
   - `AWS_SECRET_ACCESS_KEY` - Your AWS secret key
   - `AWS_ROLE_ARN` - (Alternative) OIDC role ARN

4. **Trigger Deployment** - Push to `main`/`develop` or run manually!

### 🎯 What Gets Deployed
- **🪣 S3 Bucket** - Static website hosting
- **⚡ Lambda Function** - Serverless API endpoint  
- **📊 CloudWatch Logs** - Monitoring and debugging
- **🏗️ CloudFormation Stack** - Infrastructure as Code
- **🔧 Parameter Store** - Configuration management

---

**🤖 This repository showcases the power of GitHub Actions automation!**

*Perfect for demos, learning, and inspiring your own automation ideas.*