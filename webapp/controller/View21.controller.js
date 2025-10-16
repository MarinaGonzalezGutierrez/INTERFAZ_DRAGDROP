sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ejercicio15.project1.controller.View21", {
        onInit() {
          
        },

        
onNavBack: function () {
    var oHistory = sap.ui.core.routing.History.getInstance();
    var sPreviousHash = oHistory.getPreviousHash();

    if (sPreviousHash !== undefined) {
        window.history.go(-1);
    } else {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("home", {}, true); // ← usa la ruta que tengas definida
    }
}


       
    });
});