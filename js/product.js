const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url =
  "https://keaprojects21-50cf.restdb.io/rest/beer-data-base?https://keaprojects21-50cf.restdb.io/rest/beer-data-base?max=1&q={%22_id%22:%22" +
  id +
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
    handleProduct(data);
  })
  .catch((e) => {
    console.error("An error occurred:", e.message);
  });
function handleProduct(data) {
  //console.log(data);
  data.forEach(showBeers);
}
function showBeers(beer) {
  console.log(beer);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  //   clone.querySelector(".type-beer").textContent = hero.alias;
  clone.querySelector(".product-description h1").textContent = beer.Subcategory;
  clone.querySelector("#aroma").textContent = beer.Aroma;
  clone.querySelector("#appearance").textContent = beer.Appearance;
  clone.querySelector("#flavor").textContent = beer.Flavor;
  clone.querySelector("#mouthfeel").textContent = beer.Mouthfeel;
  clone.querySelector("#comparison").textContent = beer.Comparison;
  clone.querySelector("#region").textContent = beer.Region;
  clone.querySelector("#family").textContent = beer.Family;
  clone.querySelector("#ibus").textContent = beer.ibus;
  clone.querySelector("#srm").textContent = beer.srm;
  clone.querySelector("#abv").textContent = beer.abv;
  // clone.querySelector("li").textContent = beer.Examples[0];
  // clone.querySelector("li:nth-child(2)").textContent = beer.Examples[1];
  // clone.querySelector("li:nth-child(3)").textContent = beer.Examples[2];
  // clone.querySelector("li:nth-child(4)").textContent = beer.Examples[3];
  // clone.querySelector("li:nth-child(5)").textContent = beer.Examples[4];
  // clone.querySelector("li:nth-child(6)").textContent = beer.Examples[5];

  const imgurl = mediaurl + beer.Image[0];

  clone.querySelector("img").src = imgurl;

  // var str2 = beer.Examples;
  // var res2 = str2.slice(13, 30);
  clone.querySelector("li").textContent = beer.Example;
  // clone.querySelector("li:nth-child(2)").textContent = res2;
  //   clone.querySelector("img:nth-child(3)").alt = hero.alias;

  // clone.querySelector("a").href = `subcategory.html?&category=${beer.Category}`;
  document.querySelector(".breadtype").textContent = beer.Category;
  document.querySelector(
    ".breadtype"
  ).href = `subcategory.html?&category=${beer.Category}`;
  document.querySelector(".breadsingle").textContent = beer.Subcategory;

  const mainEl = document.querySelector(".beer-card");
  mainEl.appendChild(clone);
}
