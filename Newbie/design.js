Ext.define('form.design' ,{
extend: 'Ext.panel.Panel',
alias: 'widget.design',
    title: 'Registration',
    //html: 'First Name:<p> Last Name:',
	//layout: 'form',
	//xtype: 'form',
	defaulttype: 'textfield',
	    defaults: {
        anchor: '-10',
        labelWidth: 170,
		padding: 10
    },
	postUrl: '',
	initComponent : function() {
		// initialize UI
        this.items = this.buildItems();
		this.buttons = this.buildButtons();

		// must always be called
        this.callParent(arguments);
    },
	
	buildItems: function() {
	return
	[
        {
                            xtype: 'field',
                            anchor: '100%',
                            itemId: 'makerField',
                            fieldLabel: 'First Name:',
                            labelAlign: 'right',
                            labelWidth: 70,
                            editable: false,
                            displayField: 'value',
                            valueField: 'id',
							border: '1',
							id: 'first'
        },
        {
                            xtype: 'field',
                            anchor: '100%',
                            itemId: 'seriesField',
                            fieldLabel: 'Last Name:',
                            labelAlign: 'right',
                            labelWidth: 70,
                            editable: false,
                            displayField: 'value',
                            valueField: 'id',
							border: '1',
							id: 'last'
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
									
										Ext.Ajax.request({
										   url: '/save',
										   params: {firstname:(Ext.getCmp('first').getValue()),lastname:(Ext.getCmp('last').getValue())},
										   method: 'POST',
										   success: function(response, opts) {
											  //var obj = ((Ext.getCmp('first').getValue()) + " " + (Ext.getCmp('last').getValue()));
											  //console.dir(obj);
											  Ext.Msg.alert('Alerto!',response.responseText);
										   },
										   failure: function(response, opts) {
											  console.log('server-side failure with status code ' + response.status);
										   }
										});
									
									//Ext.Msg.alert('Alerto!',(Ext.getCmp('first').getValue()) + " " + (Ext.getCmp('last').getValue()));
								}, // handler
                                }
                            ]
                        }
    ]
	},
});