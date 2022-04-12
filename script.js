var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=47df8d2fc95bd2276afc9a1564aea00e";

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response.status);
     
      if (response.status !== 200) {
        
        responseText.textContent = response.status;
      }
      return response.json();
    })
    .then(function (data) {
      console.log(getTemp(date))
    });
}

getApi(requestUrl); 

function getTemp(data){
    return data.current.temp;
}

document.querySelector("card-group"); {
    var getData = 
}