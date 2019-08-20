var quotes = [
  'I live my life a quarter mile at a time',
  'I said a ten-second car, not a ten-minute car',
  "You can have any brew you want... as long as it's a Corona.",
  'You almost had me? You never had me - you never had your car!',
  "I don't have friends. I have family.",
  "It don't matter if you win by an inch or a mile. Winning's winning.",
];

document.addEventListener('DOMContentLoaded', event => {
  // Random quote of the day generator
  const randomQuote = () => {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };

  // Do all of your work inside the document.addEventListener

  //  Part 1

  const mainTitle = () => {
    let firstTitle = document.getElementById('main-title');
    firstTitle.innerHTML = "Dom's page";
  };

  // mainTitle();

  // Part 2
  const changeBackgroundColor = () => {
    document.body.style.backgroundColor = 'lightblue';
  };

  changeBackgroundColor();

  // Part 3

  const removeLastiTem = () => {
    let listItem = document.querySelector('.side-bar');
    let favThing = listItem.getElementsByTagName('li');
    let lastElement = (favThing[favThing.length - 1].style.display = 'none');
  };

  removeLastiTem();

  // Part 4

  const specialTitle = () => {
    let title = document.querySelectorAll('.special-title');
    title.forEach(title => (title.style.fontSize = '2rem'));
  };

  specialTitle();

  // Part 5
  const pastRaces = () => {
    let listItem = document.querySelector('.side-bar');
    let races = listItem[1];
    let places = listItem.getElementsByTagName('li');
    for (let i = 0; i < places.length; i++) {
      if (places[i].innerHTML === 'Chicago') {
        places[i].style.display = 'none';
      }
    }
  };

  pastRaces();

  // Part 6
  const createList = () => {
    let raceCity = document.getElementsByTagName('ul');
    let newList = document.createElement('li');
    newList.innerHTML = 'New York City';
    raceCity[1].appendChild(newList);
  };

  createList();

  // Part 7

  const creatediv = () => {
    let raceCity = document.getElementsByTagName('ul');
    let newDiv = document.createElement('div');
    let newH2 = document.createElement('h2');
    let newP = document.createElement('p');
    newDiv.className = 'blog-post';
    newH2.innerHTML = 'Lorem ipsum';
    newP.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit';
    newDiv.appendChild(newH2, newP);
    newDiv.appendChild(newP);
    raceCity[1].appendChild(newDiv);
    console.log();
  };

  creatediv();

  // Part 8
  let getrandomQuote = () => {
    let quote = document.getElementById('quote-title');
    quote.addEventListener('click', randomQuote);
  };
  getrandomQuote();

  // Part 9
});
