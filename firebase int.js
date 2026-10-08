const firebaseConfig = {
  apiKey: 'AIzaSyCOpf2aXd7BPLIoiFXqJRzFG2_GgmKxFSY',
  authDomain: 'zzz-gacha-tracker.firebaseapp.com',
  projectId: 'zzz-gacha-tracker',
  storageBucket: 'zzz-gacha-tracker.firebasestorage.app',
  messagingSenderId: '1052303250566',
  appId: '1:1052303250566:web:574b285ae7b39ccd4aad07',
  measurementId: 'G-7LZBKQ2N1Q',
};
if (typeof firebase !== 'undefined') {
  // ゲームセレクターのドロップダウン制御（Firebase の外に置く）
const selectorContainer = document.querySelector('.game-selector-container');
const btnGameSelector   = document.getElementById('btn-game-selector');

btnGameSelector.addEventListener('click', (e) => {
  e.stopPropagation();
  selectorContainer.classList.toggle('open');
});

document.addEventListener('click', () => selectorContainer.classList.remove('open'));

document.querySelectorAll('.game-dropdown-item').forEach(item => {
  item.addEventListener('click', (e) => {
    const selectedGame = e.target.getAttribute('data-game');
    _currentGame = selectedGame;
    switchGameUI(selectedGame);
    selectorContainer.classList.remove('open');
    refreshNamePickers();
    // ゲームごとに別データをロード（Firebase優先、なければローカル）
    if (firebaseUser && cloudReady) {
      loadFromCloud(firebaseUser.uid).catch(() => { loadLocal(); renderList(); });
    } else {
      loadLocal();
      renderList();
    }
  });
});

  initFirebaseAuth();
} else {
  console.error('Firebase SDK が読み込めません（広告ブロック等）');

const selectorContainer2 = document.querySelector('.game-selector-container');
const btnGameSelector2 = document.getElementById('btn-game-selector');
btnGameSelector2.addEventListener('click', (e) => { e.stopPropagation(); selectorContainer2.classList.toggle('open'); });
document.addEventListener('click', () => selectorContainer2.classList.remove('open'));
document.querySelectorAll('.game-dropdown-item').forEach(item => {
  item.addEventListener('click', (e) => {
    const selectedGame = e.target.getAttribute('data-game');
    _currentGame = selectedGame;
    switchGameUI(selectedGame);
    selectorContainer2.classList.remove('open');
    if (typeof refreshNamePickers === 'function') refreshNamePickers();
    loadLocal();
    renderList();
  });
});


  // --- 追加：原神用の簡易マスターデータ（サジェスト用） ---
const GENSHIN_MASTER = {
  character: [
    { name: '神里綾華', attr: '氷' }, { name: '鍾離', attr: '岩' }, { name: '雷電将軍', attr: '雷' },
    { name: 'ナヒーダ', attr: '草' }, { name: 'フリーナ', attr: '水' }, { name: 'ヌヴィレット', attr: '水' },
    { name: '楓原万葉', attr: '風' }, { name: '夜蘭', attr: '水' }
  ],
  wpn: [
    { name: '霧切の廻光', attr: '全て' }, { name: '護摩の杖', attr: '全て' }, { name: '草薙の稲光', attr: '全て' }
  ]
};

let currentGame = 'zzz';
const selectorContainer = document.querySelector('.game-selector-container');
const btnGameSelector = document.getElementById('btn-game-selector');
const currentGameLabel = document.getElementById('current-game-label');

// ドロップダウンの開閉制御
btnGameSelector.addEventListener('click', (e) => { e.stopPropagation(); selectorContainer.classList.toggle('open'); });
document.addEventListener('click', () => selectorContainer.classList.remove('open'));

document.querySelectorAll('.game-dropdown-item').forEach(item => {
  item.addEventListener('click', (e) => {
    const selectedGame = e.target.getAttribute('data-game');
    if (selectedGame !== currentGame) switchGame(selectedGame);
    selectorContainer.classList.remove('open');
  });
});

// ゲーム切り替えコア処理
function switchGame(game) {
  currentGame = game;
  _currentGame = game;
  switchGameUI(game);
  loadLocal();
  renderList();
}

function updateStateLabels() {
  const banner = getVal('grp-banner');
  const l1 = document.getElementById('btn-lose-1');
  const l2 = document.getElementById('btn-lose-2');
  const l3 = document.getElementById('btn-lose-3');
  const wl1 = document.getElementById('btn-wpn-lose-1');
  const wl2 = document.getElementById('btn-wpn-lose-2');
  const wl3 = document.getElementById('btn-wpn-lose-3');

  if (currentGame === 'zzz') {
    if (l1) { l1.textContent = '確定'; l1.setAttribute('data-val', '確定'); }
    if (l2) { l2.textContent = 'すり抜け'; l2.setAttribute('data-val', 'すり抜け'); }
    if (l3) { l3.textContent = '50%'; l3.setAttribute('data-val', '50%'); }
    if (wl1) { wl1.textContent = '確定'; wl1.setAttribute('data-val', '確定'); }
    if (wl2) { wl2.textContent = 'すり抜け'; wl2.setAttribute('data-val', 'すり抜け'); }
    if (wl3) { wl3.textContent = '75%'; wl3.setAttribute('data-val', '75%'); }
  } else {
    if (l1) { l1.textContent = '確定'; l1.setAttribute('data-val', '確定'); }
    if (l2) { l2.textContent = 'すり抜け'; l2.setAttribute('data-val', 'すり抜け'); }
    if (l3) { l3.textContent = '50%'; l3.setAttribute('data-val', '50%'); }
    if (wl1) { wl1.textContent = '限定'; wl1.setAttribute('data-val', '限定'); }
    if (wl2) { wl2.textContent = '恒常'; wl2.setAttribute('data-val', '恒常'); }
    if (wl3) { wl3.textContent = '命定値1'; wl3.setAttribute('data-val', '命定値1'); }
  }
}
// 既存の関数をフックしてスタレ用ストレージにも対応させる
const _loadLocal = loadLocal;
loadLocal = function() {
  const key = _currentGame === 'zzz' ? 'gacha_records' : _currentGame === 'genshin' ? 'gacha_records_genshin' : 'gacha_records_stare';
  const s = localStorage.getItem(key);
  records = s ? JSON.parse(s) : [];
};

const _saveLocal = saveLocal;
saveLocal = function() {
  const key = _currentGame === 'zzz' ? 'gacha_records' : _currentGame === 'genshin' ? 'gacha_records_genshin' : 'gacha_records_stare';
  localStorage.setItem(key, JSON.stringify(records));
};

// Firebaseのコレクション名切り替え対応
if (typeof db !== 'undefined') {
  const _fetchFirebase = fetchFirebase;
  fetchFirebase = async function() {
    if (!user) return;
    try {
      const col = _currentGame === 'zzz' ? 'records' : _currentGame === 'genshin' ? 'genshin_records' : 'stare_records';
      const snap = await db.collection('users').doc(user.uid).collection(col).get();
      records = snap.docs.map(d => d.data());
      renderList();
    } catch(e) {
      console.error(e);
      loadLocal();
      renderList();
    }
  };

  const _syncSave = syncSave;
  syncSave = async function() {
    if (!user) { saveLocal(); renderList(); return; }
    try {
      const col = _currentGame === 'zzz' ? 'records' : _currentGame === 'genshin' ? 'genshin_records' : 'stare_records';
      const b = db.collection('users').doc(user.uid).collection(col);
      const snap = await b.get();
      const batch = db.batch();
      snap.docs.forEach(d => batch.delete(d.ref));
      records.forEach(r => { const ref = b.doc(r.id); batch.set(ref, r); });
      await batch.commit();
      renderList();
    } catch (e) { console.error(e); alert('Cloud Sync Error'); }
  };
}

// ガチャタイプ切り替え時に状態文言を連動させる
document.getElementById('grp-banner').querySelectorAll('.btn-toggle').forEach(b => {
  b.addEventListener('click', () => { setTimeout(updateStateLabels, 10); });
});

// サジェスト機能を原神データにも対応させる
const initNamePicker = () => {
  const inp = document.getElementById('char-name-input');
  const sug = document.getElementById('char-suggestions');
  const flt = document.getElementById('char-filter-attr');
  if (!inp || !sug) return;

  function update() {
    const b = cfg.getBanner();
    let list = [];
    if (currentGame === 'zzz') {
      if (b === 'agent') list = AGENT_ROSTER || [];
      if (b === 'wpn') list = WEAPON_ROSTER || [];
      if (b === 'bangboo') list = (typeof BANGBOO_ROSTER !== 'undefined') ? BANGBOO_ROSTER : [];
    } else {
      list = GENSHIN_MASTER[b] || [];
    }
    const f = flt ? flt.querySelector('.btn-toggle.active').getAttribute('data-val') : '';
    const v = inp.value.toLowerCase();

    const res = list.filter(x => {
      if (f && x.attr !== '全て' && x.attr !== f && currentGame === 'zzz') return false;
      if (v && !x.name.toLowerCase().includes(v)) return false;
      return true;
    });

    if (res.length === 0) { sug.style.display = 'none'; return; }
    sug.innerHTML = res.map(x => `<div class="suggest-item" style="cursor: pointer; padding: 8px; border-bottom: 1px solid var(--border);">${x.name}</div>`).join('');
    sug.style.display = 'block';

    // サジェストされた名前をクリックした時の処理
    sug.querySelectorAll('.suggest-item').forEach(item => {
      item.addEventListener('click', () => {
        const selectedName = item.textContent;
        inp.value = selectedName; // 入力欄に名前をセット
        sug.style.display = 'none';   // サジェストを閉じる
        
        // 【修正点】このファイルにある正しい関数「renderCharacterDetails」を呼び出す
        if (typeof renderCharacterDetails === 'function') {
          renderCharacterDetails(selectedName);
        }
      });
    });
  }

  inp.addEventListener('focus', update);
  inp.addEventListener('input', update);
  
  // 外側をクリックしたときにサジェストを閉じる
  document.addEventListener('click', (e) => {
    if (e.target !== inp && e.target !== sug && !sug.contains(e.target)) {
      sug.style.display = 'none';
    }
  });

  if (flt) {
    flt.querySelectorAll('.btn-toggle').forEach(btn => {
      btn.addEventListener('click', () => setTimeout(update, 50));
    });
  }
};
} // end: if (typeof firebase !== 'undefined') else block