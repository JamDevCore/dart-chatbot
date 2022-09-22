import axios from 'axios';
import { XMLParser, XMLBuilder, XMLValidator} from 'fast-xml-parser'

// Gets next two trains at specified station usin station code

const getTrainTimes = async (stationName) => {
    //  Adding a check against existing stations to ensure code is correct would be a good addition
    const stationData = await axios.get(`http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=${stationName}`)
    const parser = new XMLParser();
    const stationDataJson = await parser.parse(stationData.data);
    console.log(stationDataJson)
    let trainsArray = stationDataJson.ArrayOfObjStationData.objStationData;

    // Remove deperature station from train array here e.g trains that leave and depart from same station 

     // Turns time variable into an orderable format so we can get next departure for users
     trainsArray = trainsArray.map(train => {
        const updatedTrain = train;
        console.log(updatedTrain.Expdepart)
        updatedTrain.nextDepart = parseInt(updatedTrain.Expdepart.split(':').join(''))
        return updatedTrain
    })
    // Sorts by departure time
    trainsArray = trainsArray.sort((a,b) => a.nextDepart - b.nextDepart);

    return trainsArray

}

export default getTrainTimes;