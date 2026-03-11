export type DateStyle = "short" | "medium" | "long";

const styleMap: Record<DateStyle, Intl.DateTimeFormatOptions> = {
  short: { month: "numeric", day: "numeric", year: "2-digit" },
  medium: { month: "short", day: "numeric", year: "numeric" },
  long: { month: "long", day: "numeric", year: "numeric", weekday: "long" },
};

export function formatDate(
  date: Date | string | number,
  style: DateStyle = "medium",
  locale = "en-US"
): string {
  const d = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat(locale, styleMap[style]).format(d);
}

export function timeAgo(date: Date | string | number): string {
  const d = date instanceof Date ? date : new Date(date);
  const seconds = Math.floor((Date.now() - d.getTime()) / 1000);

  const intervals: [number, string][] = [
    [31536000, "year"],
    [2592000, "month"],
    [86400, "day"],
    [3600, "hour"],
    [60, "minute"],
  ];

  for (const [secs, label] of intervals) {
    const count = Math.floor(seconds / secs);
    if (count >= 1) return `${count} ${label}${count > 1 ? "s" : ""} ago`;
  }
  return "just now";
}

export function isValidDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}
