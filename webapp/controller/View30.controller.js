sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("ejercicio15.project1.controller.View30", {
        onInit: function () {

            const oData = {
                products: [
                    { id: "P001", name: "Producto A", rating: 0 },
                    { id: "P002", name: "Producto B", rating: 0 },
                    { id: "P003", name: "Producto C", rating: 0 }
                ]

            };

            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },



        onRatingChange: function (oEvent) {
            const fNewRating = oEvent.getParameter("value");
            const oItem = oEvent.getSource().getBindingContext().getObject();
            oItem.rating = fNewRating;

            // Simulación de guardado
            console.log(`Producto ${oItem.name} calificado con ${fNewRating} estrellas`);
            
        }

    });
});