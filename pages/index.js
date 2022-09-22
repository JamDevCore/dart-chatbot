import axios from 'axios'
import {useState, useEffect, useRef} from 'react'
import chatBot from '../modules/chat-bot';
import Message from '../components/message';
import {capitalise} from '../utilities/capitalise';
import {getDefaultMessage} from '../utilities/get-default-message';






export default function Home() {
    // Ref for scroll
    const bottomRef = useRef(null);

    // Initial message log always has default message
    const [messageLog, setMessageLog] = useState(getDefaultMessage())

    // Ref for scrolling to lowest message
    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'auto'});
    },[messageLog])

    // Submits user messages
    const submitMessage = async (e, selectedStation) => {
        // Prevent page reload
        if(e) {
         e.preventDefault()
        }
         const date = new Date();     // Get date once rather than multiple
         // We either pass the selected station or if its not available as a variable, take it from the textbox
         const message = selectedStation || document.querySelector('#chat-box').value;
         if(!message) return;
         let currentMessageLog = messageLog;
          currentMessageLog = currentMessageLog.concat({
            message,
            time: `${date.getHours()}:${date.getMinutes()}`,
            type: 'user',
         })
         await setMessageLog(currentMessageLog)
         // Could be expanded with a loading state
         // Routes to chatbot
         const result = await chatBot(message);
         if(!result.success) {
            currentMessageLog=  currentMessageLog.concat({
                message: result.message,
                time: `${date.getHours()}:${date.getMinutes()}`,
                type: 'bot',
             })
            await setMessageLog(currentMessageLog)
            return;
         }
         const stationData = await fetchStationData(result.station);
         await setQueryReponse(stationData, result.station, currentMessageLog)
        }

    // Fetch list of stations if requested by user

    const fetchStations = async () => {
        const stations = await axios.get(`${document.location.origin}/api/get-train-stations`);
        const allMessages = [];
        stations.data.forEach(station => {
            allMessages.push({
                message: station.StationDesc,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                type: 'bot',
                isButton: true,
                isAllStations: false,
            })
        })
        setMessageLog(messageLog.concat(allMessages))
    }

    // Fetches station data (train times) based on user input - kept this in the document to allow for loading states in the future
    const fetchStationData = async (stationName) => {
        const stationTimes = await axios.get(`${document.location.origin}/api/get-station-train-times?stationName=${stationName}`);
        return stationTimes.data;
    }

    // Set response for train successful queries
    const setQueryReponse = async (stationData, station, currentMessageLog) => {
     if(stationData.length >= 2) {
        const trainOne = stationData[0];
        const trainTwo = stationData[1];
        const message = `The next two trains to arrive at ${capitalise(station)} are the ${trainOne.Exparrival} from ${trainOne.Origin} and the ${trainTwo.Exparrival} from ${trainTwo.Origin}`;
        currentMessageLog = currentMessageLog.concat({
            message,
            time: `${new Date().getHours()}:${new Date().getMinutes()}`,
            type: 'bot',
        });
        } else {
            const message = `There are no trains departing from ${capitalise(station)} in the next 90 minutes`;
            currentMessageLog = currentMessageLog.concat({
                message,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                type: 'bot',
            });
        }
      await setMessageLog(currentMessageLog)
    }
    return (
        <>
        <div>

        <div className="h-screen bg-gray-300">
            <div className="flex justify-center items-center h-screen ">
            <div className="w-80 h-96 bg-white rounded shadow-2xl">
                <nav className="w-full h-10 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
                <div className="flex justify-center items-center"> <span className="text-xs font-medium text-gray-300 ml-1">DART train bot</span> </div>
                <div className="flex items-center"></div>
                </nav>
                <div className="overflow-auto px-1 py-1" style={{height: '19rem'}} id="" key={messageLog.length}>
                <div className="flex items-center pr-10" key={messageLog.length} />
                    {messageLog.map((message, i) => {
            
                        return <Message key={i} message={message.message} type={message.type} time={message.time} isButton={message.isButton} isAllStations={message.isAllStations} fetchStations={fetchStations} submitMessage={submitMessage} />
                    })}
                <div ref={bottomRef}> </div>
                </div>
                <form onSubmit={(e) => submitMessage(e)}>
                <div className="flex justify-between items-center p-1 ">
        
                <div className="relative"> <i className="mdi mdi-emoticon-excited-outline absolute top-1 left-1 text-gray-400" style={{fontSize: '17px !important', fontWeight: 'bold'}} /> 
                <input id="chat-box" type="text" className="rounded-full pl-6 pr-12 py-2 focus:outline-none h-auto placeholder-gray-100 bg-gray-900 text-white" style={{fontSize: '11px', width: '250px'}} placeholder="Type a message..."/> 
                </div>

                <div className=" rounded-full  text-center items-center flex justify-center"> 
                <button type="submit" className=" px-2 rounded-full text-center items-center flex justify-center focus:outline-none bg-blue-300 hover:bg-gray-900 text-white">Send</button>
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