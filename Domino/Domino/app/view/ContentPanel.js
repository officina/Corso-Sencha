/*
 * File: app/view/ContentPanel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Domino.view.ContentPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.contentpanel',

    requires: [
        'Domino.view.ContentPanelViewModel',
        'Domino.view.DashPanel',
        'Domino.view.BrowsePanel',
        'Ext.panel.Panel'
    ],

    viewModel: {
        type: 'contentpanel'
    },
    id: 'contentPanel',
    itemId: 'contentPanel',
    layout: 'card',
    header: false,
    title: 'contentPanel',

    items: [
        {
            xtype: 'dashpanel',
            animCollapse: true
        },
        {
            xtype: 'browsepanel'
        }
    ]

});