const navItemElement = document.getElementById('navitem');
const durationElement = document.getElementById('duration');
const detailElement = document.getElementById('detail');
const conditionElement = document.getElementById('condition');
const client = axios.create();

function getNavItemsTemplate(navItems) {
  let template = '';

  navItems.forEach(navItem => {
    template += `<a class="mynavitem" href=${navItem.href}>${navItem.label} </a>`;
  });

  return template;
}

async function getData() {
  const response = await axios.get('https://panjs.com/ywc.json');

  return response.data;
}

getData()
  .then(data => {
    navItemElement.innerHTML = getNavItemsTemplate(data.navbarItems);
    durationElement.innerHTML = data.duration;
    detailElement.innerHTML = data.detail;
    conditionElement.innerHTML = data.condition;
  })
  .catch(err => console.error(err));
