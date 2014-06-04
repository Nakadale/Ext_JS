/* 
Ext.Loader.setConfig({ disableCaching:false });

(function() {

Ext.Loader.setConfig({
        enabled: true,
        //paths: {
        //    form:'form'
        //} 
    });

Ext.Loader.require('form.design'); */

Ext.define('form.design' ,{
extend: 'Ext.panel.Panel',
alias: 'widget.design',
    title: 'Registration',
    //renderTo: Ext.getBody(),
    title: 'Registration',
	layout: 'form',
	xtype: 'form',
	defaulttype: 'textfield',
	items: [
        {
                            xtype: 'field',
                            anchor: '100%',
                            itemId: 'firstField',
                            fieldLabel: 'First Name:',
                            labelAlign: 'right',
                            labelWidth: 70,
                            editable: false,
                            displayField: 'value',
                            valueField: 'id',
							border: '1',
							//id: 'first'
        },
        {
                            xtype: 'field',
                            anchor: '100%',
                            itemId: 'lastField',
                            fieldLabel: 'Last Name:',
                            labelAlign: 'right',
                            labelWidth: 70,
                            editable: false,
                            displayField: 'value',
                            valueField: 'id',
							border: '1',
							//id: 'last'
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
									handler: function () {
									

										//var payload = {
										 //fname: 'f',
										 //lname: 'l'
										//}
									
											var me = this.up('panel');
											
										Ext.Ajax.request({
										   url: '/save',
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
										   callback: function()
										   {
										   me.fireEvent('posted');
										   }
										});
									
									//Ext.Msg.alert('Alerto!',(Ext.getCmp('first').getValue()) + " " + (Ext.getCmp('last').getValue()));
								}, // handler
                                }
                            ]
                        }
    ]
});


Ext.onReady(function() { 	
	Ext.create('Ext.container.Viewport', {
	
			id: 'viewport',
			// create two instance of the 
			// login panel
			layout: {
				type: 'vbox',
				align: 'center',
				pack: 'center'
		    },
			
/* 			listeners: {
							afterrender: function(load) {

							console.log('Ambot NIMU!!!');
							
							}
						}, */
			
			items: [
				{

				   	xtype: 'design',
					title: 'Login for members',
					postUrl: '/registration/member'
					,width: '100%',
					
						listeners: {
							posted: function() {

							console.log('EPIC FEYL!!!');
							
							}
						}
				},
				{

				xtype: 'design',
					title: 'Login for admin',
					postUrl: '/registration/admin'
					,width: '100%',
							listeners: {
							posted: function() {
							
							Ext.Msg.alert('','whatda');
							//console.log('EPIC PASH!!');
							
							}
						}				

				}

			]

		});
});


//});