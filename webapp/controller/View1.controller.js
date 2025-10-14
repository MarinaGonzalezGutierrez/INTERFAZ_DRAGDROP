sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ejercicio15.project1.controller.View1", {
        onInit() {
            var oModel = new sap.ui.model.json.JSONModel();
            // oModel.loadData("listas.json"); // Si está en webapp/
            // this.getView().setModel(oModel);
        }
    });
});