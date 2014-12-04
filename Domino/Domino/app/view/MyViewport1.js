/*
 * File: app/view/MyViewport1.js
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

Ext.define('Domino.view.MyViewport1', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport1',

    requires: [
        'Domino.view.MyViewport1ViewModel',
        'Domino.view.LoginMenu',
        'Domino.view.LoginForm',
        'Ext.form.Panel'
    ],

    viewModel: {
        type: 'myviewport1'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    flex: 3,
                    baseCls: 'x-container promotionalContainer',
                    layout: 'border',
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            region: 'center',
                            margin: 50,
                            style: 'background:red;',
                            layout: 'border'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    baseCls: 'x-container loginContainer',
                    minWidth: 300,
                    width: 300,
                    layout: 'border',
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            region: 'center',
                            id: 'homeLoginContainer',
                            layout: 'card',
                            items: [
                                {
                                    xtype: 'loginmenu',
                                    id: 'homeLoginMenuPanel',
                                    itemId: 'LoginMenuPanel'
                                },
                                {
                                    xtype: 'loginform',
                                    id: 'homeLoginFormPanel',
                                    itemId: 'LoginFormPanel'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});