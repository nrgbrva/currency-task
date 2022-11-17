let firstType = document.querySelectorAll(".primary .box");
let lastType = document.querySelectorAll(".secondary .box");
let infoFirst = document.querySelector("#news1");
let infoLast = document.querySelector("#news2");
let base = "RUB";
let symbols = "USD";
let firstAmount = document.querySelector("body > div:nth-child(3) > div > div.col-lg-6.mb-5.starting.d-flex.justify-content-center > div > div:nth-child(3) > div > input");
let lastAmount = document.querySelector("body > div:nth-child(3) > div > div.col-lg-6.mb-5.ending.d-flex.justify-content-center > div > div:nth-child(3) > div > input");
function changeVal(b1, a) {
    b1.forEach(element => {
        element.onclick = async (e) => {
            b1.forEach((item) => {
                item.classList.remove("first");
            })
            element.classList.add("first");
            console.log(element);
            if (a == 'left') {
                base = element.innerText;
            }
            else if (a == 'right') {
                symbols = element.innerText;
            }
            await fetcher();
            valInsert(active);

        }
    });
}
changeVal(firstType, 'left');
changeVal(lastType, 'right');
async function fetcher() {
    const a = await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`);
    const b = await a.json();
    value = b.rates[symbols]
    infoFirst.innerText = `1 ${base} = ${value.toFixed(4)} ${symbols}`;
    infoLast.innerText = `1 ${symbols} = ${(1 / value).toFixed(4)} ${base}`;
}
fetcher();

firstAmount.oninput = (item) => {
    if (firstAmount.value != '') {
        lastAmount.value = (value * firstAmount.value).toFixed(2);

    } else {
        lastAmount.value = '';
    }
    active = 'left';
}
lastAmount.oninput = (item) => {
    if (lastAmount.value != '') {
        firstAmount.value = (1 / value * lastAmount.value).toFixed(2);
    } else {
        firstAmount.value = '';
    }
    active = 'right';
}
function valInsert(p) {
    if (p == 'right') {
        if (lastAmount.value != '') {
            firstAmount.value = (1 / value * lastAmount.value).toFixed(2);
        } else {
            firstAmount.value = '';
        }
    }
    else if (p == 'left') {
        if (firstAmount.value != '') {
            lastAmount.value = (value * firstAmount.value).toFixed(2);

        } else {
            lastAmount.value = '';
        }
    }
};
