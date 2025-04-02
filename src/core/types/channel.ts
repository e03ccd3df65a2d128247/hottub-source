export interface ChannelOptionChoice {
  id: string;
  title: string;
  description?: string;
  options?: ChannelOption[]; // Nested Options to show when this option is selected
}

export interface ChannelOption {
  id: string;
  title: string;
  systemImage?: string;
  colorName?: string;
  multiSelect?: boolean;
  options: ChannelOptionChoice[];
  value?: string | number | boolean;
}

export enum ChannelStatus {
  Active = "active", // Channel is working normally
  Inactive = "inactive", // Channel deliberately disabled/suspended
  Degraded = "degraded", // Channel working with reduced functionality
  Maintenance = "maintenance", // Channel temporarily down for planned work
  Offline = "offline", // Channel unavailable due to technical issues
  Deprecated = "deprecated", // Channel scheduled for removal
  Testing = "testing", // Channel is in testing mode for development
}

export interface Channel {
  id: string;
  name: string;
  premium?: boolean;
  favicon: string;
  description?: string;
  status: ChannelStatus;
  categories: string[];
  options: ChannelOption[];
  nsfw?: boolean;
  ytdlpCommand?: string;
}
