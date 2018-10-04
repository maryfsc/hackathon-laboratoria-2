var dropCity = $("#estado");
var searchCity = $("#searchCity");
var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

dropCity.change(function () {
  var city = $("#estado").val();
  if (city !== "none"){
    getPet(city);
  }
});

searchCity.click(function () {
  var textCity = $("#cidade").val();
  if (textCity !== ""){
    getPet(textCity);
  }
});

function getPet(city) {
  var cleanDiv = document.getElementById("prediction");
  cleanDiv.innerHTML = "";
  var setId = `https://api.openweathermap.org/data/2.5/forecast?q=${city},br&APPID=591a284e047dc58563907ef2aef2fb92&units=metric`;
  return fetch(setId)
  .then(response => response.json())
  .then(data => getweather(data.list));
}

function getweather(data) {
  data.reduce(function(lastDay, currentDay, index) {
    var dateCurrentDay = new Date(currentDay.dt_txt);
    var hourCurrentDay = dateCurrentDay.getHours();
    var dayCurrent = dateCurrentDay.getDate();
    var monthCurrentDay = dateCurrentDay.getMonth();
    var tempCurrentDay = Math.round(currentDay.main.temp);
    var dateLastDay = new Date(lastDay.dt_txt);
    var hourLastDay = dateLastDay.getHours();
    var dayLast = dateLastDay.getDate();
    var monthLastDay = dateLastDay.getMonth();
    var tempLastDay =  Math.round(lastDay.main.temp);

    if (index == 1) {
      $("#prediction").append(`
        <div class="card w-75 amarelo-escuro">
          <div class="card-body text-white">
            <h2 class="card-title">${tempLastDay} °C</h2>
            <h5 class="card-text">${dayLast} de ${months[monthLastDay]}</h5>
          </div>
        </div>         
      `);
    }

    if (dayCurrent !== dayLast) {
      $("#prediction").append(`
        <div class="card w-75 amarelo-claro" >
          <div class="card-body">
            <h5 class="card-title">${tempCurrentDay} °C</h5>
            <p class="card-text">${dayCurrent} de ${months[monthCurrentDay]}</p>
          </div>
        </div>
      `);
    } 
    return currentDay;
  });
}