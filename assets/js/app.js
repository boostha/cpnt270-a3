let websiteIndex
let address
let cap

const init = async () => {
  const response = await fetch('/.netlify/functions/event');
  const data = await response.json();

  const newsFigure = await data.find((item) => item.caption.includes('#news'));
  console.log(newsFigure)
  // websiteIndex = newsFigure.search('http')
  // address = newsFigure.slice(websiteIndex)
  // cap = newsFigure.slice(0, websiteIndex)

  document.querySelector('.news').innerHTML = `
  <figure>
    <img src="${newsFigure.url}" alt="">
    <figcaption>${cap}</figcaption>
  </figure>
  `

  console.log(data);
}

init();