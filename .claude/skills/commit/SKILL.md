---
name: commit
description: 変更内容を論理的な粒度に分けて、適切なメッセージでコミットする。push は行わない
---

# /commit

ワーキングツリーの変更を点検し、適切な粒度のコミットを作成する。

## 手順

1. **状態を把握する**(以下を並列で実行):

- `git status`
- `git diff`(unstaged)
- `git diff --cached`(staged)
- `git log --oneline -10`(直近のコミット形式を学ぶ)

2. **粒度を判断する**:

- 単一の論理変更か?(機能追加 / バグ修正 / リファクタ / ドキュメント のいずれか1種類)
- 複数の独立した変更が混在している場合、**分割案を提示してユーザーに承認を取る**
  - 例: 「以下のように 3 コミットに分割します: ① 機能 A 追加 ② B のリファクタ ③ README 更新。よろしいですか?」

3. **コミット禁止対象を確認する**:

- シークレット系(`.env*`, `*.key`, `*.pem`, トークン、認証情報)
- 大きなビルド成果物・バイナリ
- `.gitignore` で除外されるべきもの
- 検出時はコミットを止め、ユーザーに報告

4. **メッセージを作成する**:

- **WHY を伝える**(WHAT は diff を見れば分かる)
- タイトル: 72 文字以内、命令形 / 現在形
- 直近の `git log` の形式に合わせる(プレフィックス・言語)
- 必要に応じ本文で背景・トレードオフ・関連 issue を補足

5. **ステージング & コミット**:

- `git add .` は **避ける**(意図しないファイル混入を防ぐため、対象ファイルを明示指定)
- heredoc で複数行メッセージを渡す
- メッセージ末尾に下記を付ける:
  `Co-Authored-By: Claude Code <noreply@anthropic.com>`

6. **完了確認**:

- `git status` で結果を確認(複数コミットに分割した場合は `git log --oneline -<n>` も)
- **push はしない**(別操作)

## やらないこと

- `--amend` での既存コミット書き換え(明示の依頼がある時のみ)
- `--no-verify` で pre-commit フックを迂回する
- リモートへの `git push`
- 関係のない大量の変更を 1 コミットに詰め込む
- 半完成・動作未検証の変更をコミットする

## メッセージの良い例 / 悪い例

良い例(WHY を伝える):

```
Make footer SNS links optional

Some inns don't have public Instagram or LINE accounts.
Treat both fields as optional and skip rendering when empty,
instead of showing dead links.

Co-Authored-By: Claude Code <noreply@anthropic.com>
```

悪い例(WHAT しか言わない):

```
Update Footer.astro
```
