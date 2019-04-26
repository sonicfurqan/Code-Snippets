({
    
    "callServer":function(component, serverMethod, params) {
        return new Promise(function(resolve, reject) { 
            let action = component.get(serverMethod);
            if (params) {               
                action.setParams(params);
            }
            action.setCallback(this, function(response) {
                let state = response.getState();                               
                if (state === "SUCCESS") { 
                    resolve(response.getReturnValue());
                } 
                else if (state === "ERROR"){
                    let errors = response.getError();
                    reject(errors);
                }
            });  
            $A.enqueueAction(action);
        });
    },
    "getUrlParameterByName":function(parameterName) {
        let url = window.location.href;
        parameterName = parameterName.replace(/[\[\]]/g, "\\$&");
        let regex = new RegExp("[?&]" + parameterName + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    "getFormattedDate":function(eventLocationObj) {
        
        let monthNames = [ "January", "February", "March", "April", "May", "June", 
                          "July", "August", "September", "October", "November", "December" ];
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        
        
        let a = eventLocationObj.eventDate.split(/[^0-9]/);
        let date =new Date (a[0],a[1]-1,a[2],a[3],a[4],a[5] );
        let month = date.getMonth();
        let day = date.getDate();
        let year = date.getFullYear();
        let w = date.getDay();
        let s = ["st","nd","rd"][((day+90)%100-10)%10-1]||"th";
        eventLocationObj.day = day;
        eventLocationObj.superset = s;
        eventLocationObj.date = (('0'+(day)).slice(-2));
        eventLocationObj.month = monthNames[month];
        eventLocationObj.weekDay = days[w];
        eventLocationObj.sortDate = day+'/'+(month+1)+'/'+year;
    },
    "createDynamic":function(component, componentName, attributes, bodyletiable) {
        $A.createComponent
        (
            componentName,
            attributes ,
            function(dynamicComponentName, status, errorMessage)
            {
                
                if (status === "SUCCESS") 
                {
                    let body = component.get("v."+bodyletiable);
                    body = [];
                    body.push(dynamicComponentName);
                    component.set("v."+bodyletiable, body);
                }
                else if (status === "INCOMPLETE") 
                {
                    console.error("No response from server or client is offline.")
                    
                }
                    else if (status === "ERROR") 
                    {
                        console.error("Error: " + errorMessage);
                        
                    }
            }
        );	
    }
})