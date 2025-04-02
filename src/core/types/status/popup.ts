export type PopupActionType = "dismiss" | "next" | "back" | "openURL";

export type PopupType = "alert" | "fullscreen";

export type PopupPersistence = "oneTime" | "session" | "recurring";

export interface PopupBackground {
  color?: string;
  image?: string;
}

export interface PopupAction {
  title: string;
  subtitle?: string;
  systemImage?: string;
  color?: string;
  actionType: PopupActionType;
  url?: string;
  enabledBy?: string;
}

export interface PopupButton {
  type: "button";
  title: string;
  subtitle?: string;
  color: string;
  actionType: PopupActionType;
  url?: string;
  disabled?: boolean;
  enabledBy?: string;
  systemImage?: string;
}

export interface PopupToggle {
  type: "toggle";
  id: string;
  title: string;
  subtitle?: string;
  systemImage?: string;
  color: string;
  state: boolean;
}

export interface PopupSection {
  type: "section";
  title?: string;
  items: PopupControl[];
}

export interface PopupCustomView {
  type: "custom";
  view: "ServerFiltersView" | null;
}

export type PopupControl = PopupButton | PopupToggle | PopupSection | PopupCustomView;

export interface PopupData {
  id: string;
  type?: PopupType;
  title?: string;
  subtitle?: string;
  warning?: string;
  body?: string;
  footer?: string;
  background?: PopupBackground;
  actions?: PopupAction[];
  dismissible?: boolean;
  persistence?: PopupPersistence;
  pages?: PopupData[];
  items?: PopupControl[];
  sections?: PopupSection[];
  customView?: string;
}
