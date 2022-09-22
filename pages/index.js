import axios from 'axios'


export default function Home() {
    const fetchStations = async () => {
        console.log(document.location)
        const stations = await axios.get(`${document.location.origin}/api/get-train-stations`);
        console.log(stations)
    }

    const fetchStationData = async () => {
        console.log(document.location)
        const stationTimes = await axios.get(`${document.location.origin}/api/get-station-train-times?stationCode=${'SKILL'}`);
        console.log(stationTimes)
    }

    
    return (
        <>
        <h1>Hello World</h1>
        <button onClick={() => fetchStations()}>Fetch Stations</button>
        <button onClick={() => fetchStationData()}>Fetch Station Times</button>
        </>
    )
}