pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git'
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
