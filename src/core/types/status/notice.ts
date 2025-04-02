export interface Notice {
  status: "success" | "info" | "error" | "warning" | "unknown" | "degraded" | "maintenance" | "offline";
  message?: string;
  details?: string;
  priority?: boolean; // One `priority` notice can be displayed at the top of the home page
  url?: string | null;
}
