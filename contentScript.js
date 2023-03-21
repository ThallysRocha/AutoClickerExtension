(()=>{
    let intervalId;
    chrome.runtime.onMessage.addListener((obj,sender,response)=>{
        const {type, interval, repetitions, neverStop} = obj
        //console.log(obj)
        
        let likeButton = document.getElementsByClassName("button")[3]
        //let likeButton = document.getElementsByClassName("ytd-logo")[0]
        if(likeButton){
            if(type === "START"){
                let i = 0
                if(intervalId) clearInterval(intervalId)
                let delay = interval + 300*(Math.random())
                intervalId = setInterval(click, delay)
                function click() {
                    if(!neverStop){
                        if(i < repetitions){
                            likeButton.click()
                            i++ 
                        }
                        else{
                            clearInterval(intervalId)
                            intervalId = null
                        }
                    }
                    else{
                        likeButton.click()
                    }
                    
                }                
            }
            else if (type === "STOP"){
                if(intervalId){
                    clearInterval(intervalId)
                    intervalId = null   
                }
                 
            }
        }
        else{
            console.log("botão não está presente")
        }
    })           
    
})();

