"use strict";

import { StatsCardComponent } from "./components/StatsComponent.js";
import { RecentBookingsComponent } from "./components/RecentBookings.js";

const root = document.getElementById("root");

root.append(StatsCardComponent());
root.append(RecentBookingsComponent());