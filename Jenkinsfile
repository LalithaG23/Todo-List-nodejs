node {
    try {
        stage('Checkout') {
            checkout scm
        }
        
        stage('Test') {
            bat 'npm install'
        }
        
        stage('Build') {
            bat 'npm run'
        }
        
        stage('Build Image') {
            bat 'docker build -t todos-nodejs:%BUILD_NUMBER% .'
        }
    } catch (Exception e) {
        currentBuild.result = 'FAILURE'
        throw e
    }
}
