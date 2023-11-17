"use strict";

async function getData() {
    const url = 'https://daddyjokes.p.rapidapi.com/random';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f390651e4amsh8e7e993ccb4ae47p1f9900jsn6bdc498235db',
            'X-RapidAPI-Host': 'daddyjokes.p.rapidapi.com'
        }
    };
    
    
        const response = await fetch(url, options);
        const result = await response.json();
        

        let pEl =document.querySelector("#Joke");
        pEl.textContent = result.joke;
    
}


getData();



let btnEl= document.querySelector("#Button");
btnEl.addEventListener("click",function(){
    getData();
});