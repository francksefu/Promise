async function pluie(x) {
    const resp = await fetch(x);
    const data = await resp.json();
    console.log(data);
   
}
const key = 'b7929a0c01b907c1daf00c17e6b06902';
const url = 'https://financialmodelingprep.com/api/v3/balance-sheet-statement/AAPL?apikey='+key+'&limit=120';
pluie(url);