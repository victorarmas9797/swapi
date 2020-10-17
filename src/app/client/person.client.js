
const ClientDefinitions = require("./client.definitions.js");
const axios = require("axios");
const Definitions = require("../definitions.js");

exports.findById = async (peopleId) => {
    
    try {
        const result = await axios.get(ClientDefinitions.URL_BASE + ClientDefinitions.URL_FIND_PEOPLE_BY_ID + peopleId);
        return {responsecode : Definitions.RESPONSECODE_OK, data: result.data};
    } catch (error) {
        return { responsecode : Definitions.RESPONSECODE_ERROR_RESOURCE_NOT_FOUND, message: Definitions.RESPONSECODE_ERROR_RESOURCE_NOT_FOUND_S }
    }
    
};

