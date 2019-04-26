#Helper Components

1.UtiltyEvent

Extend UtilityEvent Component to use


1.fireComponentEvent:  fire component event by passing event name and parameters

2.fireApplicationEvent: fire application event by passing event name and parameters

3.fireToastEvent: show toast message by passing message  and notification type



2.UtilityValidation


Extend UtilityValidation Component to use

1.validateField : pass value and type of validation it retuns true or false


3.UtilityServerCall

Extend UtilityServerCall Component to use

1.callServer: pass methdname and paramters it returns promiss with result

2.createDynamic: pass component name , attribute and and attribute name in wich component it to be initlized

3.getUrlParameterByName: pass parameter name and it will retrun value from url

4.getFormattedDate: pass date it will return it in IST fromated date



Example

	<pre> 
	<aura:component extends="c:UtilityValidation" >
  	</aura:component>`

	({
		helperMethod : function(component, event, helper) {
			let text=this.validateField('hi','text')
        
		}
	})
	</pre>




