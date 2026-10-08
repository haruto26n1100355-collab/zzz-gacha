# Firebase で Google ログイン + 履歴同期

## できること

- **Google（Gmail）アカウント**でログイン（Firebase Authentication）
- 同じアカウントなら **スマホ・PC・別ブラウザ**で同じガチャ履歴
- 未ログイン時は今まで通り **localStorage のみ**（ゲスト利用）

## Firebase コンソールでやること

### 1. Authentication

1. **Authentication** → **Sign-in method**
2. **Google** を有効化
3. サポートメールを選択して保存

### 2. Firestore Database

1. **Firestore Database** → データベースを作成（テストモードでも可、後でルールを差し替え）
2. **ルール** タブに `firestore.rules` の内容を貼り付けて公開

### 3. 承認済みドメイン

**Authentication** → **Settings** → **Authorized domains**

- `localhost`（ローカル開発用）
- 本番 URL（例: `xxxx.web.app`, 独自ドメイン）

`file://` で HTML を開いただけでは Google ログインは **動きません**。  
`npx serve .` や Firebase Hosting など **http(s) で配信**してください。

### 4. Web アプリ設定

1. プロジェクトの設定（歯車）→ **マイアプリ** → Web を追加
2. 表示された `firebaseConfig` を `firebase-config.js` にコピー  
   （`firebase-config.example.js` を複製してリネーム）

```bash
cd ~/Desktop/work
cp firebase-config.example.js firebase-config.js
# firebase-config.js を編集
```

### 5. ローカルで試す

```bash
cd ~/Desktop/work
npx --yes serve -l 3000
```

ブラウザで http://localhost:3000 を開き、「Google でログイン」を試す。

## データの保存場所

```
Firestore: users/{ログインUID}
  - records: [ ... ]   ← 今の localStorage と同じ配列
  - updatedAt
```

UID は Google アカウントごとに固定なので、**同じ Gmail = 同じ履歴**になります。

## 初回ログイン時の動き

| クラウド | この端末（local） | 結果 |
|----------|-------------------|------|
| 空 | データあり | ローカルをクラウドにアップロード |
| データあり | 空 | クラウドを端末にダウンロード |
| 両方あり | 両方あり | **件数が多い方**を採用（簡易マージ） |

両方に別データがある場合は、エクスポートでバックアップを取ってからログインするのが安全です。
