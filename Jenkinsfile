pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
        CACHE_DIR = "${HOME}/.cache/Cypress"
    }

    options {
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/marcus1708/Cypress_GithubActions.git'
            }
        }

        stage('Instalar dependências') {
            steps {
                sh 'npm ci' // mais rápido e seguro para CI
                sh 'npx cypress install' // garante que o binário seja baixado
            }
        }

        stage('Executar testes Cypress') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.*', allowEmptyArchive: true
        }

        failure {
            echo 'Testes falharam. Verifique os vídeos e screenshots nos artefatos.'
        }
    }
}
