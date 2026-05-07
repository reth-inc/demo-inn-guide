import type { Lang } from './types';

/**
 * UI 文言の辞書。セクション見出しなどデータに含まれない文字列を集約する。
 * 宿データ側の見出しは i18n を介さず直接 ja/en フィールドを使う。
 */
export const t = {
  ja: {
    siteName: '館内案内',
    listTitle: '宿一覧',
    listLead: '日本語ページ・英語ページから宿の館内案内をご覧いただけます。',
    langSwitch: 'English',
    langLabel: '言語',
    sections: {
      wifi: 'Wi-Fi',
      times: 'お時間案内',
      services: 'サービス案内',
      additional: '館内のご案内',
      area: '周辺情報',
      faq: 'よくあるご質問',
      info: 'インフォメーション',
      contact: 'お問い合わせ',
    },
    wifi: {
      ssid: 'SSID',
      password: 'パスワード',
      copy: 'コピー',
      copied: 'コピーしました',
    },
    actions: {
      viewPdf: 'PDF を見る',
      viewMap: '地図を見る',
      openLine: 'LINE を開く',
      openInstagram: 'Instagram を開く',
      detail: '詳細を見る',
      back: '案内トップへ戻る',
    },
    footer: {
      address: '住所',
      phone: '電話番号',
      email: 'メール',
    },
    tags: {
      restaurant: '飲食店',
      rental: 'レンタル',
      souvenir: 'お土産',
      shop: '小売店',
    },
    faq: {
      questionLabel: 'Q',
      answerLabel: 'A',
      answer: '回答',
    },
  },
  en: {
    siteName: 'Guest Guide',
    listTitle: 'Inns',
    listLead: 'Browse the in-house guide of each inn in Japanese or English.',
    langSwitch: '日本語',
    langLabel: 'Language',
    sections: {
      wifi: 'Wi-Fi',
      times: 'Schedule',
      services: 'Services',
      additional: 'In-house Info',
      area: 'Around Here',
      faq: 'FAQ',
      info: 'What’s New',
      contact: 'Contact',
    },
    wifi: {
      ssid: 'SSID',
      password: 'Password',
      copy: 'Copy',
      copied: 'Copied',
    },
    actions: {
      viewPdf: 'View PDF',
      viewMap: 'View on Map',
      openLine: 'Open LINE',
      openInstagram: 'Open Instagram',
      detail: 'View details',
      back: 'Back to guide',
    },
    footer: {
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
    },
    tags: {
      restaurant: 'Restaurant',
      rental: 'Rental',
      souvenir: 'Souvenir',
      shop: 'Shop',
    },
    faq: {
      questionLabel: 'Q',
      answerLabel: 'A',
      answer: 'Answer',
    },
  },
} as const satisfies Record<Lang, unknown>;

export type Dict = (typeof t)[Lang];

export function dict(lang: Lang): Dict {
  return t[lang];
}
