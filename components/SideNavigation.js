import { createElement } from "@boxicons/js";
import { sideNavigationData } from "../state/appState.js";

function SideNavBarComponent() {
  const container = document.createElement("nav");
  container.className = "navigation";

  const sideNavContent = [...sideNavigationData.keys()];
  const sideNavIconAndContent = sideNavContent.map((current) => {
    const sideNav = document.createElement("div");
    const sideIcon = createElement(sideNavigationData.get(current));
    sideNav.append(sideIcon, current);
    return sideNav;
  });
  container.append(...sideNavIconAndContent);
  return container;
}

export { SideNavBarComponent };
