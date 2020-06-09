public class SDescribeUtility{
    
    
    public static DescribeSobjectResult getSobjectType(String objectApiName){
        Schema.DescribeSobjectResult[] results = Schema.describeSObjects(new String[] { objectApiName });
        return results[0];
    }
    
    public static Map<String,DescribeSObjectResult>  getAllObjects(){
        Map<String,DescribeSObjectResult> listOfObject=new Map<String,DescribeSObjectResult>();
        for ( Schema.SObjectType o : Schema.getGlobalDescribe().values() )
        {
            Schema.DescribeSObjectResult objResult = o.getDescribe();
            listOfObject.put(objResult.getName(),objResult);
        }
        return listOfObject;
    }
    
    public static Map<String,DescribeFieldResult> getAllObjectFields(DescribeSObjectResult sObjectName){
        Map<String,DescribeFieldResult> listOfObjectFields=new Map<String,DescribeFieldResult>();
        
        for (SObjectField f : sObjectName.fields.getMap().values()) {
            DescribeFieldResult field = f.getDescribe();
            listOfObjectFields.put(field.getName(),field);
        }   
        return listOfObjectFields; 
    }
    
    public static Map<String,SObjectType> getObjectChildRelations(DescribeSObjectResult sObjectName){
        Map<String,SObjectType> childObjects=new Map<String,SObjectType>();
        for (Schema.ChildRelationship childObj : sObjectName.getChildRelationships()) {
            SObjectType co=childObj.getChildSObject();
            DescribeSObjectResult childDesc = childObj.getChildSObject().getDescribe();
            childObjects.put(childDesc.getLabelPlural(),co);
        }
        return childObjects;
    }
    
    public static Map<String,DescribeSobjectResult> getObjectParentRelations(DescribeSObjectResult sObjectName){
        Map<String,DescribeSobjectResult> parentObjects=new Map<String,DescribeSobjectResult>();
        for (SObjectField f : sObjectName.fields.getMap().values()) {
            DescribeFieldResult field = f.getDescribe();
            if (!field.getReferenceTo().isEmpty()) {
                parentObjects.put(field.getName(),field.getReferenceTo()[0].getDescribe());
            }
        }   
        return parentObjects;
    }

    public static Map<String,PicklistEntry[]> getObjectPicklistFileds(DescribeSObjectResult sObjectName){
        Map<String,PicklistEntry[]> picklistValues=new Map<String,PicklistEntry[]>();
        for (SObjectField f : sObjectName.fields.getMap().values()) {
            DescribeFieldResult field = f.getDescribe();
            if(field.getType()===Schema.DisplayType.Picklist){
                picklistValues.put(field.getName(),field.getPicklistValues());
            }
        }
        return picklistValues;
    }

    public static string getRecordTypeName(Final String recordTypeId,Final String objectAPIName){
        Schema.DescribeSObjectResult sobjectResult = Schema.getGlobalDescribe().get(objectAPIName).getDescribe();
        if(sobjectResult!=null){
            List<Schema.RecordTypeInfo> recordTypeInfo = sobjectResult.getRecordTypeInfos();
            for(Schema.RecordTypeInfo info : recordTypeInfo){
                if(info.getRecordTypeId()==recordTypeId){
                    return info.getDeveloperName();
                }
            }    
        }
        return '';
    }
   
    public static string getRecordTypeId(Final String recordTypeDevName,Final String objectAPIName){
        Schema.DescribeSObjectResult sobjectResult = Schema.getGlobalDescribe().get(objectAPIName).getDescribe();
        if(sobjectResult!=null){
            List<Schema.RecordTypeInfo> recordTypeInfo = sobjectResult.getRecordTypeInfos();
            for(Schema.RecordTypeInfo info : recordTypeInfo){
                if(info.getDeveloperName()==recordTypeDevName){
                    return info.getRecordTypeId();
                }
            }    
        }
        return '';
    }
    
}