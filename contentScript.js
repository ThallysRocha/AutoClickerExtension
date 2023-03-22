(()=>{
    let intervalId;
    chrome.runtime.onMessage.addListener((obj,sender,response)=>{
        const {type, interval, repetitions, neverStop,random} = obj
        //console.log(obj)
        
        let likeButton = document.getElementsByClassName("button")[3]
        //let likeButton = document.getElementsByClassName("ytd-logo")[0]
        if(likeButton){
            if(type === "START"){
                let i = 1
                let delay = 0
                likeButton.click()
                if(intervalId) clearInterval(intervalId)
                if(random){
                    delay = 10000*(Math.random())
                    delay < 500 ? delay += 500 : delay=delay 
                    function click() {
                        //console.log(delay)
                        if(!neverStop){
                            if(i < repetitions){
                                likeButton.click()
                                i++
                                clearInterval(intervalId)
                                delay = 10000*(Math.random())
                                delay < 500 ? delay += 500 : delay=delay 
                                intervalId = setInterval(click, delay) 
                            }
                            else{
                                clearInterval(intervalId)
                                intervalId = null
                            }
                        }
                        else{
                            likeButton.click()
                            clearInterval(intervalId)
                            delay = 10000*(Math.random())
                            delay < 500 ? delay += 500 : delay=delay 
                            intervalId = setInterval(click, delay)
                        }

                    }
                }
                else{
                    delay = interval + 300*(Math.random())
                    function click() {
                        if(!neverStop){
                            if(i < repetitions){
                                likeButton.click()
                                i++
                                clearInterval(intervalId)
                                delay = interval + 300*(Math.random())
                                intervalId = setInterval(click, delay) 
                            }
                            else{
                                clearInterval(intervalId)
                                intervalId = null
                            }
                        }
                        else{
                            likeButton.click()
                            clearInterval(intervalId)
                            delay = interval + 300*(Math.random())
                            intervalId = setInterval(click, delay)
                        }

                    }       
                }                      
                
                intervalId = setInterval(click, delay)
                
  
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

