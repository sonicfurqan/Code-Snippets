    public class createRequestBody {

     private String organizationId {set;get;}
     private String deploymentId {set;get;}
     private String buttonId {set;get;}
     public String sessionId {set;get;}
     public String userAgent {set;get;}
     public String visitorName {set;get;}
     public String language {set;get;}
     public String screenResolution {set;get;}
     List < prechatEntities > prechatEntities = new List < prechatEntities > ();
     List < prechatDetails > prechatDetails = new List < prechatDetails > ();
     
     public void addPrechatEntities(prechatEntities node) {
      prechatEntities.add(node);
     }
     
     public void addPrechatDetails(prechatDetails node) {
      prechatDetails.add(node);
     }


     public createRequestBody(String organizationId,String deploymentId, String buttonId) {
      this.organizationId = organizationId;
      this.deploymentId = deploymentId;
      this.buttonId = buttonId;
     }

     public string build() {
      try {
       JSONGenerator gen = JSON.createGenerator(true);
       gen.writeStartObject();
       gen.writeStringField('organizationId', organizationId);
       gen.writeStringField('deploymentId', deploymentId);
       gen.writeStringField('buttonId', buttonId);
       gen.writeStringField('sessionId', sessionId);
       gen.writeStringField('userAgent', userAgent);
       gen.writeStringField('language', language);
       gen.writeStringField('screenResolution', screenResolution);
       gen.writeStringField('visitorName', visitorName);
       gen.writeFieldName('prechatDetails');
       gen.writeStartArray();
       //start prechat
       if (prechatDetails.size() > 0) {
        for (prechatDetails pcd: prechatDetails) {
         gen.writeStartObject();
         gen.writeStringField('label', pcd.label);
         gen.writeStringField('value', pcd.value);
         gen.writeBooleanField('displayToAgent', pcd.displayToAgent);
         gen.writeFieldName('entityMaps');
         gen.writeStartArray();
         gen.writeStartObject();
         gen.writeStringField('entityName', pcd.entityMaps.entityName);
         gen.writeStringField('fieldName', pcd.entityMaps.fieldName);
         gen.writeEndObject();
         gen.writeEndArray();
         gen.writeFieldName('transcriptFields');
         gen.writeStartArray();
         gen.writeString(pcd.transcriptFields);
         gen.writeEndArray();
         gen.writeEndObject();
        }
       }

       //end pre chat
       gen.writeEndArray();
       gen.writeFieldName('prechatEntities');
       gen.writeStartArray();

       //start entity
       if (prechatEntities.size() > 0) {
        for (prechatEntities pce: prechatEntities) {
         gen.writeStartObject();
         gen.writeStringField('entityName', pce.entityName);
         gen.writeBooleanField('showOnCreate', pce.showOnCreate);
         gen.writeStringField('linkToEntityField', pce.linkToEntityField);
         gen.writeStringField('saveToTranscript', pce.saveToTranscript);
         gen.writeFieldName('entityFieldsMaps');
         gen.writeStartArray();
         if (pce.entityFieldsMaps.size() > 0) {
          for (entityFieldsMaps efm: pce.entityFieldsMaps) {
           gen.writeStartObject();
           gen.writeStringField('fieldName', efm.fieldName);
           gen.writeStringField('label', efm.label);
           gen.writeBooleanField('doFind', efm.doFind);
           gen.writeBooleanField('isExactMatch', efm.isExactMatch);
           gen.writeBooleanField('doCreate', efm.doCreate);
           gen.writeEndObject();
          }
         }
         gen.writeEndArray();
         gen.writeEndObject();
        }
       }

       //end entity
       gen.writeEndArray();
       gen.writeBooleanField('receiveQueueUpdates', true);
       gen.writeBooleanField('isPost', true);
       gen.writeEndObject();
       System.debug(gen.getAsString());
       return gen.getAsString();
      } catch (Exception e) {
       String s = '' + e.getCause() + e.getLineNumber() + e.getMessage() + e.getStackTraceString() + e.getTypeName();
       System.debug('>>>>>>>>>>>>.' + s);
       return s;
      }


     }


    }
