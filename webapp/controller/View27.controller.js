sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Configuration"
], function (Controller, MessageToast, JSONModel, Configuration) {
    "use strict";

    return Controller.extend("ejercicio15.project1.controller.View27", {
        onInit: function () {

        },

        
       onThemeSwitch: function () {
            var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
            var sNewTheme = sCurrentTheme === "sap_horizon" ? "sap_horizon_dark" : "sap_horizon";
            sap.ui.getCore().applyTheme(sNewTheme);
        }




    });
});
