import type { Lang, RepeatableBase, Section } from './types';

/**
 * 日本語/英語フィールドのうち、現在の言語に対応するテキストを返す。
 * 英語が空の場合は日本語にフォールバックする。
 */
export function pickText(
  lang: Lang,
  ja: string | undefined,
  en: string | undefined,
): string {
  if (lang === 'en') {
    const v = (en ?? '').trim();
    if (v) return v;
  }
  return (ja ?? '').trim();
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
  return lang === 'en' ? `/g/${slug}/en/` : `/g/${slug}/`;
}

/** 現在のページに対する反対言語のリンク先を返す。 */
export function altLangPath(slug: string, current: Lang): string {
  return innPath(slug, current === 'ja' ? 'en' : 'ja');
}

/** 文字列が空でないかをチェックする小さなヘルパー。 */
export function nonEmpty(value: string | undefined | null): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

/** セクションページの URL を返す。 */
export function sectionPath(
  slug: string,
  section: Section,
  lang: Lang,
): string {
  return lang === 'en'
    ? `/g/${slug}/en/${section}/`
    : `/g/${slug}/${section}/`;
}

/** セクションページに対する反対言語のリンク先を返す。 */
export function altSectionPath(
  slug: string,
  section: Section,
  current: Lang,
): string {
  return sectionPath(slug, section, current === 'ja' ? 'en' : 'ja');
}
