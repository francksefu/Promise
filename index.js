const search = document.querySelector('#search');
const input = document.querySelector('#input');
const putHere = document.querySelector('#put-here');

async function wheather(data) {
  const ret = '';
  try {
    if(putHere.textContent ==="") {
        putHere.innerHTML = '<h1>Loading</h1>';
    }
    const req = await fetch('https://api.weatherapi.com/v1/current.json?key=d65fd1a931d94b409f6220219233105&q='+data);
    const req2 = await req.json();
    putHere.innerHTML = `
    <div class="row mt-3 text-secondary">
        <p class="text-center">${req2.current.condition.text}</p>
        <div class="col-md-4">
            <span>Name of city : </span><span>${req2.location.name}</span><br><br>
            <span>region : </span><span>${req2.location.region}</span><br><br>
            <span>latitude : </span><span>${req2.location.lat}</span><br><br>
            <span>longitude : </span><span>${req2.location.long}</span><br><br>
            <span>time-zone : </span><span>${req2.location.tz_id}</span><br><br>
            <span>local-time : </span><span>${req2.location.localtime}</span>
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-4">
            <span>pressure mb : </span><span>${req2.current.pressure_mb}</span><br><br>
            <span>pressure in : </span><span>${req2.current.pressure_in}</span><br><br>
            <span>precipitation mm : </span><span>${req2.current.precip_mm}</span><br><br>
            <span>precipitation : </span><span>${req2.current.precip_in}</span><br><br>
            <span>humidity : </span><span>${req2.current.humidity}</span><br><br>
            <span>cloud : </span><span>${req2.current.cloud}</span><br><br>
            <span>temperature : </span><span>${req2.current.feelslike_c}</span><br><br>
        </div>
    </div>
    <div class="w-75 mx-auto d-bloc">
        <img src="${req2.current.condition.icon}" class="img-fluid w-25 rounded" alt="image">
    </div>
    `
  } catch(err) {
    console.log(err)
  }
  return ret;
}

search.addEventListener('click', () => {
  if(input.value !== "") {
    wheather(input.value);
   // input.value = "";
  }
})
