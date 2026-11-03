export const siteUrl = "https://work.anselmlong.com";
export const email = "anselmpius@gmail.com";
export const github = "https://github.com/anselmlong";

const whatsappNumber = "6588536376";
const greeting = "Hi Anselm, I found your site and would like to talk about a project.";

export function whatsappHref(text: string = greeting) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function mailtoHref(subject: string, body?: string) {
  const query = [`subject=${encodeURIComponent(subject)}`];
  if (body) query.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${email}?${query.join("&")}`;
}

export const lanes = [
  {
    id: "websites",
    name: "Websites",
    price: "From S$490",
    pitch: "A business site that looks right on a phone and brings in enquiries.",
    items: ["Business sites", "Booking flows", "Payments", "WhatsApp lead alerts"],
  },
  {
    id: "software",
    name: "Custom software",
    price: "From S$2,500",
    pitch: "Web apps and internal tools that replace the spreadsheet, the inbox and the manual step.",
    items: ["Web apps", "Internal tools", "Dashboards", "Bots"],
  },
  {
    id: "ai",
    name: "AI & automation",
    price: "From S$1,500",
    pitch: "Assistants and automations wired into how the business already works.",
    items: ["Assistants", "Document automation", "Workflow automation"],
  },
] as const;

export type LaneId = (typeof lanes)[number]["id"];

export const rates = [
  "one-pager: s$490",
  "up to 5 pages: s$990",
  "monthly, no upfront: s$69/mo one-pager, s$129/mo up to 5 pages, care included, 12-month minimum",
  "care plan for one-off builds: s$39/mo or s$390/yr (hosting, ssl, backups, 30 min of edits a month)",
  "edits outside a plan: s$35/hr",
  "add-ons: extra page s$120, booking flow s$290, payments from s$350, whatsapp lead-alert bot s$180",
] as const;

export const terms = "50% deposit, 50% before go-live, paynow.";
