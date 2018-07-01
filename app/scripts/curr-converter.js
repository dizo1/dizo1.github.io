function convertCurrency() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let frocurr = document.getElementById("amount").value;
    let tocurr = document.getElementById("result");
    const query = `${from}_${to}`;

    const Url = `https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=y`;
     

    fetch(Url).then(response =>  response.json())
		.then(rates => {
        const compact = Math.round(Object.values(rates) * 100) / 100;
        const result = Math.round((frocurr * compact) * 100) / 100;
       tocurr.value = result;
       return result;
    }).catch(err => console.log(err));

}
fetch('https://free.currencyconverterapi.com/api/v5/currencies')
           .then(res => res.json())
           .then( data => {
              for (let key in data.results) {
                  console.log(data.results[`${key}`]);
                  let arr = ' <select name="" id="to" >';
                  for (let key in data.results) {
                   console.log(data.results[`${key}`]);
                   arr += '<option value="' + data.results[`${key}`].id + '"> ' + data.results[`${key}`].currencyName + ' code ' + data.results[`${key}`].id + '</option>';
               }
               arr += '</select>';
               document.getElementById('from').innerHTML = arr;
               document.getElementById('to').innerHTML = arr;
                   }
              }).catch(err => console.log(err));


