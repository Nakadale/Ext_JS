//alert('before define');
Ext.define('form.views.design' ,{
extend: 'Ext.panel.Panel',
alias: 'widget.design',
    title: 'Registration',
	defaulttype: 'textfield',
	    defaults: {
        anchor: '-10',
        labelWidth: 170,
		padding: 10,
    },
	postUrl: '',
	initComponent : function() {
		// initialize UI
		//alert('before buildItems');
        //this.items = this.buildItems2();
		
		this.items = this.buildItems();

		//alert('before buildButtons');	
		//this.buttons = this.buildButtons();
		//this.html = 'any'; - testing
		// must always be called
        this.callParent(arguments);
    },
	/* buildItems2: function(){
		return [{
                            xtype: 'textfield',
                            anchor: '100%',
                            itemId: 'makerField',
                            fieldLabel: 'First Name:',
                            labelAlign: 'right',
                            labelWidth: 70,
                            editable: true,
                            displayField: 'value',
                            valueField: 'id',
							width: '100%'
		},
		{
		                     xtype: 'textfield',
                            anchor: '100%',
                            itemId: 'seriesField',
                            fieldLabel: 'Last Name:',
                            labelAlign: 'right',
                            labelWidth: 70,
                            editable: true,
                            displayField: 'value',
                            valueField: 'id',
							width: '100%'
		
		},
		{
		xtype: 'container',
                            margin: '10 0 10 0',
                            layout: {
                                type: 'hbox',
                                align: 'middle',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'doneButton',
                                    text: 'Save',
									listener: {
									handler: function () {
									
										//var payload = {
										 //fname: 'f',
										 //lname: 'l'
										//}
									
										var me = this.up('panel');
									
										Ext.Ajax.request({
										   url: '/save',
										   //params: {firstname:(Ext.getCmp('first').getValue()),lastname:(Ext.getCmp('last').getValue())},
										   	params: {firstname:(me.getComponent('firstField').getValue()),lastname:(me.getComponent('lastField').getValue())},
										   
										   method: 'POST',
										   success: function(response, opts) {
											  //var obj = ((Ext.getCmp('first').getValue()) + " " + (Ext.getCmp('last').getValue()));
											  //console.dir(obj);
											  Ext.Msg.alert('Alerto!',response.responseText);
										   },
										   failure: function(response, opts) {
											  console.log('server-side failure with status code ' + response.status);
										   },
										   callback: function(param1)
										   {
										   this.Fireevent('posted');
										   }
										});
									
									//Ext.Msg.alert('Alerto!',(Ext.getCmp('first').getValue()) + " " + (Ext.getCmp('last').getValue()));
								} //handler
								}, // listener
                                } // items
                            ] //items
		}
		]
	}, */
	buildItems: function(){
		return [{
			xtype: 'textfield',
			anchor: '100%',
			itemId: 'firstField',
			fieldLabel: 'First Name:',
			labelAlign: 'right',
			labelWidth: 70,
			editable: true,
			displayField: 'value',
			valueField: 'id',
			width: '100%'
		},
		{
			 xtype: 'textfield',
			anchor: '100%',
			itemId: 'lastField',
			fieldLabel: 'Last Name:',
			labelAlign: 'right',
			labelWidth: 70,
			editable: true,
			displayField: 'value',
			valueField: 'id',
			width: '100%'
		},
		{
		xtype: 'container',
			margin: '10 0 10 0',
			layout: {
				type: 'hbox',
				align: 'middle',
				pack: 'center'
					  },
					items: [
						{
							xtype: 'button',
							itemId: 'doneButton',
							text: 'Save',
							handler: function (){
							
								//var payload = {
								 //fname: 'f',
								 //lname: 'l'
								//}
							
								var me = this.up('panel');
								var firstname = me.getComponent('firstField');
								var lastname = me.getComponent('lastField');
								//console.log(me);
								Ext.Ajax.request({
								   method: 'POST',											
								   url: me.postUrl,
								   //url: '/save',
								   //params: {firstname:(Ext.getCmp('first').getValue()),lastname:(Ext.getCmp('last').getValue())},
									params: {firstname:(me.getComponent('firstField').getValue()),lastname:(me.getComponent('lastField').getValue())},
/* 									params: { 
									firstname: firstname.getValue(),
									lastname: lastname.getValue() 
									},
 */								   
								   success: function(response, opts) {
									  //var obj = ((Ext.getCmp('first').getValue()) + " " + (Ext.getCmp('last').getValue()));
									  //console.dir(obj);
									  Ext.Msg.show('Alerto!',response.responseText);
								   },
								   failure: function(response, opts) {
									  console.log('server-side failure with status code ' + response.status);
								   },
									callback: function(param1)
									   {
											me.fireEvent('posted',param1);
									   }
									});
							
							//Ext.Msg.alert('Alerto!',(Ext.getCmp('first').getValue()) + " " + (Ext.getCmp('last').getValue()));
						  } //handler
						
						} // items
					] //items
		}
		]
	},// buildItems3
}); // ext.define		
		
/* 		{
                            xtype: 'container',
                            margin: '10 0 10 0',
                            layout: {
                                type: 'hbox',
                                align: 'middle',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'doneButton',
                                    text: 'Save',
									listener: {
									handler: function () {
									
										//var payload = {
										 //fname: 'f',
										 //lname: 'l'
										//}
									
/* 										var me = this.up('panel');
									
										Ext.Ajax.request({
										   url: '/save',
										   //params: {firstname:(Ext.getCmp('first').getValue()),lastname:(Ext.getCmp('last').getValue())},
										   	params: {firstname:(me.getComponent('firstField').getValue()),lastname:(me.getComponent('lastField').getValue())},
										   
										   method: 'POST',
										   success: function(response, opts) {
											  //var obj = ((Ext.getCmp('first').getValue()) + " " + (Ext.getCmp('last').getValue()));
											  //console.dir(obj);
											  Ext.Msg.alert('Alerto!',response.responseText);
										   },
										   failure: function(response, opts) {
											  console.log('server-side failure with status code ' + response.status);
										   },
										   callback: function(param1)
										   {
										   this.Fireevent('posted');
										   }
										}); */
									
									//Ext.Msg.alert('Alerto!',(Ext.getCmp('first').getValue()) + " " + (Ext.getCmp('last').getValue()));
								//} //handler
							//	}, // listener
                            //    } // items
                            //] //items
                        //} //container */
