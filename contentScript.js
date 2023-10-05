(()=>{
    let intervalId;
    function changeValue(input,value){

        var nativeInputValueSetter = Object.getOwnPropertyDescriptor.bind(
          window.HTMLInputElement.prototype,
          "value"
        ).set;
        nativeInputValueSetter.call(input, value);
    
        var inputEvent = new Event("input", { bubbles: true });
        input.dispatchEvent(inputEvent);
    }
    const firstMessages = ["Olá, como você está indo? Você está fazendo algo divertido esta semana?","Olá, estranha! Então, qual é a sua história?",
    "Ei, aqui estou eu! Que outros dois desejos você pediu?","Seu nome é Wi-Fi? Porque estou sentindo uma conexão.",
    "Você é o Google? Porque acho que encontrei o que estava procurando.","Se você ganhasse um milhão de dólares, como o gastaria?",
    "Se você pudesse ter um superpoder, qual seria e por quê?","Se você pudesse ser qualquer animal, qual seria e por quê?",
    "Se você pudesse viajar no tempo, para onde iria e por quê?","Se você pudesse viver em qualquer lugar do mundo, onde seria?",
    "Se você pudesse ser qualquer pessoa por um dia, quem seria?","Se você pudesse ser um personagem de ficção, quem seria?",  
]   
    chrome.runtime.onMessage.addListener((obj,sender,response)=>{
        const {type, interval, repetitions, neverStop,random} = obj
        console.log(obj)

        let likeButton = document.getElementsByClassName("button")[3]
        if(!likeButton){
                likeButton = document.getElementsByClassName("button")[2]
        }

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

                        likeButton = document.getElementsByClassName("button")[3]
                        if(!likeButton){
                            likeButton = document.getElementsByClassName("button")[2]
                        }

                        const $ = document.querySelector.bind(document)
                        const $$ = document.querySelectorAll.bind(document)

                        let matchMessageFields = $$("textarea")
                        let matchFlag = true
                        while(matchMessageFields.length > 1){//deu match
                            if (matchFlag){
                                console.log("deu match")
                                matchFlag = false
                            }
                            /*let matchMessageField = matchMessageFields[0]
                            let sendMessageButton = document.querySelector('button[type="submit"]')
                            let msg = firstMessages[Math.floor(Math.random()*firstMessages.length)]
                            
                            Object.defineProperty($("textarea"), 'value', {
                                set: function(newValue) {
                                    var valueProp = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
                                    valueProp.set.call($("textarea"), newValue);
                            
                                    // Do some logic here
                                    console.log('setted');
                                }
                            });
                            $("textarea").value = msg
                            let rectMatchMessageField = matchMessageField.getBoundingClientRect()
                            let rectSendMessage = sendMessage.getBoundingClientRect()
                            console.log(rectMatchMessageField.x,rectMatchMessageField.y)
                            console.log(rectSendMessage.x,rectSendMessage.y)
                            mouse.setPosition(rectMatchMessageField.x, rectMatchMessageField.y)
                            mouse.click()
                            keyboard.write(msg)
                            mouse.setPosition(rectSendMessage.x, rectSendMessage.y)
                            mouse.click()*/
                        }
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
                /*let matchCard4x4 = document.querySelector("#s825018859").querySelectorAll("ul")
                matchCardMatrix4x4.forEach((matrix)=>{
                    cards = matrix.querySelectorAll("li")
                    cards.forEach((card)=>{
                        if (matrix != matchCardMatrix4x4[0] || card != matrix[0]){
                            if(card.querySelector("a").querySelector(".")){
                                card.querySelector("button").click()
                            }
                        }
                    })
                })*/

                 
            }
        }
        else{
            console.log("botão não está presente")
            
        }
    })           
    
})();

