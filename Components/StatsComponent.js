import { statsData } from "../State/Dashboard.js";

function StatCards(cardsData) {
  return cardsData.map((val) => {
    const { label, data } = val;
    const card = document.createElement("div");
    card.className = "stats-card";

    const img = document.createElement("img");
    img.setAttribute("src", "./images/icons/bookings.svg");
    card.append(img);

    const cardInfo = document.createElement("div");
    cardInfo.className = "card-info";
    const heading = document.createElement("h1");
    const labelContent = document.createElement("p");

    heading.textContent = data;
    labelContent.textContent = label;

    cardInfo.append(label, heading);

    card.append(img, cardInfo);

    return card;
  });
}

export function StatsCardComponent() {
  const container = document.createElement("div");
  container.className = "stats-card-container";

  const cardsData = statsData.data();
  container.append(...StatCards(cardsData));

  return container;
}
