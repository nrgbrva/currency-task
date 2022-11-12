///renglerin ve valyutanin secilmesi
let firstvalue;
let secondvalue;
let unitStart = document.querySelectorAll('.primary .box');
unitStart.forEach(element => {
    element.addEventListener('click', function () {
        unitStart.forEach(element => element.classList.remove('first'))
        element.classList.toggle("first");
        firstvalue = document.querySelector('.primary>.first')
        firstvalue = firstvalue.innerText
    }
    )
});
let rating;
let unitEnd = document.querySelectorAll('.secondary .box');
unitEnd.forEach(element => {
    element.addEventListener('click', function () {
        unitEnd.forEach(element => element.classList.remove('first'))
        element.classList.toggle("first");
        secondvalue = document.querySelector('.secondary>.first')
        secondvalue = secondvalue.innerText
        let lastAmount=document.querySelector('.ending h2')
        fetch(`https://api.exchangerate.host/latest?base=${firstvalue}&symbols=${secondvalue} `)
            .then(x => x.json()).then(function(x){
                 rating=x.rates
                 rating=rating[`${secondvalue}`]
                console.log(x)
                console.log(rating[`${secondvalue}`])
                console.log(typeof rating)
                lastAmount.innerHTML=rating

            })
    })

});


