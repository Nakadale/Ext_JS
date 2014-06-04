Ext.define('My.panel.Panel', {
    title: 'Hello',
    width: 200,
    html: '<p>World!</p>'
});

Ext.create('My.panel.Panel', {
    renderTo: Ext.getBody()
});