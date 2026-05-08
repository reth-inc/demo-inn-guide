import type { Lang } from "./types";

/**
 * UI 文言の辞書。セクション見出しなどデータに含まれない文字列を集約する。
 * 宿データ側の見出しは i18n を介さず直接 ja/en フィールドを使う。
 */
export const t = {
  ja: {
    siteName: "館内案内",
    listTitle: "宿一覧",
    listLead: "日本語ページ・英語ページから宿の館内案内をご覧いただけます。",
    langSwitch: "English",
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
  },
  en: {
    siteName: "Guest Guide",
    listTitle: "Inns",
    listLead: "Browse the in-house guide of each inn in Japanese or English.",
    langSwitch: "日本語",
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
  },
  zh: {
    siteName: "客房指南",
    listTitle: "住宿设施一览",
    listLead: "可在日文、英文或中文页面查看各住宿设施的客房指南。",
    langSwitch: "切换语言",
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
  },
} as const satisfies Record<Lang, unknown>;

export type Dict = (typeof t)[Lang];

export function dict(lang: Lang): Dict {
  return t[lang];
}
