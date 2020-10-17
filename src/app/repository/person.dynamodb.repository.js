
const Connection = require("../database/connection.js");
const DbConfig = require("../config/database.config.js");
const Definitions = require("../definitions.js");

exports.create = async (person) => {

  const params = {
    TableName: DbConfig.PEOPLE_TABLE,
    Item: person,
  };

  try {
    const error = await Connection.put(params).promise();
    console.log({error1 : error} );

    if(!error ||  (error && Object.entries(error).length === 0 ))
      return {responsecode : Definitions.RESPONSECODE_OK, data: person};
      
    return { responsecode: Definitions.RESPONSECODE_ERROR_NOT_CREATED, message: error };
  } catch (error) {
    console.log({error2 : error} );
    return { responsecode: Definitions.RESPONSECODE_ERROR_NOT_CREATED, message: error };
  }

}

exports.findById = async (id) => {

  const params = {
    TableName: DbConfig.PEOPLE_TABLE,
    Key: {
      peopleId: id,
    },
  }

  try {
    var result = await Connection.get(params).promise();

    if(result && result.Item)
      return {responsecode : Definitions.RESPONSECODE_OK, data: result.Item} ;
    
    return { responsecode : Definitions.RESPONSECODE_ERROR_RESOURCE_NOT_FOUND , message: Definitions.RESPONSECODE_ERROR_RESOURCE_NOT_FOUND_S} ;
  } catch (error) {
    return { responsecode : Definitions.RESPONSECODE_ERROR_RESOURCE_NOT_FOUND , message: Definitions.RESPONSECODE_ERROR_RESOURCE_NOT_FOUND_S} ;
  }
 

}
