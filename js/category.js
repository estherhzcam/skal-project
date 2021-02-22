// const url =
//   "https://keaprojects21-50cf.restdb.io/rest/beer-data-base?q={%22$distinct%22:%20%22Category%22}&sort=Category";

const url = "https://keaprojects21-50cf.restdb.io/rest/beer-data-base";

const suburl = "https://keaprojects21-50cf.restdb.io/rest/beer-data-base?";
const mediaurl = "https://keaprojects21-50cf.restdb.io/media/";

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
    handleData(data);
  })
  .catch((e) => {
    console.error("An error occurred:", e.message);
  });

function handleData(beers) {
  var seenbefore = {};
  beers.forEach(function (obj) {
    if (obj.Category in seenbefore) {
      return;
    }
    seenbefore[obj.Category] = true;
    showBeers(obj);
  });

  console.log(seenbefore);
  console.log("dupa");
}
function showBeers(beer) {
  console.log(beer);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  //   clone.querySelector(".type-beer").textContent = hero.alias;
  clone.querySelector(".type-beer h3").textContent = beer.Category;

  const imgurl = mediaurl + beer.Image[0];

  clone.querySelector("img").src = imgurl;
  //   clone.querySelector("img:nth-child(3)").alt = hero.alias;

  clone.querySelector("a").href = `subcategory.html?&category=${beer.Category}`;

  const mainEl = document.querySelector("#beers-grid");
  mainEl.appendChild(clone);
}
