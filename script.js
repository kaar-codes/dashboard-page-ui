"use strict";

import info from "./data/dashboard.json" with { type: "json" };

const statsContainer = document.createElement("div");

function StatsCardComponent(containerName = "stats-card-container") {
  const {
    totalBookings,
    completedBookings,
    upcomingBookings,
    cancelledBookings,
  } = info.data.dashboard;

  const mapData = [
    totalBookings,
    completedBookings,
    upcomingBookings,
    cancelledBookings,
  ];

  console.log(mapData);

  const cards = document.createElement("div");
  cards.className = containerName;

  mapData.map((val) => {
    const card = document.createElement("div");
    card.className = "stats-card";

    const img = document.createElement("img");
    img.setAttribute("src", "./images/icons/bookings.svg");
    card.append(img);

    const cardInfo = document.createElement("div");
    cardInfo.className = "card-info";
    const heading = document.createElement("h1");
    const subHeading = document.createElement("p");
    const subText = document.createElement("p");

    heading.textContent = val;
    subHeading.textContent = "TOTAL";
    subText.textContent = "ALL TIME";

    cardInfo.append(subHeading);
    cardInfo.append(heading);
    cardInfo.append(subText);

    card.append(img);
    card.append(cardInfo);

    cards.append(card);
  });

  return cards;
}

const root = document.getElementById("root");
root.append(StatsCardComponent());
