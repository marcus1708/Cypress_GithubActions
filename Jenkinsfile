pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
                echo 'Clonando repositório...'
            }
        }

        stage('Instalar dependências') {
            steps {
                sh 'npm install'
            }
        }

        stage('Executar testes') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizado'
        }
    }
}
