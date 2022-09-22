import React from 'react';

const message = ({ type, message, time, fetchStations, isButton, isAllStations, submitMessage }) => {
    // Two different message appearances - one for user and one for the bot
    // Additional type included for the Fetch Stations button
    if(type === 'user') {
    return (
        <div className="flex justify-end pt-2 pl-10"> <span className="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end flex justify-end " style={{fontSize: '10px'}}>{message}<span className="text-gray-400 pl-1" style={{fontSize: '8px'}}>{time}</span></span> </div>
    )
    }

    return isButton ? (
        <button onClick={() =>{
            if(isAllStations) {
                return fetchStations(); 
            }
            return submitMessage(null, message)
        }} className="flex items-center pr-10 mt-1">
        <span className="flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs p-1 font-normal rounded-sm px-1 items-end" style={{fontSize: '10px'}}>
            {message}
            <span className="text-gray-400 pl-1" style={{fontSize: '8px'}}>
                {time}
            </span>
        </span>
        </button>
    ) : (
        <div className="flex items-center pr-10 mt-1">
            <span className="flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs p-1 font-normal rounded-sm px-1 items-end" style={{fontSize: '10px'}}>
                {message}
                <span className="text-gray-400 pl-1" style={{fontSize: '8px'}}>
                    {time}
                 </span>
             </span> 
        </div>
    )
}

export default message;