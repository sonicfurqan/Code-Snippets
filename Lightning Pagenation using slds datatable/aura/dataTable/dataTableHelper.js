({
    OFFSET: 1,
    setData: function (component, data) {

        if (data) {
            component.set('v.displayAllAccountList', data);
            let pageCount = Math.ceil(data.length / this.OFFSET);
            component.set('v.numOfPages', pageCount);
            component.set('v.currentPage', '1');
            //based on page number and offset adding data to display list
            let splicelength = (this.OFFSET < data.length) ? this.OFFSET : data.length;
            let dislaydata = data.slice(0, splicelength);
            component.set('v.displayAccountList', dislaydata);
        }
        else {

            component.set('v.displayAccountList');
            component.set('v.currentPage', '0');
            component.set('v.numOfPages', '0');
        }

    },
})
