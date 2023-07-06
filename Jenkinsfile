pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    docker.withRegistry('pavanbhat99/cicd') {
                        // Optional: Login to your Docker registry
                        docker.image('testimage').build('.')
                    }
                }
            }
        }
    }
}
