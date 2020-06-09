# Using lightning/uiApi

Lightning web components supports record ui api directly using wire decorator in javascript 

REF:https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.reference_ui_api

Lighting Componets and Lighting web components can communicate with each other using events 

REF:https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.interop_intro


# 3 basic LWC components that are using recordUi api

1.  getObjDetails: 
    @param 
    objApiName : pass object api and it will return obj details 
    @return event
    objectDataRecive: after retrivng details it retuns data using custom event 

2.  getObjPicklistDetails:
    @param 
    objApiName :pass object api name
    objRecordTypeId : Pass record type id for the respective object 
    @return event
    picklistDataRecive: after retrivng details of all picklist values for respective record type it retuns data using custom event 

3.  getObjLayoutDetails
    @param 
    objRecordId : pass record id whose layout info you need
    layoutMode : View/Edit mode layout info can be retrived
    @return event
    layoutDataRecive: after retrivng details of layout it passes info using custom event

# Basic Example using lighting component

1. Call's getObjDetails component to get default record type id of account

2. Call's getObjPicklistDetails to get picklist values for Industry field 

3. handles custom event response's

4. displayes data







