const API_KEY = "a541e128e33c81b0b23951092a8d6a43";
const fondo = document.querySelector("body");



//check if geolocation is available devuelve la posicion de donde estoy actualmente

    function fetchClima(position){

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

            fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
            .then(respuesta=>respuesta.json())
            .then( data =>  {traerInfo(data); 
            }
            )
    }
    
    const onLoad = () => {
        navigator.geolocation.getCurrentPosition(fetchClima);
        
       }
       

      //if (navigator.geolocation) { //check if geolocation is available
      // navigator.geolocation.getCurrentPosition(position => console.log(position)); 
       //esta funcion recibe en los argumentos otra funcion con la data de la posicion
       
        //}
        const fecha = ()=>{
            let f = new Date();
            return f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
            
        }
        
        const traerInfo = data =>{
            console.log(data);
            const info = {
                location:data.name,
                description:data.weather[0].description,
                humidity:data.main.humidity,
                pressure:data.main.pressure,
                temperature:data.main.temp,
                fecha:fecha(),
                hora:hora(),
                img:data.weather[0].icon

            }
            const estado=data.weather[0].icon
            Object.keys(info).forEach(key => {

                if(key == "img"){
                   if(estado.includes("d")) {
                       switch(data.weather[0].description){
                        case "cielo claro":
                        fondo.style.backgroundImage="URL('./img/sol.jpg')";
                        break;
                        case "pocas nubes":
                        fondo.style.backgroundImage="URL('./img/pocasNubesDia.jpg')";
                        break;
                        case "lluvia":
                        fondo.style.backgroundImage="URL('./img/lluviaDia.jpg')";
                        break;
                        case "nubes dispersas":
                            fondo.style.backgroundImage="URL('./img/nubesDispersasDia.jpg')";
                            break;
                       }
                            
                    }else if(estado.includes("n")){
                        switch(data.weather[0].description){
                            case "cielo claro":
                            fondo.style.backgroundImage="URL('./img/noche.jpg')";
                            break;
                            case "pocas nubes":
                            fondo.style.backgroundImage="URL('./img/pocasNubesNoche.jpg')";
                            break;
                            case "lluvia":
                            fondo.style.backgroundImage="URL('./img/lluviaNoche.jpg')";
                            break;
                            case "nubes dispersas":
                                fondo.style.backgroundImage="URL('./img/nubesDispersasNoche.jpg')";
                                break;
                              
                        }
                    }else{
                        switch(data.weather[0].description){
                            case "tormenta":
                            fondo.style.backgroundImage="URL('./img/noche.jpg')";
                            break;
                            case "nieve":
                            fondo.style.backgroundImage="URL('./img/pocasNubesNoche.jpg')";
                            break;
                            case "aguacero":
                            fondo.style.backgroundImage="URL('./img/lluviaNoche.jpg')";
                            break;
                            case "neblina":
                                fondo.style.backgroundImage="URL('./img/nubesDispersasNoche.jpg')";
                                break;
                            case "nubes rotas":
                            fondo.style.backgroundImage="URL('./img/nubesDispersasNoche.jpg')";
                            break;
                           }
                    }
                   
                       


                document.getElementById(key).setAttribute("src", `http://openweathermap.org/img/wn/${info[key]}.png`);

               



                }



               
                document.getElementById(key).textContent = info[key];
                
            
            });

            mostrarInfo();
        }
       
const mostrarInfo = () =>{
    let container = document.getElementById("container");
    let spinner = document.getElementById("spinner")

    spinner.style.display ="none";
    container.style.display ="flex";
}
        

function mostrarAmanece(){



let unix_timestamp = 1644744371
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);
return formattedTime
}

function hora(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
minuto = momentoActual.getMinutes()
segundo = momentoActual.getSeconds()
var horaImprimible = hora + " : " + minuto + " : " + segundo
return horaImprimible
}