sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("ejercicio15.project1.controller.View29", {
        onInit: function () {

            const data = {
                items: [
                    { id: "1", name: "Elemento A" },
                    { id: "2", name: "Elemento B" },
                    { id: "3", name: "Elemento C" },
                    { id: "4", name: "Elemento D" }
                ]
            };

            const model = new JSONModel(data);
            this.getView().setModel(model);

        },



        onDeleteSelected: function () {
            const oTable = this.getView().byId("myTable");
            const aSelectedItems = oTable.getSelectedItems();
            const oModel = this.getView().getModel();
            const aData = oModel.getProperty("/items");

            const aToDelete = aSelectedItems.map(item => {
                return item.getBindingContext().getObject();
            });

            const aFiltered = aData.filter(item => {
                return !aToDelete.some(toDelete => toDelete.id === item.id);
            });

            oModel.setProperty("/items", aFiltered);

        }



    });
});
