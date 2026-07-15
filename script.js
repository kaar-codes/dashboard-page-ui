"use strict";

import { StatsCardComponent } from "./components/StatsComponent.js";
import { RecentBookingsComponent } from "./components/RecentBookings.js";
import { QuickActionsComponent } from "./components/QuickActions.js";
import {
  NotificationComponent,
  NotificationDetailComponent,
} from "./components/Notification.js";

root.append(NotificationComponent());
root.append(StatsCardComponent());
root.append(RecentBookingsComponent());
root.append(NotificationDetailComponent());
root.append(QuickActionsComponent());
