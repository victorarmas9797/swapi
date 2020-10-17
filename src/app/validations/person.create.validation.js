
const Definitions = require("../definitions.js");

exports.validateInputs = (req, res, next) => {
   
    var body = req.body;

    if(!body.name) {
        return res.status(400).send({
            responsecode : Definitions.RESPONSECODE_ERROR_MISSING_INPUT_DATA
            ,message: Definitions.RESPONSECODE_ERROR_MISSING_INPUT_DATA_S
        });
    }
    next();
}