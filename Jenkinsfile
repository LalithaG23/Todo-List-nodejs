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
        
        stage('Push Image') {
            withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                bat 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
                bat 'docker tag todos-nodejs:%BUILD_NUMBER% lalitha235/todos-nodejs:%BUILD_NUMBER%'
                bat 'docker push lalitha235/todos-nodejs:%BUILD_NUMBER%'
            }
        }
    } catch (Exception e) {
        currentBuild.result = 'FAILURE'
        throw e
    }
}
