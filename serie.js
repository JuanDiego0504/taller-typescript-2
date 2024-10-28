"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(id, name, canal, temporadas, descripcion, link, imagenlink) {
        this.id = id;
        this.name = name;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.link = link;
        this.imagenlink = imagenlink;
    }
    return Serie;
}());
exports.Serie = Serie;
