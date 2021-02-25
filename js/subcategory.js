const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
console.log(category);

// const url =
//   "https://keaprojects21-50cf.restdb.io/rest/beer-data-base?q={%22$distinct%22:%20%22Category%22}&sort=Category";

const url =
  "https://keaprojects21-50cf.restdb.io/rest/beer-data-base?sort=Subcategory&max=10&q={%22Category%22%20:%20%22" +
  category +
  "%22}";

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
  beers.forEach(showBeers);
}
function showBeers(beer) {
  console.log(beer);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  //   clone.querySelector(".type-beer").textContent = hero.alias;
  clone.querySelector(".type-beer h3").textContent = beer.Subcategory;

  const imgurl = mediaurl + beer.Image[0];

  clone.querySelector("img").src = imgurl;
  //   clone.querySelector("img:nth-child(3)").alt = hero.alias;

  clone.querySelector("a").href = `beer.html?id=${beer._id}`;

  const mainEl = document.querySelector(".beers-grid-subcat");
  mainEl.appendChild(clone);

  document.querySelector(".breadtype").textContent = beer.Category;
  document.querySelector(".breadsingle").textContent = beer.Category;
  document.querySelector(
    ".breadtype"
  ).href = `subcategory.html?&category=${beer.Category}`;
}
