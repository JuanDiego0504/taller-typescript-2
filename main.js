"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataSerie_js_1 = require("./dataSerie.js");
let seriesTbody = document.getElementById('seriesTbody');
if (seriesTbody) {
    renderSeriesInTable(dataSerie_js_1.dataSerie);
}
else {
    console.error("No se encontró el elemento tbody con id 'seriesTbody'");
}

function renderSeriesInTable(series) {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.canal}</td>
            <td>${serie.temporadas}</td>
            <td>${serie.descripcion}</td>
            <td><a href="${serie.link}" target="_blank">${serie.link}</a></td>
            <td><img src="${serie.imagenlink}" alt="${serie.name}" width="100"></td>
        `;
        seriesTbody.appendChild(trElement);
    });
}
