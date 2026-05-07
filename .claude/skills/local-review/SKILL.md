---
name: local-review
description: ローカルの変更内容(working tree または指定範囲)を多角的にレビューし、必須修正/推奨/任意の3段階で報告する
---

# /local-review

ワーキングツリーの変更(または指定範囲)を以下の観点で点検する。

## 対象範囲の決定

- 引数なし: working tree の差分(staged + unstaged)を対象
- 引数あり: `git diff <range>` 互換(例: `HEAD~1..HEAD`、コミットハッシュ、ブランチ名)

最初に `git status` / `git diff` / `git diff --cached` で対象を確認すること。

## レビュー観点

### 1. 正しさ・型

- TypeScript strict 違反(`any` の濫用、暗黙の null 許容、安易な `as` キャスト)
- エッジケース(空配列、`undefined`、エラーパス)が考慮されているか
- 型は最小限に絞られているか(用途のない汎用化を避ける)

### 2. プロジェクト規約(`CLAUDE.md` 準拠)

- **i18n**: 多言語テキストは `pickText` 経由か?(`if (lang === 'en')` などの直書き分岐をしていないか)
- **繰り返し項目**: `RepeatableBase`(`order` / `isVisible`)を満たし、表示時に `visibleSorted()` を通しているか
- **空セクション**: 表示アイテム 0 のとき `hasSectionContent` で除外する仕組みを踏襲しているか
- **館内図**: 専用フィールドではなく `additional` 配列の 1 アイテムとして扱っているか
- **URL ヘルパー**: `innPath` / `sectionPath` / `altLangPath` / `altSectionPath` を使っているか(`/g/${slug}/` のような手書き連結になっていないか)
- **trailing slash**: 末尾 `/` を維持しているか(`/g/iriyamato/` 形)
- **UI 文言**: 固定ラベル(チェックイン、Wi-Fi 等)は `src/lib/i18n.ts` を経由しているか

### 3. 公開リポジトリ前提のトーン

- `src/pages/*.astro` / `README.md` / `package.json#description` などの **user-facing ファイル** に内部用語(「営業」「提案」「社内向け」「試作」など)が混入していないか
- 新規サンプル宿の連絡先(電話・メール・URL・SSID)が `.example.com` / `00-0000` などの RFC 予約値・明らかなダミーになっているか
- 実在する人名・住所・電話・メールが意図せず混入していないか

### 4. 設計・粒度

- 変更が単一の責務に絞られているか(関係ない修正が混ざっていないか)
- 早すぎる抽象化(現時点で 1 用途しかない汎用クラス・ヘルパー)を導入していないか
- 不要なコメントを増やしていないか(WHAT を説明するコメントは削除推奨。WHY や非自明な制約以外は残さない)
- 防御的すぎるエラーハンドリングを入れていないか(内部呼び出し境界では型・契約を信頼する)

### 5. アクセシビリティ・UX(画面側変更時)

- `<img>` に `alt` が付いているか(装飾なら `alt=""`)
- インタラクティブ要素にラベル(`aria-label` / `aria-current` / 適切な `<button>` vs `<a>`)
- スマホ表示で崩れないか(`max-w-screen-md`、タップ領域 ≥ 44px)
- 言語切替で URL が壊れないか

### 6. セキュリティ

- ユーザー入力を `set:html` で生埋め込みしていないか(Astro は基本エスケープするが、明示の生 HTML 注入は危険)
- 外部リンク `target="_blank"` に `rel="noopener"` が付いているか
- `.gitignore` で除外すべきもの(シークレット、ビルド成果物)が除外されているか

### 7. 設定整合

- `package.json#name` / `description`, `README.md` タイトルが整合しているか
- `astro.config.mjs` の設定(`trailingSlash`、`build.format`)と実装が一致しているか
- `tsconfig.json` の `include` / `exclude` が現状を反映しているか

## 報告フォーマット

各指摘に **重要度 + ファイル:行 + 具体的な改善案**を必ず添える。

- 🔴 **必須修正**: 動作不良 / 公開上の問題 / セキュリティ
- 🟡 **推奨**: 規約違反 / 整合性の懸念 / 保守性低下
- 💡 **任意**: 代替案・リファクタ機会など提案レベル

最後に総評を 1 行(承認 / 修正後再レビュー / 大幅な設計見直し が必要 のいずれか)。

## 出力例

```
レビュー対象: working tree(2 files, +47 -3)

🔴 必須修正
  - src/pages/index.astro:21
    "営業 / 提案用" という内部用語は public リポジトリの user-facing コピー
    に含めない方針(CLAUDE.md「公開リポジトリ前提」)。
    → 「デモ用」または「サンプル」に置き換える。

🟡 推奨
  - src/components/sections/AreaSection.astro:14
    `inn.area.filter(it => it.isVisible).sort(...)` を直書きしている。
    → 規約により `visibleSorted(inn.area)` を使う。

💡 任意
  - src/data/inns.ts:42
    `titleEn` が空の項目あり。フォールバックで動くが、英語ページの UX を
    上げるなら英訳を入れる選択肢もある。

総評: 🟡 を 1 件直してから再レビュー。
```
