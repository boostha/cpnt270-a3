let websiteIndex
let address
let cap

const init = () => {
  const response = fetch('/.netlify/functions/event');
  const data = response.json();

  const newsFigure = data.find((item) => item.caption.includes('#news'));

  websiteIndex = newsFigure.search('http')
  address = newsFigure.slice(websiteIndex)
  cap = newsFigure.slice(0, websiteIndex)

  document.querySelector('.news').innerHTML = `
  <figure>
    <img src="${newsFigure.url}" alt="">
    <figcaption>${cap}</figcaption>
  </figure>
  `

  console.log(data);
}

init();