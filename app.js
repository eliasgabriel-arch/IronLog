/* ==========================================================================
   IronLog v10 — Application Logic
   ========================================================================== */

/* --- SVG Icon Library --- */
const Icons = {
  dumbbell: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5h11M6.5 17.5h11"/><path d="M3.5 11h17M3.5 13h17"/><rect x="2" y="9" width="3" height="6" rx="1"/><rect x="19" y="9" width="3" height="6" rx="1"/><rect x="5" y="7" width="2" height="10" rx="0.5"/><rect x="17" y="7" width="2" height="10" rx="0.5"/></svg>`,
  play: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  list: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  edit: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  barChart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  target: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
};

/* --- Exercise Database --- */
const DB_CORE = [
  // PIERNA
  {id:'sq', n:'Sentadilla Barra', t:{d:'Cuádriceps', i:['Glúteo','Core']}},
  {id:'lp', n:'Leg Press', t:{d:'Cuádriceps', i:['Glúteo']}},
  {id:'lp_h', n:'Leg Press (Pies Altos)', t:{d:'Glúteo', i:['Isquios']}},
  {id:'rdl', n:'Peso Muerto Rumano', t:{d:'Isquios', i:['Glúteo','Erectores']}},
  {id:'ht', n:'Hip Thrust', t:{d:'Glúteo', i:['Isquios']}},
  {id:'ext', n:'Extensión Cuádriceps', t:{d:'Cuádriceps', i:[]}},
  {id:'curl', n:'Curl Femoral', t:{d:'Isquios', i:[]}},
  {id:'cal', n:'Elevación Talones', t:{d:'Gemelos', i:[]}},
  // EMPUJE
  {id:'bp', n:'Press Banca', t:{d:'Pectoral', i:['Tríceps','Hombro Ant']}},
  {id:'bp_inc', n:'Press Inclinado', t:{d:'Pectoral Sup', i:['Tríceps']}},
  {id:'ohp', n:'Press Militar', t:{d:'Hombro Ant', i:['Tríceps']}},
  {id:'lat', n:'Elevaciones Laterales', t:{d:'Hombro Lat', i:[]}},
  {id:'fly', n:'Aperturas/Cruce', t:{d:'Pectoral', i:[]}},
  {id:'tri', n:'Extensión Tríceps', t:{d:'Tríceps', i:[]}},
  // TRACCIÓN
  {id:'pd', n:'Jalón al Pecho', t:{d:'Dorsal', i:['Bíceps']}},
  {id:'row', n:'Remo Polea', t:{d:'Espalda Alta', i:['Bíceps']}},
  {id:'face', n:'Face Pull', t:{d:'Deltoides Post', i:['Trapecio']}},
  {id:'bic', n:'Curl Bíceps', t:{d:'Bíceps', i:[]}},
  {id:'pull', n:'Dominadas', t:{d:'Dorsal', i:['Bíceps','Core']}}
];

/* --- Global State --- */
let state = {
  routines: {
    'Lunes': [], 'Martes': [], 'Miércoles': [], 'Jueves': [], 'Viernes': [], 'Sábado': [], 'Domingo': []
  },
  history: [],
  active: null,
  customs: []
};

const LS_KEY = 'IL_v9_PRO';
let context = { dayToAdd: null, editingRoutine: false };

/* --- Core System --- */
function init() {
  const d = localStorage.getItem(LS_KEY);
  if (d) state = JSON.parse(d);
  router('routines');
}

function save() {
  localStorage.setItem(LS_KEY, JSON.stringify(state));
}

function getDB() {
  return [...DB_CORE, ...state.customs];
}

/* --- Router --- */
function router(page) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const navBtn = document.getElementById('nav-' + page);
  if (navBtn) navBtn.classList.add('active');

  const app = document.getElementById('app');
  app.innerHTML = '';

  switch (page) {
    case 'routines': renderRoutines(app); break;
    case 'tracker': renderTracker(app); break;
    case 'history': renderHistory(app); break;
    case 'db': renderDB(app); break;
  }
}

/* ===== 1. ROUTINES ===== */
function renderRoutines(root) {
  root.innerHTML = `
    <div class="page-header">
      <div>
        <div class="logo">
          <div class="logo-mark">${Icons.dumbbell}</div>
          <span class="logo-text">IronLog <span class="logo-version">v10</span></span>
        </div>
        <p class="page-subtitle">Tu plan semanal de entrenamiento</p>
      </div>
      <button class="btn-ghost btn-icon" onclick="exportData()" title="Exportar Backup">
        ${Icons.download}
      </button>
    </div>
  `;

  const days = Object.keys(state.routines);
  days.forEach((day, idx) => {
    const list = state.routines[day];
    const el = document.createElement('div');
    el.className = 'routine-card animate-in';
    el.style.animationDelay = `${idx * 40}ms`;

    const exerciseList = list.length
      ? list.map(e => e.n).join(' &middot; ')
      : `<span class="routine-rest">${Icons.moon} Descanso</span>`;

    el.innerHTML = `
      <div class="routine-card-header">
        <span class="routine-day-name">${day}</span>
        <div class="btn-group">
          <button class="btn-ghost btn-xs" onclick="editRoutine('${day}')" title="Editar">
            ${Icons.edit}
          </button>
          <button class="btn-primary btn-xs" onclick="startFromRoutine('${day}')">
            ${Icons.play} Iniciar
          </button>
        </div>
      </div>
      <div class="routine-card-body">${exerciseList}</div>
    `;
    root.appendChild(el);
  });
}

function editRoutine(day) {
  context.dayToAdd = day;
  context.editingRoutine = true;
  openSearch();
}

/* ===== 2. TRACKER ===== */
function startFromRoutine(day) {
  if (state.active && !confirm('Ya tienes una sesión activa. ¿Sobrescribir?')) return;

  const template = state.routines[day];
  state.active = {
    startTime: Date.now(),
    name: day,
    date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
    exercises: template.map(ex => ({
      ...ex,
      sets: [
        { w: '', r: '', rpe: '', done: false },
        { w: '', r: '', rpe: '', done: false },
        { w: '', r: '', rpe: '', done: false }
      ]
    }))
  };
  save();
  router('tracker');
}

function renderTracker(root) {
  if (!state.active) {
    root.innerHTML = `
      <div class="page-header">
        <div class="page-title">Tracker</div>
      </div>
      <div class="card empty-state animate-in">
        <div class="empty-state-icon">${Icons.target}</div>
        <h3>Sin sesión activa</h3>
        <p>Ve a Rutinas e inicia un día de entrenamiento para comenzar.</p>
      </div>
    `;
    return;
  }

  const s = state.active;
  root.innerHTML = `
    <div class="session-bar animate-in">
      <div class="session-info">
        <h3>${s.name}</h3>
        <small>${s.date}</small>
      </div>
      <button class="btn-success" onclick="finishSession()">
        ${Icons.check} Terminar
      </button>
    </div>
    <div id="trackList"></div>
    <div class="tracker-actions animate-in">
      <button class="btn-secondary btn-full" onclick="addExToActive()">
        ${Icons.plus} Añadir Ejercicio
      </button>
      <button class="btn-danger btn-full" onclick="cancelSession()">
        ${Icons.trash} Cancelar
      </button>
    </div>
  `;

  const list = document.getElementById('trackList');
  s.exercises.forEach((ex, exIdx) => {
    const lastLog = getExerciseHistory(ex.id)[0];
    const div = document.createElement('div');
    div.className = 'exercise-card animate-in';
    div.style.animationDelay = `${exIdx * 50}ms`;

    let setsHTML = '';
    ex.sets.forEach((set, sIdx) => {
      setsHTML += `
        <div class="set-row">
          <span class="set-number">${sIdx + 1}</span>
          <input type="number" class="set-input" placeholder="—" value="${set.w}" onchange="updSet(${exIdx},${sIdx},'w',this.value)">
          <input type="number" class="set-input" placeholder="—" value="${set.r}" onchange="updSet(${exIdx},${sIdx},'r',this.value)">
          <input type="number" class="set-input" placeholder="—" value="${set.rpe}" onchange="updSet(${exIdx},${sIdx},'rpe',this.value)">
          <input type="checkbox" ${set.done ? 'checked' : ''} onchange="togSet(${exIdx},${sIdx})">
          <button class="btn-ghost" onclick="delSet(${exIdx},${sIdx})" title="Eliminar serie">${Icons.x}</button>
        </div>
      `;
    });

    div.innerHTML = `
      <div class="exercise-header">
        <span class="exercise-name">${ex.n}</span>
        <button class="btn-ghost btn-xs" onclick="removeActiveEx(${exIdx})" title="Quitar ejercicio">${Icons.x}</button>
      </div>
      ${lastLog ? `<div class="exercise-prev">Anterior: ${bestSetString(lastLog.sets)}</div>` : ''}
      <div class="exercise-sets">
        <div class="set-header">
          <span>#</span><span>Kg</span><span>Reps</span><span>RPE</span><span></span><span></span>
        </div>
        ${setsHTML}
      </div>
      <div class="exercise-add-set">
        <button onclick="addSet(${exIdx})">+ Añadir serie</button>
      </div>
    `;
    list.appendChild(div);
  });
}

function updSet(ei, si, k, v) {
  state.active.exercises[ei].sets[si][k] = v;
  save();
}

function togSet(ei, si) {
  state.active.exercises[ei].sets[si].done = !state.active.exercises[ei].sets[si].done;
  save();
}

function addSet(ei) {
  const sets = state.active.exercises[ei].sets;
  const last = sets[sets.length - 1];
  sets.push({ w: last ? last.w : '', r: last ? last.r : '', rpe: '', done: false });
  save();
  renderTracker(document.getElementById('app'));
}

function delSet(ei, si) {
  state.active.exercises[ei].sets.splice(si, 1);
  save();
  renderTracker(document.getElementById('app'));
}

function removeActiveEx(ei) {
  state.active.exercises.splice(ei, 1);
  save();
  renderTracker(document.getElementById('app'));
}

function finishSession() {
  if (!confirm('¿Guardar sesión en historial?')) return;
  state.history.unshift(state.active);
  state.active = null;
  save();
  router('history');
}

function cancelSession() {
  if (confirm('¿Borrar progreso actual?')) {
    state.active = null;
    save();
    router('routines');
  }
}

function addExToActive() {
  context.editingRoutine = false;
  openSearch();
}

/* ===== 3. HISTORY ===== */
function renderHistory(root) {
  root.innerHTML = `
    <div class="page-header">
      <div class="page-title">Historial</div>
    </div>
  `;

  if (state.history.length === 0) {
    root.innerHTML += `
      <div class="card empty-state animate-in">
        <div class="empty-state-icon">${Icons.clock}</div>
        <h3>Sin registros</h3>
        <p>Completa tu primera sesión de entrenamiento y aparecerá aquí.</p>
      </div>
    `;
    return;
  }

  state.history.forEach((log, idx) => {
    let vol = 0;
    log.exercises.forEach(e =>
      e.sets.forEach(s => {
        if (s.done && s.w && s.r) vol += s.w * s.r;
      })
    );

    const el = document.createElement('div');
    el.className = 'history-card animate-in';
    el.style.animationDelay = `${idx * 40}ms`;

    const exercisesHTML = log.exercises
      .map(e => {
        const setsText = e.sets
          .filter(s => s.done)
          .map(s => `${s.w}×${s.r}`)
          .join(', ');
        if (!setsText) return '';
        return `
          <div class="history-exercise-row">
            <span class="history-exercise-name">${e.n}</span>
            <span class="history-exercise-sets">${setsText}</span>
          </div>
        `;
      })
      .join('');

    el.innerHTML = `
      <div class="history-header">
        <div class="history-header-left">
          <span class="history-day">${log.name}</span>
          <span class="history-date">${log.date}</span>
        </div>
        <span class="history-vol">${(vol / 1000).toFixed(1)}t</span>
      </div>
      <div class="history-exercises">${exercisesHTML}</div>
    `;
    root.appendChild(el);
  });
}

function getExerciseHistory(exId) {
  const logs = [];
  state.history.forEach(h => {
    const found = h.exercises.find(e => e.id === exId);
    if (found) {
      logs.push({ date: h.date, sets: found.sets.filter(s => s.done) });
    }
  });
  return logs;
}

function bestSetString(sets) {
  if (!sets || sets.length === 0) return '—';
  const best = sets[0];
  return `${best.w}kg × ${best.r} reps`;
}

/* ===== 4. DATABASE ===== */
function renderDB(root) {
  root.innerHTML = `
    <div class="page-header">
      <div class="page-title">Ejercicios</div>
    </div>
    <div class="search-input-wrapper" style="margin-bottom: var(--space-4)">
      ${Icons.search}
      <input type="search" placeholder="Buscar ejercicio..." onkeyup="filterDBView(this.value)">
    </div>
    <div id="dbListView"></div>
  `;
  filterDBView('');
}

function filterDBView(q) {
  const term = q.toLowerCase();
  const list = document.getElementById('dbListView');
  list.innerHTML = '';

  const filtered = getDB().filter(e => e.n.toLowerCase().includes(term));

  filtered.forEach((e, idx) => {
    const el = document.createElement('div');
    el.className = 'db-card animate-in';
    el.style.animationDelay = `${idx * 30}ms`;
    el.onclick = () => showExerciseHistory(e);
    el.innerHTML = `
      <span class="db-card-name">${e.n}</span>
      <div class="db-card-meta">
        <span class="tag tag-primary tag-muscle">${e.t.d}</span>
        ${Icons.chevronRight}
      </div>
    `;
    list.appendChild(el);
  });
}

function showExerciseHistory(ex) {
  const logs = getExerciseHistory(ex.id);
  const modal = document.getElementById('exHistoryModal');
  document.getElementById('exHistTitle').textContent = ex.n;

  const body = document.getElementById('exHistBody');
  if (logs.length === 0) {
    body.innerHTML = `
      <div class="empty-state" style="padding: var(--space-8) 0">
        <div class="empty-state-icon">${Icons.barChart}</div>
        <h3>Sin historial</h3>
        <p>Aún no has registrado este ejercicio.</p>
      </div>
    `;
  } else {
    body.innerHTML = `
      <table class="data-table">
        <thead>
          <tr><th>Fecha</th><th>Series (Kg × Reps)</th></tr>
        </thead>
        <tbody>
          ${logs.map(l => `
            <tr>
              <td class="dim">${l.date}</td>
              <td class="mono">${l.sets.map(s => `${s.w}×${s.r}`).join(', ')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  modal.classList.add('open');
}

/* ===== MODAL UTILS ===== */
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

function openSearch() {
  document.getElementById('searchModal').classList.add('open');
  const inp = document.getElementById('searchInp');
  inp.value = '';
  renderSearchResults('');
  setTimeout(() => inp.focus(), 300);
}

function renderSearchResults(q) {
  const term = q.toLowerCase();
  const box = document.getElementById('searchRes');
  box.innerHTML = '';

  getDB()
    .filter(e => e.n.toLowerCase().includes(term))
    .forEach(e => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <span class="search-result-name">${e.n}</span>
        <span class="tag tag-primary tag-muscle">${e.t.d}</span>
      `;
      item.onclick = () => selectExercise(e);
      box.appendChild(item);
    });
}

function selectExercise(ex) {
  if (context.editingRoutine) {
    state.routines[context.dayToAdd].push(ex);
    save();
    router('routines');
  } else {
    state.active.exercises.push({
      ...ex,
      sets: [{ w: '', r: '', rpe: '', done: false }]
    });
    save();
    router('tracker');
  }
  closeModal('searchModal');
}

/* ===== EXPORT ===== */
function exportData() {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
  const a = document.createElement('a');
  a.href = dataStr;
  a.download = 'ironlog_backup.json';
  a.click();
}

/* --- Initialize --- */
init();
