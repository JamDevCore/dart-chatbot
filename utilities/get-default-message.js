export const getDefaultMessage = (fetchStations) => { 
    // Could update with setTimeout to delay individual messages and add typing animation for feedback
    return [
        { message:'To find out the next trains arriving at your destination, simply type in the name of the station', user: 'bot', time: `${new Date().getHours()}:${new Date().getMinutes()}`},
        { message:`For a list of DART stations simply click here`, user: 'bot', isAllStations:true, time: `${new Date().getHours()}:${new Date().getMinutes()}`, isButton: true , fetchStations, }
]
}