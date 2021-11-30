let websiteIndex
let address
let cap

const init = async () => {
  const response = await fetch('/.netlify/functions/event');
  const data = await response.json();

  const newsFigure = await data.find((item) => item.caption.includes('#news'));
  console.log(newsFigure)

  websiteIndex = newsFigure.caption.search('http')
  address = newsFigure.caption.slice(websiteIndex)
  cap = newsFigure.caption.slice(0, websiteIndex)

  document.querySelector('.news').innerHTML = `
  <figure>
    <a href="${address}"
      <img src="${newsFigure.url}" alt="">
    </a>
    <figcaption>${cap}</figcaption>
  </figure>
  `

  console.log(data);
}

init();