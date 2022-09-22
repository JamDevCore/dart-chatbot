import axios from 'axios';

const failedMessage = `Sorry, I don't know how to answer that`;

const chatBot = async (userMessage) => {

    try {
    if(!userMessage) return { message: failedMessage, success: false } 
    // Very inefficient would need a better solution in prod
    // Get all dart stations

    const stations = await axios.get(`${document.location.origin}/api/get-train-stations`);

    const stationArray = [];
    // Creates array of station names
    stations.data.forEach(station => {
        stationArray.push(station.StationDesc.toLowerCase());
    })

    // Splits user message and loops to find matches - we just assume they're asking for times right now
    // removes symbols and punctuation
    const message = userMessage.replace(/[^\p{L}\p{N}\p{Z}]/gu, '').trim()

    // Originally I split the user string down so you could type in a sentence and it would identify if one of the words
    // was a station and respond with the correct times. This was difficult with the two worded stations and
    // although I have a few ideas for this solution I've omitted it for now to fit within the time frame
    let requestStation;

    if(stationArray.indexOf(message.toLowerCase()) !== -1) {
        requestStation = message;
    }

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