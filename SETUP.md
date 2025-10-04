# 🚀 Setup Guide - Cypress CI/CD Demo

This guide will help you set up and run the Cypress CI/CD demo project in various environments.

## 📋 Prerequisites

### Required Software
- **Node.js** v16.0.0 or higher
- **npm** v8.0.0 or higher (comes with Node.js)
- **Git** for version control
- **Modern web browser** (Chrome, Firefox, Edge)

### Optional Tools
- **Docker** for containerized testing
- **Visual Studio Code** with Cypress extensions
- **Postman** for API testing

## 🔧 Local Development Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd cypress-cicd-demo
```

### 2. Install Dependencies
```bash
# Install all project dependencies
npm install

# Verify Cypress installation
npx cypress verify

# Check installed version
npx cypress version
```

### 3. Start the Application
```bash
# Start the development server
npm start

# Application will be available at:
# http://localhost:3000
```

### 4. Run Tests
```bash
# Open Cypress Test Runner (GUI mode)
npm run cypress:open

# Run all tests in headless mode
npm run cypress:run

# Run specific test types
npm run test:smoke
npm run test:regression
```

## 🌐 CI/CD Platform Setup

### GitHub Actions Setup

1. **Fork/Clone** the repository to your GitHub account
2. **Navigate** to Settings → Actions → General
3. **Enable** "Allow all actions and reusable workflows"
4. **Push** any change to trigger the workflow

**Configuration file**: `.github/workflows/cypress.yml`

**Manual trigger**:
- Go to Actions tab
- Select "Cypress CI/CD Pipeline"
- Click "Run workflow"
- Choose test type and browser

### GitLab CI/CD Setup

1. **Create** a new GitLab project or import from GitHub
2. **Copy** `.gitlab/.gitlab-ci.yml` to root as `.gitlab-ci.yml`
3. **Configure** GitLab Runner (if using self-hosted)
4. **Push** changes to trigger pipeline

**Environment Variables**:
- `CYPRESS_BASE_URL`: Application base URL
- `CYPRESS_RECORD_KEY`: Cypress Dashboard key (optional)

### CircleCI Setup

1. **Connect** your GitHub/BitBucket repository to CircleCI
2. **Ensure** `.circleci/config.yml` is in your repository
3. **Configure** environment variables in project settings
4. **Trigger** first build

**Orbs used**:
- `cypress-io/cypress@4`
- `circleci/node@5`

### Jenkins Setup

1. **Install** required plugins:
   - Pipeline Plugin
   - Docker Pipeline Plugin
   - HTML Publisher Plugin

2. **Create** a new Pipeline job
3. **Configure** Pipeline from SCM
4. **Set** repository URL and credentials
5. **Specify** `Jenkinsfile` as script path

**Required Plugins**:
```
- Pipeline: Stage View Plugin
- Blue Ocean (recommended)
- HTML Publisher Plugin
```

## 🐳 Docker Setup

### Build and Run Locally
```bash
# Build the Docker image
docker build -t cypress-demo .

# Run the container
docker run -p 3000:3000 cypress-demo

# Run with Docker Compose
docker-compose up --build
```

### Docker Environment Variables
```bash
# Set environment variables
export CYPRESS_BASE_URL=http://localhost:3000
export CYPRESS_VIDEO=false
export CYPRESS_SCREENSHOTS_ON_RUN_FAILURE=true

# Run with environment variables
docker run -p 3000:3000 \
  -e CYPRESS_BASE_URL=$CYPRESS_BASE_URL \
  cypress-demo
```

## ⚙️ Configuration Options

### Cypress Configuration Files

**Main Configuration** (`cypress.config.js`):
- Development and local testing
- Video recording enabled
- Interactive mode optimized

**CI Configuration** (`cypress.config.ci.js`):
- CI/CD environment optimized
- Video recording disabled (performance)
- Extended timeouts
- Retry configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `CYPRESS_BASE_URL` | Application base URL | `http://localhost:3000` |
| `CYPRESS_VIDEO` | Enable video recording | `false` |
| `CYPRESS_SCREENSHOTS_ON_RUN_FAILURE` | Capture screenshots on failure | `true` |
| `CYPRESS_testType` | Type of tests to run | `all` |

### Browser Configuration

```bash
# Run tests in specific browsers
npm run cypress:run:chrome
npm run cypress:run:firefox
npm run cypress:run:edge

# Or use Cypress CLI directly
npx cypress run --browser chrome
npx cypress run --browser firefox --headed
```

## 🔍 Troubleshooting

### Common Issues

**Issue**: Cypress binary not found
```bash
# Solution: Clear cache and reinstall
npx cypress cache clear
npm install
npx cypress install
```

**Issue**: Application not starting
```bash
# Solution: Check port availability
lsof -i :3000
kill -9 <PID>
npm start
```

**Issue**: Tests failing in CI but passing locally
```bash
# Solution: Use CI-specific configuration
npm run test:ci
# Or specify config file
npx cypress run --config-file cypress.config.ci.js
```

**Issue**: Network timeouts in CI
```bash
# Solution: Increase timeout values
# Edit cypress.config.ci.js
pageLoadTimeout: 60000
defaultCommandTimeout: 15000
```

### Debug Mode

**Enable Cypress debug logs**:
```bash
DEBUG=cypress:* npm run cypress:run
```

**Enable CI debug logs**:
```bash
# GitHub Actions
ACTIONS_STEP_DEBUG=true

# GitLab CI
CI_DEBUG_TRACE=true
```

## 📊 Test Reports

### Local Reports
```bash
# Run tests with reporting
npm run cypress:run

# Reports are generated in:
# - cypress/results/ (JSON)
# - cypress/screenshots/ (on failure)
# - cypress/videos/ (if enabled)
```

### CI Reports
- **GitHub Actions**: Artifacts tab in workflow run
- **GitLab CI**: Job artifacts and Pages
- **CircleCI**: Artifacts and Test Summary
- **Jenkins**: HTML Publisher Plugin

## 🎯 Best Practices

### Local Development
1. **Always** run tests locally before pushing
2. **Use** descriptive commit messages
3. **Follow** the Page Object Model pattern
4. **Write** tests that are independent and can run in any order
5. **Use** custom commands for repeated actions

### CI/CD
1. **Pin** dependency versions for consistency
2. **Cache** node_modules and Cypress binary
3. **Run** tests in parallel when possible
4. **Archive** screenshots and videos on failure
5. **Use** environment-specific configurations

### Test Writing
1. **Use** data-cy attributes for element selection
2. **Avoid** using CSS selectors that may change
3. **Write** meaningful test descriptions
4. **Group** related tests in describe blocks
5. **Clean up** test data after each test

## 🚀 Advanced Configuration

### Parallel Testing
```javascript
// cypress.config.js
module.exports = defineConfig({
  e2e: {
    // ... other config
  }
})

// Run tests in parallel (requires Cypress Dashboard)
npx cypress run --parallel --record --key <record-key>
```

### Custom Commands
```javascript
// cypress/support/commands.js
Cypress.Commands.add('customCommand', (param) => {
  // Custom command implementation
})

// Usage in tests
cy.customCommand('parameter')
```

### Environment-Specific Testing
```bash
# Development environment
CYPRESS_BASE_URL=http://localhost:3000 npm test

# Staging environment
CYPRESS_BASE_URL=https://staging.example.com npm test

# Production smoke tests
CYPRESS_BASE_URL=https://example.com npm run test:smoke
```

---

## 📞 Getting Help

If you encounter issues not covered in this guide:

1. **Check** the [Cypress documentation](https://docs.cypress.io/)
2. **Search** existing issues in this repository
3. **Create** a new issue with detailed information
4. **Join** the [Cypress Discord community](https://discord.gg/cypress)

**Happy testing! 🧪**