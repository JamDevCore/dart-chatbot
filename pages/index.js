import axios from 'axios'


export default function Home() {
    const fetchStations = async () => {
        const stations = await axios.get('/api/get-train-stations');
        console.log(stations)
    }
    return (
        <>
        <h1>Hello World</h1>
        <button onClick={() => fetchStations()}>Fetch Stations</button>
        </>
    )
}