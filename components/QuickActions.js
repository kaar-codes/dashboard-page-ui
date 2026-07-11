import { createElement } from "@boxicons/js";
import { quickActionsData } from "../state/appState.js";

export function QuickActionsComponent() {

    const container = document.createElement('div');
    container.className = "recent-bookings-container";

    quickActionsData.map(obj=>{
        const quickActionsIcon = createElement(obj.icon);
        const quickActionsLabel = document.createElement('h3');
        quickActionsLabel.textContent = obj.label;

        const quickActionsCard = document.createElement('div');
        quickActionsCard.append(quickActionsIcon,quickActionsLabel)
        
        container.append(quickActionsCard)
    })


    return container;
}