let quotesDiv = document.getElementById('quotes')
fetch('https://api.kanye.rest')
.then(res => res.json())
.then( data => {
    console.log(data)
})
//.then(res => {
//    quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
//})
