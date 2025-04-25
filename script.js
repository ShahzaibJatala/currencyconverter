// dark mode 
let btn = document.querySelector("#btn");

let body = document.querySelector("body");

let outer = document.querySelector(".outer");
       
function dark() {
    
        // body.style.backgroundColor = "black";
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");  
        outer.classList.add("outer2");
        outer.classList.remove("outer");
        btn.innerHTML = "Light Mode";

    }
        

        function light() {
           
                // body.style.backgroundColor = "black";
                mode = "light";
                body.classList.add("light");
                body.classList.remove("dark");  
                outer.classList.add("outer");
                outer.classList.remove("outer2");
                btn.innerHTML = "Dark Mode";
                
            }
        

let mode = "light";


btn.addEventListener("click",() => {
    if(mode == "light") {
    dark();
   
    }
    else{
        light();
    }

})


// currency converter

// let BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
let BASE_URL = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=";
// const BASE_URL = 'https://api.exchangeratesapi.io/latest'; 
// const apiKey = 'YOUR_API_KEY';
const dropdowns = document.querySelectorAll(".dropdown select");
// let options = document.querySelectorAll("option");
const inputElement = document.querySelector("input");

const inputElement1 = document.querySelector(".no1");
 


for(let select of dropdowns) {
    for(currCode in countryList) {
        let createOpt = document.createElement("option");
        createOpt.innerText = currCode;
        createOpt.value = currCode;

        if(select.name === "currency1" && currCode === "USD") {
            createOpt.selected = "selected";
        }
        if(select.name === "currency2" && currCode === "PK") {
            createOpt.selected = "selected";
        }


        select.append(createOpt);

        select.addEventListener("change", (evt) => {
            changeFlag(evt.target); 
    
            
        });
        
        
    }
 
}
 


const changeFlag = (element) => {
    // console.log(element);
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let URL = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = URL;

    

}

 
inputElement.addEventListener("input", async (event) => {

    let amount = document.querySelector("input");
    let amountVal = amount.value;
    // console.log(amountVal);
    

    
   

        let currency1 = document.querySelector("#currCon1");
        let currency2 = document.querySelector("#currCon2");
        let output = document.querySelector(".no2")

        // console.log(currency1.value, currency2.value);
        // PKR&to_currency=USD&apikey=YOUR_API_KEY
        const URL = `${BASE_URL}${currency1.value.toUpperCase()}&to_currency=${currency2.value.toUpperCase()}&apikey=YOUR_API_KEY`;
        let res = await fetch(URL);
        let data = await res.json();
        let curr = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
        
        // console.log(curr*amountVal);
        let finalVal = curr*amountVal;
        
        if(amountVal<1) {
            finalVal = 0;
             }
    
        output.innerHTML = finalVal;

        // fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
        // .then(response => response.json())
        // .then(data => {
        //   console.log(data);
        //   const usd = data['usd']; 
        //   console.log('USD rate:', usd);
        // })
        // .catch(error => console.error('Error fetching data:', error));
      
        
// fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
// .then(response => response.json())
// .then(data => {
//   const usdToPkr = data['usd']['pkr']; // Extract USD to PKR rate
//   console.log('USD to PKR rate:', usdToPkr);
// })
// .catch(error => console.error('Error fetching data:', error));




   
    // console.log("printed");
    
});






 