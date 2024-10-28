export class Serie {
  id: number;
  name: string;
  canal: string;
  temporadas: number;
  descripcion: string;
  link: string;
  imagenlink: string;

  constructor(id: number, name: string, canal: string, temporadas: number, descripcion: string, link: string, imagenlink: string) {
      this.id = id;
      this.name = name;
      this.canal = canal;
      this.temporadas = temporadas;
      this.descripcion = descripcion;
      this.link = link;
      this.imagenlink = imagenlink;
  }
}