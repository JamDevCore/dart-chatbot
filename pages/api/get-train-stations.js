import getAllStations from "../../modules/get-all-stations";
// Gets all dart stations - could be extended to pass station type



export default function handler(req, res) {
    if (req.method === 'GET') {
     const stations = getAllStations('D');
     res.send(stations)
    } else {
    res.status(400)
    }
  };