const cardContainer = document.querySelector(".card-container");

const cards = [
  {
    title: "Card Title 1",
    imageSrc: "https://via.placeholder.com/200x200",
    description: "Description of card 1 goes here."
  },
  {
    title: "Card Title 2",
    imageSrc: "https://via.placeholder.com/200x200",
    description: "Description of card 2 goes here."
  },
  {
    title: "Card Title 3",
    imageSrc: "https://via.placeholder.com/200x200",
    description: "Description of card 3 goes here."
  },
  {
    title: "Card Title 4",
    imageSrc: "https://via.placeholder.com/200x200",
    description: "Description of card 4 goes here."
  }
];

cards.forEach(card => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const image = document.createElement("img");
  image.src = card.imageSrc;
  image.alt = "Card image";
  newCard.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = card.title;
  newCard.appendChild(title);

  const description = document.createElement("p");
  description.textContent = card.description;
  newCard.appendChild(description);

  cardContainer.appendChild(newCard);
});
