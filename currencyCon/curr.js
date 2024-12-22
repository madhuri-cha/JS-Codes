const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json"
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelectorAll("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
/*for(let code in countryList)
{
    console.log(code, countryList[code]);
}
 */

for(let select of dropdowns)
{
    for(let currCode in countryList)
    {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD")
        {
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "INR")
        {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}
//evenet - target
const updateFlag = (element) =>
{
 let currCode = element.value;
 let countryCode = countryList[currCode];
 let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
 let img = element.parentElement.querySelector("img");
 img.src = newSrc;
}
btn.addEventListener("click", async (evt) =>
{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    console.log(amtval);

    if(amtval === " " || amtval < 0)
    {
        amtval = 1;
        amount.value = "1";
    }

    console.log(fromCurr.value, toCurr.value)
    const URL =`${BASE_URL}/${fromCurr.value.tolowerCase()}/${toCurr.value.tolowerCase()}.json`;
    let response = await fetch(URL);
    let data = response.json();
    let rate = data[toCurr.value.tolowerCase()];
    console.log(rate);

    let finalAmount = amtval * rate;
    msg.innertText = `${amtval} ${fromCurr}= ${finalAmount} ${toCurr}`;

});
