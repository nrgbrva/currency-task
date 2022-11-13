let firstvalue;
let secondvalue;
let firstAmount;
let lastAmount;
let sum;
let rating;
let info2 = document.querySelector('#news2');
let info1 = document.querySelector('#news1');
//// select unit
let unitStart = document.querySelectorAll('.primary .box');
unitStart.forEach(element => {
    element.addEventListener('click', function () {
        unitStart.forEach(element => element.classList.remove('first'))
        element.classList.toggle("first");
        firstvalue = document.querySelector('.primary>.first')
        firstvalue = firstvalue.innerText
        editInfo();
    }
    )
});
let unitEnd = document.querySelectorAll('.secondary .box');
unitEnd.forEach(element => {
    element.addEventListener('click', function () {
        unitEnd.forEach(element => element.classList.remove('first'))
        element.classList.toggle("first");
        secondvalue = document.querySelector('.secondary>.first')
        secondvalue = secondvalue.innerText
        editInfo()
    })

});
/////////////////////////
/// edit info box
function editInfo(){
    getInfo()
    info2.innerText = `1 ${secondvalue} = ${rating}${firstvalue}`
    info1.innerText = `1 ${firstvalue} = ${rating}${secondvalue}`
}
///////
///// get rate info
function getInfo(){
    fetch(`https://api.exchangerate.host/latest?base=${firstvalue}&symbols=${secondvalue} `)
            .then(x => x.json()).then(function (x) {
                rating = Object.values(x.rates)[0]
            })
}
/////////
/// edit boxes according to given value
firstAmount = document.querySelector('.starting input');
lastAmount=document.querySelector('.ending input');
firstAmount.addEventListener('change',function(){
    let val1=firstAmount.value;
    let val2=val1*rating
    lastAmount.value=val2
    console.log(val1)
    console.log(typeof rating)
    
    
})
lastAmount.addEventListener('change',function(){
    let val1=lastAmount.value;
    let val2=val1*rating
    firstAmount.value=val2
    console.log(val1)
    console.log(typeof rating)
    
    
})

