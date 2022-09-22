import axios from 'axios';
import { XMLParser, XMLBuilder, XMLValidator} from 'fast-xml-parser'

// Gets all dart stations - could be extended to pass station type

const getStations = async (type) => {
    try {
    // Error checking on 'type' would be a good addition
    const stationType = type || 'D'
    const allStations = await axios.get(`http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML_WithStationType?StationType=${stationType}`)
    const parser = new XMLParser();
    const stationJson = await parser.parse(allStations.data);
    return stationJson.ArrayOfObjStation.objStation;
    } catch (error) {
        console.log(error)
    }
}

export default getStations;