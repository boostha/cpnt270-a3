let websiteIndex
let address
let cap

const init = async () => {
  const response = await fetch('/.netlify/functions/event');
  const data = await response.json();

  const newsFigure = data.find((item) => item.caption.includes('#news'));
  websiteIndex = newsFigure.search('http')
  address = newsFigure.slice(websiteIndex)
  cap = newsFigure.slice(0, websiteIndex)

  newsFigure.forEach((picture) => {
    output += 
    `
    <figure>
      <a href="${address}">
        <img src="${picture.url}" alt="" width="500" height="500">
      </a>
      <figcaption>
        <p>${cap}</p>
      </figcaption>
    </figure>
    `
  })

  console.log(data);
}

init();
document.querySelector('.news').innerHTML = output