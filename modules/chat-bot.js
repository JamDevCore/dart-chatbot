import axios from 'axios';

const failedMessage = `Sorry, I don't know how to answer that`;

const chatBot = async (userMessage) => {

    try {
    if(!userMessage) return { message: failedMessage, success: false } 
    // Very inefficient would need a better solution in prod
    // Get all dart stations
    console.log(document.location.origin)
    const stations = await axios.get(`${document.location.origin}/api/get-train-stations`);

    const stationArray = [];
    // Creates array of station names
    stations.data.forEach(station => {
        stationArray.push(station.StationDesc.toLowerCase());
    })
    console.log('stationArray', stationArray)
    // Splits user message and loops to find matches - we just assume they're asking for times right now
    // removes symbols and punctuation
    const message = userMessage.replace(/[^\p{L}\p{N}\p{Z}]/gu, '').split(' ')
    console.log(message)
    // Will only retrieve last station asked if multiple stations input
    let requestStation;
    console.log(message)
    message.forEach(message => {
        if(stationArray.indexOf(message.toLowerCase()) !== -1) {
            requestStation = message;
        }
    })
    console.log(requestStation)
    if(requestStation)  {
        return { message: `Retrieving next departure times for ${requestStation}`, success: true, station: requestStation } 
    }
    return { message: failedMessage, success: false } 
    } catch (err) {
        console.log(err)
        return { message: failedMessage, success: false } 
    }
}

export default chatBot;