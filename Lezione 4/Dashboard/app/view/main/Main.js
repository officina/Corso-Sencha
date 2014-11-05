/*
 * File: app/view/main/Main.js
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

Ext.define('Dashboard.view.main.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainmain',

    requires: [
        'Dashboard.view.main.MainViewModel',
        'Dashboard.view.profitloss.ProfitLoss',
        'Ext.tab.Bar',
        'Ext.grid.Panel',
        'Ext.tab.Tab'
    ],

    config: {
        plugins: 'viewport'
    },

    viewModel: {
        type: 'main'
    },
    minHeight: 500,
    defaults: {
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left',
                    flex: 0
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    flex: 1
                }
            }
        }
    },
    header: {
        layout: {
            align: 'stretchmax'
        },
        iconCls: 'exec-header-icon',
        title: {
            text: 'MyBiz',
            textAlign: 'center',
            flex: 0,
            minWidth: 160
        }
    },
    headerPosition: 'left',
    titleRotation: 0,
    activeTab: 0,
    tabBarHeaderPosition: 1,
    tabRotation: 0,

    tabBar: {
        xtype: 'tabbar',
        flex: 1
    },
    items: [
        {
            xtype: 'profitloss'
        }
    ]

});