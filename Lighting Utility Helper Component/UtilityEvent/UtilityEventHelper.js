({

    "fireComponentEvent": function (component, eventName, attributes) {
        let componentEvent = component.getEvent(eventName);
        if (componentEvent) {
            componentEvent.setParams(attributes);
            componentEvent.fire();
        }
        else {
            console.error('No component event found with name ----', eventName);
        }
    },
    "fireApplicationEvent": function (component, params, eventName) {

        let appEvent = $A.get("e.c:" + eventName);
        if (appEvent) {
            appEvent.setParams(params);
            appEvent.fire();
        }
        else {
            console.error('No Application event found with name ----', eventName);
        }
    },
    "fireToastEvent": function (component, event, type, msg) {

        let toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "type": type,
            "message": msg
        });
        toastEvent.fire();

    }
})