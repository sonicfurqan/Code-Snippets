public class example{
        
        public void run(){

                
                LiveAgentWrapper.createRequestBody body=new LiveAgentWrapper.createRequestBody('<orgId>','<deploymentId>','<buttonid>');
                body.sessionId=sessionId;
                body.userAgent='Ubuntu';
                body.visitorName='Tony Starck';
                body.language='en-US';
                body.screenResolution='1024x786';
                LiveAgentWrapper.prechatDetails node=new LiveAgentWrapper.prechatDetails('Name','Iron Man','LastName__C',true);
                node.setEntityMaps('Contact','LastName');
                body.addPrechatDetails(node);

                LiveAgentWrapper.prechatDetails node1=new LiveAgentWrapper.prechatDetails('Email','iron@avengers.com','Email__C',true);
                node1.setEntityMaps('Contact','Email');
                body.addPrechatDetails(node1);

                
                
                LiveAgentWrapper.prechatEntities save=new LiveAgentWrapper.prechatEntities('Contact','ContactId','Contact',false);
                save.addEntityFieldsMaps('LastName','Name',true,true);
                save.addEntityFieldsMaps('Email','Email',true,true);
                body.addPrechatEntities(save);

                System.debug(body.build());
        }
}
