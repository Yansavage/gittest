

let xhttp = new XMLHttpRequest();
function main (){

    xhttp.onreadystatechange = function(){
        if  (this.readyState == 4 && this.status == 200){
            gorod(JSON.parse(this.responseText))
        }
    }
    

    xhttp.open("GET", 'http://ip-api.com/json', true);
    xhttp.send();
    
}

function gorod (data){
    xhttp.onreadystatechange = function(){
        if  (this.readyState == 4 && this.status == 200){
            print(JSON.parse(this.responseText))
        }
        else {
            console.log("ERROR!")
        }
    }
    

    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=a6df6baed8801752562b425b2a940b43`, true);
    xhttp.send();

}


function print (data){
    console.log('huyaka')
    console.log(Math.round(data.main.temp - 273))
    xhttp.open("GET", "https://api.telegram.org/bot6053995115:AAHA0y03EQc27RVOSFAjW2-DvDASSVXgKmk/sendMessage?chat_id=-1001681115484&text=" + "Your tempreture: " +  Math.round(data.main.temp - 273), true) 
    xhttp.send()
    console.log("huyi")
}

main()
