
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e){ 
    try{
            e.preventDefault();
const SearchedCity = form.elements.query.value;
// console.log(SearchedCity)
 FetchData(SearchedCity)
// console.log(weatherData.data)
form.reset();
    }catch(err) {
        console.log('error', err)
        alert('Sorry City not found')
    }
})




const FetchData= async (SearchedCity) => {
    try{
         const weatherData = await axios.get(` http://api.openweathermap.org/data/2.5/weather?q=${SearchedCity}&appid=d5ab0ef322c90afd21ca09186e190f96&units=metric`)
    // console.log(weatherData)
    addData(weatherData.data)
     
    } catch(err) {
        console.log('error', err)
        alert('Sorry City not found')
    }
  
}


const addData = async(weatherinfo) =>{

    
const cardCity = document.querySelector('.text')
const cardTemp = document.querySelector('.temp')
const cardDes = document.querySelector('.description')
const cardHum = document.querySelector('.humidity')
const cardWind = document.querySelector('.wind')
const cardIcon = document.querySelector('.icon-image')

const { description, icon} = weatherinfo.weather[0]
const { temp , humidity} = weatherinfo.main
const { speed } = weatherinfo.wind
const roundedTemp = Math.round(temp)

cardCity.innerText = `Weather in ${weatherinfo.name}`
cardTemp.innerText = `${roundedTemp}°C`
cardDes.innerText = `${description}`
cardHum.innerText = `Humidity: ${humidity}%`
cardWind.innerText = `Wind speed: ${speed}Km/h`
cardIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`

}


FetchData('madrid')
