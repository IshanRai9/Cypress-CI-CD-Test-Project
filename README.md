# 🧪 Cypress CI/CD Demo Project

A comprehensive demonstration of **Cypress end-to-end testing** integrated with multiple **CI/CD platforms**. This project showcases best practices for automated testing in modern web applications.

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![GitLab CI](https://img.shields.io/badge/GitLab%20CI-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white)
![CircleCI](https://img.shields.io/badge/circleci-343434?style=for-the-badge&logo=circleci&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)

## 🚀 Features

### 📱 Sample Web Application
- **User Authentication** - Login form with validation
- **Todo List Management** - Add, toggle, and delete todos
- **API Integration** - Fetch external data with error handling
- **Contact Form** - Multi-field form with validation
- **Responsive Design** - Mobile-friendly interface
- **Accessibility Ready** - Proper ARIA attributes and semantic HTML

### 🧪 Comprehensive Test Suite
- **Smoke Tests** - Critical functionality verification (3 files)
- **Regression Tests** - Detailed feature testing (3 files) 
- **Integration Tests** - End-to-end user workflows (2 files)
- **Custom Commands** - Reusable test utilities
- **Test Fixtures** - Sample data for consistent testing
- **Page Object Model** - Maintainable test architecture

### 🔄 CI/CD Platform Support
- **GitHub Actions** - Advanced workflows with matrix strategies
- **GitLab CI/CD** - Multi-stage pipelines with parallel execution
- **CircleCI** - Orb-based configuration with parallelization
- **Jenkins** - Declarative pipelines with parameterized builds
- **Docker** - Containerized testing environment

## 📁 Project Structure

```
cypress-cicd-demo/
├── public/                          # Web application files
│   ├── index.html                   # Main HTML file
│   ├── styles.css                   # Application styles
│   └── script.js                    # Application logic
├── cypress/                         # Cypress test files
│   ├── e2e/                        # End-to-end tests
│   │   ├── smoke/                   # Quick smoke tests
│   │   ├── regression/              # Comprehensive regression tests
│   │   └── integration/             # Full workflow tests
│   ├── fixtures/                    # Test data files
│   ├── support/                     # Custom commands and utilities
│   ├── screenshots/                 # Test failure screenshots
│   ├── videos/                      # Test execution videos
│   └── results/                     # Test reports and results
├── .github/workflows/               # GitHub Actions configurations
├── .gitlab/                         # GitLab CI/CD configurations
├── .circleci/                       # CircleCI configurations
├── cypress.config.js                # Main Cypress configuration
├── cypress.config.ci.js             # CI-specific configuration
├── Jenkinsfile                      # Jenkins pipeline definition
├── Dockerfile                       # Docker containerization
├── docker-compose.yml               # Multi-container setup
└── package.json                     # Node.js dependencies and scripts
```

## 🛠️ Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd cypress-cicd-demo
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the application**
```bash
npm start
```
The application will be available at `http://localhost:3000`

4. **Open Cypress Test Runner**
```bash
npm run cypress:open
```

5. **Run tests in headless mode**
```bash
npm test
```

## 🧪 Testing Commands

### Local Testing
```bash
# Open Cypress Test Runner (interactive mode)
npm run cypress:open

# Run all tests in headless mode
npm run cypress:run

# Run tests in specific browser
npm run cypress:run:chrome
npm run cypress:run:firefox
npm run cypress:run:edge

# Run specific test types
npm run test:smoke      # Quick smoke tests only
npm run test:regression # Comprehensive regression tests
```

### CI/CD Testing
```bash
# Run tests with CI configuration
npm run test:ci

# Run tests with specific environment
CYPRESS_BASE_URL=http://staging.example.com npm test
```

## 🔄 CI/CD Configuration

### GitHub Actions
- **Location**: `.github/workflows/cypress.yml`
- **Features**: Matrix strategies, parallel execution, artifact collection
- **Triggers**: Push, PR, schedule, manual dispatch

### GitLab CI/CD
- **Location**: `.gitlab/.gitlab-ci.yml`
- **Features**: Multi-stage pipelines, caching, manual deployments
- **Stages**: Install → Test → Report → Deploy

### CircleCI
- **Location**: `.circleci/config.yml`
- **Features**: Orb integration, workspace persistence, parallelization
- **Executors**: Cypress default executor with optimizations

### Jenkins
- **Location**: `Jenkinsfile`
- **Features**: Declarative pipeline, parameterized builds, parallel stages
- **Parameters**: Test type, browser selection, base URL

### Docker
```bash
# Build and run with Docker
docker build -t cypress-demo .
docker run -p 3000:3000 cypress-demo

# Run with Docker Compose
docker-compose up --build
```

## 📊 Test Categories

### 🔥 Smoke Tests
**Purpose**: Quick verification of critical functionality
- **basic.cy.js** - Application loads and displays correctly
- **auth.cy.js** - User authentication works
- **todos.cy.js** - Basic todo functionality

### 🔄 Regression Tests
**Purpose**: Comprehensive testing of all features
- **auth.cy.js** - Complete authentication testing
- **todos.cy.js** - Full todo list functionality
- **api.cy.js** - API integration and error handling

### 🔗 Integration Tests
**Purpose**: End-to-end user workflows
- **forms.cy.js** - Complete form testing
- **full-flow.cy.js** - Multi-feature user journeys

## 🎯 Best Practices Demonstrated

### Test Organization
- ✅ **Logical folder structure** by test type
- ✅ **Descriptive test names** and clear assertions
- ✅ **Page Object Model** implementation
- ✅ **Custom commands** for reusability
- ✅ **Test fixtures** for data management

### CI/CD Integration
- ✅ **Multi-platform support** (GitHub, GitLab, CircleCI, Jenkins)
- ✅ **Parallel test execution** for faster feedback
- ✅ **Artifact collection** (screenshots, videos, reports)
- ✅ **Environment-specific configurations**
- ✅ **Automated reporting** and notifications

### Application Design
- ✅ **Test-friendly attributes** (`data-cy` selectors)
- ✅ **Responsive design** testing
- ✅ **API mocking** capabilities
- ✅ **Error handling** verification
- ✅ **Accessibility considerations**

## 🎨 Sample Application Features

### 🔐 Authentication Module
- Login form with username/password
- Success/error state handling
- Form validation testing
- **Test credentials**: `admin` / `password123`

### ✅ Todo List Module
- Add new todo items
- Toggle completion status
- Delete todo items
- Empty state handling

### 🌐 API Testing Module
- Fetch users from external API
- Fetch posts from external API
- Loading state management
- Error handling for network failures

### 📝 Contact Form Module
- Multi-field form validation
- Dropdown selection testing
- Form submission handling
- Required field validation

## 📈 Reporting and Monitoring

### Test Reports
- **Mochawesome** HTML reports
- **JUnit** XML reports for CI integration
- **Screenshot** capture on failures
- **Video** recording for debugging

### CI/CD Monitoring
- **Build status** badges
- **Test result** summaries
- **Performance metrics** tracking
- **Deployment** status updates

## 🚀 Deployment

The project includes deployment configurations for:
- **Staging environments** - Automatic deployment after successful tests
- **Production environments** - Manual approval required
- **Review apps** - Temporary environments for feature branches

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📚 Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/)
- [CircleCI Documentation](https://circleci.com/docs/)
- [Jenkins Documentation](https://www.jenkins.io/doc/)

## 🙋‍♂️ Support

If you have questions or need help with this project:
- **Issues**: Create an issue in this repository
- **Discussions**: Use GitHub Discussions for general questions
- **Wiki**: Check the project wiki for detailed guides

---

**Made with ❤️ and lots of ☕ for the testing community!**

*Happy testing! 🧪*