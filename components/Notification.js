import { createSvgElement, Gift, Bell, createElement } from "@boxicons/js";
import { notificationData } from "../state/appState.js";

export function NotificationComponent() {
  const container = document.createElement("div");

  const notificationNos = document.createElement("span");
  notificationNos.textContent = notificationData.length;

  container.append(notificationNos);
  container.append(createSvgElement(Bell));

  return container;
}

export function NotificationDetailComponent() {
  const container = document.createElement("div");
  container.className = "notifications";

  const data = notificationData.map((current) => {
    const icon = createSvgElement(Gift).outerHTML;
    return `
<div class="notification">
<div class="icon-notification">  
${icon}
  </div>
  <div class="content">
  <h3>
  ${current.title}
  </h3>
  <p>${current.message}
  </div>
  </div>
  `;
  });

  data.map((current) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(current, "text/html");
    container.append(doc.body.firstChild);
  });

  return container;
}
