import axios from 'axios';
import { XMLParser, XMLBuilder, XMLValidator} from 'fast-xml-parser'

// Gets next two trains at specified station usin station code

const getTrainTimes = async (stationName) => {
    //  Adding a check against existing stations to ensure code is correct would be a good addition
    const stationData = await axios.get(`http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=${stationName}`)
    const parser = new XMLParser();
    const stationDataJson = await parser.parse(stationData.data);
    let trainsArray = stationDataJson.ArrayOfObjStationData.objStationData;
    // XML parser is having issues when only one station is found, creates an object instead of an array
    // With more time a solution could be found or different package used. For now we just treat it as if it 
    // found no available trains
    if(trainsArray.length) {
            
     // Turns time variable into an orderable format so we can get next departure for users
        trainsArray = trainsArray.map(train => {
            const updatedTrain = train;
    
            updatedTrain.nextDepart = parseInt(updatedTrain.Expdepart.split(':').join(''))
            return updatedTrain
        })
        // Sorts by departure time
        trainsArray = trainsArray.sort((a,b) => a.nextDepart - b.nextDepart);
        return trainsArray
        } 
        return [];

}

export default getTrainTimes;