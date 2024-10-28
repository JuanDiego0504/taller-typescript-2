"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dataSerie_js_1 = require("./dataSerie.js");
var seriesTbody = document.getElementById('seriesTbody');
if (seriesTbody) {
    renderSeriesInTable(dataSerie_js_1.dataSerie);
}
else {
    console.error("No se encontró el elemento tbody con id 'seriesTbody'");
}
// Función que renderiza la lista de series en la tabla
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td>").concat(serie.name, "</td>\n            <td>").concat(serie.canal, "</td>\n            <td>").concat(serie.temporadas, "</td>\n            <td>").concat(serie.descripcion, "</td>\n            <td><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.link, "</a></td>\n            <td><img src=\"").concat(serie.imagenlink, "\" alt=\"").concat(serie.name, "\" width=\"100\"></td>\n        ");
        seriesTbody.appendChild(trElement);
    });
}
