/* ──────────────────────────────────────────────────────────
   DnDWeb – Application Logic
   ────────────────────────────────────────────────────────── */

'use strict';

/* ── Ability-score modifiers ──────────────────────────────── */
const STAT_IDS = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

function calcMod(score) {
  return Math.floor((score - 10) / 2);
}

function formatMod(mod) {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

function updateMod(statId) {
  const score = parseInt(document.getElementById(statId).value, 10) || 10;
  const mod = calcMod(score);
  document.getElementById(`${statId}-mod`).textContent = formatMod(mod);
}

STAT_IDS.forEach((id) => {
  const el = document.getElementById(id);
  el.addEventListener('input', () => updateMod(id));
  updateMod(id);
});

/* ── HP bar ───────────────────────────────────────────────── */
function updateHPBar() {
  const current = parseInt(document.getElementById('hp-current').value, 10) || 0;
  const max = parseInt(document.getElementById('hp-max').value, 10) || 1;
  const pct = Math.max(0, Math.min(100, (current / max) * 100));
  const bar = document.getElementById('hp-bar');
  bar.style.width = `${pct}%`;
  if (pct > 50) {
    bar.style.background = '#27ae60';
  } else if (pct > 25) {
    bar.style.background = '#f39c12';
  } else {
    bar.style.background = '#c0392b';
  }
}

document.getElementById('hp-current').addEventListener('input', updateHPBar);
document.getElementById('hp-max').addEventListener('input', updateHPBar);
updateHPBar();

function adjustHP(sign) {
  const delta = parseInt(document.getElementById('hp-delta').value, 10) || 0;
  const maxEl = document.getElementById('hp-max');
  const curEl = document.getElementById('hp-current');
  const max = parseInt(maxEl.value, 10) || 0;
  let current = parseInt(curEl.value, 10) || 0;
  current = Math.max(0, Math.min(max, current + sign * delta));
  curEl.value = current;
  updateHPBar();
}

/* ── Dice roller ──────────────────────────────────────────── */
const diceHistory = [];
const MAX_HISTORY = 20;

function rand(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function rollDice(sides) {
  const count = parseInt(document.getElementById('dice-count').value, 10) || 1;
  const modifier = parseInt(document.getElementById('dice-modifier').value, 10) || 0;
  const adv = document.getElementById('dice-adv').value;

  let rolls = [];

  if (count === 1 && adv !== 'none') {
    // Advantage / disadvantage: roll twice, keep best or worst
    const r1 = rand(sides);
    const r2 = rand(sides);
    const kept = adv === 'adv' ? Math.max(r1, r2) : Math.min(r1, r2);
    const discarded = adv === 'adv' ? Math.min(r1, r2) : Math.max(r1, r2);
    rolls = [kept];
    const advLabel = adv === 'adv' ? 'Avantage' : 'Désavantage';
    const display = `${advLabel}: [${kept}, ~~${discarded}~~]`;
    showRollResult(rolls, modifier, sides, count, display);
    return;
  }

  for (let i = 0; i < count; i++) {
    rolls.push(rand(sides));
  }

  showRollResult(rolls, modifier, sides, count, null);
}

function showRollResult(rolls, modifier, sides, count, customDisplay) {
  const sum = rolls.reduce((a, b) => a + b, 0);
  const total = sum + modifier;

  const resultEl = document.getElementById('dice-result');
  const displayEl = document.getElementById('dice-roll-display');
  const totalEl = document.getElementById('dice-total');

  const rollsText = customDisplay || `[${rolls.join(', ')}]`;
  const modText = modifier !== 0 ? ` ${modifier >= 0 ? '+' : ''}${modifier}` : '';
  displayEl.textContent = `${count}d${sides}${modText} → ${rollsText}`;
  totalEl.textContent = total;

  resultEl.classList.remove('hidden');

  // History
  const entry = `${count}d${sides}${modText} = ${total}`;
  diceHistory.unshift(entry);
  if (diceHistory.length > MAX_HISTORY) diceHistory.pop();
  renderHistory();
}

function renderHistory() {
  const histEl = document.getElementById('dice-history');
  histEl.innerHTML = diceHistory.map((e) => `<p>${e}</p>`).join('');
}

/* ── Initiative tracker ───────────────────────────────────── */
let initiatives = [];

function addInitiative() {
  const nameEl = document.getElementById('init-name');
  const valueEl = document.getElementById('init-value');
  const name = nameEl.value.trim();
  const value = parseInt(valueEl.value, 10);

  if (!name || isNaN(value)) return;

  initiatives.push({ name, value });
  initiatives.sort((a, b) => b.value - a.value);
  nameEl.value = '';
  valueEl.value = '';
  renderInitiative();
}

function rollInitiative() {
  const nameEl = document.getElementById('init-name');
  const name = nameEl.value.trim();
  if (!name) return;
  const roll = rand(20);
  document.getElementById('init-value').value = roll;
}

function removeInitiative(index) {
  initiatives.splice(index, 1);
  renderInitiative();
}

function clearInitiative() {
  initiatives = [];
  renderInitiative();
}

function renderInitiative() {
  const list = document.getElementById('initiative-list');
  if (initiatives.length === 0) {
    list.innerHTML = '<li style="color:var(--text-muted);font-style:italic;">Aucun participant</li>';
    return;
  }
  list.innerHTML = initiatives
    .map(
      (entry, i) => `
      <li class="${i === 0 ? 'active' : ''}">
        <span class="init-score">${entry.value}</span>
        <span class="init-name">${escapeHTML(entry.name)}</span>
        <button class="init-remove" onclick="removeInitiative(${i})" title="Retirer">✕</button>
      </li>`
    )
    .join('');
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[c]);
}

renderInitiative();

/* Allow Enter key to add initiative ─────────────────────── */
document.getElementById('init-value').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addInitiative();
});
document.getElementById('init-name').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('init-value').focus();
});

/* ── Notes persistence ────────────────────────────────────── */
const STORAGE_KEY = 'dndweb_data';

function saveNotes() {
  const notes = document.getElementById('notes').value;
  const data = loadData();
  data.notes = notes;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  const savedMsg = document.getElementById('notes-saved');
  savedMsg.classList.remove('hidden');
  setTimeout(() => savedMsg.classList.add('hidden'), 2000);
}

function loadData() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

/* ── Persist & restore character sheet ────────────────────── */
const CHAR_FIELDS = [
  'char-name', 'char-class', 'char-race', 'char-level',
  'str', 'dex', 'con', 'int', 'wis', 'cha',
  'hp-max', 'hp-current', 'ac', 'speed',
];

function saveCharacter() {
  const data = loadData();
  data.character = {};
  CHAR_FIELDS.forEach((id) => {
    data.character[id] = document.getElementById(id).value;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function restoreData() {
  const data = loadData();
  if (data.character) {
    CHAR_FIELDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el && data.character[id] !== undefined) {
        el.value = data.character[id];
      }
    });
    STAT_IDS.forEach((id) => updateMod(id));
    updateHPBar();
  }
  if (data.notes) {
    document.getElementById('notes').value = data.notes;
  }
}

// Auto-save character fields on change
CHAR_FIELDS.forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', saveCharacter);
});

restoreData();
