pipeline {
    agent {
        docker {
            image 'cypress/browsers:latest'
            args '-u root'
        }
    }

    parameters {
        choice(
            name: 'TEST_TYPE',
            choices: ['all', 'smoke', 'regression', 'integration'],
            description: 'Select type of tests to run'
        )
        choice(
            name: 'BROWSER',
            choices: ['chrome', 'firefox', 'edge'],
            description: 'Select browser for testing'
        )
        string(
            name: 'BASE_URL',
            defaultValue: 'http://localhost:3000',
            description: 'Application base URL'
        )
    }

    environment {
        CYPRESS_BASE_URL = "${params.BASE_URL}"
        CYPRESS_VIDEO = 'false'
        CYPRESS_SCREENSHOTS_ON_RUN_FAILURE = 'true'
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo "Building branch: ${env.BRANCH_NAME}"
                echo "Build number: ${env.BUILD_NUMBER}"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci && npx cypress verify'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Start Application') {
            steps {
                sh 'npm start & sleep 10 && npx wait-on http://localhost:3000 --timeout 60000'
            }
        }

        stage('Run Tests') {
            parallel {
                stage('Smoke Tests') {
                    when {
                        anyOf {
                            params.TEST_TYPE == 'all'
                            params.TEST_TYPE == 'smoke'
                        }
                    }
                    steps {
                        sh 'npx cypress run --browser ${BROWSER} --config-file cypress.config.ci.js --spec "cypress/e2e/smoke/**/*.cy.js"'
                    }
                    post {
                        always {
                            archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
                        }
                    }
                }

                stage('Regression Tests') {
                    when {
                        anyOf {
                            params.TEST_TYPE == 'all'
                            params.TEST_TYPE == 'regression'
                        }
                    }
                    steps {
                        sh 'npx cypress run --browser ${BROWSER} --config-file cypress.config.ci.js --spec "cypress/e2e/regression/**/*.cy.js"'
                    }
                    post {
                        always {
                            archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
                        }
                    }
                }

                stage('Integration Tests') {
                    when {
                        anyOf {
                            params.TEST_TYPE == 'all'
                            params.TEST_TYPE == 'integration'
                        }
                    }
                    steps {
                        sh 'npx cypress run --browser ${BROWSER} --config-file cypress.config.ci.js --spec "cypress/e2e/integration/**/*.cy.js"'
                    }
                    post {
                        always {
                            archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
                        }
                    }
                }
            }
        }

        stage('Generate Reports') {
            steps {
                sh 'mkdir -p reports && echo "Jenkins Test Report" > reports/summary.txt'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'reports/**', allowEmptyArchive: true
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'All tests passed successfully!'
        }
        failure {
            echo 'Some tests failed. Check the reports for details.'
        }
    }
}