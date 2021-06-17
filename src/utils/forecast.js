const request = require('request')
const forecast= (latitude,longitude,callback)=>{
    const url ='http://api.weatherstack.com/current?access_key=de859d8bf454a117cecadd43a3dd9709&query='+latitude+','+longitude+''
request({url,json: true},(error,{body}={})=>{
    if(error){
        callback('Unable to connect to weather service!',undefined)
    }else if (body.error) {
        callback('Unable to find location.Try another search.',undefined)
    }
    else{
        callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+
        ' degrees out. It feels like '+body.current.feelslike+' degrees out.The humidity is '+body.current.humidity+'%.')
    }
})

}
module.exports =forecast