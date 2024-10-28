import { Serie } from './serie.js';
import { dataSerie } from './dataSerie.js';

let seriesTbody: HTMLElement | null = document.getElementById('seriesTbody');


if (seriesTbody) {
    renderSeriesInTable(dataSerie);
} else {
    console.error("No se encontró el elemento tbody con id 'seriesTbody'");
}

// Función que renderiza la lista de series en la tabla
function renderSeriesInTable(series: Serie[]): void {
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
        seriesTbody!.appendChild(trElement);
    });
}