pipeline 
{
    agent
    {
        label 'minikube' 
    }
   
    environment
    {
    	dockerhubcredentials = 'mydockerhub'
        dockerImage = ''
        registry = 'masarani/nodeimage1'
	}

    stages
    {
        stage('Cloning Git') 
        {
            steps
            {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/masarani597/noderestapis.git']]])
            }
        }


        stage("Build docker Image")
        {
            steps
            {
                script
                {
                    dockerImage = docker.build registry
                }
            }
        }

        stage("Upload Image")
        {
            steps
            {
                script
                {
                    docker.withRegistry('', dockerhubcredentials)
                    {
                        dockerImage.push()
                    }
                }
            }
        }




    }
  
}