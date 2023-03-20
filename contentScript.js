(()=>{
    chrome.runtime.onMessage.addListener((obj,sender,response)=>{
        const {type, interval, times} = obj
        console.log(obj)
        if(type === "CLICK"){
            
            let likeButton = document.getElementsByClassName("button")[3]
            if(likeButton){
                let i = 0
                let id = setInterval(click, interval);
                function click() {
                    if(i < times){
                        likeButton.click()
                        i++ 
                    }
                    else{
                        clearInterval(id)
                    }                           
                    
                }
                
            }
            else{
                console.log("botão não está presente")
            }
        }
        else if(type == "NEW"){
            console.log("NEW")
        }
    })           
    
})();

