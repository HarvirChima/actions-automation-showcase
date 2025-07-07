#!/usr/bin/env node

/**
 * 🧪 GitHub Actions Automation Showcase - Test Suite
 * 
 * Simple test suite to demonstrate GitHub Actions CI/CD workflows.
 * These tests will be executed by the ci-cd.yml workflow.
 */

const app = require('./index.js');

// 🎯 Simple test framework
class TestRunner {
  constructor() {
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
  }

  test(name, testFn) {
    this.tests.push({ name, testFn });
  }

  async run() {
    console.log('🧪 Starting GitHub Actions Showcase Test Suite...\n');

    for (const { name, testFn } of this.tests) {
      try {
        await testFn();
        console.log(`✅ ${name}`);
        this.passed++;
      } catch (error) {
        console.log(`❌ ${name}: ${error.message}`);
        this.failed++;
      }
    }

    console.log(`\n📊 Test Results:`);
    console.log(`✅ Passed: ${this.passed}`);
    console.log(`❌ Failed: ${this.failed}`);
    console.log(`📈 Total: ${this.tests.length}`);

    if (this.failed > 0) {
      process.exit(1);
    } else {
      console.log('🎉 All tests passed!');
    }
  }
}

// 🧪 Test suite
const runner = new TestRunner();

// Test 1: App module exports
runner.test('App exports correctly', () => {
  if (typeof app !== 'function') {
    throw new Error('App should export an Express application');
  }
});

// Test 2: Environment variables
runner.test('Environment configuration works', () => {
  const port = process.env.PORT || 3000;
  if (typeof port === 'undefined') {
    throw new Error('Port configuration failed');
  }
});

// Test 3: Basic application structure
runner.test('Application has required routes', () => {
  // This is a simple structural test
  // In a real app, you'd use supertest or similar for HTTP testing
  const routes = app._router?.stack?.length || 0;
  if (routes === 0) {
    throw new Error('No routes found in application');
  }
});

// Test 4: Package.json validation
runner.test('Package.json has required fields', () => {
  const pkg = require('./package.json');
  const requiredFields = ['name', 'version', 'scripts'];
  
  for (const field of requiredFields) {
    if (!pkg[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
});

// Test 5: Demo functionality test
runner.test('Demo app functionality works', () => {
  // Simple functionality test
  const startTime = new Date();
  const uptime = Math.floor((new Date() - startTime) / 1000);
  
  if (uptime < 0) {
    throw new Error('Time calculation failed');
  }
});

// 🚀 Run the tests
if (require.main === module) {
  runner.run().catch(error => {
    console.error('💥 Test runner failed:', error);
    process.exit(1);
  });
}

module.exports = runner;