sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("ejercicio15.project1.controller.View23", {
        onInit: function () {
            // El modelo "tasks" ya está definido en el manifest.json
        },

        onItemPress: function (oEvent) {
            var oItem = oEvent.getSource();
            MessageToast.show("Tarea: " + oItem.getTitle());
        },

//         Obtiene los controles que fueron arrastrados (draggedControl) y donde se soltaron (droppedControl).
// Busca sus posiciones en la lista (draggedIndex, droppedIndex).
// Modifica el array de tareas (aTasks) quitando el elemento arrastrado y colocándolo en la nueva posición.
// Actualiza el modelo con el nuevo orden.
        onDrop: function (oEvent) {
            var oDraggedControl = oEvent.getParameter("draggedControl");
            var oDroppedControl = oEvent.getParameter("droppedControl");

            var oList = this.byId("taskList");
            var aItems = oList.getItems();
            var oModel = this.getView().getModel("tasks");
            var aTasks = oModel.getProperty("/tasks");

            var draggedIndex = aItems.indexOf(oDraggedControl);
            var droppedIndex = aItems.indexOf(oDroppedControl);

            if (draggedIndex === -1 || droppedIndex === -1) {
                return;
            }

            var oDraggedTask = aTasks.splice(draggedIndex, 1)[0];
            aTasks.splice(droppedIndex, 0, oDraggedTask);

            oModel.setProperty("/tasks", aTasks);
        }
    });
});
