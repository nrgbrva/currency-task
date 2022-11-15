//// boxes coloring
let firstvalue;
let secondvalue;
let rating;
let rating2;
let unitStart = document.querySelectorAll('.primary .box');
firstvalue = document.querySelector('.primary .first')
secondvalue = document.querySelector('.secondary .first')
let info1 = document.querySelector('#news1');
let info2 = document.querySelector('#news2');
firstAmount = document.querySelector('.starting input');
lastAmount = document.querySelector('.ending input');
unitStart.forEach(element => {
    element.addEventListener('click', function () {
        unitStart.forEach(element => element.classList.remove('first'))
        element.classList.toggle("first");
        getInfo();
    }
    )
});
let unitEnd = document.querySelectorAll('.secondary .box');
unitEnd.forEach(element => {
    element.addEventListener('click', function () {
        unitEnd.forEach(element => element.classList.remove('first'))
        element.classList.toggle("first");
        getInfo();
    })

});//////
/// get rates and edit info
function getInfo() {
    firstvalue = document.querySelector('.primary .first')
    secondvalue = document.querySelector('.secondary .first')
    fetch(`https://api.exchangerate.host/latest?base=${firstvalue.textContent}&symbols=${secondvalue.textContent} `)
        .then(x => x.json()).then(function (x) {
            firstvalue = document.querySelector('.primary .first')
            secondvalue = document.querySelector('.secondary .first')
            rating = x.rates[`${firstvalue.innerText}`]
            rating2 = x.rates[`${secondvalue.innerText}`]
            info1.innerText = `1 ${firstvalue.textContent} = ${rating2}${secondvalue.textContent}`
            info2.innerText = `1 ${secondvalue.textContent} = ${1 / rating2}${firstvalue.textContent}`
            firstAmount.addEventListener('keyup', function () {
                let val1 = firstAmount.value;
                let val2 = val1 *  rating2
                lastAmount.value = val2
            })
            lastAmount.addEventListener('keyup', function () {
                let val1 = lastAmount.value;
                let val2 = val1 / rating2
                firstAmount.value = val2
            })
        })
}
getInfo()
unitStart.forEach(element => {
    element.addEventListener('click', function () {
        console.log(firstvalue)
        fetch(`https://api.exchangerate.host/latest?base=${firstvalue.textContent}&symbols=${secondvalue.textContent} `)
            .then(x => x.json()).then(function (x) {
                firstvalue = document.querySelector('.primary .first')
                secondvalue = document.querySelector('.secondary .first')
                rating = x.rates[`${firstvalue.innerText}`]
                rating2 = x.rates[`${secondvalue.innerText}`]
                firstAmount = document.querySelector('.starting input');
                lastAmount = document.querySelector('.ending input');
                let val1 = firstAmount.value;
                let val2 = val1 *  rating2
                lastAmount.value = val2
            })
    }
    )
});
unitEnd.forEach(element => {
    element.addEventListener('click', function () {
        console.log(rating2)
        fetch(`https://api.exchangerate.host/latest?base=${firstvalue.textContent}&symbols=${secondvalue.textContent} `)
            .then(x => x.json()).then(function (x) {
                firstvalue = document.querySelector('.primary .first')
                secondvalue = document.querySelector('.secondary .first')

                rating = x.rates[`${firstvalue.innerText}`]
                rating2 = x.rates[`${secondvalue.innerText}`]
                firstAmount = document.querySelector('.starting input');
                lastAmount = document.querySelector('.ending input');
                let val1 = lastAmount.value;
                let val2 = val1 / rating2
                firstAmount.value = val2
            })
    })
});