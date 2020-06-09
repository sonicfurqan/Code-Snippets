//importing wire api as record ui works only with wire decorator
//imporitng api decorator as objApiName variables shoudl be public as it is to accessed by other components
import { LightningElement, api, wire } from 'lwc';

//importing record ui api service for getting api that supports retrivung object info 
import { getObjectInfo } from 'lightning/uiObjectInfoApi';


export default class getObjDetails extends LightningElement {
    //object api name
    @api objApiName;

    @wire(getObjectInfo, { objectApiName: '$objApiName' })
    objectInfoData({ error, data }) {
        if (error) {
            let errorObj = JSON.parse(JSON.stringify(error));
            console.log(errorObj);
        }
        if (data) {
            //on retriving data creating a custom event to send data
            const objectDataEvent = new CustomEvent('objectDataRecive', {
                detail: { objData: data },
            });
            this.dispatchEvent(objectDataEvent);


        }
    }

}

