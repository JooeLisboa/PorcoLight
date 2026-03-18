export type HighlightItem = {
  title: string;
  detail: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export type ContactItem = {
  label: string;
  value: string;
  phoneHref: string;
  whatsappHref: string;
};

export type GalleryPreviewItem = {
  title: string;
  detail: string;
  accent: string;
  span?: "wide" | "tall";
};

export type QuickInfoItem = {
  label: string;
  value: string;
};
