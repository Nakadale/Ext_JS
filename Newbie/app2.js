(function() {

//alert('before loader');
Ext.Loader.setConfig({
	disableCaching:false,
        enabled: true,
        paths: {
            'form':'form'
        } 
    });

//alert('before require');	
Ext.require('form.views.design');

//alert('before onready');
Ext.onReady(function() { 
	
	//alert('pasok');
	//Ext.create('Ext.container.Viewport', {
	//Ext.create('form.views.design', {
	Ext.create('Ext.panel.Panel', {	
			id: 'viewport',
			// create two instance of the 
			// login panel
			layout: {
				type: 'vbox',
				align: 'center',
				pack: 'center'
		    },
			renderTo: Ext.getBody(),
			items: [
				{
				   	xtype: 'design',
					title: 'Login for members',
					postUrl: '/save',
					width: '100%'
					
				},
				{
					xtype: 'design',
					title: 'Login for admin',
					postUrl: '/save',
					width: '100%',
					listeners: {
							posted: function() {
							
							Ext.Msg.alert('','whatda');
							console.log('EPIC PASH!!');
							
							}
							}
				}
			]

		});
});


})();