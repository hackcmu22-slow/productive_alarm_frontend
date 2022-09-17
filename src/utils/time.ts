export type AmPm = "AM" | "PM";

export interface RenderTimeOutput {
  hour: string;
  minute: string;
  ampm: AmPm;
}

export function renderTime(hour: number, minute: number): RenderTimeOutput {
  return {
    hour: String(((hour + 11) % 12) + 1).padStart(2, "0"),
    minute: String(minute).padStart(2, "0"),
    ampm: hour < 12 ? "AM" : "PM",
  };
}
