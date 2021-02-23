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
  if (beer.Examples.length > 0) {
    var all_examples = beer.Examples.split(", ");
    console.log(all_examples);
    var other_beers = clone.querySelector(".other-beers");
    var ul = document.createElement("ul");
    all_examples.forEach(function (example) {
      var li = document.createElement("li");
      li.textContent = example;
      ul.appendChild(li);
      console.log(example);
    });
    other_beers.appendChild(ul);
  } else {
    clone.querySelector(".other-beers h2").remove();
  }

  const imgurl = mediaurl + beer.Image[0];

  clone.querySelector("img").src = imgurl;

  document.querySelector(".breadtype").textContent = beer.Category;
  document.querySelector(
    ".breadtype"
  ).href = `subcategory.html?&category=${beer.Category}`;
  document.querySelector(".breadsingle").textContent = beer.Subcategory;

  const mainEl = document.querySelector(".beer-card");
  mainEl.appendChild(clone);
}
