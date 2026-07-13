import { createSvgElement, Bell } from "@boxicons/js";
import { notificationData } from "../state/appState.js";

export function NotificationComponent() {
  const container = document.createElement("div");

  const notificationNos = document.createElement("span");
  notificationNos.textContent = notificationData.length;

  container.append(notificationNos);
  container.append(createSvgElement(Bell));

  return container;
}
