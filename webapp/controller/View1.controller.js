sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ejercicio15.project1.controller.View1", {
        onInit() {
            var oModel = new sap.ui.model.json.JSONModel();
            // oModel.loadData("listas.json"); // Si está en webapp/
            // this.getView().setModel(oModel);
        },

         onGoView21: function(){
            var router1 = sap.ui.core.UIComponent.getRouterFor(this);
            router1.navTo("View21");
        },

         onGoView23: function(){
            var router1 = sap.ui.core.UIComponent.getRouterFor(this);
            router1.navTo("View23");
        },

         onGoView24: function(){
            var router1 = sap.ui.core.UIComponent.getRouterFor(this);
            router1.navTo("View24");
        },

         onGoView25: function(){
            var router1 = sap.ui.core.UIComponent.getRouterFor(this);
            router1.navTo("View25");
        },


    });
});