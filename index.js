#!/usr/bin/env node

/**
 * 🚀 GitHub Actions Automation Showcase - Demo Application
 * 
 * This is a simple Node.js application used to demonstrate 
 * GitHub Actions automation workflows.
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 📊 Simple in-memory stats for demo purposes
let stats = {
  visits: 0,
  startTime: new Date(),
  version: '1.0.2'
};

// 💡 Workflow tips for the showcase
const workflowTips = [
  {
    tip: 'Use workflow_dispatch to manually trigger actions from the GitHub UI',
    category: '🎮 Workflow Control'
  },
  {
    tip: 'Leverage branch protection rules to require specific workflows to pass before merging',
    category: '🔒 Security'
  },
  {
    tip: 'Cache dependencies in your workflow to speed up CI/CD pipelines dramatically',
    category: '⚡ Performance'
  },
  {
    tip: 'Use matrix strategy to test across multiple Node.js versions simultaneously',
    category: '🧪 Testing'
  },
  {
    tip: 'Schedule workflows with cron expressions for automated maintenance tasks',
    category: '📅 Automation'
  },
  {
    tip: 'Store secrets in repository settings and reference them with ${{ secrets.SECRET_NAME }}',
    category: '🔐 Security'
  },
  {
    tip: 'Use GitHub Actions to auto-generate changelogs from commit messages',
    category: '📝 Documentation'
  },
  {
    tip: 'Implement quality gates in CI to block PRs that fail code coverage thresholds',
    category: '✅ Quality'
  },
  {
    tip: 'Use conditional steps with "if" to run actions only on specific branches or events',
    category: '🎯 Control Flow'
  },
  {
    tip: 'Publish packages to npm, PyPI, or other registries directly from workflows',
    category: '📦 Publishing'
  },
  {
    tip: 'Create reusable workflow templates to keep your automation DRY',
    category: '🔄 Reusability'
  },
  {
    tip: 'Use GitHub CLI (gh) in workflows to comment on PRs, create issues, or manage releases',
    category: '🛠️ Tools'
  },
  {
    tip: 'Auto-assign reviewers based on CODEOWNERS file in your repository',
    category: '👥 Team'
  },
  {
    tip: 'Set up deployment environments with required reviewers for production deployments',
    category: '🚀 Deployment'
  },
  {
    tip: 'Automatically close stale issues and PRs to keep your repository tidy',
    category: '🧹 Maintenance'
  },
  {
    tip: 'Use artifacts to store build outputs and test reports from CI runs',
    category: '📦 Storage'
  },
  {
    tip: 'Monitor workflow execution time and optimize slow steps using GitHub\'s insights',
    category: '📊 Analytics'
  },
  {
    tip: 'Implement semantic versioning automatically with GitHub Actions',
    category: '🏷️ Versioning'
  }
];

// 🏠 Home route with automation showcase info
app.get('/', (req, res) => {
  stats.visits++;
  
  res.json({
    message: '🚀 Welcome to GitHub Actions Automation Showcase!',
    description: 'This app demonstrates various GitHub Actions workflows',
    stats: {
      visits: stats.visits,
      uptime: Math.floor((new Date() - stats.startTime) / 1000) + ' seconds',
      version: stats.version
    },
    workflows: [
      '🌟 Branch Automation - Welcomes new branches',
      '🏷️ PR Automation - Smart labeling and analysis', 
      '🎉 Celebration - Fun merge celebrations',
      '📊 Weekly Stats - Automated reporting',
      '🚀 CI/CD Pipeline - Testing and deployment'
    ]
  });
});

// 📊 Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: Math.floor((new Date() - stats.startTime) / 1000)
  });
});

// 📈 Stats endpoint
app.get('/stats', (req, res) => {
  res.json(stats);
});

// 💡 Random workflow tip endpoint
app.get('/tip', (req, res) => {
  const randomTip = workflowTips[Math.floor(Math.random() * workflowTips.length)];
  res.json({
    tip: randomTip.tip,
    category: randomTip.category,
    totalTips: workflowTips.length,
    message: '🔄 Refresh to get another tip!'
  });
});

// 🚀 Start the server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 GitHub Actions Showcase app listening at http://localhost:${port}`);
    console.log(`💡 Visit /tip for a random GitHub Actions workflow tip`);
    console.log(`📊 Visit /stats for application statistics`);
    console.log(`🔍 Visit /health for health check`);
  });
}

module.exports = app;
