export function formatDate(d: Date): string {
  return d.toISOString().split("T")[0];
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
