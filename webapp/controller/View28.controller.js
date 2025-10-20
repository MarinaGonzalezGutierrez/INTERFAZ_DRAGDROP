sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("ejercicio15.project1.controller.View28", {
        onInit: function () {

            const data = {
                items: [
                    { id: "1", name: "Madrid" },
                    { id: "2", name: "Barcelona" },
                    { id: "3", name: "Valencia" },
                    { id: "4", name: "Sevilla" },
                    { id: "5", name: "Bilbao" }
                ]
            };


            const model = new JSONModel(data);
            this.getView().setModel(model);



        },


        onLiveChange: function (oEvent) {
            const sValue = oEvent.getParameter("value");
            const oComboBox = oEvent.getSource();
            const oBinding = oComboBox.getBinding("items");

            const aFilters = [];
            if (sValue) {
                aFilters.push(new Filter("name", FilterOperator.Contains, sValue));
            }

            oBinding.filter(aFilters);
        },


        onSelectionChange: function (oEvent) {
            const selectedItem = oEvent.getParameter("selectedItem");
            if (selectedItem) {
                sap.m.MessageToast.show("Seleccionado: " + selectedItem.getText());
            }
        }




    });
});
