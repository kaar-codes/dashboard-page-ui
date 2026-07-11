"use strict";

import { StatsCardComponent } from "./components/StatsComponent.js";
import { RecentBookingsComponent } from "./components/RecentBookings.js";
import { QuickActionsComponent } from "./components/QuickActions.js";
root.append(StatsCardComponent());
root.append(RecentBookingsComponent());
root.append(QuickActionsComponent());
