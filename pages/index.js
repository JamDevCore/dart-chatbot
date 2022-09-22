import axios from 'axios'
import {useState, useEffect} from 'react'
import chatBot from '../modules/chat-bot';
import Message from '../components/Message';

const capitalise = (word) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
}

export default function Home() {
    const [messageLog, setMessageLog] = useState([
        { message:'To find out the next trains arriving at your destination, simply type in the name of the station', user: 'bot', time: `${new Date().getHours()}:${new Date().getMinutes()}`}
    ])
    // 
    const fetchStations = async () => {
        console.log(document.location)
        const stations = await axios.get(`${document.location.origin}/api/get-train-stations`);
        console.log(stations)
    }

    const fetchStationData = async (stationName) => {
        console.log(document.location)
        const stationTimes = await axios.get(`${document.location.origin}/api/get-station-train-times?stationName=${stationName}`);
        console.log(stationTimes)
        return stationTimes.data;
    }

    const respond = (stationData, station) => {
      const trainOne = stationData[0];
      const trainTwo = stationData[1];
      const message = `The next two trains to arrive at ${capitalise(station)} are the ${trainOne.Exparrival} from ${trainOne.Origin} and the ${trainTwo.Exparrival} from ${trainTwo.Origin}`;
      setMessageLog(messageLog.concat({
        message,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        type: 'bot',
      }));
    }

    const submitMessage = async (e) => {

     e.preventDefault()
     const message = document.querySelector('#chat-box').value;
     const date = new Date();     // Get the minutes (0-59)
     await setMessageLog(messageLog.concat({
        message,
        time: `${date.getHours()}:${date.getMinutes()}`,
        type: 'user',
     }))
     console.log(message)
     // set loading
     const result = await chatBot(message);
     if(!result.success) {
        await setMessageLog(messageLog.concat({
            message: result.message,
            time: `${date.getHours()}:${date.getMinutes()}`,
            type: 'bot',
         }))
        return;
     }

     const stationData = await fetchStationData(result.station);
     console.log(stationData)
     respond(stationData, result.station)
    }
    useEffect(() => {
        console.log(messageLog)
    }, [messageLog])
    return (
        <>
        <div>

                <div className="h-screen bg-gray-300">
        <div className="flex justify-center items-center h-screen ">
          <div className="w-80 h-96 bg-white rounded shadow-2xl">
            <nav className="w-full h-10 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
              <div className="flex justify-center items-center"> <i className="mdi mdi-arrow-left font-normal text-gray-300 ml-1" />  <span className="text-xs font-medium text-gray-300 ml-1">DART train bot</span> </div>
              <div className="flex items-center"> <i className="mdi mdi-video text-gray-300 mr-4" /> <i className="mdi mdi-phone text-gray-300 mr-2" /> <i className="mdi mdi-dots-vertical text-gray-300 mr-2" /> </div>
            </nav>
            <div className="overflow-auto px-1 py-1" style={{height: '19rem'}} id="journal-scroll" key={messageLog.length}>
              <div className="flex items-center pr-10" key={messageLog.length} />
                {messageLog.map(message => {
                    return <Message message={message.message} type={message.type} time={message.time} />
                })}
              <div className=" " id="chatmsg"> </div>
            </div>
            <form onSubmit={(e) => submitMessage(e)}>
            <div className="flex justify-between items-center p-1 ">
    
              <div className="relative"> <i className="mdi mdi-emoticon-excited-outline absolute top-1 left-1 text-gray-400" style={{fontSize: '17px !important', fontWeight: 'bold'}} /> 
              <input id="chat-box" type="text" className="rounded-full pl-6 pr-12 py-2 focus:outline-none h-auto placeholder-gray-100 bg-gray-900 text-white" style={{fontSize: '11px', width: '250px'}} placeholder="Type a message..."/> 
               </div>

              <div className=" px-2 rounded-full bg-blue-300 text-center items-center flex justify-center"> 
              <button type="submit" className="rounded-full text-center items-center flex justify-center focus:outline-none hover:bg-gray-900 hover:text-white">Send</button>
             </div>
         
            </div>
            </form> 
          </div>
        </div>
      </div>
        </div>
        </>
    )
}