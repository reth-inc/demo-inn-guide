# demo-inn-guide — 宿泊施設向け 多言語館内案内サイト（静的サンプル）

宿泊者向けの館内案内サイトを Astro + Tailwind CSS で組んだ静的サンプルです。
QR から飛んだスマホで Wi-Fi、お時間案内、サービス、周辺情報、FAQ などを
日本語 / 英語 / 中国語（簡体字）で閲覧できることを想定しています。

> このリポジトリは **静的サンプル** です。CMS / Cloudflare / R2 とは未連携で、
> ダミーデータからページを生成します。

## 必要環境

| ツール  | バージョン                                |
| ------- | ----------------------------------------- |
| Node.js | **v20.10 以上**（v22 / v24 でも動作確認） |
| npm     | v10 以上                                  |

## セットアップ・起動方法

```bash
npm install
npm run dev
```

ブラウザで http://localhost:4321/ を開くと宿一覧が表示されます。

### スマホなど別端末から確認したい場合（同一 Wi-Fi）

開発マシンと同じ Wi-Fi に繋がっているスマホ等から見るときは、
`dev:lan` スクリプト（内部で `astro dev --host` を実行）を使います。

```bash
npm run dev:lan
```

起動後にターミナルへ表示される `Network` の URL（例: `http://192.168.x.x:4321/`）を、
スマホのブラウザで開くか QR コードに変換して読み取ってください。

> 注意: `dev:lan` は同じネットワーク内の他端末からアクセス可能になるため、
> カフェ等の信頼できないネットワーク下では使わないでください。
> 通常開発は `npm run dev`（localhost のみ）で十分です。

そのほかのコマンド:

```bash
npm run build         # 静的ビルド（dist/ に出力）
npm run preview       # ビルド済みサイトのプレビュー
npm run check         # astro check による型・テンプレート検査
npm run format        # Prettier で整形
npm run format:check  # Prettier の差分チェック（CI 用）
npm run lint          # ESLint
npm run lint:fix      # ESLint の自動修正
```

## ページ構成

- `/` — 宿一覧（デモトップ。ja / en / zh へのリンク）
- `/g/[slug]/` — 宿詳細（日本語）
- `/g/[slug]/en/` — 宿トップ（英語）
- `/g/[slug]/zh/` — 宿トップ（中国語）
- `/g/[slug]/[section]/` — セクションページ（日本語）
- `/g/[slug]/en/[section]/` — セクションページ（英語）
- `/g/[slug]/zh/[section]/` — セクションページ（中国語）

`getStaticPaths()` で `src/data/inns.ts` の各宿に対して静的に生成しています。

### 宿トップとセクションページ

宿トップ (`/g/[slug]/`) は **Wi-Fi + 各セクションへの導線カード** で構成しています。
各セクションは独立ページを持ち、そのセクションの全アイテムを表示します。

| section パラメータ | 対応データ       | ページ内容                                                    |
| ------------------ | ---------------- | ------------------------------------------------------------- |
| `times`            | `inn.times`      | お時間案内一覧                                                |
| `services`         | `inn.services`   | サービス案内一覧                                              |
| `additional`       | `inn.additional` | 館内のご案内一覧（**館内図もこの中の 1 アイテムとして登録**） |
| `area`             | `inn.area`       | 周辺情報一覧（タグ + 地図リンク + 画像）                      |
| `faq`              | `inn.faq`        | FAQ アコーディオン                                            |

各セクションのアイテムは画像 (`imageUrl`) と PDF (`pdfUrl`) を任意で持てるため、
**館内図は「館内のご案内」の AdditionalItem として、画像 + PDF 付きで登録します**。
専用の `floorMap` フィールドは持たず、CMS 移行時もアイテムを 1 件追加するだけで済みます。

**インフォメーション (`inn.info`) は専用セクションページを持ちません**。
クーポン等を目立たせるため、宿トップに「お得情報 / 今のおすすめ」として直接フィーチャー表示しています。

表示中アイテムが 0 のセクションはページ自体が生成されず、宿トップの導線カードからも除外されます。

サンプル URL:

- http://localhost:4321/g/iriyamato/
- http://localhost:4321/g/iriyamato/en/
- http://localhost:4321/g/iriyamato/zh/
- http://localhost:4321/g/iriyamato/services/
- http://localhost:4321/g/iriyamato/en/faq/
- http://localhost:4321/g/iriyamato/zh/area/

## ディレクトリ構成

```
src/
  components/
    layout/      # BaseLayout, Header, Footer, LanguageSwitcher,
                 # InnPage(=ハブ), SectionPage, SectionLinkCard
    sections/    # Wifi, Map, Times, Services, Area, Faq, Info（全アイテム表示型）
    blocks/      # Card, Badge, Button
    common/      # SectionTitle
  data/
    inns.ts      # ダミー宿データ + getAllInns / getInnBySlug
                 # + hasSectionContent / getAllSectionParams
  lib/
    types.ts     # Inn / 各セクションの型 + SECTIONS / Section / Lang
    i18n.ts      # UI 文言の辞書（ja / en / zh）
    helpers.ts   # pickText / visibleSorted / innPath / sectionPath
                 # + langLinks / sectionLangLinks
  pages/
    index.astro
    g/[slug]/
      index.astro                  # /g/[slug]/              ja 宿トップ（ハブ）
      [section]/index.astro        # /g/[slug]/[section]/    ja セクションページ
      en/
        index.astro                # /g/[slug]/en/           en 宿トップ
        [section]/index.astro      # /g/[slug]/en/[section]/ en セクションページ
      zh/
        index.astro                # /g/[slug]/zh/           zh 宿トップ
        [section]/index.astro      # /g/[slug]/zh/[section]/ zh セクションページ
  styles/
    global.css   # Tailwind v4 + テーマトークン
```

## ダミーデータの編集箇所

宿のすべてのコンテンツは `src/data/inns.ts` に集約しています。
型は `src/lib/types.ts` の `Inn` を参照してください。

### 既存宿の内容を変える

`src/data/inns.ts` の対応する宿オブジェクトを編集します。
保存すると dev サーバーが自動で再描画します。

### 新しい宿を追加する

`src/data/inns.ts` の `inns` 配列に新しい宿オブジェクトを追加するだけで、
`/g/<slug>/`、`/g/<slug>/en/`、`/g/<slug>/zh/` の各ページが自動生成されます。

```ts
export const inns: Inn[] = [
  // 既存
  { slug: "iriyamato" /* ... */ },
  // 追加
  {
    slug: "my-new-inn",
    header: { nameJa: "新しい宿", nameEn: "My New Inn", nameZh: "新酒店" },
    wifi: { ssid: "my-wifi", password: "pass-1234" },
    footer: {
      /* ... */
    },
    times: [],
    services: [],
    additional: [],
    area: [],
    faq: [],
    info: [],
  },
];
```

### 表示制御

繰り返しセクション（時間案内・サービス・追加案内・周辺情報・FAQ・お得情報）は

- `order: number` … 並び順（昇順）
- `isVisible: boolean` … false で非表示

を持ちます。`isVisible: false` の項目は表示されません。

英語・中国語フィールドが空のときは日本語にフォールバックします（`src/lib/helpers.ts` の `pickText`）。

## 主要コンポーネントの責務

| コンポーネント                   | 役割                                                                                         |
| -------------------------------- | -------------------------------------------------------------------------------------------- |
| `layout/BaseLayout.astro`        | `<html>` / `<head>` / 共通スタイルロード                                                     |
| `layout/Header.astro`            | 上部固定の宿名表示 + 言語切替                                                                |
| `layout/Footer.astro`            | 住所・電話・メール・SNS リンク                                                               |
| `layout/LanguageSwitcher.astro`  | ja / en / zh の言語切り替え（現在言語をハイライト）                                          |
| `layout/InnPage.astro`           | 宿トップ（ハブ）。Wi-Fi + 各セクションへの導線カードを並べる                                 |
| `layout/SectionPage.astro`       | セクションページの共通レイアウト。`section` プロップで内容を切替                             |
| `layout/SectionLinkCard.astro`   | 宿トップに並べる、各セクションページへのリンクカード（アイコン + タイトル + 説明 + chevron） |
| `sections/WifiSection.astro`     | SSID / パスワード表示。タップで選択可能                                                      |
| `sections/TimesSection.astro`    | チェックイン等のお時間案内一覧                                                               |
| `sections/ServicesSection.astro` | サービス案内 / 追加案内一覧（PDF ボタン付き）                                                |
| `sections/AreaSection.astro`     | 周辺情報一覧（タグ + 地図リンク）                                                            |
| `sections/FaqSection.astro`      | `<details>` ベースのアコーディオン FAQ                                                       |
| `sections/InfoSection.astro`     | お得情報一覧                                                                                 |

各 `sections/*` は `showTitle` プロップを取り、SectionPage 側でヒーロー見出しを別途出すときは `false` にする（宿トップでは現状未使用だが拡張用）。
| `blocks/Card.astro` | 角丸 + 枠線の汎用カード |
| `blocks/Badge.astro` | タグ用バッジ（neutral / accent / warning） |
| `blocks/Button.astro` | リンク兼ボタン（primary / secondary / ghost） |
| `common/SectionTitle.astro` | 見出し + サブタイトル |

## デザインの方針

- スマホファースト（max-w-screen-md で PC でも崩れない）
- 白ベース + 柔らかいグレー + ほのかな緑系アクセント
- テーマカラーは `src/styles/global.css` の `@theme` で CSS 変数化
- アイコンはインライン SVG（外部依存なし）

## 今後の差し替えポイント

### microCMS に置き換える場合

`src/data/inns.ts` がデータの境界になっています。

1. `getAllInns()` / `getInnBySlug(slug)` を **microCMS から取得する実装** に置き換える
   - 例: `microcms-js-sdk` の `client.get({ endpoint: 'inns' })` で一覧を取得し、
     `Inn` 型へマッピング
2. 各 `.astro` の `getStaticPaths()` がこれらの関数を呼ぶだけなので、
   コンポーネント側は無修正
3. `Inn` 型に合わせて microCMS のスキーマを設計するのが楽
   （`titleJa` / `titleEn` / `titleZh` のように 1 件で多言語フィールドを持つ）
4. Cloudflare Pages へのビルド時に webhook でリビルドさせるか、
   ISR/SSR が必要なら Astro の `output: 'server'` + Cloudflare adapter を導入

### 画像 / PDF を Cloudflare R2 に置く場合

現在は `imageUrl` / `pdfUrl` を URL 文字列で持つだけのため、
**R2 の公開 URL（または Workers 経由の配信 URL）をそのまま入れれば動きます**。

- 公開バケットの場合: `https://pub-xxxx.r2.dev/...` を直接データに入れる
- Workers でアクセス制御する場合: `https://images.example.com/<key>` のような
  カスタムドメインを設定し、その URL を使う

`<img loading="lazy" decoding="async">` 指定済みなので、配信元が変わっても
コンポーネント側の修正は不要です。

### Cloudflare Pages にデプロイする場合

`astro build` の出力（`dist/`）をそのまま静的サイトとして公開できます。

1. Cloudflare Pages で新規プロジェクトを作成
2. ビルドコマンド: `npm run build`
3. 出力ディレクトリ: `dist`
4. 環境変数（microCMS のキー等）は Cloudflare ダッシュボードで設定
5. ルーティングは `trailingSlash: 'always'` + `build.format: 'directory'`
   （`astro.config.mjs` 参照）にしてあるので、Pages の標準挙動と整合

将来 Workers でゲート（宿泊者しかアクセスできない URL 署名等）を入れる場合は、
Pages Functions または Workers Routes を使うのが素直です。

## 改善余地（メモ）

- セクションごとのアイコンを SVG ライブラリ化していない（重複が増えたら lucide 等の導入を検討）
- 画像最適化は未対応（`@astrojs/image` / `astro:assets` への置き換え余地あり）
- セクションページからのアイテム間遷移は未実装（同一セクション内のリスト表示なのでスクロールで完結する想定）
- 宿一覧 (`/`) はデモ用のトップなので、本番では認証 / 非公開化することを想定
- Wi-Fi の「コピーボタン」はスペースの都合で省略しタップ選択 (`select-all`) のみ対応
  （JS で Clipboard API を入れる余地あり）
