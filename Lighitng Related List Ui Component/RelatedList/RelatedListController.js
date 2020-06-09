({
    doInit: function (component, event, helper) {
        const isMobile = $A.get("$Browser.formFactor") === 'PHONE';
        component.set('v.isMobile', isMobile);
    },
    viewAll: function (component) {
        const e = component.getEvent('RelatedList_viewAll');
        e.fire();
    },
    handleSelect: function (component, event, helper) {
        const selectedMenuItemValue = event.getParam("value");
        const e = component.getEvent('RelatedList_menuAction');
        e.setParams({
            data: { option: selectedMenuItemValue }
        })
        e.fire();
    }


})