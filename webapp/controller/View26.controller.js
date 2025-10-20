sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("ejercicio15.project1.controller.View26", {
        onInit: function () {

            // var oModel = new JSONModel("clientes.json");
            // this.getView().setModel(oModel, "clientes");

        },


 onClientePress: function (oEvent) {
    var oContext = oEvent.getSource().getBindingContext("clientes");

    // Asignar el contexto a la página de detalle
    var oMidPage = this.getView().byId("midPage");
    if (oMidPage) {
        oMidPage.setBindingContext(oContext, "clientes");
    }

    // Cambiar el layout
    var oFCL = this.getView().byId("fcl");
    oFCL.setLayout("TwoColumnsMidExpanded");
},

        
onVerMasPress: function () {
    var oFCL = this.getView().byId("fcl");
    oFCL.setLayout("ThreeColumnsMidExpanded");
}









    });
});
