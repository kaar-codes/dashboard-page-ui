import { recentBookingsData } from "../state/appState.js";

export function RecentBookingsComponent() {

    const container = document.createElement('div');
    container.className = "recent-bookings-container";


    recentBookingsData.map(current=>{
        const bookingDetails = document.createElement('div');
        bookingDetails.className = "booking-details";
        
        const bookingId = document.createElement('p');
        bookingId.textContent = current.bookingId;
        bookingDetails.append(bookingId);
        
        const service = document.createElement('p');
        service.textContent = current.service;
        bookingDetails.append(service);

        const location = document.createElement('p');
        location.textContent = current.location;
        bookingDetails.append(location)

        const date = document.createElement("p");
        date.textContent = new Intl.DateTimeFormat("en-GB", {day:'2-digit',month:"short", year:'numeric'}).format(new Date(current.date));
        bookingDetails.append(date);
        

        const status = document.createElement('span');
        status.className = "status";
        status.textContent = current.status
        bookingDetails.append(status);

        const amount = document.createElement('span');
        amount.innerHTML = `&#8377; ${current.amount}`
        bookingDetails.append(amount)

        
        container.append(bookingDetails);
    })


    return container;
}