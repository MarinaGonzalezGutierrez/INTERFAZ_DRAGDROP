sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/BusyIndicator",
    "sap/m/MessageToast"
], function (Controller, BusyIndicator, MessageToast) {
    "use strict";

    return Controller.extend("ejercicio15.project1.controller.View24", {
        onInit: function () {
            
        },

        onLoadData: function () {
            //mostrar busyindicator
            BusyIndicator.show(0);

            
 // Simular carga de datos (por ejemplo, llamada al backend)
      setTimeout(function () {
        // ocultar busyindicator
        BusyIndicator.hide();

        // mensaje
        MessageToast.show("Datos cargados correctamente");
      }, 2000); // segundos espera
    }

        


    });
});
