let websiteIndex
let address
let cap

const init = async () => {
  const response = await fetch('/.netlify/functions/event');
  const data = await response.json();

  const newsFigure = data.find((item) => item.caption.includes('#news'));

  // websiteIndex = await newsFigure.search('http')
  // address = await newsFigure.slice(websiteIndex)
  // cap = await newsFigure.slice(0, websiteIndex)

  document.querySelector('.news').innerHTML = `
  <figure>
    <img src="${newsFigure.url}" alt="">
    <figcaption>${cap}</figcaption>
  </figure>
  `

  console.log(data);
}

init();