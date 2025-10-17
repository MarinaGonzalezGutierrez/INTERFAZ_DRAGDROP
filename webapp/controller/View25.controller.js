sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/BusyIndicator",
    "sap/m/MessageToast"
], function (Controller, BusyIndicator, MessageToast) {
    "use strict";

    return Controller.extend("ejercicio15.project1.controller.View25", {
        onInit: function () {
            
        },

        
onToggleClientes: function () {
            var oVBox = this.byId("clientesVBox");
            var bVisible = oVBox.getVisible();
            oVBox.setVisible(!bVisible);
        }

 


    });
});
