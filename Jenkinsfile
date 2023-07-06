pipeline{
    agent any
    // options{
    //     buildDiscarder(logRotator(numToKeepStr: '5', daysToKeepStr: '5'))
    //     timestamps()
    // }
    environment{

        registry = "pavanbhat99/cicd"
        registryCredential = 'dockerhub-cred'
    }

    stages{
       stage('Building Image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
       stage('Push Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
}
}
