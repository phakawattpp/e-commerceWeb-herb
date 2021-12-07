pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage("build") {
            steps {
                echo 'building the application ...'
                sh 'npm install'
            }
        }
        stage("test") {
            steps {
                            echo 'testing the application ...'

            }
        }
        stage("deploy") {
            steps {
                            echo 'deploying the application ...'

            }
        }
    }
}