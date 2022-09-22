import { renameSync } from "fs";
import getTrainTimes from "../../modules/get-train-times";
// Gets all dart stations - could be extended to pass station type



export default async function  handler(req, res) {
    try {
        console.log(req.query)
    if (req.method === 'GET') {
     const stations = await getTrainTimes(req.query.stationCode);
     console.log(stations)
     return res.send(stations)
    } else {
        res.status(404)
    }
    } catch (err) {
        console.log(err)
    }
  };