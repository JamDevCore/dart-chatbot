import getStationTrainTimes from "../../modules/get-all-stations";
// Gets all dart stations - could be extended to pass station type



export default function handler(req, res) {
    try {
    if (req.method === 'GET') {
     const stations = getStationTrainTimes(req.stationId);
     res.send(stations)
    } else {

    }
  };