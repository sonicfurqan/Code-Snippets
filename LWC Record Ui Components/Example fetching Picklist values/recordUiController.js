({
	handleObjDetails: function (component, event, helper) {
		//getting object data from event 
		let data = event.getParam('objData');
		console.log(JSON.parse(JSON.stringify(data)));
		component.set('v.accountObjDetails', data)

	},
	handlePicklistData: function (component, event, helper) {
		//getting picklist data from event 
		let data = event.getParam('picklistData');
		console.log(JSON.parse(JSON.stringify(data.picklistFieldValues.Industry.values)));
		component.set('v.pickListDetails', data.picklistFieldValues.Industry.values)

	}
})