
const PersonRepository = require("../repository/person.dynamodb.repository.js");
const PersonClient = require("../client/person.client.js");
const Person = require("../model/person.model.js");
const PersonConverterES = require("../model/personConverterES.js");
const Definitions = require("../definitions.js");


exports.create = async (request) => {

    const person = new Person(request);

    const response = await PersonRepository.create(person);

    const personConverted = new PersonConverterES(response.data);

    response.data = personConverted;
    
    return response;
}

exports.findById = async (id) => {

    try {
        const responseRepository = await PersonRepository.findById(id);

        console.log(responseRepository);

        if(responseRepository.responsecode == Definitions.RESPONSECODE_OK){
            const personConverted = new PersonConverterES(responseRepository.data);
            responseRepository.data = personConverted;
            return responseRepository;
        }
            
        
        const responseClient = await PersonClient.findById(id);

        if(responseClient.responsecode == Definitions.RESPONSECODE_OK)
        {
            // Create a person
            responseClient.data.peopleId = id;
            await PersonRepository.create(responseClient.data);
            
            const personConverted = new PersonConverterES(responseClient.data);
            responseClient.data = personConverted;
        }

        return responseClient;

    } catch (error) {
        console.log(error);
        return {responsecode : 999};
    }
    
}