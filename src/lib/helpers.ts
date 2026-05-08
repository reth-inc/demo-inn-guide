import type { Lang, RepeatableBase, Section } from "./types";

const BASE = import.meta.env.BASE_URL;

/** サイトが対応する全言語。表示順は言語スイッチャーの並び順に一致する。 */
export const ALL_LANGS = ["ja", "en", "zh"] as const satisfies readonly Lang[];

/** 言語スイッチャーなどに表示する短いラベル。 */
export const LANG_LABELS: Record<Lang, string> = {
  ja: "JA",
  en: "EN",
  zh: "中文",
};

/** URL に挟む言語セグメント（日本語はデフォルトなので空）。 */
const LANG_URL_SEGMENT: Record<Lang, string> = {
  ja: "",
  en: "en/",
  zh: "zh/",
};

/**
 * 多言語フィールドのうち、現在の言語に対応するテキストを返す。
 * 該当言語が空の場合は日本語にフォールバックする。
 */
export function pickText(
  lang: Lang,
  ja: string | undefined,
  en: string | undefined,
  zh?: string | undefined,
): string {
  if (lang === "en") {
    const v = (en ?? "").trim();
    if (v) return v;
  } else if (lang === "zh") {
    const v = (zh ?? "").trim();
    if (v) return v;
  }
  return (ja ?? "").trim();
}

/** 表示対象の繰り返し項目だけを order 昇順で返す。 */
export function visibleSorted<T extends RepeatableBase>(items: T[]): T[] {
  return items
    .filter((item) => item.isVisible)
    .slice()
    .sort((a, b) => a.order - b.order);
}

/** 宿の詳細ページの URL を返す。 */
export function innPath(slug: string, lang: Lang): string {
  return `${BASE}g/${slug}/${LANG_URL_SEGMENT[lang]}`;
}

/** セクションページの URL を返す。 */
export function sectionPath(
  slug: string,
  section: Section,
  lang: Lang,
): string {
  return `${BASE}g/${slug}/${LANG_URL_SEGMENT[lang]}${section}/`;
}

export interface LangLink {
  lang: Lang;
  label: string;
  href: string;
  isCurrent: boolean;
}

/** 宿トップに対する全言語リンクを返す。LanguageSwitcher に渡す。 */
export function langLinks(slug: string, current: Lang): LangLink[] {
  return ALL_LANGS.map((lang) => ({
    lang,
    label: LANG_LABELS[lang],
    href: innPath(slug, lang),
    isCurrent: lang === current,
  }));
}

/** セクションページに対する全言語リンクを返す。 */
export function sectionLangLinks(
  slug: string,
  section: Section,
  current: Lang,
): LangLink[] {
  return ALL_LANGS.map((lang) => ({
    lang,
    label: LANG_LABELS[lang],
    href: sectionPath(slug, section, lang),
    isCurrent: lang === current,
  }));
}

/** 文字列が空でないかをチェックする小さなヘルパー。 */
export function nonEmpty(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
