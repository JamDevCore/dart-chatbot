import axios from 'axios';

// Gets all dart stations - could be extended to pass station type

const getAllStations = async (type) => {
    try {
    // Error checking on 'type' would be a good addition
    const stationType = type || 'D'
    const allStations = await axios.get(`http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML_WithStationType?StationType=${stationType}`)
    console.log(allStations)
    return allStations;
    } catch (error) {
        console.log(error)
    }
}

export default getAllStations;