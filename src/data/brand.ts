export const BRAND = {
  name: "Bống Media",
  phone: "0963556518",
  phoneHref: "tel:0963556518",
  email: "admin@leviathan.id.vn",
  emailHref: "mailto:admin@leviathan.id.vn",
  address: "Lê Thanh Nghị, Thành phố Hải Phòng",
  facebook: "https://www.facebook.com/chupanhkyyeubongmedia",
} as const;

export const BRAND_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.address)}`;
