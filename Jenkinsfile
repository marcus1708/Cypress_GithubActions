pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/marcus1708/Cypress_GithubActions.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Rodando build...'
            }
        }
        stage('Test') {
            steps {
                echo 'Rodando testes...'
            }
        }
    }
}
