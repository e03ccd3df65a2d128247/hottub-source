export enum GradientType {
  linear = "linear",
  radial = "radial",
  angular = "angular",
}

export enum PromoPlacement {
  navBar = "navBar",
  homepageBanner = "homepageBanner",
  accountView = "accountView",
  referral = "referral",
}

export enum PromoActionType {
  subscription = "subscription",
  invite = "invite",
  externalLink = "externalLink",
  deepLink = "deepLink",
}

export enum UserType {
  all = "all",
  premium = "premium",
  trialing = "trialing",
  nonPremium = "nonPremium",
}

export interface Promo {
  id: string;
  title: string;
  subtitle?: string;
  systemImage?: string;
  gradientType?: GradientType;
  gradientColors?: string[];
  placement?: PromoPlacement;
  startDate?: string;
  endDate?: string;
  actionType?: PromoActionType;
  url?: string;
  userType?: UserType;
}
