import type { Lang } from "./types";

/**
 * UI 文言の辞書。セクション見出しなどデータに含まれない文字列を集約する。
 * 宿データ側の見出しは i18n を介さず直接 ja/en/zh フィールドを使う。
 */

// `ja` を Dict のソース・オブ・トゥルースにし、`Record<Lang, Dict>` で
// en/zh が同じ shape を持つことを型で保証する。
const ja = {
  siteName: "館内案内",
  langLabel: "言語",
  sections: {
    wifi: "Wi-Fi",
    times: "お時間案内",
    services: "サービス案内",
    additional: "館内のご案内",
    area: "周辺情報",
    faq: "よくあるご質問",
    info: "インフォメーション",
    contact: "お問い合わせ",
  },
  wifi: {
    ssid: "SSID",
    password: "パスワード",
    copy: "コピー",
    copied: "コピーしました",
  },
  actions: {
    viewPdf: "PDF を見る",
    viewMap: "地図を見る",
    openLine: "LINE を開く",
    openInstagram: "Instagram を開く",
    detail: "詳細を見る",
    back: "案内トップへ戻る",
  },
  footer: {
    address: "住所",
    phone: "電話番号",
    email: "メール",
  },
  tags: {
    restaurant: "飲食店",
    rental: "レンタル",
    souvenir: "お土産",
    shop: "小売店",
  },
  faq: {
    questionLabel: "Q",
    answerLabel: "A",
    answer: "回答",
  },
};

export type Dict = typeof ja;

const en: Dict = {
  siteName: "Guest Guide",
  langLabel: "Language",
  sections: {
    wifi: "Wi-Fi",
    times: "Schedule",
    services: "Services",
    additional: "In-house Info",
    area: "Around Here",
    faq: "FAQ",
    info: "What’s New",
    contact: "Contact",
  },
  wifi: {
    ssid: "SSID",
    password: "Password",
    copy: "Copy",
    copied: "Copied",
  },
  actions: {
    viewPdf: "View PDF",
    viewMap: "View on Map",
    openLine: "Open LINE",
    openInstagram: "Open Instagram",
    detail: "View details",
    back: "Back to guide",
  },
  footer: {
    address: "Address",
    phone: "Phone",
    email: "Email",
  },
  tags: {
    restaurant: "Restaurant",
    rental: "Rental",
    souvenir: "Souvenir",
    shop: "Shop",
  },
  faq: {
    questionLabel: "Q",
    answerLabel: "A",
    answer: "Answer",
  },
};

const zh: Dict = {
  siteName: "客房指南",
  langLabel: "语言",
  sections: {
    wifi: "Wi-Fi",
    times: "时间安排",
    services: "服务介绍",
    additional: "馆内介绍",
    area: "周边信息",
    faq: "常见问题",
    info: "资讯",
    contact: "联系方式",
  },
  wifi: {
    ssid: "SSID",
    password: "密码",
    copy: "复制",
    copied: "已复制",
  },
  actions: {
    viewPdf: "查看 PDF",
    viewMap: "查看地图",
    openLine: "打开 LINE",
    openInstagram: "打开 Instagram",
    detail: "查看详情",
    back: "返回指南首页",
  },
  footer: {
    address: "地址",
    phone: "电话",
    email: "邮箱",
  },
  tags: {
    restaurant: "餐厅",
    rental: "租赁",
    souvenir: "土特产",
    shop: "商店",
  },
  faq: {
    questionLabel: "Q",
    answerLabel: "A",
    answer: "回答",
  },
};

export const t: Record<Lang, Dict> = { ja, en, zh };

export function dict(lang: Lang): Dict {
  return t[lang];
}
