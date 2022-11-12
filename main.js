///renglerin ve valyutanin secilmesi
let firstvalue;
let secondvalue;
let firstAmount;
let unitStart = document.querySelectorAll('.primary .box');
unitStart.forEach(element => {
    element.addEventListener('click', function () {
        unitStart.forEach(element => element.classList.remove('first'))
        element.classList.toggle("first");
        firstvalue = document.querySelector('.primary>.first')
        firstvalue = firstvalue.innerText
        firstAmount = document.querySelector('.starting h2')
       
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
        let lastAmount = document.querySelector('.ending h2')
        fetch(`https://api.exchangerate.host/latest?base=${firstvalue}&symbols=${secondvalue} `)
            .then(x => x.json()).then(function (x) {
                let info2=document.querySelector('#news2');
                let info1=document.querySelector('#news1');
                console.log(Object.values(x.rates)[0])
                rating = Object.values(x.rates)[0]
                console.log(rating);
                firstAmount = +firstAmount.innerText;
                info2.innerText=`1${secondvalue} = ${rating}${firstvalue}`
                info1.innerText=`1${firstvalue} = ${rating}${secondvalue}`
                let sum = rating * firstAmount;
                console.log(sum)
                lastAmount.textContent=sum
            })
    })

});


