import axios from 'axios';
import { XMLParser, XMLBuilder, XMLValidator} from 'fast-xml-parser'

// Gets next two trains at specified station usin station code

const getTrainTimes = async (stationCode) => {
    //  Adding a check against existing stations to ensure code is correct would be a good addition
    const stationData = await axios.get(`http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByCodeXML?StationCode=${stationCode}`)
    const parser = new XMLParser();
    const stationDataJson = await parser.parse(stationData.data);
    let trainsArray = stationDataJson.ArrayOfObjStationData.objStationData;
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