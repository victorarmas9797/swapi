
const shortUuid = require('short-uuid');

class Person {

    constructor(personIn) {
        this.peopleId = personIn.peopleId || shortUuid.generate();
        this.name = personIn.name;
        this.mass = personIn.mass;
        this.hair_color = personIn.hair_color;
        this.skin_color = personIn.skin_color;
        this.eye_color = personIn.eye_color;
        this.birth_year = personIn.birth_year;
        this.gender = personIn.gender;
        this.homeworldId = personIn.homeworldId;
        this.created = personIn.created || Date.now();
        this.edited = personIn.edited;
        this.url = `/people/${this.peopleId}`;
        
        //TO DO: relationship
        this.films = personIn.films || ["/films/1", "/films/2", "/films/3"];
        this.species = personIn.species || ["/species/1", "/species/2", "/species/3"];
        this.vehicles = personIn.vehicles || ["/vehicles/1", "/vehicles/2", "/vehicles/3"];
        this.starships = personIn.starships || ["/starships/1", "/starships/2", "/starships/3"];

    }
}

module.exports = Person;