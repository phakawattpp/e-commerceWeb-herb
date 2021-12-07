pipeline {
    agent any
    tools {
        nodejs 'node'
    }
     environment {
            CI = 'true'
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