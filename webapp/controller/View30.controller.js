sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("ejercicio15.project1.controller.View30", {
        onInit: function () {

            var oModel = new sap.ui.model.json.JSONModel("model/products.json");
            this.getView().setModel(oModel);

        },


        onRatingChange: function (oEvent) {
            var fValue = oEvent.getParameter("value");
            this.getView().getModel().setProperty("/rating", fValue);
        },


        onSaveRating: function () {
            var fRating = this.getView().getModel().getProperty("/rating");
            // Aquí podrías hacer una llamada a un backend o guardar en localStorage
            MessageToast.show("Calificación guardada: " + fRating);
        }



    });
});
