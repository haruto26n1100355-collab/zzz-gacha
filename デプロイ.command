#!/bin/zsh
cd "$(dirname "$0")"

clear
echo ""
echo "  ZZZ ガチャ記録 — Firebase Hosting デプロイ"
echo "  ----------------------------------------"

if ! command -v node >/dev/null 2>&1; then
  echo ""
  echo "  エラー: Node.js がありません。"
  echo "  https://nodejs.org/ から LTS をインストールしてください。"
  echo ""
  read "?  Enter で閉じる "
  exit 1
fi

if [[ ! -d node_modules/firebase-tools ]]; then
  echo "  初回: firebase-tools をインストール中..."
  npm install
  if [[ $? -ne 0 ]]; then
    echo ""
    echo "  エラー: npm install に失敗しました。"
    read "?  Enter で閉じる "
    exit 1
  fi
fi

if ! npx firebase projects:list >/dev/null 2>&1; then
  echo ""
  echo "  Firebase に未ログインです。ブラウザが開きます..."
  npx firebase login
fi

echo ""
echo "  デプロイ中..."
echo ""
npx firebase deploy --only hosting
STATUS=$?

echo ""
if [[ $STATUS -eq 0 ]]; then
  echo "  完了: https://zzz-gacha-tracker.web.app"
  echo "  ブラウザで開きます..."
  open "https://zzz-gacha-tracker.web.app"
else
  echo "  エラー: デプロイに失敗しました（上の赤いメッセージを確認）"
fi
echo "  ----------------------------------------"
echo ""
read "?  Enter で閉じる "
