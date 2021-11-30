let websiteIndex
let address
let cap
let hashIndex

const newsFun = async () => {
  const response = await fetch('/.netlify/functions/event');
  const data = await response.json();

  const newsFigure = await data.find((item) => item.caption.includes('#news'));
  console.log(newsFigure)

  websiteIndex = newsFigure.caption.search('http')
  hashIndex = newsFigure.caption.search('#')
  address = newsFigure.caption.slice(websiteIndex)
  cap = newsFigure.caption.slice(0, hashIndex)

  document.querySelector('.news').innerHTML = `
  <figure>
    <a href="${address}">
      <img src="${newsFigure.url}" alt="" width="400">
    </a>
    <figcaption><a href="${address}">${cap}</a></figcaption>
  </figure>
  `

  console.log(data);
}

const foodFun = async () => {
  const response = await fetch('/.netlify/functions/event');
  const data = await response.json();

  const foodFigure = await data.find((item) => item.caption.includes('#food'));

  websiteIndex = foodFigure.caption.search('http')
  hashIndex = foodFigure.caption.search('#')
  address = foodFigure.caption.slice(websiteIndex)
  cap = foodFigure.caption.slice(0, hashIndex)

  document.querySelector('.food').innerHTML = `
  <figure>
    <a href="${address}">
      <img src="${foodFigure.url}" alt="" width="400">
    </a>
    
    <figcaption><a href="${address}">${cap}</a></figcaption>
    
  </figure>
  `

  console.log(data);
}

const blogFun = async () => {
  const response = await fetch('/.netlify/functions/event');
  const data = await response.json();

  const blogFigure = await data.find((item) => item.caption.includes('#blog'));

  websiteIndex = blogFigure.caption.search('http')
  hashIndex = blogFigure.caption.search('#')
  address = blogFigure.caption.slice(websiteIndex)
  cap = blogFigure.caption.slice(0, hashIndex)

  document.querySelector('.blog').innerHTML = `
  <figure>
    <a href="${address}">
      <img src="${blogFigure.url}" alt="" width="400">
    </a>
    <figcaption><a href="${address}">${cap}</a></figcaption>
  </figure>
  `

  console.log(data);
}

newsFun();
foodFun();
blogFun();