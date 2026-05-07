# CLAUDE.md

宿泊施設向け 多言語館内案内サイトのデモ（Astro + Tailwind CSS v4）。
すべてのページは `src/data/inns.ts` のダミーデータから静的生成される。

## Stack

- Astro 5.x（`trailingSlash: 'always'`、`build.format: 'directory'`）
- Tailwind CSS v4（`@tailwindcss/vite`）
- TypeScript strict、パスエイリアス `~/*` → `src/*`

## コマンド

| コマンド | 用途 |
| --- | --- |
| `npm run dev` | dev サーバー（localhost のみ） |
| `npm run dev:lan` | dev サーバー（`--host`、同一 LAN の他端末から接続可） |
| `npm run build` | `dist/` へ静的ビルド |
| `npm run preview` | ビルド済みのプレビュー |
| `npm run check` | `astro check`（型・テンプレート検査） |

## データの集約点

宿のすべてのコンテンツは **`src/data/inns.ts`** に集約している。

- `inns: Inn[]` が単一の真実の源（SoT）。型は `src/lib/types.ts` の `Inn`
- ページからは `getAllInns()` / `getInnBySlug(slug)` 経由で参照
- 宿を追加: `inns` に `Inn` を 1 件追加するだけで、`/g/<slug>/` と `/g/<slug>/en/` および各セクションページが `getStaticPaths` 経由で自動生成される
- 将来 microCMS / R2 などに切り替えるときは `getAllInns` / `getInnBySlug` の中身だけ差し替える（各 `.astro` は無修正）

## 規約

- **多言語フィールド**は `nameJa` / `nameEn` のように `Ja` / `En` ペアで持つ。`En` が空なら `Ja` にフォールバックする（`src/lib/helpers.ts` の `pickText`）。**テキスト分岐は必ず `pickText` を通す**
- **繰り返し項目**（`times` / `services` / `additional` / `area` / `faq` / `info`）は `RepeatableBase` を継承し `order: number`（昇順）・`isVisible: boolean` を持つ。表示時は `visibleSorted()` を通す
- **空セクションは生成しない**: 表示すべきアイテムが 0 の場合、`hasSectionContent()` が false を返し、ページが生成されず宿トップの導線カードからも除外される
- **館内図は専用フィールドを持たない**: `additional` 内の 1 アイテムとして `imageUrl` + `pdfUrl` で登録する。スキーマをフラットに保ち、CMS 移行時もアイテム追加だけで済むため
- **インフォメーション（`info`）は専用セクションページを持たない**: 宿トップに直接フィーチャー表示する
- **URL 構築は手書きせず** `innPath` / `sectionPath` / `altLangPath` / `altSectionPath`（`src/lib/helpers.ts`）を使う
- **trailing slash は必須**: `/g/iriyamato/` の形（末尾 `/` あり）で書く
- **UI 文言の辞書**は `src/lib/i18n.ts`。固定ラベル（チェックイン/Wi-Fi 等）はここに置く

## レイヤー

- `src/components/layout/` — BaseLayout、Header、Footer、LanguageSwitcher、InnPage（ハブ）、SectionPage、SectionLinkCard
- `src/components/sections/` — 各セクションの本体（Wifi / Map / Times / Services / Area / Faq / Info）
- `src/components/blocks/` — Card / Badge / Button
- `src/components/common/` — SectionTitle 等
- `src/styles/global.css` — Tailwind v4 + `@theme` のテーマトークン

## 公開リポジトリ前提

このリポジトリは public。`src/pages/*.astro`、README、`package.json#description` などユーザーに見える文章は **中立的なデモのトーン**を保つ（内部メモ的な表現は避ける）。
新しいサンプル宿を追加するときは、連絡先（電話・メール・URL・SSID）に `.example.com` や `00-0000` などの RFC 予約値・明らかなダミー値を使う。

## 触らない / 期待しないこと

- `dist/` は触らない・コミットしない（`.gitignore` 済み、ビルドの再生成物）
- 認証・CMS 連携・画像最適化はまだ未実装（README「今後の差し替えポイント」参照）
- テストコードはまだない
