const API_KEY = "a541e128e33c81b0b23951092a8d6a43";


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
                fecha:fecha()

            }

            Object.keys(info).forEach(key => {
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
        


     