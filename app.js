/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'PlaseHolder.Application',

    name: 'PlaseHolder',

    requires: [
        // This will automatically load all classes in the PlaseHolder namespace
        // so that application classes do not need to require each other.
        'PlaseHolder.*'
    ],

    // The name of the initial view to create.
    mainView: 'PlaseHolder.view.main.MainModel'
});
