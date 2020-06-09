({
    onInit: function (component, event, helper) {

        let action = component.get('c.getAllAccounts');
        action.setCallback(this, function (result) {
            let state = result.getState();
            let data = result.getReturnValue();
            if (state == 'SUCCESS') {
                component.set('v.allAccount', JSON.parse(JSON.stringify(data)));
                helper.setData(component, data);

            }
        });
        $A.enqueueAction(action);
    },
    navigateToPage: function (component, event, helper) {
        //getting buton type next/prev
        let buttonType = event.getSource().get("v.name");
        //getting current page info
        let page = component.get('v.currentPage');
        //getting page count
        let numOfPages = component.get('v.numOfPages');
        page = parseInt(page);
        numOfPages = parseInt(numOfPages);

        //diabling/enabling buttons
        if (numOfPages == 1) {

            component.set('v.firstDisable', true);
            component.set('v.prevDisable', true);
            component.set('v.nextDisable', true);
            component.set('v.lastDisable', true);
        }
        else {
            component.set('v.firstDisable', false);
            component.set('v.prevDisable', false);
            component.set('v.nextDisable', false);
            component.set('v.lastDisable', false);

        }


        //navigate to next page 
        if (buttonType == 'Next') {
            if (page < numOfPages) {
                page += 1;
                //diabling next and last button 
                if (page == numOfPages) {
                    component.set('v.nextDisable', true);
                    component.set('v.lastDisable', true);
                }
            }
            else {
                component.set('v.nextDisable', true);
                return;
            }
        }
        else if (buttonType == 'Prev') {
            if (page > 1) {
                page -= 1;
                //diabling prev and first button 
                if (page == 1) {
                    component.set('v.prevDisable', true);
                    component.set('v.firstDisable', true);
                }
            }
            else {
                component.set('v.prevDisable', true);
                return;
            }
        }
        else if (buttonType == 'First') {
            page = 1;
            //diabling prev and first button 
            component.set('v.prevDisable', true);
            component.set('v.firstDisable', true);
        }
        else if (buttonType == 'Last') {
            page = numOfPages;
            //diabling next and last button 
            component.set('v.nextDisable', true);
            component.set('v.lastDisable', true);
        }

        if (page) {

            component.set('v.currentPage', page);
            //offset to define only 50 records is to be shown on one page : Should not be increased causes lag
            let offset = helper.OFFSET;



            window.setTimeout($A.getCallback(function () {
                let data = component.get('v.displayAllAccountList');
                //slicing data and adding it to display list
                let splicelength = page * offset;
                let dislaydata = data.slice(splicelength - offset, splicelength);
                component.set('v.displayAccountList', dislaydata);


            }), 100);


        }
    },
    searchlist: function (component, event, helper) {
        let value = component.get('v.searchKey');
        let orignal = component.get('v.allAccount');
        if (value) {
            let filterList = orignal.filter(function (l) {
                return l.Name.toLowerCase().search(value.toLowerCase()) > -1
            });
            helper.setData(component, filterList);
        }
        else {
            helper.setData(component, orignal);
        }

    },
    accountSelect: function (component, event, helper) {
        let selectedRows = event.getSource().get('v.name');
        let selectedstatus = event.getSource().get('v.value');
    }
})
