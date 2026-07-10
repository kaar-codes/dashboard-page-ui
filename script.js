"use strict";

import { createElement, Battery2 } from "@boxicons/js";

import { StatsCardComponent } from "./components/StatsComponent.js";
import { RecentBookingsComponent } from "./components/RecentBookings.js";

const root = document.getElementById("root");

const alarmCheck = createElement(Battery2);
root.append(alarmCheck);

root.append(StatsCardComponent());
root.append(RecentBookingsComponent());
