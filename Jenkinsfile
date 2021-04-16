pipeline 
{
    agent any
   
    environment
    {
    	
    	DOCKERHUBCREDENTIALS = 'mydockerhub'
   
	}

    stages
    {
        stage('Cloning Git')
        {
            steps
            {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/masarani597/noderestapis.git']]])
            }

        }

    }
  
}