import { getActiveTabURL } from "./utils.js";


const clicking = async (type) => {
    //console.log("clicou")
    const activeTab = await getActiveTabURL()
    if(type == "STOP"){
        chrome.tabs.sendMessage(activeTab.id,{
            type: type,
        })
    }
    else{
        const interval = document.getElementById("interval")
        const unit = document.getElementById("unit")
        const repetitions = document.getElementById("repetitions")
        const neverStop = document.getElementById("neverStop")
        let intervalValue = JSON.parse(interval.value)
        let repetitionsValue = JSON.parse(repetitions.value)
        if (unit.value == "seconds") {
            intervalValue *= 1000
        }
        else if(unit.value == "minutes"){
            intervalValue *= 60000
        }    
        
        chrome.tabs.sendMessage(activeTab.id,{
            type: type,
            interval: intervalValue,
            repetitions: repetitionsValue,
            neverStop: JSON.parse(neverStop.value),
        })

    }
}
const neverStopOnChange = () => {
    const neverStop = document.getElementById("neverStop")
    const repetitions = document.getElementById("repetitions")
    if(JSON.parse(neverStop.value) == true){        
        repetitions.disabled = true
    }
    else{
        repetitions.disabled = false
    }
}
document.getElementById("neverStop").addEventListener("change", neverStopOnChange);
document.getElementById("stop").addEventListener("click",()=>{clicking("STOP")});
document.getElementById("start").addEventListener("click",()=>{clicking("START")});