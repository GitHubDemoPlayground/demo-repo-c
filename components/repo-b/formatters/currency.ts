export interface CurrencyOptions {
  locale?: string;
  currency?: string;
  minimumFractionDigits?: number;
}

const defaults: CurrencyOptions = {
  locale: "en-US",
  currency: "USD",
  minimumFractionDigits: 2,
};

export function formatCurrency(
  amount: number,
  options: CurrencyOptions = {}
): string {
  const opts = { ...defaults, ...options };
  return new Intl.NumberFormat(opts.locale, {
    style: "currency",
    currency: opts.currency,
    minimumFractionDigits: opts.minimumFractionDigits,
  }).format(amount);
}

export function parseCurrency(formatted: string): number {
  return Number(formatted.replace(/[^0-9.-]+/g, ""));
}
