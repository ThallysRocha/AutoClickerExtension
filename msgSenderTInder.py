import pyautogui
import time
import keyboard
def escreverMensagem(msg, interval = 0.0):
    print(pyautogui.position())
    pyautogui.moveTo(1100, 740)#posição da área de texto em tela cheia
    pyautogui.click(pyautogui.position())
    pyautogui.write(msg, interval)
def enviarMensagem():
    pyautogui.moveTo(1350, 740) #posição do botão em tela cheia
    pyautogui.click(pyautogui.position())
def escolherDelay(betweenClicks):
    try:
        while float(betweenClicks) < 0:
            betweenClicks = pyautogui.prompt('Escolha um valor válido')
            return escolherDelay(betweenClicks)
        return betweenClicks
    except: 
       betweenClicks = pyautogui.prompt('Escolha um valor válido')
       return escolherDelay(betweenClicks)
    
def clicar(hotkey):
    msg = 'Ola! Sou aluno da UFPE e este é um teste para um projeto, nenhuma informação sua será utilizada, por favor não denuncie, obrigado!'
    time.sleep(.5)
    escreverMensagem(msg)
    enviarMensagem()
    startTime = time.time()
    while keyboard.is_pressed(hotkey) == False:
        if keyboard.is_pressed('esc') == True:
            return
        currentTime = time.time()
        if (currentTime - startTime >= betweenClicks):
            escreverMensagem(msg)
            enviarMensagem()
            startTime = time.time()
    print("Parou...")        
    time.sleep(.5)
    return

betweenClicks = pyautogui.confirm('Escolha o espaço entre cliques em segundos', buttons=['1', '2', '3','4','5','personalizado...'])
if betweenClicks == 'personalizado...' or betweenClicks == None:
    betweenClicks = escolherDelay(betweenClicks)
pyautogui.alert("Escolha a tecla para ativar/desativar clique.\n (Pressione uma tecla após o 'OK' ")
hotkey = keyboard.read_key()
pyautogui.alert("Pronto!\nPara começar feche o alerta e clique '"+hotkey+"'")
betweenClicks = float(betweenClicks)

while keyboard.is_pressed('esc') == False:
    if keyboard.is_pressed(hotkey) == True:        
        print("Clicando...")
        
        clicar(hotkey)       
print("Fechou...") 
pyautogui.alert("Programa fechado.")
