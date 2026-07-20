import info from "../data/dashboard.json" with { type: "json" };
import {
  Enterprise,
  PlaneAlt,
  WalletNote,
  User,
  Home,
  CalendarDetail,
  Discount,
  Bell,
  Cog,
  HelpCircle,
  ArrowOutRightSquareHalf,
} from "@boxicons/js";

function StatsCardData(input) {
  this.totalBookings = input.totalBookings;
  this.completedBookings = input.completedBookings;
  this.upcomingBookings = input.upcomingBookings;
  this.cancelledBookings = input.cancelledBookings;

  this.data = function () {
    return [
      this.totalBookings,
      this.completedBookings,
      this.upcomingBookings,
      this.cancelledBookings,
    ].map(function (val, index, obj) {
      const labels = [
        "Total Bookings",
        "Completed Bookings",
        "Upcoming Bookings",
        "Cancelled Bookings",
      ];
      return { label: labels[index], data: val };
    });
  };
}

export const statsData = new StatsCardData(info.data.dashboard);

function RecentBookingsData(input) {
  ((this.bookingId = input.bookingId),
    (this.service = input.service),
    (this.date = input.date),
    (this.location = input.location),
    (this.amount = input.amount),
    (this.status = input.status));
}

export const recentBookingsData = info.data.recentBookings.map(
  (val) => new RecentBookingsData(val),
);

export const quickActionsData = info.data.quickActions.map((val, index) => {
  const icon = [Enterprise, PlaneAlt, WalletNote, User].at(index);
  return { icon, label: val };
});

export const notificationData = info.data.notifications;

export const sideNavigationData = new Map([
  ["dashboard", Home],
  ["bookings", CalendarDetail],
  ["flights", PlaneAlt],
  ["hotels", Enterprise],
  ["wallet", WalletNote],
  ["offers", Discount],
  ["notifications", Bell],
  ["profile", User],
  ["settings", Cog],
  ["help & support", HelpCircle],
  ["logout", ArrowOutRightSquareHalf],
]);
