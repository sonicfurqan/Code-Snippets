//importing wire api as record ui works only with wire decorator
//imporitng api decorator as objApiName variables shoudl be public as it is to accessed by other components
import { LightningElement, api, wire } from 'lwc';

//importing record ui api service for getting api that supports retrving layout object info 
import { getRecordUi } from 'lightning/uiRecordApi';



export default class getObjLayoutDetails extends LightningElement {
    //record Id
    @api objRecordId;
    //layout mode Edit/View
    @api layoutMode;
    @wire(getRecordUi, { recordIds: '$objRecordId', layoutTypes: 'Full', modes: '$layoutMode' })
    recordInfoData({ error, data }) {
        if (error) {
            let errorObj = JSON.parse(JSON.stringify(error));
            console.log(errorObj);
        }
        if (data) {
            //on retriving data creating a custom event to send data
            const layoutDataEvent = new CustomEvent('layoutDataRecive', {
                detail: { layoutData: data },
            });
            this.dispatchEvent(layoutDataEvent);
        }
    }

}

