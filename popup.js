import { getActiveTabURL } from "./utils.js";


const startClicking = async () => {
    console.log("clicou")
    
    const interval = 3000
    const times = 5
    const activeTab = await getActiveTabURL()
    chrome.tabs.sendMessage(activeTab.id,{
        type: "CLICK",
        interval: interval,
        times: times,
    })
    console.log("enviou",activeTab.id,{
        type: "CLICK",
        interval: interval,
        times: times,
    })
}
document.getElementById("myButton").addEventListener("click", startClicking);