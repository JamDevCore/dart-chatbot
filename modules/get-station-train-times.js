import axios from 'axios';

// Gets next two trains at specified station usin station code

const getStationTrainTimes = async (station) => {
    //  Adding a check against existing stations would be a good addition
    const stationData = await axios.get(`http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByCodeXML?StationCode=${station}`)
    console.log(stationData);
    // Need to check for format and reorder
    return stationData;
}

export default getStationTrainTimes;