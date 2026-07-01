import info from "../data/dashboard.json" with { type: "json" };

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
