# Cypress Test Automation Project with GitHub Actions

This project demonstrates an automated testing framework using Cypress with GitHub Actions CI/CD pipeline integration. It supports cross-browser testing with configurable test execution options.

## 🚀 Features

- Cross-browser testing support (Chrome, Firefox, Edge)
- GitHub Actions workflow for automated test execution
- Configurable test URL
- Selective browser testing through workflow dispatch
- Automated screenshot capture on test failure
- Slack notifications for test results
- Caching support for faster execution

## 🛠 Prerequisites

- Node.js (v16.x or later)
- npm or yarn
- Git

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/julianQA001/cypress-ga-test-demo.git
cd cypress-ga-test-demo
```

2. Install dependencies:

```bash
cd test
npm install
```

## 🔧 Configuration

### Environment Variables

The following secrets need to be configured in your GitHub repository:

- `SLACK_WEB_HOOK`: Slack webhook URL for notifications

### GitHub Actions Workflow

The workflow can be triggered manually with the following parameters:

- **URL**: The target URL to test (default: http://www.swtestacademy.com)
- **Browser Selection**:
  - Chrome (default: enabled)
  - Firefox
  - Edge

## 🏃‍♂️ Running Tests

### Locally

To run tests locally:

```bash
cd test
npx cypress run --browser [browser-name]
```

Replace `[browser-name]` with one of: `chrome`, `firefox`, or `edge`

### Via GitHub Actions

1. Go to the "Actions" tab in your GitHub repository
2. Select "Manual run Cypress Tests" workflow
3. Click "Run workflow"
4. Configure the following:
   - Target URL
   - Select browsers for testing
5. Click "Run workflow"

## 📊 Test Results

### Screenshots

On test failure, screenshots are automatically captured and uploaded as artifacts in the GitHub Actions run. They can be found in the following locations:

- Chrome: `cypress-screenshots-chrome`
- Firefox: `cypress-screenshots-firefox`
- Edge: `cypress-screenshots-edge`

### Notifications

Test results are automatically sent to Slack (on failure) with the following information:

- Test status
- Browser used
- Target URL
- Link to GitHub Actions run

## 🔄 CI/CD Pipeline

The GitHub Actions workflow includes:

1. Environment setup
2. Dependency installation
3. Browser-specific test execution
4. Artifact upload (screenshots on failure)
5. Slack notifications (on failure)

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── run-cypress-test-manualy.yml
├── test/
│   ├── cypress/
│   │   ├── config/
│   │   ├── specs/
│   │   └── support/
│   ├── cypress.config.ts
│   └── package.json
└── README.md
```

## 🙏 Acknowledgments

- [Cypress Documentation](https://docs.cypress.io/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [SW Test Academy](http://www.swtestacademy.com/)
