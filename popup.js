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
        const random = document.getElementById("random")
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
            neverStop: JSON.parse(neverStop.checked),
            random: JSON.parse(random.checked),
        })

    }
}
const neverStopOnChange = () => {
    const neverStop = document.getElementById("neverStop")
    const repetitions = document.getElementById("repetitions")
    const repetitionsLabel = document.getElementById("repetitions-label")
    if(JSON.parse(neverStop.checked) == true){        
        repetitions.disabled = true
        repetitionsLabel.style = "opacity:.5"
    }
    else{
        repetitions.disabled = false
        repetitionsLabel.style = "opacity:1"
    }
}
const randomOnChange = () => {
    const random = document.getElementById("random")
    const interval = document.getElementById("interval")
    const unit = document.getElementById("unit")
    if(JSON.parse(random.checked) == true){        
        interval.disabled = true
        unit.disabled = true
        
    }
    else{
        interval.disabled = false
        unit.disabled = false
    }
}
document.getElementById("random").addEventListener("change", randomOnChange);
document.getElementById("neverStop").addEventListener("change", neverStopOnChange);
document.getElementById("stop").addEventListener("click",()=>{clicking("STOP")});
document.getElementById("start").addEventListener("click",()=>{clicking("START")});