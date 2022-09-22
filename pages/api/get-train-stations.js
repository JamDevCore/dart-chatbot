import getStations from "../../modules/get-stations";
// Gets all dart stations - could be extended to pass station type



export default async function  handler(req, res) {
    try {
        if (req.method === 'GET') {
        const stations = await getStations(req.stationId);
        return res.send(stations)
        } else {
            res.status(404)
            }
        } catch(err) {
            res.status(500)
        }
  };