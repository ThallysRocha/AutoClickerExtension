(()=>{
    let intervalId;
    chrome.runtime.onMessage.addListener((obj,sender,response)=>{
        const {type, interval, repetittions, neverStop} = obj
        //console.log(obj)
        
        let likeButton = document.getElementsByClassName("button")[3]
        if(likeButton){
            if(type === "START"){
                let i = 0
                if(intervalId) clearInterval(intervalId)

                intervalId = setInterval(click, interval)
                function click() {
                    if(!neverStop){
                        if(i < repetittions){
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

