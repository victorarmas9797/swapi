
const PersonService = require("../service/person.service.js");
const Definitions = require("../definitions.js");


const ERROR_CREATE_MESSAGE = "Some error occurred while creating the Person.";
const ERROR_FIND_MESSAGE = "Some error occurred while getting the Person.";
const SUCCESS_MESSAGE = "Success!";


exports.create = async (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            responsecode : Definitions.RESPONSECODE_ERROR_EMPTY_CONTENT
            ,message: Definitions.RESPONSECODE_ERROR_EMPTY_CONTENT_S
        });
    }

    // Call service
    const response = await PersonService.create(req.body);

    if (response.responsecode !== Definitions.RESPONSECODE_OK)
        res.status(400).send({
            responsecode : response.responsecode
            ,message: response.message || ERROR_CREATE_MESSAGE
        });
    else 
        res.status(201).send({
            responsecode : response.responsecode
            ,message: SUCCESS_MESSAGE
            ,data : response.data}
        );
};

exports.findById = async (req, res) => {
    
    var peopleId = req.params.peopleId;
    
    const response = await PersonService.findById(peopleId);
        
    if (response.responsecode !== Definitions.RESPONSECODE_OK)
        res.status(404).send({
            responsecode : response.responsecode
            ,message: response.message || ERROR_FIND_MESSAGE 
        });
    else 
        res.json({
            responsecode : response.responsecode
            ,message: SUCCESS_MESSAGE
            ,data : response.data
        });
};
