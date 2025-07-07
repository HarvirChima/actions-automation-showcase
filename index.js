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
  version: '1.0.1'
};

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

// 🚀 Start the server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 GitHub Actions Showcase app listening at http://localhost:${port}`);
    console.log(`📊 Visit /stats for application statistics`);
    console.log(`🔍 Visit /health for health check`);
  });
}

module.exports = app;
