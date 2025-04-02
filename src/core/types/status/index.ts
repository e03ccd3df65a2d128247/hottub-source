import { Channel, ChannelStatus, ChannelOption } from "../channel";
import { Promo } from "./promo";
import { PopupData } from "./popup";
import { Notice } from "./notice";
import { Notification } from "./notification";

export interface ServerStatus {
  id: string;
  name: string;
  subtitle?: string;
  description?: string;
  iconUrl?: string;
  color?: string;
  status?: ChannelStatus;
  notices?: Notice[];
  channels?: Channel[];
  subscription?: {
    status: "incomplete" | "incomplete_expired" | "trialing" | "active" | "past_due" | "canceled" | "unpaid" | "paused";
  };
  nsfw?: boolean;
  categories?: string[];
  promos?: Promo[];
  notifications?: Notification[];
  popup?: PopupData | null;
  options?: ChannelOption[];
  filtersFooter?: string | null;
}
