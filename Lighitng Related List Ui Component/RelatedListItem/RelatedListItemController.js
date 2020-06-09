({
    openRecord: function (component, event) {
        const isMobile = $A.get("$Browser.formFactor") === 'PHONE';
        const e = component.getEvent('RelatedList_openRecord');
        const recordList = component.get('v.recordList');
        let id = event.currentTarget.id;
        const record = recordList.filter(r => r.Id == id)[0];
        if (isMobile && !record.access) {
            const toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Not Supported in mobile.",
                "message": "Please open in browser to view."
            });
            toastEvent.fire();
        }
        else if (!record.access) {
            e.setParams({ data: { recordId: id } });
            e.fire();
        }

    },
})