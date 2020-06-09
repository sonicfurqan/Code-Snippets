//importing wire api as record ui works only with wire decorator
//imporitng api decorator as objApiName variables shoudl be public as it is to accessed by other components
import { LightningElement, api, wire } from 'lwc';

//importing record ui api service for getting api that supports retrving object info 
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';


export default class getObjPicklistDetails extends LightningElement {
    //object api name
    @api objApiName;
    //object recordType id
    @api objRecordTypeId;
    @wire(getPicklistValuesByRecordType, { objectApiName: '$objApiName', recordTypeId: '$objRecordTypeId' })
    picklistInfoData({ error, data }) {
        if (error) {
            let errorObj = JSON.parse(JSON.stringify(error));
            console.log(errorObj);
        }
        if (data) {
            //on retriving data creating a custom event to send data
            const pickListDataEvent = new CustomEvent('picklistDataRecive', {
                detail: { picklistData: data },
            });
            this.dispatchEvent(pickListDataEvent);


        }
    }

}

