({
    
    
    onInit:function(component){
      let items=component.get('v.menuItems')
      let menuItemsLoaded= component.get('v.menuItemsLoaded')
      
      if(items && menuItemsLoaded==false){
          component.set('v.menuItemsLoaded',true)
         
          let modifed=items.map(i=>{
            let obj=i;
            if(obj.subMenu){
            	obj['expanded']=false
        	}
            
            return obj;
            
        })
        component.set('v.customMenuItems',modifed)
      }
      
      
    },
    onClick : function(component, event, helper) {
        let id = event.target.dataset.menuItemId;
        if (id) {
            component.getSuper().navigate(id);
         }
   },
    expandSubMenu: function(component, event, helper) {
        let id = event.target.dataset.menuItemId;
        let customMenuItems=component.get('v.customMenuItems')
        
        customMenuItems.forEach(function(item){
            
            console.log('item.id',item.id,id,item.id==id)
            if(item.id==id){
                item.expanded=!item.expanded
                item.active=!item.active
            }
            else{
                item.expanded=false
            	item.active=false
            }
        })
        component.set('v.customMenuItems',customMenuItems)
         
   }
})