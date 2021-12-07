pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage("init") {
            steps {
                echo 'initializing the application ...'
                sh 'npm install'
            }
        }
        stage("build") {
            steps {
                            echo 'building the application ...'
                            sh 'npm build'

            }
        }
        stage("deploy") {
            steps {
                            echo 'deploying the application ...'
                            sh 'npm start'

            }
        }
    }
}