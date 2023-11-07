const list = document.getElementById('list');

const listElArray = [
  {
    title: 'Personalize',
    text: 'Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!',
    img: 'https://i.postimg.cc/63s9kd1y/img-1.png',
    grid:"grid-1"
  },
  {
    title: 'Write & Understand',
    text: 'Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!',
    img: 'https://i.postimg.cc/7L8dDmw8/img-2.png',
    grid:"grid-2"
  },
  {
    title: 'Alivio!',
    text: 'Now you are aware, and have a way to manage and overcome your own stress.What are you waiting for? Alivio today!',
    img: 'https://i.postimg.cc/X7BsJd2V/img-3.png',
    grid:"grid-3"
  },
];

console.log(listElArray);

function getElement(index) {
  return `<li class="work-list_element ${listElArray[index].grid}">
        <h2 class="work-list_title">${listElArray[index].title}</h2>
        <p class="work-list-text">${listElArray[index].text}</p>
        <img src="${listElArray[index].img}" alt="" class="work-list-img" />
      </li>`;
}



function render() {
  list.innerHTML = '';

  for (let i = 0; i < listElArray.length; i++) {
    list.insertAdjacentHTML('beforeend', getElement(i)); 
  }
}

render();
