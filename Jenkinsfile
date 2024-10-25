pipeline{
  agent any
  stages{
    stage("checkout"){
      steps{
        checkout scm
      }
    }
    stage("Test"){
      steps{
        bat 'npm install'
      }
    }
    stage("Build"){
      steps{
        bat 'npm run'
      }
    }
    stage("Build Image"){
      steps{
        bat 'docker build -t todos-nodejs:%BUILD_NUMBER% .' 
      }
    }
  }
}
  
