
// window.onload = fadeOut
// function fadeOut(){
//     console.log("loaded")
//     document.querySelector("#myloader").remove();
// }
const urlParams = new URLSearchParams(window.location.search);
const typebeer = urlParams.get("typebeer");
console.log(typebeer);


const url = `https://keaprojects21-50cf.restdb.io/rest/beer-quiz-results?q={"category":"${typebeer}"}`

const options = {
    headers: {
      "x-apikey": "602e38155ad3610fb5bb62bd",
    },
  };

  fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    handleResults(data);
  })
  .catch((e) => {
    console.error("An error occurred:", e.message);
  });

function handleResults(data){
 data.forEach(giveMeBeer)
}

function giveMeBeer(beer){
    console.log(beer.h2)
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("#youare h2").innerHTML = beer.h2;
    copy.querySelector(".result-wrapper p").textContent = beer.description;
    copy.querySelector("#cta-quiz a:first-child").href = `beer.html?id=${beer.id}`;
    const parent = document.querySelector("#father");
    parent.appendChild(copy)

}

