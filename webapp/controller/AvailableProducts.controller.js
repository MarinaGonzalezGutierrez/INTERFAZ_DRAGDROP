sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ejercicio15.project1.controller.AvailableProducts", {
        onInit() {
           
        },

        onDropAvailableProductsTable: function (oEvent) {
  var oDragSession = oEvent.getParameter("dragSession");
  var oDraggedItem = oDragSession.getDragControl();
  var oDraggedContext = oDraggedItem.getBindingContext("listas");
  var oDraggedData = oDraggedContext.getObject();

  var oModel = this.getView().getModel("listas");
  var aListA = oModel.getProperty("/listA");
  var aSelected = oModel.getProperty("/selectedProducts");

  // Eliminar de listA
  aListA = aListA.filter(item => item.name !== oDraggedData.name);

  // Añadir a selectedProducts
  aSelected.push(oDraggedData);

  oModel.setProperty("/listA", aListA);
  oModel.setProperty("/selectedProducts", aSelected);
}
    });
});