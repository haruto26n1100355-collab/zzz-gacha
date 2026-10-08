#!/bin/zsh
cd "$(dirname "$0")"

PORT=3000
URL="http://localhost:${PORT}/"

clear
echo ""
echo "  ZZZ ガチャ記録 — ローカルサーバー"
echo "  ----------------------------------------"

# 古いサーバーが残っていたら止める
if lsof -ti :${PORT} >/dev/null 2>&1; then
  echo "  ポート ${PORT} を使用中のプロセスを停止します..."
  kill $(lsof -ti :${PORT}) 2>/dev/null
  sleep 1
fi

echo "  サーバーを起動しています..."
ruby server.rb ${PORT} &
SRV_PID=$!

# 起動を待ってからブラウザを開く（最大10秒）
READY=0
for i in {1..33}; do
  if curl -s -o /dev/null --connect-timeout 1 "${URL}" 2>/dev/null; then
    READY=1
    break
  fi
  sleep 0.3
done

if [[ $READY -eq 1 ]]; then
  echo "  ブラウザを開きます: ${URL}"
  open "${URL}"
  echo ""
  echo "  ※ この黒い画面は閉じないでください（閉じると止まります）"
  echo "  終了: Ctrl+C"
  echo "  ----------------------------------------"
  echo ""
  wait $SRV_PID
else
  kill $SRV_PID 2>/dev/null
  echo ""
  echo "  エラー: サーバーを起動できませんでした。"
  echo "  ターミナルに表示された赤いメッセージを確認してください。"
  echo ""
  read "?  Enter で閉じる "
fi
