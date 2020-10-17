
class PersonConverterES {

    constructor(personIn) {
        
       this.personaId = personIn.peopleId;
        this.nombre = personIn.name;
        this.masa = personIn.mass;
        this.colorCabello = personIn.hair_color;
        this.colorPiel = personIn.skin_color;
        this.colorOjos = personIn.eye_color;
        this.fechaNacimiento = personIn.birth_year;
        this.genero = personIn.gender;
        this.mundoHogarId = personIn.homeworldId;
        this.creado = personIn.created || Date.now();
        this.editado = personIn.edited;
        this.enlace = `/people/${this.peopleId}`;
        
        //TO DO: relationship
        this.filmaciones = personIn.films || ["/films/1", "/films/2", "/films/3"];
        this.especies = personIn.species || ["/species/1", "/species/2", "/species/3"];
        this.vehiculos = personIn.vehicles || ["/vehicles/1", "/vehicles/2", "/vehicles/3"];
        this.navesEstelares = personIn.starships || ["/starships/1", "/starships/2", "/starships/3"];
    }
}

module.exports = PersonConverterES;