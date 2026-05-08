/**
 * 宿データの型定義。
 * microCMS などに差し替える際は、フェッチ層がこの型を満たすように
 * マッピングすれば各コンポーネントは無修正で動かせる。
 */

export type Lang = 'ja' | 'en' | 'zh';

/** 多言語テキストのペア。日本語以外が空のときは日本語にフォールバックする想定。 */
export interface LocalizedText {
  ja: string;
  en?: string;
  zh?: string;
}

/** 表示順と表示/非表示を持つ繰り返し項目の共通フィールド。 */
export interface RepeatableBase {
  order: number;
  isVisible: boolean;
}

export interface Header {
  nameJa: string;
  nameEn: string;
  nameZh?: string;
}

export interface WifiInfo {
  ssid: string;
  password: string;
}

export interface Footer {
  addressJa: string;
  addressEn: string;
  addressZh?: string;
  phone: string;
  email: string;
  instagramUrl?: string;
  lineUrl?: string;
}

export interface TimeItem extends RepeatableBase {
  titleJa: string;
  titleEn: string;
  titleZh?: string;
  time: string;
  bodyJa?: string;
  bodyEn?: string;
  bodyZh?: string;
}

export interface ServiceItem extends RepeatableBase {
  titleJa: string;
  titleEn: string;
  titleZh?: string;
  bodyJa?: string;
  bodyEn?: string;
  bodyZh?: string;
  imageUrl?: string;
  pdfUrl?: string;
}

export interface AdditionalItem extends RepeatableBase {
  titleJa: string;
  titleEn: string;
  titleZh?: string;
  bodyJa?: string;
  bodyEn?: string;
  bodyZh?: string;
  imageUrl?: string;
  pdfUrl?: string;
}

export const AREA_TAGS = [
  'restaurant',
  'rental',
  'souvenir',
  'shop',
] as const;

export type AreaTag = (typeof AREA_TAGS)[number];

export interface AreaItem extends RepeatableBase {
  titleJa: string;
  titleEn: string;
  titleZh?: string;
  tags: AreaTag[];
  mapUrl?: string;
  bodyJa?: string;
  bodyEn?: string;
  bodyZh?: string;
  /** 店舗の外観・料理などのイメージ画像 */
  imageUrl?: string;
}

export interface FaqItem extends RepeatableBase {
  questionJa: string;
  questionEn: string;
  questionZh?: string;
  answerJa: string;
  answerEn: string;
  answerZh?: string;
}

export interface InfoItem extends RepeatableBase {
  imageUrl?: string;
  titleJa: string;
  titleEn: string;
  titleZh?: string;
  bodyJa?: string;
  bodyEn?: string;
  bodyZh?: string;
}

export interface Inn {
  slug: string;
  header: Header;
  wifi: WifiInfo;
  footer: Footer;
  times: TimeItem[];
  services: ServiceItem[];
  /** 館内のご案内。館内図もこの中の 1 アイテムとして登録する */
  additional: AdditionalItem[];
  area: AreaItem[];
  faq: FaqItem[];
  info: InfoItem[];
}

/**
 * 各セクションのページ識別子。URL の一部 (`/g/[slug]/[section]/`) に使う。
 * 宿トップ (`/g/[slug]/`) は Wi-Fi + これらへの導線で構成する。
 */
export const SECTIONS = [
  'times',
  'services',
  'additional',
  'area',
  'faq',
] as const;

export type Section = (typeof SECTIONS)[number];
