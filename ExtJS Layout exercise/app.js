Ext.onReady(function() {

Ext.application({
    name: 'UserRegistration',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',			
				items: [
						
							{
							xtype: 'panel',
							region: 'west',
							width: '75%',
							split: true,
							title: 'parent',
							header: false,
							border: false,
							items: [
							{
								xtype: 'grid',
								title: 'User List',
								store: {
											fields:['username', 'name', 'password'],
											data:[
												{ username: '[new]',  name: "",
												  password: ""  },
												{ username: 'user1',  name: "",
												  password: ""  },
												{ username: 'user2',  name: "",
												  password: ""  },
												{ username: 'user3',  name: "",
												  password: ""  }
											],
										},
								columns: [
												{ 
												text: 'User Name',  
												dataIndex: 'username' 
												},
												{ 
												text: 'Name', 
												dataIndex: 'name' 
												},
												{ 
												text: 'Password', 
												dataIndex: 'password' 
												}
											]	// columns				
							} // items panel west
							] // items panel west

						},{
							
								region: 'center',
								xtype: 'panel',  // alternative 'form'
								title: 'User Registration',
										layout: {
										align: 'left',
										pack: 'left',
										},
						
														items:[
																{
																		padding: '5px 5px 5px 5px',
																		xtype: 'textfield',
																		//anchor: '100%',
																		margin: '0 0 10 0',
																		fieldLabel: 'Name',
																		labelAlign: 'left',
																		//msgTarget: 'title',
																		itemId: 'username',
																		allowBlank: false,
																		emptyText: 'Enter your user name.'
								
																},
																{
																		padding: '5px 5px 5px 5px',
																		xtype: 'textfield',
																		//anchor: '100%',
																		margin: '0 0 10 0',
																		fieldLabel: 'Password',
																		labelAlign: 'left',
																		msgTarget: 'title',
																		itemId: 'password',
																		allowBlank: false,
																		blankText: 'Enter your password.'
																},
																{
																		padding: '5px 5px 5px 5px',
																		xtype: 'textfield',
																		//anchor: '100%',
																		margin: '0 0 10 0',
																		fieldLabel: 'Email',
																		labelAlign: 'left',
																		msgTarget: 'title',
																		itemId: 'email',
																		allowBlank: false,
																		blankText: 'Enter your Email.'
																},
																{
																		padding: '5px 5px 5px 5px',
																		xtype: 'textfield',
																		//anchor: '100%',
																		margin: '0 0 10 0',
																		fieldLabel: 'Full Name',
																		labelAlign: 'left',
																		msgTarget: 'title',
																		itemId: 'name',
																		allowBlank: false,
																		blankText: 'Enter your full name.'
																},
																{
																		padding: '5px 5px 5px 5px',
																		xtype: 'textfield',
																		//anchor: '100%',
																		margin: '0 0 10 0',
																		fieldLabel: 'Salutations',
																		labelAlign: 'left',
																		msgTarget: 'title',
																		itemId: 'salutations',
																		allowBlank: false,
																		blankText: 'Enter your Salutations.'
																}
																], //items 
																
																buttons:[
																				{
																					xtype: 'button',
																					itemId: 'newButton',
																					text: 'New',
																				},																
																				{
																					xtype: 'button',
																					itemId: 'saveButton',
																					text: 'Save',
																				},
																				{
																					xtype: 'button',
																					itemId: 'deleteButton',
																					text: 'Delete',
																				} 
																] // buttons
						}] // items
        }); //create Viewport
    } //launch
}); // applications

}); //onReady