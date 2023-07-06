pipeline {
    agent any
    environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-cred')
    }
    stages {

        stage('Build docker image') {
            steps {
                sh 'docker build -t pavanbhat99/cicd .'
            }
        }
        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push pavanbhat99/cicd:$BUILD_NUMBER'
            }
        }
}
}
