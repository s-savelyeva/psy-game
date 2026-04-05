// ИКОНКА ГАЛОЧКА
const CHECKMARK_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #34d399) drop-shadow(0 0 15px #10b981);">
    <circle cx="12" cy="12" r="10" fill="#34d399" opacity="0.8"/>
    <path d="M7 12L10.5 15.5L17 8.5" stroke="#b2fddf" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</span>`;
const CHECKMARK_SVG_MINI = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 5px">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #34d399) drop-shadow(0 0 15px #10b981);">
    <circle cx="12" cy="12" r="10" fill="#34d399" opacity="0.8"/>
    <path d="M7 12L10.5 15.5L17 8.5" stroke="#b2fddf" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</span>`;
const CHECKMARK_SVG_BIG = CHECKMARK_SVG.replace('width="24" height="24"', 'width="96" height="96"');

// ИКОНКА КРЕСТИК
const CROSS_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ce1644) drop-shadow(0 0 15px #be1f47);">
    <circle cx="12" cy="12" r="10" fill="#ff1c55" opacity="0.8"/>
    <path d="M8 8L16 16M16 8L8 16" stroke="rgb(253, 153, 178)" stroke-width="2.5" stroke-linecap="round"/>
  </svg>
</span>`;
const CROSS_SVG_MINI = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 5px">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ce1644) drop-shadow(0 0 15px #be1f47);">
    <circle cx="12" cy="12" r="10" fill="#ff1c55" opacity="0.8"/>
    <path d="M8 8L16 16M16 8L8 16" stroke="rgb(253, 153, 178)" stroke-width="2.5" stroke-linecap="round"/>
  </svg>
</span>`;

// ИКОНКА ЖЕЛТЫЙ ЗНАК ВОСКЛИЦАНИЯ
const WARNING_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <path d="M12 3L22 20H2L12 3Z" fill="#ffd700" opacity="0.8"/>
    <path d="M12 9V14M12 17V17.01" stroke="rgb(116, 98, 0)" stroke-width="2.5" stroke-linecap="round"/>
  </svg>
</span>`;

// ИКОНКА СИГНАЛКА
const ALERT_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ff2020) drop-shadow(0 0 15px #cc0000);">
    <rect x="3" y="17" width="18" height="4" rx="1" fill="#cc0000" opacity="0.8"/>
    <rect x="6" y="11" width="12" height="7" rx="1" fill="#ff3030" opacity="0.8"/>
    <path d="M8 11 Q8 5 12 5 Q16 5 16 11Z" fill="#ff3030" opacity="0.8"/>
    <line x1="5" y1="8" x2="2" y2="6" stroke="#ff6060" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="4" y1="10" x2="1" y2="10" stroke="#ff6060" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="19" y1="8" x2="22" y2="6" stroke="#ff6060" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="20" y1="10" x2="23" y2="10" stroke="#ff6060" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
</span>`;

// ИКОНКА КУБОК
const TROPHY_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <path d="M6 5 Q3 5 3 8 Q3 11 6 11" stroke="#ffd700" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M18 5 Q21 5 21 8 Q21 11 18 11" stroke="#ffd700" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M6 3 H18 Q18 13 12 15 Q6 13 6 3Z" fill="#ffd700" opacity="0.8"/>
    <rect x="10" y="15" width="4" height="4" fill="#ffd700" opacity="0.8"/>
    <rect x="7" y="19" width="10" height="2" rx="1" fill="#ffd700" opacity="0.8"/>
  </svg>
</span>`;
const TROPHY_SVG_BIG = TROPHY_SVG.replace('width="24" height="24"', 'width="96" height="96"');

// ИКОНКА ВЕСЫ
const SCALES_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 5px">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <rect x="11.5" y="4" width="1.5" height="14" fill="#ffd700" opacity="0.8"/>
    <rect x="7" y="19" width="10" height="2" rx="1" fill="#ffd700" opacity="0.8"/>
    <rect x="10" y="17" width="4" height="2" fill="#ffd700" opacity="0.8"/>
    <rect x="3" y="4" width="18" height="1.5" rx="0.75" fill="#ffd700" opacity="0.8"/>
    <line x1="5" y1="5.5" x2="5" y2="10" stroke="#ffd700" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="19" y1="5.5" x2="19" y2="10" stroke="#ffd700" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M2 10 Q5 14 8 10Z" fill="#ffd700" opacity="0.8"/>
    <path d="M16 10 Q19 14 22 10Z" fill="#ffd700" opacity="0.8"/>
  </svg>
</span>`;

// ИКОНКА ЗВУК
const SOUND_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle;">
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 15px #0288d1);">
    <path d="M4 9 H7 L12 5 V19 L7 15 H4 Z" fill="#4fc3f7" opacity="0.8"/>
    <path d="M15 8 Q18 12 15 16" stroke="#4fc3f7" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <path d="M17 6 Q21 12 17 18" stroke="#4fc3f7" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  </svg>
</span>`;

//ИКОНКА ЗВУК ВЫКЛЮЧЕННЫЙ
const MUTE_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle;">
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ff4444) drop-shadow(0 0 15px #cc0000);">
    <path d="M4 9 H7 L12 5 V19 L7 15 H4 Z" fill="#ff4444" opacity="0.8"/>
    <line x1="15" y1="9" x2="21" y2="15" stroke="#ff4444" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="21" y1="9" x2="15" y2="15" stroke="#ff4444" stroke-width="2.2" stroke-linecap="round"/>
  </svg>
</span>`;

// ИКОНКА КРАСНЫЙ ТЕЛЕФОН
const PHONE_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 0;">
  <svg width="18" height="18" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ff2020) drop-shadow(0 0 15px #cc0000);">
    <path d="M20 10 H42 L52 32 L38 42 Q42 52 52 62 Q62 72 72 68 L82 54 L104 64 V82 Q104 92 90 92 Q45 92 12 35 Q5 20 20 10Z" fill="#ff3030" opacity="0.95"/>
    <path d="M22 15 Q32 10 40 11" stroke="#ff8a80" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>
  </svg>
</span>`;
const PHONE_SVG_MINI = PHONE_SVG.replace('margin-bottom: 0', 'margin-bottom: 4px');

// ИКОНКА ЦВЕТОЧЕК
const FLOWER_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f48fb1) drop-shadow(0 0 15px #c2185b);">
    <ellipse cx="12" cy="6"   rx="2" ry="3.5" fill="#f48fb1" opacity="0.8"/>
    <ellipse cx="12" cy="18"  rx="2" ry="3.5" fill="#f48fb1" opacity="0.8"/>
    <ellipse cx="6"  cy="12"  rx="3.5" ry="2" fill="#f48fb1" opacity="0.8"/>
    <ellipse cx="18" cy="12"  rx="3.5" ry="2" fill="#f48fb1" opacity="0.8"/>
    <ellipse cx="8"  cy="8"   rx="2" ry="3.5" transform="rotate(45 8 8)"    fill="#f06292" opacity="0.8"/>
    <ellipse cx="16" cy="8"   rx="2" ry="3.5" transform="rotate(-45 16 8)"  fill="#f06292" opacity="0.8"/>
    <ellipse cx="8"  cy="16"  rx="2" ry="3.5" transform="rotate(-45 8 16)"  fill="#f06292" opacity="0.8"/>
    <ellipse cx="16" cy="16"  rx="2" ry="3.5" transform="rotate(45 16 16)"  fill="#f06292" opacity="0.8"/>
    <ellipse cx="12" cy="7"   rx="1.5" ry="3" transform="rotate(22.5 12 12)"  fill="#f48fb1" opacity="0.7"/>
    <ellipse cx="12" cy="7"   rx="1.5" ry="3" transform="rotate(67.5 12 12)"  fill="#f48fb1" opacity="0.7"/>
    <ellipse cx="12" cy="7"   rx="1.5" ry="3" transform="rotate(112.5 12 12)" fill="#f48fb1" opacity="0.7"/>
    <ellipse cx="12" cy="7"   rx="1.5" ry="3" transform="rotate(157.5 12 12)" fill="#f48fb1" opacity="0.7"/>
    <circle cx="12" cy="12" r="3" fill="#fff176" opacity="0.9"/>
  </svg>
</span>`;

// ИКОНКА ЗАМОК
const LOCK_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <path d="M8 11 V7 Q8 3 12 3 Q16 3 16 7 V11" stroke="#ffd700" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="5" y="11" width="14" height="10" rx="2" fill="#ffd700" opacity="0.8"/>
    <circle cx="12" cy="16" r="2" fill="#7a6000" opacity="0.8"/>
    <rect x="11" y="16" width="2" height="3" fill="#7a6000" opacity="0.8"/>
  </svg>
</span>`;

// ИКОНКА БАНК
const BANK_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 15px #0288d1);">
    <path d="M12 2 L22 8 H2 Z" fill="#4fc3f7" opacity="0.8"/>
    <rect x="2" y="8" width="20" height="2" fill="#4fc3f7" opacity="0.9"/>
    <rect x="4"  y="10" width="2.5" height="8" fill="#4fc3f7" opacity="0.8"/>
    <rect x="8"  y="10" width="2.5" height="8" fill="#4fc3f7" opacity="0.8"/>
    <rect x="12" y="10" width="2.5" height="8" fill="#4fc3f7" opacity="0.8"/>
    <rect x="17" y="10" width="2.5" height="8" fill="#4fc3f7" opacity="0.8"/>
    <rect x="2" y="18" width="20" height="2" fill="#4fc3f7" opacity="0.9"/>
    <rect x="1" y="20" width="22" height="1.5" rx="0.5" fill="#4fc3f7" opacity="0.7"/>
  </svg>
</span>`;

// ИКОНКА МАШИНА
const POLICE_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #1565c0) drop-shadow(0 0 15px #0d47a1);">
    <rect x="8" y="3" width="8" height="3" rx="1" fill="#ef5350" opacity="0.9"/>
    <rect x="8" y="3" width="4" height="3" rx="1" fill="#1e88e5" opacity="0.9"/>
    <path d="M3 13 Q4 9 7 9 H17 Q20 9 21 13 Z" fill="#1e88e5" opacity="0.8"/>
    <rect x="3" y="13" width="18" height="5" rx="1" fill="#1e88e5" opacity="0.8"/>
    <rect x="6" y="10" width="4" height="3" rx="0.5" fill="#90caf9" opacity="0.9"/>
    <rect x="14" y="10" width="4" height="3" rx="0.5" fill="#90caf9" opacity="0.9"/>
    <rect x="3" y="14.5" width="18" height="1.5" fill="#ffffff" opacity="0.5"/>
    <circle cx="7" cy="18.5" r="2.5" fill="#263238" opacity="0.9"/>
    <circle cx="7" cy="18.5" r="1" fill="#546e7a" opacity="0.9"/>
    <circle cx="17" cy="18.5" r="2.5" fill="#263238" opacity="0.9"/>
    <circle cx="17" cy="18.5" r="1" fill="#546e7a" opacity="0.9"/>
  </svg>
</span>`;

// ИКОНКА ГРАФИК
const CHART_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 5px;">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 15px #0288d1);">
    <line x1="3" y1="3" x2="3" y2="20" stroke="#4fc3f7" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="3" y1="20" x2="22" y2="20" stroke="#4fc3f7" stroke-width="1.5" stroke-linecap="round"/>
    <rect x="5"  y="13" width="3" height="7" fill="#ff5252" opacity="0.8"/>
    <rect x="10" y="8"  width="3" height="12" fill="#ffd700" opacity="0.9"/>
    <rect x="15" y="5"  width="3" height="15" fill="#69f0ae" opacity="0.7"/>
    <rect x="19" y="10" width="3" height="10" fill="#7c4dff" opacity="0.8"/>
  </svg>
</span>`;

// ИКОНКА ЛЮДИ
const USERS_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 0; margin-top: 0;">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <circle cx="9" cy="7" r="3" fill="#ffd700" opacity="0.8"/>
    <path d="M3 20 Q3 14 9 14 Q15 14 15 20" fill="#ffd700" opacity="0.8"/>
    <circle cx="16" cy="7" r="3" fill="#ffd700" opacity="0.6"/>
    <path d="M11 20 Q11 14 17 14 Q23 14 23 20" fill="#ffd700" opacity="0.6"/>
  </svg>
</span>`;
const USERS_SVG_BIG = USERS_SVG.replace('width="20" height="20"', 'width="24" height="24"').replace('margin-bottom: 5px; margin-top: 0', 'margin-bottom: 0; margin-top: 5px;');

// ИКОНКА ЛАМПОЧКА
const BULB_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <path d="M12 3 Q6 3 6 9 Q6 13 9 15 L9 16 H15 L15 15 Q18 13 18 9 Q18 3 12 3Z" fill="#fff176" opacity="0.9"/>
    <path d="M12 5 Q8 5 8 9 Q8 11.5 10 13" stroke="#ffffff" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.5"/>
    <rect x="9" y="16" width="6" height="1.2" rx="0.3" fill="#bfa000" opacity="0.9"/>
    <rect x="9" y="17.5" width="6" height="1.2" rx="0.3" fill="#bfa000" opacity="0.9"/>
    <rect x="9.5" y="19" width="5" height="1.5" rx="0.5" fill="#9e8000" opacity="0.9"/>
    <line x1="12" y1="0" x2="12" y2="1.5" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="4.5" y1="2.8" x2="5.5" y2="3.8" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="19.5" y1="2.8" x2="18.5" y2="3.8" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="2.5" y1="9" x2="4" y2="9" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="21.5" y1="9" x2="20" y2="9" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
</span>`;

// ИКОНКА ТЕЛЕФОН
const PHONE_SCREEN_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 15px #0288d1);">
    <rect x="22" y="5" width="56" height="90" rx="10" fill="#4fc3f7" opacity="0.95"/>
    <rect x="27" y="18" width="46" height="62" rx="4" fill="#0d47a1" opacity="0.95"/>
    <circle cx="50" cy="11" r="4" fill="#0288d1" opacity="0.9"/>
    <circle cx="50" cy="11" r="2" fill="#01579b" opacity="0.9"/>
    <circle cx="50" cy="90" r="5" fill="#0288d1" opacity="0.9"/>
    <rect x="32" y="24" width="36" height="5" rx="2" fill="#4fc3f7" opacity="0.5"/>
    <rect x="32" y="34" width="28" height="3" rx="1" fill="#4fc3f7" opacity="0.3"/>
    <rect x="32" y="40" width="32" height="3" rx="1" fill="#4fc3f7" opacity="0.3"/>
    <rect x="32" y="46" width="24" height="3" rx="1" fill="#4fc3f7" opacity="0.3"/>
    <path d="M28 12 Q35 6 48 5" stroke="#e1f5fe" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА МИШЕНЬ
const TARGET_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 5px;">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ff2020) drop-shadow(0 0 15px #cc0000);">
    <circle cx="12" cy="12" r="10" fill="#ff3030" opacity="0.8"/>
    <circle cx="12" cy="12" r="7.5" fill="#ffffff" opacity="0.9"/>
    <circle cx="12" cy="12" r="5" fill="#ff3030" opacity="0.8"/>
    <circle cx="12" cy="12" r="2.5" fill="#ffffff" opacity="0.9"/>
    <circle cx="12" cy="12" r="1" fill="#ff3030" opacity="0.9"/>
    <line x1="17" y1="7" x2="13" y2="11" stroke="#333333" stroke-width="1.5" stroke-linecap="round"/>
    <polygon points="17,5 19,9 15,8" fill="#333333" opacity="0.9"/>
  </svg>
</span>`;

// ИКОНКА КНИГИ
const BOOKS_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle;">
  <svg width="96" height="96" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <rect x="2" y="5" width="5" height="14" rx="0.5" fill="#ff5252" opacity="0.9"/>
    <rect x="2" y="5" width="1.2" height="14" fill="#cc0000" opacity="0.8"/>
    <rect x="8" y="3" width="5" height="16" rx="0.5" fill="#1e88e5" opacity="0.9"/>
    <rect x="8" y="3" width="1.2" height="16" fill="#0d47a1" opacity="0.8"/>
    <rect x="14" y="6" width="5" height="13" rx="0.5" fill="#43a047" opacity="0.9"/>
    <rect x="14" y="6" width="1.2" height="13" fill="#2e7d32" opacity="0.8"/>
    <rect x="1" y="19" width="22" height="1.5" rx="0.5" fill="#ffd700" opacity="0.8"/>
    <line x1="3.5" y1="8"  x2="6.5" y2="8"  stroke="#ffffff" stroke-width="0.7" stroke-linecap="round" opacity="0.5"/>
    <line x1="3.5" y1="10" x2="6.5" y2="10" stroke="#ffffff" stroke-width="0.7" stroke-linecap="round" opacity="0.5"/>
    <line x1="9.5" y1="6"  x2="12.5" y2="6"  stroke="#ffffff" stroke-width="0.7" stroke-linecap="round" opacity="0.5"/>
    <line x1="9.5" y1="8"  x2="12.5" y2="8"  stroke="#ffffff" stroke-width="0.7" stroke-linecap="round" opacity="0.5"/>
    <line x1="15.5" y1="9"  x2="18.5" y2="9"  stroke="#ffffff" stroke-width="0.7" stroke-linecap="round" opacity="0.5"/>
    <line x1="15.5" y1="11" x2="18.5" y2="11" stroke="#ffffff" stroke-width="0.7" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА МАСКИ
const MASKS_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-top: 5px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <path d="M8 35 Q8 12 30 12 Q52 12 52 35 Q52 58 30 62 Q8 58 8 35Z" fill="#ffd700" opacity="0.9"/>
    <ellipse cx="22" cy="30" rx="4" ry="5" fill="#7a6000" opacity="0.9"/>
    <ellipse cx="38" cy="30" rx="4" ry="5" fill="#7a6000" opacity="0.9"/>
    <path d="M18 44 Q30 54 42 44" stroke="#7a6000" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M14 18 Q20 12 30 11" stroke="#fff176" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>

    <path d="M48 45 Q48 22 70 22 Q92 22 92 45 Q92 68 70 72 Q48 68 48 45Z" fill="#1e88e5" opacity="0.9"/>
    <ellipse cx="62" cy="40" rx="4" ry="5" fill="#0d47a1" opacity="0.9"/>
    <ellipse cx="78" cy="40" rx="4" ry="5" fill="#0d47a1" opacity="0.9"/>
    <path d="M58 58 Q70 48 82 58" stroke="#0d47a1" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M62 46 Q61 52 63 54 Q65 52 64 46Z" fill="#90caf9" opacity="0.8"/>
    <path d="M54 28 Q62 20 72 20" stroke="#90caf9" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА МЕШОК ДЕНЕГ
const MONEY_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 5px;">
  <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #43a047) drop-shadow(0 0 15px #1b5e20);">
    <path d="M38 28 Q40 18 50 18 Q60 18 62 28" stroke="#2e7d32" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M35 32 Q50 26 65 32" fill="#2e7d32" opacity="0.9"/>
    <rect x="35" y="28" width="30" height="8" rx="4" fill="#388e3c" opacity="0.95"/>
    <path d="M30 40 Q20 50 22 65 Q24 82 50 85 Q76 82 78 65 Q80 50 70 40 Q60 34 50 34 Q40 34 30 40Z" fill="#43a047" opacity="0.9"/>
    <path d="M30 40 Q22 55 25 68 Q28 80 50 83" stroke="#2e7d32" stroke-width="3" fill="none" opacity="0.4"/>
    <line x1="50" y1="45" x2="50" y2="78" stroke="#fff176" stroke-width="4" stroke-linecap="round"/>
    <path d="M40 52 Q50 47 60 52 Q60 59 50 62 Q40 65 40 72 Q40 79 50 80 Q60 79 60 72" stroke="#fff176" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M32 48 Q34 40 42 37" stroke="#a5d6a7" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА ЩИТ
const SHIELD_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #1e88e5) drop-shadow(0 0 15px #0d47a1);">
    <path d="M50 10 L85 25 L85 55 Q85 80 50 92 Q15 80 15 55 L15 25 Z" fill="#1e88e5" opacity="0.9"/>
    <path d="M50 10 L85 25 L85 55 Q85 80 50 92 Q15 80 15 55 L15 25 Z" stroke="#0d47a1" stroke-width="3" fill="none"/>
    <path d="M50 20 L78 33 L78 55 Q78 74 50 84 Q22 74 22 55 L22 33 Z" fill="#1565c0" opacity="0.5"/>
    <path d="M33 52 L45 64 L68 38" stroke="#ffffff" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M25 30 Q30 20 42 17" stroke="#90caf9" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА ГЛАЗА
const EYE_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 15px #0288d1);">
    <path d="M10 50 Q30 20 50 20 Q70 20 90 50 Q70 80 50 80 Q30 80 10 50Z" fill="#ffffff" opacity="0.95"/>
    <circle cx="50" cy="50" r="18" fill="#1e88e5" opacity="0.9"/>
    <circle cx="50" cy="50" r="10" fill="#0d1a2e" opacity="0.95"/>
    <circle cx="44" cy="44" r="4" fill="#ffffff" opacity="0.8"/>
    <circle cx="56" cy="42" r="2" fill="#ffffff" opacity="0.4"/>
    <path d="M10 50 Q30 20 50 20 Q70 20 90 50" stroke="#0288d1" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M10 50 Q30 80 50 80 Q70 80 90 50" stroke="#0288d1" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>
</span>`;

// ИКОНКА БУДИЛЬНИКА (ЧАСЫ)
const ALARM_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 0;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <line x1="33" y1="88" x2="25" y2="98" stroke="#ffd700" stroke-width="4" stroke-linecap="round"/>
    <line x1="67" y1="88" x2="75" y2="98" stroke="#ffd700" stroke-width="4" stroke-linecap="round"/>
    <circle cx="22" cy="28" r="10" fill="#ffd700" opacity="0.9"/>
    <circle cx="78" cy="28" r="10" fill="#ffd700" opacity="0.9"/>
    <circle cx="50" cy="58" r="36" fill="#ffd700" opacity="0.9"/>
    <circle cx="50" cy="58" r="30" fill="#ffb300" opacity="0.5"/>
    <line x1="50" y1="25" x2="50" y2="32" stroke="#7a6000" stroke-width="3" stroke-linecap="round"/>
    <line x1="50" y1="84" x2="50" y2="91" stroke="#7a6000" stroke-width="3" stroke-linecap="round"/>
    <line x1="17" y1="58" x2="24" y2="58" stroke="#7a6000" stroke-width="3" stroke-linecap="round"/>
    <line x1="76" y1="58" x2="83" y2="58" stroke="#7a6000" stroke-width="3" stroke-linecap="round"/>
    <line x1="50" y1="58" x2="50" y2="35" stroke="#3e2000" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="50" y1="58" x2="68" y2="50" stroke="#3e2000" stroke-width="3" stroke-linecap="round"/>
    <circle cx="50" cy="58" r="4" fill="#3e2000" opacity="0.9"/>
    <path d="M28 40 Q33 30 44 27" stroke="#fff176" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;
const ALARM_SVG_MINI = ALARM_SVG.replace('width="24" height="24"', 'width="20" height="20"').replace('margin-bottom: 0;', 'margin-bottom: 5px;');

// ИКОНКА ДЕНЕГ
const FLYING_MONEY_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #43a047) drop-shadow(0 0 15px #1b5e20);">
    <rect x="14" y="28" width="74" height="44" rx="4" fill="#2e7d32" opacity="0.5"/>
    <rect x="10" y="32" width="74" height="44" rx="4" fill="#43a047" opacity="0.95"/>
    <rect x="15" y="37" width="64" height="34" rx="2" fill="none" stroke="#a5d6a7" stroke-width="1.5" opacity="0.7"/>
    <ellipse cx="47" cy="54" rx="12" ry="12" fill="#2e7d32" opacity="0.6"/>
    <line x1="47" y1="44" x2="47" y2="64" stroke="#fff176" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M41 48 Q47 45 53 48 Q53 54 47 55 Q41 56 41 62 Q41 67 47 68 Q53 66 53 62" stroke="#fff176" stroke-width="2" fill="none" stroke-linecap="round"/>
    <circle cx="22" cy="54" r="6" fill="#2e7d32" opacity="0.7"/>
    <circle cx="72" cy="54" r="6" fill="#2e7d32" opacity="0.7"/>
    <path d="M18 40 Q25 35 38 34" stroke="#c8e6c9" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА ТАЙМЕРА
const TIMER_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 0;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 15px #0288d1);">
    <rect x="10" y="2" width="4" height="1.5" rx="0.75" fill="#4fc3f7" opacity="0.9"/>
    <rect x="11.25" y="3.5" width="1.5" height="1.5" fill="#4fc3f7" opacity="0.9"/>
    <circle cx="12" cy="13" r="8" fill="#1e88e5" opacity="0.8"/>
    <circle cx="12" cy="13" r="7" fill="#1565c0" opacity="0.5"/>
    <line x1="12" y1="7"  x2="12" y2="8.5" stroke="#4fc3f7" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="12" y1="17.5" x2="12" y2="19" stroke="#4fc3f7" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="6"  y1="13" x2="7.5" y2="13" stroke="#4fc3f7" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="16.5" y1="13" x2="18" y2="13" stroke="#4fc3f7" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="12" y1="13" x2="12" y2="8.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="12" y1="13" x2="15.5" y2="11" stroke="#4fc3f7" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="12" cy="13" r="1" fill="#ffffff" opacity="0.9"/>
  </svg>
</span>`;
const TIMER_SVG_MINI = TIMER_SVG.replace('width="24" height="24"', 'width="20" height="20"').replace('margin-bottom: 0;', 'margin-bottom: 5px;');

// ИКОНКА НЕЛЬЗЯ
const FORBIDDEN_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ff2020) drop-shadow(0 0 15px #cc0000);">
    <circle cx="50" cy="50" r="44" fill="#ff3030" opacity="0.9"/>
    <circle cx="50" cy="50" r="44" stroke="#ffffff" stroke-width="6" fill="none"/>
    <rect x="8" y="38" width="84" height="24" rx="4" fill="#ffffff" opacity="0.95"/>
    <path d="M18 28 Q28 16 44 13" stroke="#ff8a80" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.4"/>
  </svg>
</span>`;

// ИКОНКА СОС
const SOS_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ff2020) drop-shadow(0 0 15px #cc0000);">
    <rect x="5" y="5" width="90" height="90" rx="18" fill="#ff3030" opacity="0.9"/>
    <rect x="5" y="5" width="90" height="90" rx="18" stroke="#ffffff" stroke-width="4" fill="none"/>
    <path d="M14 38 Q14 28 24 28 Q34 28 34 36 Q34 44 24 46 Q14 48 14 58 Q14 68 24 68 Q34 68 34 58" stroke="#ffffff" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="38" y="28" width="24" height="40" rx="12" fill="none" stroke="#ffffff" stroke-width="6"/>
    <path d="M66 38 Q66 28 76 28 Q86 28 86 36 Q86 44 76 46 Q66 48 66 58 Q66 68 76 68 Q86 68 86 58" stroke="#ffffff" stroke-width="6" fill="none" stroke-linecap="round"/>
  </svg>
</span>`;

// ИКОНКА ДЖОСТИКА
const GAMEPAD_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #7c4dff) drop-shadow(0 0 15px #4527a0);">
    <path d="M15 35 Q10 35 8 50 Q5 70 15 75 Q25 80 35 65 L65 65 Q75 80 85 75 Q95 70 92 50 Q90 35 85 35 Z" fill="#7c4dff" opacity="0.9"/>
    <rect x="22" y="42" width="16" height="6" rx="2" fill="#ffffff" opacity="0.9"/>
    <rect x="27" y="37" width="6" height="16" rx="2" fill="#ffffff" opacity="0.9"/>
    <circle cx="68" cy="42" r="4" fill="#ff5252" opacity="0.9"/>
    <circle cx="78" cy="48" r="4" fill="#ffeb3b" opacity="0.9"/>
    <circle cx="68" cy="54" r="4" fill="#69f0ae" opacity="0.9"/>
    <circle cx="58" cy="48" r="4" fill="#40c4ff" opacity="0.9"/>
    <rect x="42" y="43" width="8" height="5" rx="2" fill="#ffffff" opacity="0.5"/>
    <rect x="52" y="43" width="8" height="5" rx="2" fill="#ffffff" opacity="0.5"/>
    <path d="M18 40 Q25 34 38 33" stroke="#b388ff" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА ГАЗЕТЫ
const CAMERA_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #60a5fa) drop-shadow(0 0 15px #3b82f6);">
    <rect x="3" y="7" width="14" height="10" rx="2" fill="#60a5fa" opacity="0.8"/>
    <circle cx="10" cy="12" r="3.5" fill="#1e3a8a" opacity="0.9"/>
    <circle cx="10" cy="12" r="2" fill="#93c5fd" opacity="0.6"/>
    <path d="M17 9L21 7V17L17 15V9Z" fill="#60a5fa" opacity="0.8"/>
    <rect x="5" y="5" width="4" height="2" rx="0.5" fill="#60a5fa" opacity="0.8"/>
    <circle cx="15" cy="10" r="1" fill="#ef4444" opacity="0.9"/>
  </svg>
</span>`;

// ИКОНКА ВОПРОСА
const QUESTION_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <circle cx="12" cy="12" r="10" fill="#ffd700" opacity="0.8"/>
    <path d="M9.5 9.5 C9.5 8 10.5 7 12 7 C13.5 7 14.5 8 14.5 9.5 C14.5 11 12 11.5 12 13" stroke="#7a6000" stroke-width="2" stroke-linecap="round" fill="none"/>
    <circle cx="12" cy="16.5" r="1" fill="#7a6000" opacity="0.9"/>
  </svg>
</span>`;

// ИКОНКА МОЗГА
const BRAIN_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f48fb1) drop-shadow(0 0 15px #c2185b);">
    <path d="M50 20 Q35 18 28 25 Q18 32 18 42 Q16 50 20 56 Q16 62 20 70 Q24 78 34 80 Q42 82 50 78 Z" fill="#f48fb1" opacity="0.9"/>
    <path d="M50 20 Q65 18 72 25 Q82 32 82 42 Q84 50 80 56 Q84 62 80 70 Q76 78 66 80 Q58 82 50 78 Z" fill="#f06292" opacity="0.9"/>
    <line x1="50" y1="20" x2="50" y2="78" stroke="#c2185b" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M26 38 Q32 33 38 38 Q44 43 38 48" stroke="#c2185b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M22 54 Q28 48 36 52 Q42 56 38 62" stroke="#c2185b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M26 68 Q33 63 40 67" stroke="#c2185b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M74 38 Q68 33 62 38 Q56 43 62 48" stroke="#ad1457" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M78 54 Q72 48 64 52 Q58 56 62 62" stroke="#ad1457" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M74 68 Q67 63 60 67" stroke="#ad1457" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M24 30 Q30 22 40 20" stroke="#f8bbd0" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
  </svg>
</span>`;

// ИКОНКА КРАСНОГО ФЛАГА
const FLAG_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ff2020) drop-shadow(0 0 15px #cc0000);">
    <line x1="20" y1="10" x2="20" y2="95" stroke="#aaaaaa" stroke-width="4" stroke-linecap="round"/>
    <path d="M20 12 L80 25 L20 48 Z" fill="#ff3030" opacity="0.9"/>
    <path d="M22 16 Q40 18 55 24" stroke="#ff8a80" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА ГРОМКОГОВОРИТЕЛЯ
const MEGAPHONE_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <path d="M55 30 L88 12 L88 72 L55 55 Z" fill="#ffb300" opacity="0.9"/>
    <rect x="18" y="33" width="37" height="28" rx="4" fill="#ffd700" opacity="0.95"/>
    <rect x="26" y="61" width="14" height="22" rx="5" fill="#ffb300" opacity="0.95"/>
    <line x1="55" y1="30" x2="55" y2="60" stroke="#e6a800" stroke-width="2"/>
    <path d="M91 28 Q98 42 91 56" stroke="#ffd700" stroke-width="3.5" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M94 20 Q103 42 94 64" stroke="#ffd700" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.4"/>
    <path d="M60 18 Q70 13 80 11" stroke="#fff176" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА СООБЩЕНИЯ
const CHAT_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 15px #0288d1);">
    <path d="M10 15 Q10 10 15 10 L85 10 Q90 10 90 15 L90 60 Q90 65 85 65 L35 65 L20 82 L20 65 L15 65 Q10 65 10 60 Z" fill="#4fc3f7" opacity="0.9"/>
    <circle cx="32" cy="38" r="6" fill="#ffffff" opacity="0.9"/>
    <circle cx="50" cy="38" r="6" fill="#ffffff" opacity="0.9"/>
    <circle cx="68" cy="38" r="6" fill="#ffffff" opacity="0.9"/>
    <path d="M18 18 Q30 12 50 12" stroke="#e1f5fe" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
  </svg>
</span>`;

// ИКОНКА ЧАСОВ
const CLOCK_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <circle cx="50" cy="50" r="42" fill="#ffd700" opacity="0.9"/>
    <circle cx="50" cy="50" r="42" stroke="#e6a800" stroke-width="3" fill="none"/>
    <circle cx="50" cy="50" r="35" fill="#ffb300" opacity="0.3"/>
    <line x1="50" y1="12" x2="50" y2="20" stroke="#7a6000" stroke-width="3" stroke-linecap="round"/>
    <line x1="50" y1="80" x2="50" y2="88" stroke="#7a6000" stroke-width="3" stroke-linecap="round"/>
    <line x1="12" y1="50" x2="20" y2="50" stroke="#7a6000" stroke-width="3" stroke-linecap="round"/>
    <line x1="80" y1="50" x2="88" y2="50" stroke="#7a6000" stroke-width="3" stroke-linecap="round"/>
    <line x1="21" y1="21" x2="27" y2="27" stroke="#7a6000" stroke-width="2" stroke-linecap="round"/>
    <line x1="73" y1="21" x2="79" y2="27" stroke="#7a6000" stroke-width="2" stroke-linecap="round"/>
    <line x1="21" y1="79" x2="27" y2="73" stroke="#7a6000" stroke-width="2" stroke-linecap="round"/>
    <line x1="73" y1="79" x2="79" y2="73" stroke="#7a6000" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="50" x2="68" y2="26" stroke="#3e2000" stroke-width="4" stroke-linecap="round"/>
    <line x1="50" y1="50" x2="50" y2="20" stroke="#3e2000" stroke-width="3" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="4" fill="#3e2000" opacity="0.9"/>
    <path d="M20 28 Q28 16 44 13" stroke="#fff176" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА ФОТОАПАРАТА
const PHOTO_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 10px #4fc3f7) drop-shadow(0 0 20px #0288d1) drop-shadow(0 0 30px #01579b);">
    <path d="M55 8 L45 28 L55 28 L42 48 L65 22 L52 22 Z" fill="#ffd700" opacity="0.95"/>
    <rect x="10" y="35" width="75" height="50" rx="8" fill="#4fc3f7" opacity="0.95"/>
    <rect x="28" y="25" width="30" height="14" rx="4" fill="#29b6f6" opacity="0.95"/>
    <circle cx="47" cy="62" r="20" fill="#0d47a1" opacity="0.95"/>
    <circle cx="47" cy="62" r="14" fill="#1565c0" opacity="0.9"/>
    <circle cx="47" cy="62" r="8" fill="#0a1929" opacity="0.95"/>
    <circle cx="42" cy="57" r="3.5" fill="#ffffff" opacity="0.5"/>
    <circle cx="76" cy="45" r="6" fill="#0288d1" opacity="0.95"/>
    <rect x="15" y="42" width="14" height="8" rx="2" fill="#fff176" opacity="0.9"/>
    <path d="M15 40 Q25 34 40 33" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.4"/>
  </svg>
</span>`;

// ИКОНКА 
const BELL_OFF_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ff2020) drop-shadow(0 0 15px #cc0000);">
    <path d="M50 10 Q30 10 25 30 Q20 45 20 60 L80 60 Q80 45 75 30 Q70 10 50 10Z" fill="#ff3030" opacity="0.9"/>
    <rect x="18" y="60" width="64" height="8" rx="4" fill="#ff3030" opacity="0.9"/>
    <ellipse cx="50" cy="74" rx="8" ry="5" fill="#ff3030" opacity="0.9"/>
    <line x1="15" y1="15" x2="85" y2="85" stroke="#ffffff" stroke-width="7" stroke-linecap="round"/>
    <line x1="15" y1="15" x2="85" y2="85" stroke="#cc0000" stroke-width="4" stroke-linecap="round"/>
    <path d="M28 22 Q34 14 44 12" stroke="#ff8a80" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА ДОМИКА
const HOUSE_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <path d="M50 10 L90 45 L10 45 Z" fill="#ff7043" opacity="0.9"/>
    <rect x="65" y="18" width="8" height="18" rx="2" fill="#bf360c" opacity="0.9"/>
    <rect x="18" y="45" width="64" height="45" rx="2" fill="#ffd700" opacity="0.9"/>
    <rect x="40" y="65" width="20" height="25" rx="3" fill="#ff7043" opacity="0.9"/>
    <circle cx="56" cy="78" r="2.5" fill="#ffd700" opacity="0.9"/>
    <rect x="22" y="52" width="16" height="16" rx="2" fill="#90caf9" opacity="0.8"/>
    <line x1="30" y1="52" x2="30" y2="68" stroke="#ffffff" stroke-width="1.5" opacity="0.6"/>
    <line x1="22" y1="60" x2="38" y2="60" stroke="#ffffff" stroke-width="1.5" opacity="0.6"/>
    <rect x="62" y="52" width="16" height="16" rx="2" fill="#90caf9" opacity="0.8"/>
    <line x1="70" y1="52" x2="70" y2="68" stroke="#ffffff" stroke-width="1.5" opacity="0.6"/>
    <line x1="62" y1="60" x2="78" y2="60" stroke="#ffffff" stroke-width="1.5" opacity="0.6"/>
    <path d="M25 42 Q35 25 48 14" stroke="#ffccbc" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.4"/>
  </svg>
</span>`;

// ИКОНКА ГАЗЕТЫ
const NEWSPAPER_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #90a4ae) drop-shadow(0 0 15px #455a64);">
    <rect x="18" y="12" width="68" height="80" rx="4" fill="#546e7a" opacity="0.4"/>
    <rect x="12" y="8" width="68" height="80" rx="4" fill="#eceff1" opacity="0.95"/>
    <rect x="18" y="15" width="56" height="10" rx="2" fill="#37474f" opacity="0.9"/>
    <rect x="18" y="30" width="34" height="24" rx="2" fill="#90a4ae" opacity="0.7"/>
    <path d="M18 54 L28 38 L38 50 L44 42 L52 54Z" fill="#607d8b" opacity="0.6"/>
    <rect x="56" y="30" width="18" height="3" rx="1" fill="#90a4ae" opacity="0.7"/>
    <rect x="56" y="36" width="18" height="3" rx="1" fill="#90a4ae" opacity="0.7"/>
    <rect x="56" y="42" width="14" height="3" rx="1" fill="#90a4ae" opacity="0.7"/>
    <rect x="56" y="48" width="18" height="3" rx="1" fill="#90a4ae" opacity="0.7"/>
    <rect x="18" y="60" width="56" height="3" rx="1" fill="#90a4ae" opacity="0.7"/>
    <rect x="18" y="66" width="56" height="3" rx="1" fill="#90a4ae" opacity="0.7"/>
    <rect x="18" y="72" width="40" height="3" rx="1" fill="#90a4ae" opacity="0.7"/>
    <rect x="18" y="78" width="56" height="3" rx="1" fill="#90a4ae" opacity="0.7"/>
  </svg>
</span>`;

// ИКОНКА ПАДАЮЩИЙ ГРАФИК
const CHART_DOWN_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ff2020) drop-shadow(0 0 15px #cc0000);">
    <line x1="10" y1="10" x2="10" y2="82" stroke="#ff5252" stroke-width="3" stroke-linecap="round"/>
    <line x1="10" y1="82" x2="92" y2="82" stroke="#ff5252" stroke-width="3" stroke-linecap="round"/>
    <polyline points="15,25 35,35 55,55 75,65 88,75" stroke="#ff3030" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 25 L35 35 L55 55 L75 65 L88 75 L88 82 L15 82 Z" fill="#ff3030" opacity="0.2"/>
    <polyline points="78,58 88,75 72,72" stroke="#ff3030" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</span>`;
const CHART_DOWN_SVG_MINI = CHART_DOWN_SVG.replace('width="24" height="24"', 'width="20" height="20"');

// ИКОНКА ЛУПЫ
const SEARCH_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 15px #0288d1);">
    <circle cx="42" cy="42" r="28" fill="#1e88e5" opacity="0.8"/>
    <circle cx="42" cy="42" r="28" stroke="#4fc3f7" stroke-width="5" fill="none"/>
    <circle cx="42" cy="42" r="20" fill="#0d47a1" opacity="0.5"/>
    <path d="M26 28 Q32 20 42 18" stroke="#90caf9" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>
    <line x1="63" y1="63" x2="88" y2="88" stroke="#4fc3f7" stroke-width="8" stroke-linecap="round"/>
  </svg>
</span>`;

// ИКОНКА РАКЕТЫ
const ROCKET_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 5px;">
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #7c4dff) drop-shadow(0 0 15px #4527a0);">
    <path d="M38 78 Q40 95 50 92 Q60 95 62 78 Q55 85 50 82 Q45 85 38 78Z" fill="#ff6d00" opacity="0.9"/>
    <path d="M42 75 Q45 88 50 85 Q55 88 58 75 Q53 80 50 78 Q47 80 42 75Z" fill="#ffd600" opacity="0.9"/>
    <path d="M28 65 L18 82 L38 72 Z" fill="#5c6bc0" opacity="0.9"/>
    <path d="M72 65 L82 82 L62 72 Z" fill="#5c6bc0" opacity="0.9"/>
    <path d="M35 70 Q30 50 50 15 Q70 50 65 70 Z" fill="#7c4dff" opacity="0.95"/>
    <path d="M50 15 Q38 35 35 50 Q50 45 65 50 Q62 35 50 15Z" fill="#9c6dff" opacity="0.8"/>
    <circle cx="50" cy="52" r="10" fill="#1a237e" opacity="0.9"/>
    <circle cx="50" cy="52" r="7" fill="#283593" opacity="0.9"/>
    <circle cx="46" cy="48" r="3" fill="#ffffff" opacity="0.3"/>
    <path d="M40 30 Q42 20 50 15" stroke="#b388ff" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА БРИЛЛИАНТА
const DIAMOND_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 5px;">
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 10px #4fc3f7) drop-shadow(0 0 25px #00b0ff) drop-shadow(0 0 40px #0288d1);">
    <polygon points="50,8 92,50 50,92 8,50" fill="#29b6f6" opacity="0.9"/>
    <polygon points="50,8 92,50 50,50" fill="#81d4fa" opacity="0.9"/>
    <polygon points="50,8 8,50 50,50" fill="#4fc3f7" opacity="0.85"/>
    <polygon points="8,50 50,92 50,50" fill="#0277bd" opacity="0.9"/>
    <polygon points="92,50 50,92 50,50" fill="#01579b" opacity="0.95"/>
    <line x1="8" y1="50" x2="92" y2="50" stroke="#e1f5fe" stroke-width="1" opacity="0.3"/>
    <line x1="50" y1="8" x2="50" y2="92" stroke="#e1f5fe" stroke-width="1" opacity="0.2"/>
    <polygon points="50,8 65,30 50,38 35,30" fill="#ffffff" opacity="0.25"/>
    <circle cx="38" cy="32" r="4" fill="#ffffff" opacity="0.4"/>
    <circle cx="34" cy="26" r="2" fill="#ffffff" opacity="0.6"/>
  </svg>
</span>`;

// ИКОНКА КАРТЫ БАНКОВСКОЙ
const CARD_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #7c4dff) drop-shadow(0 0 15px #4527a0);">
    <rect x="8" y="22" width="84" height="56" rx="6" fill="#4527a0" opacity="0.4"/>
    <rect x="5" y="18" width="84" height="56" rx="6" fill="#7c4dff" opacity="0.95"/>
    <rect x="5" y="30" width="84" height="14" fill="#4527a0" opacity="0.8"/>
    <rect x="14" y="50" width="18" height="14" rx="3" fill="#ffd700" opacity="0.9"/>
    <line x1="14" y1="57" x2="32" y2="57" stroke="#e6a800" stroke-width="1.5" opacity="0.7"/>
    <line x1="23" y1="50" x2="23" y2="64" stroke="#e6a800" stroke-width="1.5" opacity="0.7"/>
    <rect x="38" y="52" width="8" height="5" rx="1" fill="#ffffff" opacity="0.6"/>
    <rect x="50" y="52" width="8" height="5" rx="1" fill="#ffffff" opacity="0.6"/>
    <rect x="62" y="52" width="8" height="5" rx="1" fill="#ffffff" opacity="0.6"/>
    <rect x="74" y="52" width="8" height="5" rx="1" fill="#ffffff" opacity="0.6"/>
    <path d="M12 22 Q25 16 45 16" stroke="#b388ff" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА РОБОТА
const ROBOT_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 15px #0288d1);">
    <line x1="50" y1="8" x2="50" y2="18" stroke="#4fc3f7" stroke-width="3" stroke-linecap="round"/>
    <circle cx="50" cy="6" r="4" fill="#ff5252" opacity="0.9"/>
    <rect x="20" y="18" width="60" height="40" rx="8" fill="#37474f" opacity="0.95"/>
    <rect x="28" y="28" width="16" height="12" rx="3" fill="#4fc3f7" opacity="0.95"/>
    <rect x="56" y="28" width="16" height="12" rx="3" fill="#4fc3f7" opacity="0.95"/>
    <circle cx="36" cy="34" r="4" fill="#ffffff" opacity="0.9"/>
    <circle cx="64" cy="34" r="4" fill="#ffffff" opacity="0.9"/>
    <rect x="28" y="46" width="44" height="6" rx="3" fill="#546e7a" opacity="0.9"/>
    <rect x="30" y="47" width="6" height="4" rx="1" fill="#69f0ae" opacity="0.9"/>
    <rect x="40" y="47" width="6" height="4" rx="1" fill="#69f0ae" opacity="0.9"/>
    <rect x="50" y="47" width="6" height="4" rx="1" fill="#69f0ae" opacity="0.9"/>
    <rect x="60" y="47" width="6" height="4" rx="1" fill="#69f0ae" opacity="0.9"/>
    <rect x="42" y="58" width="16" height="6" rx="2" fill="#455a64" opacity="0.9"/>
    <rect x="18" y="64" width="64" height="30" rx="6" fill="#455a64" opacity="0.95"/>
    <circle cx="35" cy="76" r="5" fill="#ff5252" opacity="0.9"/>
    <circle cx="50" cy="76" r="5" fill="#ffd700" opacity="0.9"/>
    <circle cx="65" cy="76" r="5" fill="#69f0ae" opacity="0.9"/>
    <rect x="25" y="86" width="50" height="4" rx="2" fill="#37474f" opacity="0.7"/>
    <path d="M25 22 Q35 16 50 16" stroke="#78909c" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.4"/>
  </svg>
</span>`;

// ИКОНКА ЗАМКА ЗАКРЫТОГО
const LOCK2_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <path d="M28 45 L28 30 Q28 12 50 12 Q72 12 72 30 L72 45" stroke="#ffd700" stroke-width="10" fill="none" stroke-linecap="round"/>
    <rect x="15" y="45" width="70" height="50" rx="8" fill="#ffd700" opacity="0.9"/>
    <rect x="15" y="45" width="70" height="50" rx="8" fill="#ffb300" opacity="0.3"/>
    <circle cx="50" cy="64" r="10" fill="#7a6000" opacity="0.9"/>
    <rect x="46" y="64" width="8" height="14" rx="3" fill="#7a6000" opacity="0.9"/>
    <path d="M22 52 Q30 44 44 43" stroke="#fff176" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА РЫБАЛКИ
const FISHING_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 5px;">
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 15px #0288d1);">
    <line x1="10" y1="90" x2="75" y2="10" stroke="#8d6e63" stroke-width="4" stroke-linecap="round"/>
    <circle cx="22" cy="76" r="7" fill="#5d4037" opacity="0.9"/>
    <circle cx="22" cy="76" r="4" fill="#795548" opacity="0.9"/>
    <path d="M75 10 Q95 10 90 40 Q88 60 70 75" stroke="#e0e0e0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M70 75 Q75 85 68 90 Q60 95 58 88" stroke="#90a4ae" stroke-width="3" fill="none" stroke-linecap="round"/>
    <line x1="58" y1="88" x2="64" y2="86" stroke="#90a4ae" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="85" cy="48" rx="4" ry="8" fill="#ff3030" opacity="0.9"/>
    <ellipse cx="85" cy="44" rx="4" ry="4" fill="#ffffff" opacity="0.9"/>
    <path d="M45 82 Q55 76 60 82 Q55 88 45 82Z" fill="#4fc3f7" opacity="0.9"/>
    <path d="M45 82 L38 78 L38 86 Z" fill="#4fc3f7" opacity="0.9"/>
    <circle cx="57" cy="81" r="1.5" fill="#0d47a1" opacity="0.9"/>
  </svg>
</span>`;

// ИКОНКА СМЕЮЩИЕСЯ СМАЙЛИК
const LOL_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
    <circle cx="50" cy="50" r="44" fill="#ffd700" opacity="0.9"/>
    <circle cx="50" cy="50" r="44" stroke="#f0b90b" stroke-width="2" fill="none"/>
    <path d="M24 35 Q32 28 40 35" stroke="#7a6000" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M60 35 Q68 28 76 35" stroke="#7a6000" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M22 55 Q50 85 78 55" fill="#7a6000" opacity="0.9"/>
    <path d="M22 55 Q50 85 78 55 Q60 62 50 62 Q40 62 22 55Z" fill="#c62828" opacity="0.9"/>
    <rect x="34" y="55" width="32" height="10" rx="3" fill="#ffffff" opacity="0.95"/>
    <line x1="50" y1="55" x2="50" y2="65" stroke="#e0e0e0" stroke-width="1.5" opacity="0.7"/>
    <path d="M18 42 Q12 52 16 60 Q20 52 18 42Z" fill="#4fc3f7" opacity="0.9"/>
    <path d="M82 42 Q88 52 84 60 Q80 52 82 42Z" fill="#4fc3f7" opacity="0.9"/>
    <path d="M22 28 Q32 18 46 16" stroke="#fff176" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА ОГОНЕК
const FIRE_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px; margin-bottom: 5px;">
  <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ff6d00) drop-shadow(0 0 15px #ff3d00) drop-shadow(0 0 25px #dd2c00);">
    <path d="M50 8 Q65 25 68 38 Q75 28 72 18 Q85 35 85 52 Q85 75 50 92 Q15 75 15 52 Q15 35 28 18 Q25 28 32 38 Q35 25 50 8Z" fill="#ff6d00" opacity="0.95"/>
    <path d="M50 22 Q60 36 62 48 Q67 38 65 30 Q74 44 74 56 Q74 72 50 84 Q26 72 26 56 Q26 44 35 30 Q33 38 38 48 Q40 36 50 22Z" fill="#ff9800" opacity="0.9"/>
    <path d="M50 38 Q56 48 57 57 Q62 50 60 44 Q66 53 66 60 Q66 72 50 80 Q34 72 34 60 Q34 53 40 44 Q38 50 43 57 Q44 48 50 38Z" fill="#ffd600" opacity="0.9"/>
    <path d="M50 55 Q54 60 54 65 Q54 72 50 75 Q46 72 46 65 Q46 60 50 55Z" fill="#ffffff" opacity="0.7"/>
  </svg>
</span>`;

// ИКОНКА ЗАНОВО
const REFRESH_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 15px #0288d1);">
    <path d="M50 15 Q75 15 82 35" stroke="#4fc3f7" stroke-width="8" fill="none" stroke-linecap="round"/>
    <polygon points="82,18 92,38 72,38" fill="#4fc3f7" opacity="0.95"/>
    <path d="M50 85 Q25 85 18 65" stroke="#4fc3f7" stroke-width="8" fill="none" stroke-linecap="round"/>
    <polygon points="18,82 8,62 28,62" fill="#4fc3f7" opacity="0.95"/>
  </svg>
</span>`;

// ИКОНКА 2 МЕСТО
const SILVER_MEDAL_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle;">
  <svg width="96" height="96" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #b0bec5) drop-shadow(0 0 15px #78909c);">
    <rect x="38" y="5" width="10" height="32" rx="2" fill="#1565c0" opacity="0.9"/>
    <rect x="52" y="5" width="10" height="32" rx="2" fill="#1e88e5" opacity="0.9"/>
    <rect x="38" y="5" width="24" height="8" rx="2" fill="#1e88e5" opacity="0.9"/>
    <circle cx="50" cy="68" r="30" fill="#78909c" opacity="0.9"/>
    <circle cx="50" cy="68" r="30" stroke="#cfd8dc" stroke-width="4" fill="none"/>
    <circle cx="50" cy="68" r="22" fill="#b0bec5" opacity="0.95"/>
    <path d="M38 60 Q38 50 50 50 Q62 50 62 58 Q62 65 50 70 L38 80 L62 80" stroke="#37474f" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28 55 Q34 46 44 44" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;

// ИКОНКА 3 МЕСТО
const BRONZE_MEDAL_SVG = `<span style="display: inline-flex; align-items: center; vertical-align: middle;">
  <svg width="96" height="96" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ff8f00) drop-shadow(0 0 15px #e65100);">
    <rect x="38" y="5" width="10" height="32" rx="2" fill="#e65100" opacity="0.9"/>
    <rect x="52" y="5" width="10" height="32" rx="2" fill="#ef6c00" opacity="0.9"/>
    <rect x="38" y="5" width="24" height="8" rx="2" fill="#ef6c00" opacity="0.9"/>
    <circle cx="50" cy="68" r="30" fill="#ff8f00" opacity="0.9"/>
    <circle cx="50" cy="68" r="30" stroke="#ffb300" stroke-width="4" fill="none"/>
    <circle cx="50" cy="68" r="22" fill="#ffcc02" opacity="0.95"/>
    <path d="M38 58 Q38 50 50 50 Q62 50 62 58 Q62 64 50 66 Q62 68 62 76 Q62 84 50 84 Q38 84 38 76" stroke="#e65100" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28 55 Q34 46 44 44" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
  </svg>
</span>`;


// МИССИИ
const MISSIONS = {

  // МИССИЯ НОМЕР 1
  dropper: {
    id: 'dropper',
    label: 'МИССИЯ 01 · ДРОППЕРСТВО',
    title: 'Легкие деньги',
    color: '#ff3b6b',
    desc: 'Незнакомец в интернете предлагает получать деньги просто так, пропуская переводы через свою карту. Звучит легко? Узнай, чем это кончается.',
    scenes: 14, diff: 'Начальный',
    tips: [
      { icon: `${SCALES_SVG}`, text: 'Дроппер – юридически пособник преступника. Уголовная ответственность с 14 лет.' },
      { icon: `${BANK_SVG}`, text: 'Банк заблокирует карту, долг придется возвращать годами.' },
      { icon: `${POLICE_SVG}`, text: 'Полиция отслеживает транзакции, вычислить дроппера легко.' },
    ],
    storyboard: [
      {
        type: 'context',
        variant: 'normal',
        text: `${PHONE_SCREEN_SVG} ВКонтакте. Тебе 15 лет. Вечер после школы. Приходит сообщение от незнакомого аккаунта «Антон Бизнес» с синей галочкой.`
      },
       // СЦЕНА 2 – первый контакт
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Антон Бизнес', senderCls: 'bad', text: 'Привет! Ищу надежного человека для удаленной работы. Без опыта, платим 5 000–10 000 ₽ в день. Интересно?' },
          { cls: 'me', sender: 'Ты (думаешь)', senderCls: 'neutral', text: 'Странно... Откуда у него мой контакт? И почему такая высокая оплата?' },
        ]
      },
      // СЦЕНА 3 – первый выбор
      {
        type: 'choice',
        question: 'Что ты ответишь?',
        choices: [
          { letter: 'А', text: 'Расскажи подробнее, что нужно делать', correct: false },
          { letter: 'Б', text: 'Звучит как мошенничество. Блокирую и сообщаю родителям', correct: true },
          { letter: 'В', text: 'Откуда у тебя мой контакт?', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Верно!`, text: 'Никогда не общайся с незнакомцами, предлагающими легкие деньги онлайн. Это классическая схема вербовки дроппера. Правильно заблокировать и рассказать взрослым.', fact: `${BULB_SVG} В 2023 году поймано более 20 000 дропперов. Большинство не знали, что совершают преступление` },
          wrong: { title: `${WARNING_SVG} Осторожно!`, text: 'Ты продолжил общение. Мошенник получил твое внимание, именно это ему и нужно. Посмотрим, что будет дальше...', fact: `${BULB_SVG} Мошенники специально ищут подростков, так как их легче убедить и они меньше знают о законах` }
        }
      },
      // СЦЕНА 4 – давление
      {
        type: 'context',
        variant: 'warn',
         text: `${WARNING_SVG} Ты продолжил разговор. Антон объясняет «работу» и начинает давить.`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Антон Бизнес', senderCls: 'bad', text: 'Смотри, все просто. Люди переводят деньги на твою карту, ты оставляешь себе 10% и отправляешь остальное дальше.' },
          { cls: 'scam', sender: 'Антон Бизнес', senderCls: 'bad', text: 'Это международный бизнес. Никаких налогов, никакой бумажной волокиты. Полностью анонимно.' },
          { cls: 'scam', sender: 'Антон Бизнес', senderCls: 'bad', text: 'Но есть нюанс, мне нужно подтвердить твою личность. Скинь фото паспорта и номер карты для регистрации в системе.' },
          { cls: 'me', sender: 'Ты (думаешь)', senderCls: 'neutral', text: 'Паспорт? Это же мои личные данные... Но с другой стороны 10 000 ₽ в день...' },
        ]
      },
      // СЦЕНА 5 – визуал схемы
      {
        type: 'visual',
        title: 'СКРИНШОТ ПЕРЕПИСКИ · ВКонтакте',
        lines: [
          { text: 'Антон: Нужно просто принимать деньги на карту и отправлять дальше.', hl: 'warn' },
          { text: 'Антон: 10% комиссия с каждого перевода – твои.', hl: 'warn' },
          { text: 'Антон: Без оформления, без налогов. Полностью анонимно.', hl: 'bad' },
          { text: 'Антон: Скинь номер карты и паспортные данные для «регистрации в системе».', hl: 'bad' },
          { text: 'Антон: У нас уже 500 человек работают. Все довольны!', hl: 'bad' },
        ]
      },
      // СЦЕНА 6 – вопрос про схему
      {
        type: 'choice',
        question: 'Что это за схема?',
        choices: [
          { letter: 'А', text: 'Нормальная удаленная работа, главное не раскрывать пин-код', correct: false },
          { letter: 'Б', text: 'Дропперская схема для отмывания краденых денег – это уголовно наказуемо', correct: true },
          { letter: 'В', text: 'Это сетевой маркетинг', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Ты разгадал схему!`, text: 'Именно! Деньги, которые будут проходить через твою карту, краденые. Ты становишься звеном в преступной цепочке. Даже «незнание» не освобождает от ответственности по закону.', fact: `${SCALES_SVG} Статья 174.1 УК РФ – легализация преступных доходов. До 7 лет лишения свободы.` },
          wrong: { title: `${CROSS_SVG} Это ловушка!`, text: 'Это не работа. Через твою карту будут проходить деньги, украденные у других людей. Ты станешь соучастником мошенничества.', fact: `${POLICE_SVG} Следователи запрашивают данные карты, тебя найдут по первому же переводу` }
        }
      },
      // СЦЕНА 7 – друг втягивается
      {
        type: 'context',
        variant: 'danger',
        text: `${ALERT_SVG} Твой одноклассник Сережа видит переписку и говорит...`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'them', sender: 'Сережа', senderCls: 'neutral', text: 'Ого, 10 тысяч в день? Давай попробуем вместе! Мне как раз на новый телефон не хватает.' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Сереж, подожди. Это выглядит подозрительно. Почему этот человек предлагает такие деньги?' },
          { cls: 'them', sender: 'Сережа', senderCls: 'neutral', text: 'Ну он же сказал, что это международный бизнес. И у него 500 человек уже работают!' },
          { cls: 'scam', sender: 'Антон Бизнес', senderCls: 'bad', text: 'Ребята, у меня горячее предложение! Только сегодня, бонус 5000 ₽ первому кто зарегистрируется!' },
        ]
      },
      // СЦЕНА 8 – вопрос про друга
      {
        type: 'choice',
        question: 'Как объяснить Сереже опасность?',
        choices: [
          { letter: 'А', text: 'Он прав, раз 500 человек работают, значит все честно', correct: false },
          { letter: 'Б', text: 'Объяснить что «500 человек» – это ложь, а через карту проходят украденные деньги', correct: true },
          { letter: 'В', text: 'Предложить попробовать только один раз для проверки', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Правильно!`, text: 'Число «500 человек» невозможно проверить, это обычная уловка. Через карту действительно проходят украденные деньги, и оба станете соучастниками. Лучше потерять «возможность», чем свободу.', fact: `${MASKS_SVG} Мошенники создают иллюзию массовости, на самом деле работает 5-10 человек, остальные жертвы` },
          wrong: { title: `${CROSS_SVG} Это опасно!`, text: '«Один раз» не существует. Как только вы согласитесь, вы будете отмечены как склонный к сотрудничеству человек. Банк и полиция будут отслеживать каждую транзакцию.', fact: `${EYE_SVG} Банковские системы мониторинга видят все подозрительные операции в реальном времени` }
        }
      },
      // СЦЕНА 9 – хроника событий
      {
        type: 'context',
        variant: 'danger',
        text: `${ALERT_SVG} Что происходит когда ты соглашаешься...`
      },
      {
        type: 'visual',
        title: 'ХРОНИКА СОБЫТИЙ',
        lines: [
          { text: 'День 1: Ты получаешь первый перевод – 50 000 ₽. Отправляешь 45 000 ₽ дальше.', hl: 'warn' },
          { text: 'День 2: Приходит еще 100 000 ₽. Ты чувствуешь себя богатым!', hl: 'warn' },
          { text: 'День 3: На карте уже 200 000 ₽. Антон хвалит: «Ты наш лучший агент!»', hl: 'warn' },
          { text: 'День 5: Карта заблокирована банком. Звонок от следователя.', hl: 'bad' },
          { text: 'День 7: Родители в шоке, на тебе висит уголовное дело.', hl: 'bad' },
          { text: 'Итог: 150 000 ₽ придется возвращать жертвам мошенничества годами.', hl: 'bad' },
        ]
      },
      // СЦЕНА 10 – звонок из банка
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Сотрудник банка (настоящий)', senderCls: 'neutral', text: 'Здравствуйте. Ваша карта заблокирована в связи с подозрительными операциями. Вам необходимо явиться в отделение с паспортом.' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Но я же ничего плохого не делал! Это была работа...' },
          { cls: 'scam', sender: 'Сотрудник банка', senderCls: 'neutral', text: 'Через вашу карту прошли платежи от пострадавших от мошенников. Вы стали звеном в преступной схеме.' },
          { cls: 'them', sender: 'Мама (на фоне)', senderCls: 'neutral', text: 'Что случилось? Почему звонят из полиции?!' },
        ]
      },
      // СЦЕНА 11 – осознание
      {
        type: 'context',
        variant: 'warn',
        text: `${SEARCH_SVG} Ты понимаешь что произошло. Антон исчез, его аккаунт удален.`
      },
      {
        type: 'visual',
        title: 'ЧТО ТЫ ПОТЕРЯЛ',
        lines: [
          { text: `${CROSS_SVG_MINI} Доверие родителей; придется восстанавливать месяцами`, hl: 'bad' },
          { text: `${CROSS_SVG_MINI} Чистую биографию; запись о проверке полицией остается`, hl: 'bad' },
          { text: `${CROSS_SVG_MINI} Доступ к банковским услугам; попадание в черный список ЦБ`, hl: 'bad' },
          { text: `${CROSS_SVG_MINI} 150 000 ₽; придется выплачивать жертвам по суду`, hl: 'bad' },
          { text: `${CHECKMARK_SVG_MINI} Урок: бесплатные деньги всегда имеют цену`, hl: 'good' },
        ]
      },
      // СЦЕНА 12 – финальный выбор
      {
        type: 'choice',
        question: 'Как можно было этого избежать?',
        choices: [
          { letter: 'А', text: 'Просто не начинать, блокировать первое же сообщение о «легких деньгах»', correct: true },
          { letter: 'Б', text: 'Быстрее выводить деньги, чтобы банк не заметил', correct: false },
          { letter: 'В', text: 'Использовать чужую карту вместо своей', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Именно так!`, text: 'Лучшая защита – не вступать в игру. Первое сообщение с предложением «легких денег» должно быть немедленно заблокировано. Расскажи об этом друзьям, возможно, ты спасешь кого-то от ошибки.', fact: `${SHIELD_SVG} 95% дропперов вербуются через соцсети и мессенджеры` },
          wrong: { title: `${CROSS_SVG} Это только усугубит!`, text: 'Быстрое выведение денег или использование чужой карты – это дополнительные статьи УК РФ. Банковские системы мониторинга видят все.', fact: `${EYE_SVG} Банки используют ИИ для отслеживания подозрительных транзакций в реальном времени` }
        }
      },
      // СЦЕНА 13 – статистика
      {
        type: 'visual',
        title: 'ДРОППЕРСТВО В ЦИФРАХ · 2024',
        lines: [
          { text: `${CHART_SVG} Более 20 000 дропперов поймано в 2023 году`, hl: 'bad' },
          { text: `${USERS_SVG} 78% дропперов несовершеннолетние 14-18 лет`, hl: 'bad' },
          { text: `${MONEY_SVG} Средняя сумма ущерба от одного дроппера: 500 000 ₽`, hl: 'bad' },
          { text: `${SCALES_SVG} Статья 174.1 УК РФ: до 7 лет лишения свободы`, hl: 'bad' },
          { text: `${CHECKMARK_SVG_MINI} Защита: никогда не передавай данные карты незнакомцам`, hl: 'good' },
          { text: `${CHECKMARK_SVG_MINI} Сообщить о вербовке: МВД.РФ или Госуслуги`, hl: 'good' },
        ]
      },
      // СЦЕНА 14 – финальное сообщение
      {
        type: 'context',
        variant: 'normal',
        text: `${BULB_SVG} Запомни: если предложение звучит слишком хорошо, чтобы быть правдой, это почти всегда обман. Легких денег не бывает. Твоя финансовая безопасность стоит дороже любых обещаний.`
      }
    ]
  },

  // МИССИЯ НОМЕР 2
  gosuslugi: {
    id: 'gosuslugi',
    label: 'МИССИЯ 02 · ФИШИНГ',
    title: 'Цветочный магазин',
    color: '#ffe500',
    desc: 'Звонок из «службы поддержки» Госуслуг. Или не из Госуслуг? Разберись, как мошенники используют невинный повод – доставку цветов, чтобы захватить твой аккаунт.',
    scenes: 12, diff: 'Средний',
    tips: [
      { icon: `${LOCK_SVG}`, text: 'Настоящие сотрудники Госуслуг никогда не спрашивают коды из СМС.' },
      { icon: `${PHONE_SVG}`, text: 'Если сомневаешься, сбрось звонок и перезвони на официальный номер самостоятельно.' },
      { icon: `${FLOWER_SVG}`, text: 'Схема «цветочный магазин» – реальная мошенническая схема 2022–2024 годов.' },
    ],
    storyboard: [
      // СЦЕНА 1 – контекст
      {
        type: 'context',
        variant: 'normal',
        text: `${PHONE_SVG} Субботнее утро. Тебе приходит звонок с незнакомого номера +7 (495) 123-45-67. Ты берешь трубку.`
      },
      // СЦЕНА 2 – первый диалог
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Звонящий', senderCls: 'bad', text: 'Добрый день! Беспокоит интернет-магазин «Цветочный Мир». Вы делали заказ на букет для доставки сегодня?' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Нет, я ничего не заказывал. Вы ошиблись номером.' },
          { cls: 'scam', sender: 'Звонящий', senderCls: 'bad', text: 'Странно! В заказе указан ваш номер телефона. Возможно, кто-то использует ваши данные для мошенничества!' },
          { cls: 'scam', sender: 'Звонящий', senderCls: 'bad', text: 'Нам пришлось направить срочный запрос в Госуслуги для блокировки заказа. Сейчас вам придет код подтверждения, продиктуйте его, чтобы отменить мошеннический заказ.' },
        ]
      },
      // СЦЕНА 3 – давление
      {
        type: 'context',
        variant: 'warn',
        text: `${ALARM_SVG} Звонящий начинает торопить тебя.`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Звонящий', senderCls: 'bad', text: 'Код уже должен прийти! У нас есть только 5 минут чтобы отменить заказ, иначе с вашего счета спишут 15 000 рублей!' },
          { cls: 'me', sender: 'Ты (думаешь)', senderCls: 'neutral', text: '15 тысяч?! Но у меня нет таких денег... Надо срочно что-то делать!' },
        ]
      },
      // СЦЕНА 4 – первый выбор
      {
        type: 'choice',
        question: 'На твой телефон приходит СМС с кодом от Госуслуг. Что делаешь?',
        choices: [
          { letter: 'А', text: 'Диктую код, раз это поможет отменить заказ и спасти деньги', correct: false },
          { letter: 'Б', text: 'Кладу трубку. Код от Госуслуг нельзя никому говорить, это пароль доступа к аккаунту', correct: true },
          { letter: 'В', text: 'Прошу подождать и иду спросить у родителей', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Правильно!`, text: 'Код из СМС – это одноразовый пароль. Назвав его незнакомцу, ты отдаешь контроль над своим аккаунтом Госуслуг, к которому привязаны паспорт, СНИЛС, банки и многое другое.', fact: `${FLOWER_SVG} Схема «цветочный магазин» – звонок якобы из магазина, чтобы усыпить бдительность` },
          wrong: { title: `${CROSS_SVG} Аккаунт угнан!`, text: 'Ты продиктовал код, мошенник вошел в твои Госуслуги. Теперь он может оформить кредит, сменить данные или украсть документы.', fact: `${LOCK_SVG} НИКОГДА не называй коды из СМС, даже «сотрудникам» банка или госслужб` }
        }
      },
      // СЦЕНА 5 – друг попадаетсья
      {
        type: 'context',
        variant: 'danger',
        text: `${ALERT_SVG} Твоя подруга Лена рассказывает что ей звонили по такой же схеме...`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'them', sender: 'Лена', senderCls: 'neutral', text: 'Представляешь, мне вчера звонили из «цветочного магазина»! Я испугалась и продиктовала код...' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Лена, нет! Это же мошенники! Что теперь?' },
          { cls: 'them', sender: 'Лена', senderCls: 'neutral', text: 'Уже поздно... Они зашли в мои Госуслуги и оформили микрозайм на 30 000 ₽. Мама в шоке.' },
          { cls: 'scam', sender: 'Звонящий (голос в голове)', senderCls: 'bad', text: '«Нам нужно подтвердить вашу личность... Продиктуйте код...»' },
        ]
      },
      // СЦЕНА 6 – вопрос про Лену
      {
        type: 'choice',
        question: 'Что нужно сделать Лене НЕМЕДЛЕННО?',
        choices: [
          { letter: 'А', text: 'Ждать пока мошенники сами вернут деньги', correct: false },
          { letter: 'Б', text: 'Срочно войти на Госуслуги, сменить пароль, сообщить в банк и полицию', correct: true },
          { letter: 'В', text: 'Удалить приложение Госуслуг и забыть об этом', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Верно!`, text: 'Нужно действовать быстро: смени пароль на gosuslugi.ru, включи двухфакторную аутентификацию, позвони в банк для блокировки счетов, напиши заявление в полицию. Чем быстрее, тем больше шансов вернуть деньги.', fact: `${TIMER_SVG} За первые 24 часа можно заблокировать до 80% мошеннических операций` },
          wrong: { title: `${CROSS_SVG} Время работает против!`, text: 'Каждая минута промедления позволяет мошенникам сделать еще больше: оформить кредиты, получить доступ к налоговой, продать данные.', fact: `${FLYING_MONEY_SVG} Среднее время оформления кредита мошенниками: 7-15 минут после входа в аккаунт` },
        }
      },
      // СЦЕНА 7 – разбор схемы
      {
        type: 'context',
        variant: 'warn',
        text: `${SEARCH_SVG} Разберем, как работает эта схема изнутри.`
      },
      {
        type: 'visual',
        title: 'КАК РАБОТАЕТ СХЕМА «ЦВЕТОЧНЫЙ МАГАЗИН»',
        lines: [
          { text: '1. Мошенник звонит под предлогом «отмены заказа» или «подтверждения данных»', hl: 'warn' },
          { text: '2. Создает панику: «кто-то использует ваши данные», «спишут деньги»', hl: 'bad' },
          { text: '3. Запрашивает код из СМС от Госуслуг якобы «для проверки»', hl: 'bad' },
          { text: '4. Использует код для входа в аккаунт жертвы', hl: 'bad' },
          { text: '5. Получает доступ к документам, налогам, кредитной истории', hl: 'bad' },
          { text: '6. Оформляет кредиты/займы на имя жертвы', hl: 'bad' },
          { text: `${CHECKMARK_SVG_MINI} Защита: сбросить звонок, войти на gosuslugi.ru самому и проверить`, hl: 'good' },
        ]
      },
      // СЦЕНА 8 – проверка информации
      {
        type: 'messages',
        msgs: [
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Лен, а ты проверяла существует ли вообще этот «Цветочный Мир»?' },
          { cls: 'them', sender: 'Лена', senderCls: 'neutral', text: 'Ищу в интернете... О, нашла! Есть такой магазин, но они говорят что никогда не звонят клиентам первыми!' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Вот видишь! Мошенники просто прикрываются названием реального магазина.' },
          { cls: 'them', sender: 'Лена', senderCls: 'neutral', text: 'Как я могла быть такой наивной... Теперь маме придется выплачивать этот кредит.' },
        ]
      },
      // СЦЕНА 9 – вопрос про проверку
      {
        type: 'choice',
        question: 'Как проверить звонящего прежде чем доверять?',
        choices: [
          { letter: 'А', text: 'Поверить на слово, зачем им врать?', correct: false },
          { letter: 'Б', text: 'Положить трубку, найти официальный номер организации и перезвонить самому', correct: true },
          { letter: 'В', text: 'Попросить прислать ссылку для проверки', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Правильный подход!`, text: 'Никогда не доверяй входящим звонкам от «организаций». Положи трубку, найди официальный номер на сайте организации (не в поисковике!) и перезвони сам. Так ты точно попадешь к реальному сотруднику.', fact: `${PHONE_SVG} Официальный номер Госуслуг: 8-800-100-70-10 (бесплатно)` },
          wrong: { title: `${CROSS_SVG} Это опасно!`, text: 'Ссылки от мошенников ведут на фейковые сайты. Доверие к первому звонку – главная ошибка. Всегда перезванивай сам по официальному номеру.', fact: `${MASKS_SVG} Мошенники используют подменные номера, на экране может отображаться любой номер` }
        }
      },
      // СЦЕНА 10 – последствия для Лены
      {
        type: 'context',
        variant: 'danger',
        text: `${CHART_SVG} Что потеряла Лена из-за одного звонка:`
      },
      {
        type: 'visual',
        title: 'ПОСЛЕДСТВИЯ ОДНОГО ЗВОНКА',
        lines: [
          { text: `${CROSS_SVG_MINI} 30 000 ₽ – оформленный мошенниками микрозайм`, hl: 'bad' },
          { text: `${CROSS_SVG_MINI} Доступ к личным данным: паспорт, СНИЛС, ИНН`, hl: 'bad' },
          { text: `${CROSS_SVG_MINI} Кредитная история испорчена на 5 лет`, hl: 'bad' },
          { text: `${CROSS_SVG_MINI} Месяцы разбирательств с банками и полицией`, hl: 'bad' },
          { text: `${CROSS_SVG_MINI} Подорванное доверие родителей`, hl: 'bad' },
          { text: `${CHECKMARK_SVG_MINI} Урок: код из СМС = пароль, никому не говорить`, hl: 'good' },
        ]
      },
      // СЦЕНА 11 – финальный выбор
      {
        type: 'choice',
        question: 'Если ты уже назвал код, что делать НЕМЕДЛЕННО?',
        choices: [
          { letter: 'А', text: 'Ничего, наверное, само пройдет', correct: false },
          { letter: 'Б', text: 'Войти на Госуслуги, сменить пароль и сообщить в техподдержку', correct: true },
          { letter: 'В', text: 'Ждать звонка обратно от этого же человека', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Верные действия!`, text: 'Немедленно: смени пароль на gosuslugi.ru, включи двухфакторную аутентификацию, проверь историю входов в аккаунт. Сообщи родителям и на горячую линию Госуслуг: 8-800-100-70-10.', fact: `${PHONE_SVG} Горячая линия Госуслуг: 8-800-100-70-10 (бесплатно)` },
          wrong: { title: `${CROSS_SVG} Каждая минута важна!`, text: 'Пока ты ждешь, мошенник уже в твоем аккаунте. Смени пароль прямо сейчас!', fact: `${TIMER_SVG} За несколько минут мошенник может оформить кредит на твое имя` }
        }
      },
      // СЦЕНА 12 – статистика и защита
      {
        type: 'visual',
        title: 'ФИШИНГ В ЦИФРАХ · 2024',
        lines: [
          { text: `${CHART_SVG} Более 2 млн россиян пострадали от фишинга в 2023 году`, hl: 'bad' },
          { text: `${MONEY_SVG} Средний ущерб одной жертвы: 45 000 ₽`, hl: 'bad' },
          { text: `${PHONE_SVG_MINI} 67% мошеннических звонков начинаются с «отмены заказа»`, hl: 'bad' },
          { text: `${LOCK_SVG} 2FA защищает аккаунт даже если код украден`, hl: 'good' },
          { text: `${CHECKMARK_SVG_MINI} Правило: код из СМС = пароль, никому не говорить`, hl: 'good' },
          { text: `${CHECKMARK_SVG_MINI} Сообщить о мошенничестве: Госуслуги → МВД`, hl: 'good' },
        ]
      }
    ]
  },

  // МИССИЯ НОМЕР 3
  klad: {
    id: 'klad',
    label: 'МИССИЯ 03 · ЗАКЛАДКИ',
    title: 'Легкий Клад',
    color: '#b46fff',
    desc: 'В интернете предлагают хорошо заплатить за «раскладку посылок». Это выглядит безобидно, пока не понимаешь, что именно ты раскладываешь.',
    scenes: 12, diff: 'Средний',
    tips: [
      { icon: `${FORBIDDEN_SVG}`, text: 'Раскладка закладок – это соучастие в наркоторговле. Реальный срок от 8 лет.' },
      { icon: `${PHONE_SCREEN_SVG}`, text: 'Вербовщики ищут жертв в играх, Discord, Telegram – везде, где есть подростки.' },
      { icon: `${SOS_SVG}`, text: 'Если тебя уже втянули, обратись в полицию или на горячую линию 8-800-2000-122.' },
    ],
    storyboard: [
      // СЦЕНА 1 – контекст
      {
        type: 'context',
        variant: 'normal',
        text: `${GAMEPAD_SVG} Вечер пятницы. Ты играешь в онлайн-игру. В Discord-сервере игры тебе пишет новый участник с ником Stranger228.`
      },
      // СЦЕНА 2 – первый контакт
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Stranger228', senderCls: 'bad', text: 'Хей, ты из [твой город]? Вижу ты часто онлайн. Есть серьезный заработок для надежных людей.' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Какой еще заработок? Я просто играю.' },
          { cls: 'scam', sender: 'Stranger228', senderCls: 'bad', text: 'Именно! 3 000 ₽ в час. Нужно просто раскладывать «посылки» по адресам. Работа рядом с Лесной улицей. Интересует?' },
        ]
      },
      // СЦЕНА 3 – первый выбор
      {
        type: 'choice',
        question: 'Что это за «посылки» скорее всего?',
        choices: [
          { letter: 'А', text: 'Курьерская доставка интернет-магазина', correct: false },
          { letter: 'Б', text: 'Наркотики – это вербовка в закладчики', correct: true },
          { letter: 'В', text: 'Листовки или промо-товары', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Верно распознал!`, text: 'Схема «закладчик» – человек прячет наркотики в тайниках («закладках»), покупатели находят их по адресам. Вербовщики специально ищут несовершеннолетних, считая, что им дадут меньший срок. Это неправда.', fact: `${SCALES_SVG} За закладку наркотиков до 15 лет лишения свободы даже для несовершеннолетних` },
          wrong: { title: `${CROSS_SVG} Это ловушка!`, text: 'Настоящие курьерские сервисы так не вербуют (через игровые чаты анонимные незнакомцы). Это наркоторговля.', fact: `${ALERT_SVG} Сотни подростков попали за решетку, поверив, что это «просто курьерка»` }
        }
      },
      // СЦЕНА 4 – давление
      {
        type: 'context',
        variant: 'warn',
        text: `${ALARM_SVG} Stranger228 начинает давить, видя твое сомнение.`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Stranger228', senderCls: 'bad', text: 'Слушай, я вижу ты сомневаешься. Понимаю, но у нас дедлайн, нужно закрыть район до понедельника.' },
          { cls: 'scam', sender: 'Stranger228', senderCls: 'bad', text: 'Тебе сколько лет? 14? Вообще супер, несовершеннолетним вообще ничего не будет. Один рейс и у тебя 3 тысячи. Никто не узнает.' },
          { cls: 'scam', sender: 'Stranger228', senderCls: 'bad', text: 'У меня уже 5 человек работает. Все довольны. Вот скриншоты выплат (отправляет фейковые скрины).', hl: 'bad' },
          { cls: 'me', sender: 'Ты (думаешь)', senderCls: 'neutral', text: '3000 рублей за один раз... Это же почти моя недельная стипендия. Но почему тогда он так торопит?' },
        ]
      },
      // СЦЕНА 5 – друг советует
      {
        type: 'context',
        variant: 'normal',
        text: `${USERS_SVG_BIG} Ты решаешь посоветоваться с другом Максимом.`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Макс, смотри что пишут. Предлагают 3к за раскладку посылок. Как думаешь?' },
          { cls: 'them', sender: 'Максим', senderCls: 'neutral', text: 'Чувак, это же ЗАКЛАДКИ! Мой брат рассказывал, так наркодилеры работают!' },
          { cls: 'them', sender: 'Максим', senderCls: 'neutral', text: 'Тебе скажут что безопасно, но это бред. Моего одноклассника уже повязали за такое. Сейчас в СИЗО сидит.' },
          { cls: 'scam', sender: 'Stranger228', senderCls: 'bad', text: 'Ну что, согласен? Давай быстрее, места ограничены!' },
        ]
      },
      // СЦЕНА 6 – вопрос про возраст
      {
        type: 'choice',
        question: 'Stranger228 говорит: «Несовершеннолетним ничего не будет». Это правда?',
        choices: [
          { letter: 'А', text: 'Да, до 16 лет уголовной ответственности нет', correct: false },
          { letter: 'Б', text: 'Нет, с 14 лет есть ответственность за тяжкие преступления, а с 16 – за все', correct: true },
          { letter: 'В', text: 'Если один раз, наверное пронесет', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Верно!`, text: 'Уголовная ответственность за наркотики наступает с 14 лет (ст. 228.1 УК РФ). Несовершеннолетних отправляют в воспитательные колонии. «Один раз» не существует, каждое действие фиксируется.', fact: `${CHART_SVG} В 2023 году более 800 несовершеннолетних осуждены за наркотики` },
          wrong: { title: `${CROSS_SVG} Опасное заблуждение!`, text: 'Это главная ложь вербовщиков. С 14 лет – ответственность за тяжкие преступления (наркотики), с 16 за все. Возраст не защита, а мишень для манипуляции.', fact: `${SCALES_SVG} Статья 228.1 УК РФ: от 8 до 15 лет лишения свободы` }
        }
      },
      // СЦЕНА 7 – разбор схемы
      {
        type: 'context',
        variant: 'danger',
        text: `${SEARCH_SVG} Как работает схема вербовки закладчиков:`
      },
      {
        type: 'visual',
        title: 'СХЕМА ВЕРБОВКИ ЗАКЛАДЧИКОВ',
        lines: [
          { text: '1. Ищут в играх, соцсетях, Discord, где много подростков', hl: 'warn' },
          { text: '2. Предлагают «легкий заработок» без опыта', hl: 'bad' },
          { text: '3. Лгут про безопасность и возраст', hl: 'bad' },
          { text: '4. Показывают фейковые скриншоты выплат', hl: 'bad' },
          { text: '5. Торопят: «дедлайн», «места ограничены»', hl: 'bad' },
          { text: '6. После первой закладки, шантаж и зависимость', hl: 'bad' },
          { text: `${CHECKMARK_SVG_MINI} Защита: заблокировать, сообщить родителям, позвонить 8-800-2000-122`, hl: 'good' },
        ]
      },
      // СЦЕНА 8 – последствия друга
      {
        type: 'messages',
        msgs: [
          { cls: 'them', sender: 'Максим', senderCls: 'neutral', text: 'Серьезно, не связывайся. Мой брат сказал что эти «работодатели» потом шантажируют.' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Как шантажируют?' },
          { cls: 'them', sender: 'Максим', senderCls: 'neutral', text: 'Фоткают первую закладку, требуют работать дальше. Иначе говорят что сдадут полиции. И человек становится рабом.' },
          { cls: 'scam', sender: 'Stranger228', senderCls: 'bad', text: 'Последний шанс! Через час набор закрываем!' },
        ]
      },
      // СЦЕНА 9 – финальный выбор
      {
        type: 'choice',
        question: 'Что из этого правда?',
        choices: [
          { letter: 'А', text: 'Несовершеннолетним действительно дают меньше, можно рискнуть', correct: false },
          { letter: 'Б', text: 'Все ложь. Несовершеннолетним тоже дают реальные сроки, а вербовщик получит еще и за вовлечение ребенка', correct: true },
          { letter: 'В', text: 'Если всего один раз, наверное безопасно', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Отлично!`, text: 'Миф о "несовершеннолетии как защите" – это приманка. Суды дают реальные сроки. Вербовщик знает это и специально лжет, чтобы ты не боялся. Заблокируй, расскажи взрослым или позвони на горячую линию.', fact: `${PHONE_SVG} Горячая линия психологической помощи: 8-800-2000-122 (бесплатно, анонимно)` },
          wrong: { title: `${CROSS_SVG} Это ложь!`, text: 'Мошенник использует твой возраст против тебя. Несовершеннолетние получают реальные сроки в воспитательных колониях. «Один раз» не существует, тебя запишут и будут шантажировать.', fact: `${CAMERA_SVG} Вербовщики фиксируют первую закладку на фото, потом шантажируют` }
        }
      },
      // СЦЕНА 10 – история жертвы
      {
        type: 'context',
        variant: 'danger',
        text: `${CHART_SVG} Реальная история одного закладчика:`
      },
      {
        type: 'visual',
        title: 'ИСТОРИЯ АЛЕКСЕЯ, 16 ЛЕТ',
        lines: [
          { text: 'День 1: Согласился на «раскладку», получил 3000 ₽', hl: 'warn' },
          { text: 'День 3: Вербовщик прислал фото с закладки: «Теперь работаешь на нас»', hl: 'bad' },
          { text: 'День 7: Попытался отказаться, пригрозили сдать полиции', hl: 'bad' },
          { text: 'День 14: Задержан с поличным. 12 граммов запрещенных веществ', hl: 'bad' },
          { text: 'Итог: 9 лет колонии. Жизнь разрушена.', hl: 'bad' },
        ]
      },
      // СЦЕНА 11 – статистика
      {
        type: 'visual',
        title: 'СТАТИСТИКА ПО ЗАКЛАДКАМ · 2024',
        lines: [
          { text: `${CHART_SVG} 78% закладчиков несовершеннолетние 14-18 лет`, hl: 'bad' },
          { text: `${SCALES_SVG} Средний срок: 8-12 лет лишения свободы`, hl: 'bad' },
          { text: `${MONEY_SVG} «Заработок»: 3000-5000 ₽ за рейс vs 10 лет свободы`, hl: 'bad' },
          { text: `${TARGET_SVG} 90% вербовок происходит в соцсетях и мессенджерах`, hl: 'bad' },
          { text: `${CHECKMARK_SVG_MINI} Защита: никогда не соглашаться на «раскладку`, hl: 'good' },
          { text: `${CHECKMARK_SVG_MINI} Сообщить о вербовке: полиция или 8-800-2000-122`, hl: 'good' },
        ]
      },
      // СЦЕНА 12 – финальное сообщение
      {
        type: 'context',
        variant: 'normal',
        text: `${BULB_SVG} Помни: легальных способов заработать больше чем 3000 ₽ в час для подростка НЕ СУЩЕСТВУЕТ. Любое такое предложение – это обман или преступление. Твоя свобода стоит дороже любых денег.`
      }
    ]
  },

  // МИССИЯ НОМЕР 4
  terror: {
    id: 'terror',
    label: 'МИССИЯ 04 · ЭКСТРЕМИЗМ',
    title: 'Обиженный герой',
    color: '#ff7043',
    desc: 'Кто-то в сети понимает тебя лучше всех. Жалеет. Называет героем. Но постепенно разговоры становятся опаснее...',
    scenes: 12, diff: 'Сложный',
    tips: [
      { icon: `${BRAIN_SVG}`, text: 'Вербовщики в деструктивные группы сначала «дружат», потом медленно меняют взгляды.' },
      { icon: `${FLAG_SVG}`, text: 'Красные флаги: «только мы понимаем тебя», «обычные люди – это враги», «ты избранный».' },
      { icon: `${MEGAPHONE_SVG}`, text: 'Если тебя или друга склоняют к насилию, сообщи в ФСБ: fsb.ru или 8 (800) 224-22-22.' },
    ],
    storyboard: [
      // СЦЕНА 1 – контекст
      {
        type: 'context',
        variant: 'normal',
        text: `${CHAT_SVG} Telegram. Тебе 16 лет. После серьезного конфликта в школе ты выложил грустный пост в соцсетях. Вечером приходит сообщение от незнакомца.`
      },
      // СЦЕНА 2 – первый контакт
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Привет. Видел твой пост. Слушай, я понимаю тебя как никто другой. Школа – это настоящая тюрьма, учителя издеваются, одноклассники не уважают. Я сам через все это прошел.' },
          { cls: 'me', sender: 'Ты (думаешь)', senderCls: 'neutral', text: 'Странно... Откуда он знает про мой пост? И почему пишет именно мне?' },
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Ты не один такой. У нас есть закрытый чат, где собрались настоящие люди. Те, кто не предают. Те, кто понимают друг друга без слов.' },
        ]
      },
      // СЦЕНА 3 – первый выбор
      {
        type: 'choice',
        question: 'Что настораживает в этом сообщении?',
        choices: [
          { letter: 'А', text: 'Ничего, человек просто хочет помочь и поддержать', correct: false },
          { letter: 'Б', text: 'Незнакомец читал мои посты и сразу предлагает «закрытое сообщество» – это манипуляция', correct: true },
          { letter: 'В', text: 'Он говорит слишком правильно, наверное это бот', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Хорошая интуиция!`, text: 'Вербовщики деструктивных групп используют технику «ловли на боли»: находят людей в уязвимом состоянии и предлагают «понимание». Закрытое сообщество – это следующий шаг изоляции.', fact: `${BRAIN_SVG} Техника называется love bombing – «бомбардировка любовью» для вербовки` },
          wrong: { title: `${WARNING_SVG} Будь внимательнее!`, text: 'Незнакомец знает твои посты, называет тебя «не одиноким» и зовет в закрытый чат – это классическая схема вербовки. Настоящие друзья так не действуют.', fact: `${FLAG_SVG} «Закрытое сообщество только для избранных» является красным флагом любой секты или экстремистской группы` }
        }
      },
      // СЦЕНА 4 – развитие доверия
      {
        type: 'context',
        variant: 'warn',
        text: `${CLOCK_SVG} Ты решил посмотреть, куда приведет этот разговор. Прошла неделя ежедневного общения.`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Брат, я вижу в тебе потенциал. Ты умнее этих серых масс. Они не заслуживают твоего внимания.' },
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Знаешь, почему у тебя проблемы? Потому что система сломана. Учителя, родители, полиция – все они работают против таких как мы.' },
          { cls: 'me', sender: 'Ты (думаешь)', senderCls: 'neutral', text: 'Он вроде говорит правильные вещи... Но почему все звучит так радикально?' },
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Я добавил тебя в наш закрытый чат. Посмотри, сколько здесь крутых ребят. Все прошли через то же самое.' },
        ]
      },
      // СЦЕНА 5 – визуализация чата
      {
        type: 'visual',
        title: 'СКРИНШОТ ЧАТА · «Истинные братья»',
        lines: [
          { text: 'Макс_Правда: Всем привет! Это новый брат, присоединился к нам.', hl: 'warn' },
          { text: 'Wolf_777: Привет! Наконец-то еще один нормальный человек.', hl: 'warn' },
          { text: 'Shadow_Hunter: Добро пожаловать в семью. Здесь ты найдешь настоящих друзей.', hl: 'bad' },
          { text: 'IronTruth: Мы изменим этот мир. Вместе мы сила.', hl: 'bad' },
          { text: 'Макс_Правда: Скоро будет важное собрание. Только для своих.', hl: 'bad' },
        ]
      },
      // СЦЕНА 6 – вопрос про чат
      {
        type: 'choice',
        question: 'Что должно насторожить в этом чате?',
        choices: [
          { letter: 'А', text: 'Все нормально, просто группа поддержки для подростков', correct: false },
          { letter: 'Б', text: 'Слова «семья», «братья», «только для своих» – признаки изоляции и культа', correct: true },
          { letter: 'В', text: 'Слишком много участников, наверное это просто популярный чат', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Ты видишь красные флаги!`, text: 'Культовые группы используют язык «семьи» и «избранности» для создания ложного чувства принадлежности. Это первый шаг к полному контролю над сознанием.', fact: `${FLAG_SVG} Термины «братья», «семья», «избранные» используются в 90% вербовочных групп` },
          wrong: { title: `${WARNING_SVG} Опасное заблуждение!`, text: 'Это не группа поддержки. Это изоляция от общества и подготовка к принятию радикальных идей. Настоящая поддержка не требует отказа от внешнего мира.', fact: `${BRAIN_SVG} Изоляция – первый признак деструктивной секты или экстремистской группы` }
        }
      },
      // СЦЕНА 7 – эскалация
      {
        type: 'context',
        variant: 'danger',
        text: `${ALERT_SVG} Прошло еще две недели. Тон переписки резко меняется. Макс начинает говорить о «действиях».`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Брат, слова ничего не меняют. Настоящий герой действует. История помнит только тех, кто сделал что-то большое.' },
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Ты ведь не хочешь всю жизнь быть жертвой системы? Пришло время стать победителем.' },
          { cls: 'me', sender: 'Ты (думаешь)', senderCls: 'neutral', text: 'Что он имеет в виду под «действием»? Это звучит опасно...' },
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Есть план. Большой план. Тебе нужно только быть в нужном месте в нужное время. Ты готов войти в историю?' },
        ]
      },
      // СЦЕНА 8 – давление
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Не сомневайся. Те, кто сомневаются – не настоящие братья. Они остаются с системой.' },
          { cls: 'scam', sender: 'Макс_Правда', senderCls: 'bad', text: 'Завтра в 18:00 будет встреча. Адрес скину лично. Никому не говори, это только для своих.' },
          { cls: 'me', sender: 'Ты (думаешь)', senderCls: 'neutral', text: 'Тайная встреча? Без родителей? Что-то здесь очень неправильно...' },
        ]
      },
      // СЦЕНА 9 – визуализация давления
      {
        type: 'visual',
        title: 'ПОСЛЕДНИЕ СООБЩЕНИЯ ОТ МАКСА',
        lines: [
          { text: 'Макс: Слова ничего не меняют. Герой действует.', hl: 'bad' },
          { text: 'Макс: Ты готов войти в историю?', hl: 'bad' },
          { text: 'Макс: Завтра в 18:00 встреча. Адрес позже.', hl: 'bad' },
          { text: 'Макс: Никому не говори. Только для своих.', hl: 'bad' },
          { text: 'Макс: Не подведи братьев.', hl: 'bad' },
        ]
      },
      // СЦЕНА 10 – критический выбор
      {
        type: 'choice',
        question: 'Что нужно сделать ПРЯМО СЕЙЧАС?',
        choices: [
          { letter: 'А', text: 'Уточнить подробности «плана» и встречи', correct: false },
          { letter: 'Б', text: 'Немедленно прекратить общение, сохранить скриншоты и сообщить взрослым или в полицию', correct: true },
          { letter: 'В', text: 'Пойти на встречу, чтобы разобраться что происходит', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Правильное решение!`, text: 'Это уже склонение к совершению насильственного акта. Немедленно: сохрани скриншоты, выйди из чата, расскажи родителям или учителю, сообщи в полицию или ФСБ. Это не предательство – это спасение жизней, в том числе своей.', fact: `${MEGAPHONE_SVG} Сообщить анонимно в ФСБ: fsb.ru или 8-800-224-22-22 (бесплатно)` },
          wrong: { title: `${CROSS_SVG} Опасно!`, text: 'Уточнение деталей или поход на встречу уже делает тебя потенциально причастным. Не вступай в диалог, выходи и сообщай.', fact: `${SCALES_SVG} Недонесение о подготовке теракта – это уголовная статья. Сообщить – это твоя защита.` }
        }
      },
      // СЦЕНА 11 – друг в опасности
      {
        type: 'context',
        variant: 'danger',
        text: `${ALERT_SVG} Твой друг Кирилл рассказывает, что его тоже зовут в какой-то «закрытый чат».`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'them', sender: 'Кирилл', senderCls: 'neutral', text: 'Слушай, мне тут один парень написал. Говорит, что понял меня. Зовет в закрытое сообщество. Говорит, что там настоящие друзья.' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Кирилл, стоп! Это опасно. Мне тоже писали точно также. Потом начали звать на тайные встречи.' },
          { cls: 'them', sender: 'Кирилл', senderCls: 'neutral', text: 'Да ладно, ты преувеличиваешь. Он просто хочет помочь...' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Нет! Сохрани переписку и покажи родителям. Это схема вербовки. Я серьезно.' },
        ]
      },
      // СЦЕНА 12 – финальный урок
      {
        type: 'choice',
        question: 'Как помочь другу распознать вербовку?',
        choices: [
          { letter: 'А', text: 'Сказать что он глупый и сам виноват', correct: false },
          { letter: 'Б', text: 'Показать свои скриншоты, объяснить схему и предложить вместе обратиться к взрослым', correct: true },
          { letter: 'В', text: 'Просто запретить ему общаться, без объяснений', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Ты настоящий друг!`, text: 'Поддержка и факты работают лучше запретов. Покажи другу реальные доказательства схемы, предложи вместе поговорить с родителями или школьным психологом. Вместе вы сильнее.', fact: `${CHAT_SVG} Доверительный разговор снижает риск вербовки на 80%` },
          wrong: { title: `${WARNING_SVG} Так не сработает!`, text: 'Оскорбления или запреты без объяснений только отдалят друга и заставят его скрывать переписку. Нужен открытый диалог и доказательства.', fact: `${BRAIN_SVG} Подростки в 3 раза чаще слушают сверстников, чем взрослых, но нужны факты` }
        }
      }
    ]
  },

  // МИССИЯ НОМЕР 5
  bully: {
    id: 'bully',
    label: 'МИССИЯ 05 · КИБЕРБУЛЛИНГ',
    title: 'Кибербуллинг',
    color: '#00e5ff',
    desc: 'Бывший одноклассник начинает давить, угрожать и распространять слухи. Что делать, когда травля переходит в онлайн?',
    scenes: 12, diff: 'Начальный',
    tips: [
      { icon: `${PHOTO_SVG}`, text: 'Всегда делай скриншоты угроз, это доказательства.' },
      { icon: `${BELL_OFF_SVG}`, text: 'Блокировка хулигана – не слабость, а защита своих границ.' },
      { icon: `${CHAT_SVG}`, text: 'Кибербуллинг – это не норма. Расскажи взрослым или психологу.' },
    ],
    storyboard: [
      // СЦЕНА 1 – контекст
      {
        type: 'context',
        variant: 'normal',
        text: `${PHOTO_SVG} Instagram. Тебе 15 лет. После ссоры с бывшим одноклассником Денисом ты замечаешь странные комментарии под своими фотографиями.`
      },
      // СЦЕНА 2 – первые оскорбления
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Denis_666', senderCls: 'bad', text: `хаха смотрите какой лузер появился. все знают что ты нытик. твои фоточки полное позорище ${LOL_SVG}` },
          { cls: 'me', sender: 'Ты (думаешь)', senderCls: 'neutral', text: 'Что за... Откуда он пишет? И почему столько лайков под его комментарием?' },
          { cls: 'scam', sender: 'Denis_666', senderCls: 'bad', text: `если ответишь, скину всем твою переписку с *** ${LOL_SVG} молчи и может оставлю в покое` },
        ]
      },
      // СЦЕНА 3 – первый выбор
      {
        type: 'choice',
        question: 'Как лучше всего ответить на это?',
        choices: [
          { letter: 'А', text: 'Ответить агрессивно, показать что не боюсь', correct: false },
          { letter: 'Б', text: 'Сделать скриншот, заблокировать и рассказать родителям или классному руководителю', correct: true },
          { letter: 'В', text: 'Просто игнорировать и надеяться, что само прекратится', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Правильный порядок действий!`, text: 'Скриншот = доказательство. Блокировка = защита от дальнейших атак. Взрослый = человек с реальными полномочиями остановить ситуацию. Молчать в одиночестве – худшая стратегия.', fact: `${CHART_SVG} 72% жертв кибербуллинга, которые рассказали взрослым, сообщили что ситуация улучшилась` },
          wrong: { title: `${WARNING_SVG} Так только хуже!`, text: 'Агрессивный ответ дает хулигану то, чего он хочет – реакцию. Молчание не остановит его. Нужны скриншоты и помощь взрослых.', fact: `${FLAG_SVG} Шантаж перепиской – это уже статья 163 УК РФ (вымогательство)` }
        }
      },
      // СЦЕНА 4 – эскалация
      {
        type: 'context',
        variant: 'warn',
        text: `${ALERT_SVG} Ты решил проигнорировать. Но через два дня травля усиливается.`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Denis_666', senderCls: 'bad', text: 'вижу ты меня игнорируешь. думаешь это поможет?' },
          { cls: 'scam', sender: 'Denis_666', senderCls: 'bad', text: `я создал чат «позор дня» куда скидываю твои фотки. там уже 50 человек из школы ${LOL_SVG}` },
          { cls: 'me', sender: 'Ты (думаешь)', senderCls: 'neutral', text: 'Чат?! Это становится серьезнее. Мне страшно...' },
          { cls: 'them', sender: 'Подруга Маша', senderCls: 'neutral', text: 'Привет! Ты видела этот чат? Мне так жаль... Денис перешел все границы.' },
        ]
      },
      // СЦЕНА 5 – визуализация чата
      {
        type: 'visual',
        title: 'СКРИНШОТ ЧАТА · «Позор дня»',
        lines: [
          { text: `Denis_666: Всем смотреть! Новый мем дня ${FIRE_SVG}`, hl: 'bad' },
          { text: 'User123: хахаха смешно!', hl: 'warn' },
          { text: 'AnonGirl: Денис, может хватит? Это уже слишком...', hl: 'good' },
          { text: 'Denis_666: кто не с нами, тот против нас', hl: 'bad' },
          { text: 'XxX_DenXxX: продолжай, интересно же!', hl: 'warn' },
        ]
      },
      // СЦЕНА 6 – вопрос про свидетелей
      {
        type: 'choice',
        question: 'Что делать если травля происходит в чате с другими людьми?',
        choices: [
          { letter: 'А', text: 'Написать в чат и попытаться оправдаться', correct: false },
          { letter: 'Б', text: 'Сделать скриншоты чата, сообщить администраторам платформы и обратиться к взрослым', correct: true },
          { letter: 'В', text: 'Удалить свой аккаунт и исчезнуть', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Верная стратегия!`, text: 'Оправдания в чате только раззадорят агрессора. Скриншоты — это доказательства для администрации и полиции. Удаление аккаунта не решит проблему, буллинг продолжится.', fact: `${MEGAPHONE_SVG} Платформы обязаны удалять контент с травлей в течение 24 часов после жалобы` },
          wrong: { title: `${WARNING_SVG} Это не поможет!`, text: 'Оправдания дают буллеру внимание. Удаление аккаунта — это побег, а не решение. Нужно действовать системно.', fact: `${BRAIN_SVG} 85% случаев кибербуллинга прекращаются после блокировки агрессора и вмешательства взрослых` }
        }
      },
      // СЦЕНА 7 – разговор с родителями
      {
        type: 'context',
        variant: 'danger',
        text: `${HOUSE_SVG} Ты решаешься рассказать родителям. Вечерний разговор на кухне.`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'them', sender: 'Мама', senderCls: 'neutral', text: 'Расскажи нам что случилось. Мы на твоей стороне.' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Меня травит бывший одноклассник. Создал чат, скидывает мои фото, пишет гадости...' },
          { cls: 'them', sender: 'Папа', senderCls: 'neutral', text: 'Это серьезно. Покажи нам скриншоты. Мы пойдем в школу и напишем заявление.' },
          { cls: 'me', sender: 'Ты (думаешь)', senderCls: 'neutral', text: 'Стало легче. Я не один/одна с этим.' },
        ]
      },
      // СЦЕНА 8 – план действий
      {
        type: 'visual',
        title: 'ПЛАН ДЕЙСТВИЙ ПРИ КИБЕРБУЛЛИНГЕ',
        lines: [
          { text: '1. Не отвечай агрессору, это его питает', hl: 'bad' },
          { text: '2. Сделай скриншоты ВСЕГО, это доказательства', hl: 'good' },
          { text: '3. Заблокируй во всех соцсетях и мессенджерах', hl: 'good' },
          { text: '4. Сообщи о нарушении администрации платформы', hl: 'good' },
          { text: '5. Расскажи родителям или доверенному взрослому', hl: 'good' },
          { text: '6. При угрозах обратись в полицию', hl: 'good' },
        ]
      },
      // СЦЕНА 9 – давление со стороны друга
      {
        type: 'context',
        variant: 'warn',
        text: `${PHONE_SCREEN_SVG} Твой друг Андрей пишет тебе после того как узнал о ситуации.`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'them', sender: 'Андрей', senderCls: 'neutral', text: 'Слышал про Дениса. Слушай, не плачься взрослым, сам разберись, иначе слабаком прослывешь.' },
          { cls: 'me', sender: 'Ты (думаешь)', senderCls: 'neutral', text: 'Слабак? Но я же делаю правильное дело...' },
        ]
      },
      // СЦЕНА 10 – критический выбор
      {
        type: 'choice',
        question: 'Друг говорит: «не плачься взрослым, сам разберись, иначе слабак». Что ответить?',
        choices: [
          { letter: 'А', text: 'Он прав, надо разобраться самому', correct: false },
          { letter: 'Б', text: 'Рассказать взрослым не слабость. Это умный способ использовать доступные ресурсы', correct: true },
          { letter: 'В', text: 'Лучше вообще ничего не делать', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Верно!`, text: 'Обратиться за помощью – это не слабость, это стратегия. Взрослые могут поговорить с родителями хулигана, школой, полицией. У них есть рычаги, которых нет у тебя. Справляться в одиночку с системной травлей лишнее страдание.', fact: `${CHAT_SVG} Психологическая помощь подросткам: 8-800-2000-122 (бесплатно, круглосуточно)` },
          wrong: { title: `${CROSS_SVG} Это не так!`, text: 'Кибербуллинг – системная проблема, не личная слабость. Молчание и одиночная борьба только усугубляют ситуацию.', fact: `${BRAIN_SVG} Без помощи взрослых кибербуллинг прекращается в 5 раз реже` }
        }
      },
      // СЦЕНА 11 – последствия для агрессора
      {
        type: 'context',
        variant: 'normal',
        text: `${NEWSPAPER_SVG} Через неделю после обращения в школу и полицию.`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'them', sender: 'Классный руководитель', senderCls: 'neutral', text: 'Мы провели беседу с Денисом и его родителями. Чат удален, ему грозит исключение из школы.' },
          { cls: 'them', sender: 'Мама', senderCls: 'neutral', text: 'Заявление приняли. Полиция будет проводить проверку. Ты молодец что рассказал/а.' },
          { cls: 'me', sender: 'Ты (думаешь)', senderCls: 'neutral', text: 'Наконец-то стало спокойно. Жаль что не сделал/а это раньше.' },
        ]
      },
      // СЦЕНА 12 – финальный урок
      {
        type: 'choice',
        question: 'Что важно помнить о кибербуллинге?',
        choices: [
          { letter: 'А', text: 'Это временно, само пройдет', correct: false },
          { letter: 'Б', text: 'Травля — это преступление. Жертва не виновата. Помощь доступна', correct: true },
          { letter: 'В', text: 'Нужно просто удалить все соцсети', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Абсолютно верно!`, text: 'Кибербуллинг — это не «детские шалости», а правонарушение с реальными последствиями. Жертва никогда не виновата в том что ее травят. Помощь есть: психологи, учителя, полиция, горячие линии.', fact: `${PHONE_SVG} Телефон доверия для детей и подростков: 8-800-2000-122 (бесплатно, анонимно)` },
          wrong: { title: `${WARNING_SVG} Опасное заблуждение!`, text: 'Игнорирование не останавливает буллеров. Удаление соцсетей — это изоляция себя, а не решение проблемы. Нужно действовать.', fact: `${BRAIN_SVG} 9 из 10 случаев кибербуллинга требуют вмешательства взрослых для полного прекращения` }
        }
      }
    ]
  },

  // МИССИЯ НОМЕР 6
  crypto: {
    id: 'crypto',
    label: 'МИССИЯ 06 · КРИПТОСКАМ',
    title: 'Легендарный трейдер',
    color: '#667eea',
    desc: 'В Telegram появился канал «Crypto King», блогер с 800 000 подписчиков, дорогие часы, яхта. Обещает научить зарабатывать на крипте. Твой друг Артем уже готов перевести деньги. Разберись, что здесь не так.',
    scenes: 12, diff: 'Средний',
    tips: [
      { icon: `${CHART_DOWN_SVG}`, text: 'Гарантированная доходность выше 20% годовых – признак финансовой пирамиды.' },
      { icon: `${MASKS_SVG}`, text: 'Фейковые блогеры используют чужие фото и видео. Проверяй личность.' },
      { icon: `${MONEY_SVG}`, text: 'Настоящие инвестиции идут через лицензированные брокеры, а не в личные кошельки.' },
    ],
    storyboard: [
      // СЦЕНА 1 – контекст
      {
        type: 'context',
        variant: 'normal',
        text: `${PHONE_SCREEN_SVG} Telegram. Твой друг Артем скидывает тебе ссылку на канал «Crypto King» с сообщением: «Смотри, я уже неделю читаю, реально работает! Хочу вложить накопленные 10 000 ₽».`
      },
      // СЦЕНА 2 – диалог с другом
      {
        type: 'messages',
        msgs: [
          { cls: 'them', sender: 'Артем', senderCls: 'neutral', text: 'Чел, глянь этот канал. Там чувак реально крутой, зовут Алекс Волков. Говорит, его ученики зарабатывают по 50 000 ₽ в день.' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Хм. И сколько стоит попасть к нему «в обучение»?' },
          { cls: 'them', sender: 'Артем', senderCls: 'neutral', text: 'Сейчас акция, всего 10 000 ₽. Но только 2 часа! Потом цена вырастет до 50 000 ₽.' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Погоди, не торопись. Давай сначала разберемся что это вообще такое...' },
        ]
      },
      // СЦЕНА 3 – визуал канала
      {
        type: 'visual',
        title: 'СКРИНШОТ КАНАЛА · TELEGRAM',
        lines: [
          { text: `${ROCKET_SVG} CRYPTO KING – ТВОЙ ПУТЬ К СВОБОДЕ!`, hl: 'warn' },
          { text: `${CHART_SVG} Мои ученики зарабатывают от 50 000 ₽ в день!`, hl: 'bad' },
          { text: `${DIAMOND_SVG} Закрытый клуб, всего 50 мест по 10 000 ₽`, hl: 'bad' },
          { text: `${ALARM_SVG_MINI} Через 2 часа цена вырастет до 50 000 ₽! Успей!`, hl: 'bad' },
          { text: `${CARD_SVG} Перевод на карту: 2200-ХXXX-XXXX-XXXX (Алексей К.)`, hl: 'bad' },
        ]
      },
      // СЦЕНА 4 – вопрос по каналу
      {
        type: 'choice',
        question: 'Что настораживает в этом канале больше всего?',
        choices: [
          { letter: 'А', text: 'Ничего, раз 800 000 подписчиков, значит надежный', correct: false },
          { letter: 'Б', text: 'Перевод на личную карту, искусственный дедлайн и нереальные проценты – это классические признаки скама', correct: true },
          { letter: 'В', text: 'Цена слишком низкая, настоящее обучение должно стоить дороже', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG}Ты видишь красные флаги!`, text: 'Три главных признака: (1) перевод на личную карту физлица вместо юрлица, (2) искусственный дедлайн «только 2 часа» – давление на импульс, (3) гарантированная доходность математически невозможна без огромного риска.', fact: `${CHART_SVG} Средняя реальная доходность фондового рынка 10–15% годовых. Все что выше высокий риск или скам` },
          wrong: { title: `${CROSS_SVG} Это классическая схема!`, text: 'Количество подписчиков легко накрутить, ботов покупают тысячами. Перевод на личную карту, дедлайн «через 2 часа» и нереальные обещания – три главных сигнала тревоги.', fact: `${MASKS_SVG} 10 000 ботов-подписчиков в Telegram стоят около 3 000 ₽, меньше твоих сбережений` }
        }
      },
      // СЦЕНА 5 – давление от Артема
      {
        type: 'context',
        variant: 'warn',
        text: `${ALARM_SVG} Артем нервничает – таймер обратного отсчета в канале уже показывает 1:45:00.`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'them', sender: 'Артем', senderCls: 'neutral', text: 'Ну че ты, думаешь слишком долго! Таймер уже тикает, осталось меньше двух часов!' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Именно поэтому я и не тороплюсь. Когда тебя торопят – это плохой знак.' },
          { cls: 'them', sender: 'Артем', senderCls: 'neutral', text: 'Ну а вдруг реально работает? Отзывы же есть, люди пишут что зарабатывают!' },
          { cls: 'scam', sender: 'Crypto King', senderCls: 'bad', text: `${FIRE_SVG} Осталось 3 места! Алина только что вошла в клуб и уже получила первые 8 000 ₽ сигнал работает! Кто следующий?` },
        ]
      },
      // СЦЕНА 6 – вопрос про давление
      {
        type: 'choice',
        question: 'Артем говорит: «Отзывы же есть, значит работает!» Как ему объяснить?',
        choices: [
          { letter: 'А', text: 'Он прав, если люди пишут положительно, значит проверено', correct: false },
          { letter: 'Б', text: 'Отзывы в скам-каналах пишут боты или сами организаторы. Настоящие отзывы надо искать на независимых сайтах', correct: true },
          { letter: 'В', text: 'Надо написать напрямую «Алине» и спросить ее', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Правильно мыслишь!`, text: 'В мошеннических каналах «счастливые клиенты» – это боты или подставные аккаунты. Настоящую репутацию ищут на независимых отзовиках (Trustpilot, Banki.ru), проверяют лицензию ЦБ РФ, ищут упоминания в СМИ.', fact: `${ROBOT_SVG} 80% «положительных отзывов» в крипто-каналах написаны ботами или за вознаграждение` },
          wrong: { title: `${WARNING_SVG} Осторожно!`, text: '«Алина» – это либо бот, либо соучастник схемы. Прямой контакт с подставным персонажем только убедит Артема перевести деньги. Ищи независимые источники.', fact: `${MASKS_SVG} Мошенники заранее создают десятки аккаунтов «довольных клиентов» для видимости доверия` }
        }
      },
      // СЦЕНА 7 – проверка информации
      {
        type: 'context',
        variant: 'normal',
        text: `${SEARCH_SVG} Ты решаете проверить «Алекса Волкова» вместе с Артемом. Открываете поиск по фото и реестр ЦБ РФ.`
      },
      {
        type: 'visual',
        title: 'ЧТО ВЫ НАШЛИ ПРИ ПРОВЕРКЕ',
        lines: [
          { text: '• Фото «трейдера» найдено на фотостоке за $5 – это не Алекс Волков', hl: 'bad' },
          { text: '• Канал создан 3 недели назад, до этого продавал «курсы по похудению»', hl: 'bad' },
          { text: '• Все 800K подписчиков накручены, реальный охват постов 200–300 человек', hl: 'bad' },
          { text: '• В реестре лицензированных брокеров ЦБ РФ не найден', hl: 'bad' },
          { text: '• На Trustpilot: 47 жалоб за последний месяц. «Взяли деньги и пропали»', hl: 'bad' },
          { text: `${CHECKMARK_SVG_MINI} Вывод: организованная группа мошенников`, hl: 'good' },
        ]
      },
      // СЦЕНА 8 – реакция Артема
      {
        type: 'messages',
        msgs: [
          { cls: 'them', sender: 'Артем', senderCls: 'neutral', text: 'Не может быть... Я так верил. Я уже почти перевел деньги.' },
          { cls: 'me', sender: 'Ты', senderCls: 'neutral', text: 'Хорошо что не успел. Смотри, вот скриншот фотостока с этим же фото.' },
          { cls: 'them', sender: 'Артем', senderCls: 'neutral', text: 'И правда... Значит все что он говорил это ложь? А как вообще отличить настоящего от фейка?' },
        ]
      },
      // СЦЕНА 9 – вопрос как отличить
      {
        type: 'choice',
        question: 'Как отличить реального инвестиционного эксперта от мошенника?',
        choices: [
          { letter: 'А', text: 'По количеству подписчиков и красивым фото с яхтой', correct: false },
          { letter: 'Б', text: 'Проверить лицензию ЦБ РФ, найти реальное юрлицо и независимые отзывы и никаких переводов на личные карты', correct: true },
          { letter: 'В', text: 'Попросить сначала маленькую бесплатную консультацию', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Это правильный алгоритм!`, text: 'Чеклист проверки: (1) лицензия ЦБ РФ на сайте cbr.ru, (2) реальное юрлицо с ИНН, (3) отзывы на независимых площадках, (4) оплата через официальный счет, никогда на личную карту, (5) никаких «гарантий» доходности.', fact: `${LOCK2_SVG} Проверить лицензию брокера можно бесплатно на cbr.ru/financial_services_registry` },
          wrong: { title: `${CROSS_SVG} Эти признаки ничего не значат!`, text: 'Яхты и часы на фото – это реквизит, арендованный на час. Подписчики накручиваются за копейки. Бесплатная консультация – это еще один крючок для втягивания. Только лицензия ЦБ и юрлицо имеют значение.', fact: `${FLYING_MONEY_SVG} Аренда яхты для фотосессии стоит от 5 000 ₽ в час, небольшие вложения для мошенника` }
        }
      },
      // СЦЕНА 10 – неожиданный поворот
      {
        type: 'context',
        variant: 'danger',
        text: `${ALERT_SVG} Пока вы разбирались, однокласснику Диме написал сам «Алекс» в личку.`
      },
      {
        type: 'messages',
        msgs: [
          { cls: 'scam', sender: 'Алекс Волков (Crypto King)', senderCls: 'bad', text: 'Привет! Я вижу ты давно следишь за каналом. Хочу предложить тебе лично стать моим партнером. Привлекай друзей, получай 20% с каждого.' },
          { cls: 'scam', sender: 'Алекс Волков (Crypto King)', senderCls: 'bad', text: 'Тебе ничего не нужно вкладывать, просто скинь ссылку на канал 5 друзьям. Первые 3 реферала и ты уже в плюсе.' },
          { cls: 'them', sender: 'Дима', senderCls: 'neutral', text: 'Ребят, смотрите, мне написал сам Алекс! Говорит можно зарабатывать не вкладывая ничего!' },
        ]
      },
      // СЦЕНА 11 – финальный выбор
      {
        type: 'choice',
        question: 'Дима думает стать «партнером» и распространять ссылку. Что ему грозит?',
        choices: [
          { letter: 'А', text: 'Ничего, он же сам ничего не вкладывает', correct: false },
          { letter: 'Б', text: 'Он станет невольным соучастником мошенничества и может понести ответственность за вовлечение других', correct: true },
          { letter: 'В', text: 'Максимум просто потратит время впустую', correct: false },
        ],
        feedback: {
          correct: { title: `${CHECKMARK_SVG} Именно!`, text: 'Реферальная система в финансовой пирамиде делает тебя распространителем мошеннической схемы. Даже без вложений ты вредишь реальным людям. В ряде случаев это квалифицируется как мошенничество (ст. 159 УК РФ). Дима должен заблокировать «Алекса» и предупредить друзей.', fact: `${SCALES_SVG} Участие в реферальной сети финансовой пирамиды может быть признано соучастием в мошенничестве` },
          wrong: { title: `${CROSS_SVG} Это серьезно!`, text: 'Рассылая ссылку, Дима заманивает реальных людей в ловушку. Если те потеряют деньги, он несет моральную и потенциально юридическую ответственность. «Я не знал» – это не защита в суде.', fact: `${MEGAPHONE_SVG} Жертвы финансовых пирамид вправе подавать иски против всех участников цепочки` }
        }
      },
      // СЦЕНА 12 – статистика
      {
        type: 'visual',
        title: 'КРИПТО-СКАМ В ЦИФРАХ · 2024',
        lines: [
          { text: `${CHART_DOWN_SVG_MINI} Потери россиян от крипто-скама: более 12 млрд ₽ за год`, hl: 'bad' },
          { text: `${USERS_SVG} Типичная жертва: подросток или молодежь 14–25 лет`, hl: 'bad' },
          { text: `${FISHING_SVG} 89% схем начинаются в Telegram или Instagram`, hl: 'bad' },
          { text: `${TIMER_SVG_MINI} Среднее время вывода денег мошенниками: 2–4 часа`, hl: 'bad' },
          { text: `${CHECKMARK_SVG_MINI} Защита: cbr.ru – проверь лицензию перед любым вложением`, hl: 'good' },
          { text: `${CHECKMARK_SVG_MINI} Заявление о мошенничестве: МВД.РФ или Госуслуги`, hl: 'good' },
        ]
      }
    ]
  }
};

const MISSION_ORDER = ['dropper', 'gosuslugi', 'klad', 'terror', 'bully', 'crypto'];

let state = {
  currentMission: null,
  currentScene: 0,
  missionScore: 0,
  totalScore: 0,
  totalChoices: 0,
  correctChoices: 0,
  selectedModal: null,
  completedMissions: [],
  maxPossibleScore: 0,
  lives: 3,
  timerInterval: null,
  timeLeft: 15,
  timerActive: false
};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

function goHome() { 
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerActive = false;
  const timerContainer = document.getElementById('timer-container');
  if (timerContainer) {
    timerContainer.classList.remove('active');
    timerContainer.classList.add('hidden');
  }
  showScreen('home'); 
}

function startMission(missionId) {
  const m = MISSIONS[missionId];
  state.currentMission = missionId;
  state.currentScene = 0;
  state.missionScore = 0;
  state.totalChoices = 0;
  state.correctChoices = 0;
  state.maxPossibleScore = 0;
  state.lives = 3;
  state.timeLeft = 15;
  state.timerActive = false;
  if (state.timerInterval) clearInterval(state.timerInterval);
  m.storyboard.forEach(scene => {
    if (scene.type === 'choice') {
      state.maxPossibleScore += 100;
    }
  });
  document.getElementById('topbar-mission-label').textContent = m.label;
  document.getElementById('topbar-mission-title').textContent = m.title;
  document.getElementById('mission-score-display').textContent = '0';
  document.getElementById('total-score-display').textContent = state.totalScore;
  updateLivesDisplay();
  renderMission(m);
  showScreen('game');
  updateProgress(0, m.storyboard.length);
}

function openModal(missionId) {
  const m = MISSIONS[missionId];
  state.selectedModal = missionId;
  document.getElementById('modal-tag').textContent = m.label;
  document.getElementById('modal-tag').style.color = m.color;
  document.getElementById('modal-title').textContent = m.title;
  document.getElementById('modal-desc').textContent = m.desc;
  document.getElementById('modal-scenes').textContent = `${m.scenes} сцен`;
  document.getElementById('modal-diff').textContent = `Уровень: ${m.diff}`;
  const playBtn = document.getElementById('modal-play-btn');

  // Проверяем, пройдена ли миссия
  if (state.completedMissions.includes(missionId)) {
    playBtn.disabled = true;
    playBtn.style.background = '#666';
    playBtn.style.color = '#aaa';
    playBtn.innerHTML = `${CHECKMARK_SVG} Уже пройдено`;
    playBtn.style.cursor = 'not-allowed';
  } else {
    playBtn.disabled = false;
    playBtn.style.background = m.color;
    playBtn.style.color = '#0a0d14';
    playBtn.style.setProperty('--glow-color', m.color);
    playBtn.textContent = '▶ Начать миссию';
    playBtn.style.cursor = 'pointer';
  }
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

document.getElementById('modal-play-btn').addEventListener('click', () => {
  // Проверяем, не пройдена ли уже миссия
  if (!state.completedMissions.includes(state.selectedModal)) {
    closeModal();
    startMission(state.selectedModal);
  }
});

function renderMission(mission) {
  const container = document.getElementById('scenes-container');
  container.innerHTML = '';

  mission.storyboard.forEach((scene, idx) => {
    const div = document.createElement('div');
    div.className = 'scene' + (idx === 0 ? ' active' : '');
    div.id = `scene-${idx}`;
    div.innerHTML = buildScene(scene, idx, mission);
    container.appendChild(div);
  });
  // Проверяем первую сцену - если это выбор, запускаем таймер
  if (mission.storyboard.length > 0 && mission.storyboard[0].type === 'choice') {
    startTimer();
  }
}

function buildScene(scene, idx, mission) {
  let html = '';

  if (scene.type === 'context') {
    html += `<div class="scene-context ${scene.variant === 'warn' ? 'warn' : scene.variant === 'danger' ? 'danger' : ''}">
      ${scene.text}
    </div>`;
    html += nextBtn(idx, mission);
  }

  if (scene.type === 'messages') {
    html += `<div class="messages">`;
    scene.msgs.forEach(msg => {
      html += `<div class="msg ${msg.cls}">
        ${msg.sender ? `<div class="msg-sender ${msg.senderCls}">${msg.sender}</div>` : ''}
        ${msg.text}
      </div>`;
    });
    html += `</div>`;
    html += nextBtn(idx, mission);
  }

  if (scene.type === 'visual') {
    let imageHtml = '';
    if (scene.image) {
      imageHtml = `<div style="margin-bottom:16px; border-radius:12px; overflow:hidden; border:1px solid var(--border);">
        <img src="${scene.image}" alt="${scene.title}" style="width:100%; height:auto; display:block;">
      </div>`;
    }
    html += `<div class="scene-visual">
      <div class="visual-header">
        <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
        <span>${scene.title}</span>
      </div>
      <div class="visual-body">` + imageHtml;
    scene.lines.forEach(line => {
      if (line.hl === 'bad') html += `<div style="margin-bottom:8px"> <span class="highlight">${line.text}</span></div>`;
      else if (line.hl === 'good') html += `<div style="margin-bottom:8px"> <span class="highlight hl-good">${line.text}</span></div>`;
      else if (line.hl === 'warn') html += `<div style="margin-bottom:8px"> <span class="highlight hl-warn">${line.text}</span></div>`;
      else html += `<div style="margin-bottom:8px; color:var(--muted)">${line.text}</div>`;
    });
    html += `</div></div>`;
    html += nextBtn(idx, mission);
  }

  if (scene.type === 'choice') {
    // Перемешиваем варианты ответов при каждом рендеринге сцены
    const shuffledChoices = shuffleChoices(scene.choices);

    html += `
    <div class="messages">
      <div class="msg system">
      <!-- ИКОНКА ЗНАКА ВОПРОСА -->
        <span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
            <circle cx="12" cy="12" r="10" fill="#ffd700" opacity="0.8"/>
            <path d="M9.5 9.5 C9.5 8 10.5 7 12 7 C13.5 7 14.5 8 14.5 9.5 C14.5 11 12 11.5 12 13" stroke="#7a6000" stroke-width="2" stroke-linecap="round" fill="none"/>
            <circle cx="12" cy="16.5" r="1" fill="#7a6000" opacity="0.9"/>
          </svg>
        </span>
        ${scene.question}
      </div>
    </div>`;
    html += `<div class="choices" id="choices-${idx}">`;
    shuffledChoices.forEach((c, ci) => {
      html += `<button class="choice-btn" onclick="handleChoice(${idx}, ${ci}, ${c.correct}, '${mission.id}')" id="choice-${idx}-${ci}">
        <span class="choice-letter">${c.letter}</span>
        <span>${c.text}</span>
      </button>`;
    });
    html += `</div>`;
    html += `<div class="feedback-box" id="feedback-${idx}">
      <div class="feedback-title" id="fb-title-${idx}"></div>
      <div class="feedback-text" id="fb-text-${idx}"></div>
      <div class="fact-pill" id="fb-fact-${idx}"></div>
      ${idx < mission.storyboard.length - 1
        ? `<button class="btn-next" onclick="advanceScene(${idx + 1}, ${mission.storyboard.length})">Далее →</button>`
        : `<button class="btn-next" onclick="finishMission('${mission.id}')">
          Завершить миссию
          <!-- ИКОНКА ФЛАГА -->
          <span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ffffff) drop-shadow(0 0 15px #aaaaaa);">
              <line x1="4" y1="3" x2="4" y2="21" stroke="#aaaaaa" stroke-width="1.5" stroke-linecap="round"/>
              <rect x="4" y="3" width="16" height="10" rx="0.5" fill="#ffffff" opacity="0.9"/>
              <rect x="4"  y="3"  width="4" height="2.5" fill="#333333" opacity="0.9"/>
              <rect x="12" y="3"  width="4" height="2.5" fill="#333333" opacity="0.9"/>
              <rect x="8"  y="5.5" width="4" height="2.5" fill="#333333" opacity="0.9"/>
              <rect x="16" y="5.5" width="4" height="2.5" fill="#333333" opacity="0.9"/>
              <rect x="4"  y="8"  width="4" height="2.5" fill="#333333" opacity="0.9"/>
              <rect x="12" y="8"  width="4" height="2.5" fill="#333333" opacity="0.9"/>
              <rect x="8"  y="10.5" width="4" height="2.5" fill="#333333" opacity="0.9"/>
              <rect x="16" y="10.5" width="4" height="2.5" fill="#333333" opacity="0.9"/>
            </svg>
          </span>
        </button>`
      }
    </div>`;
  }

  return html;
}

function nextBtn(idx, mission) {
  const isLast = idx === mission.storyboard.length - 1;
  if (isLast) return `<button class="btn-next" onclick="finishMission('${mission.id}')">
    Завершить миссию
    <!-- ИКОНКА ФЛАГА -->
    <span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ffffff) drop-shadow(0 0 15px #aaaaaa);">
        <line x1="4" y1="3" x2="4" y2="21" stroke="#aaaaaa" stroke-width="1.5" stroke-linecap="round"/>
        <rect x="4" y="3" width="16" height="10" rx="0.5" fill="#ffffff" opacity="0.9"/>
        <rect x="4"  y="3"  width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="12" y="3"  width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="8"  y="5.5" width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="16" y="5.5" width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="4"  y="8"  width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="12" y="8"  width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="8"  y="10.5" width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="16" y="10.5" width="4" height="2.5" fill="#333333" opacity="0.9"/>
      </svg>
    </span>
  </button>`;
  return `<button class="btn-next" onclick="advanceScene(${idx + 1}, ${mission.storyboard.length})">Далее →</button>`;
}

function handleChoice(sceneIdx, choiceIdx, isCorrect, missionId) {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerActive = false;

  // Скрываем таймер сразу после выбора ответа
  const timerContainer = document.getElementById('timer-container');
  if (timerContainer) { timerContainer.classList.remove('active'); timerContainer.classList.add('hidden'); }

  const mission = MISSIONS[missionId];
  const scene = mission.storyboard[sceneIdx];
  const btns = document.querySelectorAll(`#choices-${sceneIdx} .choice-btn`);
  btns.forEach(b => b.disabled = true);
  const selectedBtn = document.getElementById(`choice-${sceneIdx}-${choiceIdx}`);
  selectedBtn.classList.add(isCorrect ? 'correct' : 'wrong');

  // Звуковые эффекты
  if (isCorrect) {
    SoundManager.playCorrect();
    createParticles(selectedBtn);
  } else {
    SoundManager.playWrong();
  }
  if (!isCorrect) {
    scene.choices.forEach((c, ci) => {
      if (c.correct) document.getElementById(`choice-${sceneIdx}-${ci}`).classList.add('correct');
    });
  }
  state.totalChoices++;
  if (isCorrect) {
    state.correctChoices++;
    state.missionScore += 100;
    const scoreEl = document.getElementById('mission-score-display');
    scoreEl.textContent = state.missionScore;
    scoreEl.classList.add('score-pop');
    setTimeout(() => scoreEl.classList.remove('score-pop'), 300);
    SoundManager.playScore();
  } else {
    state.lives--;
    updateLivesDisplay();
    if (state.lives <= 0) {
      setTimeout(() => {
        gameOver();
        return;
      }, 1000);
    }
  }
  const fb = isCorrect ? scene.feedback.correct : scene.feedback.wrong;
  const fbBox = document.getElementById(`feedback-${sceneIdx}`);
  fbBox.classList.add('show', isCorrect ? 'good' : 'bad');
  // Создаем SVG галочку для правильного ответа
  const checkmarkSVG = isCorrect
    ? '<div class="mission-checkmark"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 8px #34d399) drop-shadow(0 0 15px #10b981);"><circle cx="12" cy="12" r="10" fill="#34d399" opacity="0.4"/><path d="M7 12L10.5 15.5L17 8.5" stroke="#6ee7b7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
    : '';
  document.getElementById(`fb-title-${sceneIdx}`).innerHTML = fb.title;
  document.getElementById(`fb-text-${sceneIdx}`).textContent = fb.text;
  document.getElementById(`fb-fact-${sceneIdx}`).innerHTML = fb.fact;
}

function advanceScene(nextIdx, total) {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerActive = false;
  document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
  const next = document.getElementById(`scene-${nextIdx}`);
  if (next) {
    next.classList.add('active');
    next.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  updateProgress(nextIdx, total);
  // Проверяем, есть ли следующая сцена с выбором - запускаем таймер
  const mission = MISSIONS[state.currentMission];
  if (nextIdx < total) {
    const scene = mission.storyboard[nextIdx];
    if (scene && scene.type === 'choice') {
      startTimer();
    }
  } else {
    finishMission(state.currentMission);
  }
}

function updateProgress(current, total) {
  const pct = total > 1 ? (current / (total - 1)) * 100 : 100;
  document.getElementById('progress-fill').style.width = pct + '%';
}

function finishMission(missionId) {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerActive = false;
  const mission = MISSIONS[missionId];
  const pct = state.totalChoices > 0 ? Math.round((state.correctChoices / state.totalChoices) * 100) : 100;
  state.totalScore += state.missionScore;
  // Добавляем миссию в список пройденных (только ID, без дубликатов)
  if (!state.completedMissions.includes(missionId)) {
    state.completedMissions.push(missionId);
  }
  // Сохраняем прогресс после завершения миссии
  saveProgress();
  let emoji, title;
  if (pct === 100) { emoji = `${TROPHY_SVG_BIG}`; title = 'Мастер безопасности!'; }
  else if (pct >= 60) { emoji = `${CHECKMARK_SVG_BIG}`; title = 'Хорошая работа!'; }
  else { emoji = `${BOOKS_SVG}`; title = 'Есть что изучить'; }
  document.getElementById('result-emoji').innerHTML = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-score-num').textContent = state.totalScore + ' (+' + state.missionScore + ' в этой миссии)';

  const tipsHtml = `
    <h3>
    <!-- ИКОНКА ЩИТА -->
      <span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
        <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #1e88e5) drop-shadow(0 0 15px #0d47a1);">
          <path d="M50 10 L85 25 L85 55 Q85 80 50 92 Q15 80 15 55 L15 25 Z" fill="#1e88e5" opacity="0.9"/>
          <path d="M50 10 L85 25 L85 55 Q85 80 50 92 Q15 80 15 55 L15 25 Z" stroke="#0d47a1" stroke-width="3" fill="none"/>
          <path d="M50 20 L78 33 L78 55 Q78 74 50 84 Q22 74 22 55 L22 33 Z" fill="#1565c0" opacity="0.5"/>
          <path d="M33 52 L45 64 L68 38" stroke="#ffffff" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M25 30 Q30 20 42 17" stroke="#90caf9" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
        </svg>
      </span>
      Запомни на будущее
    </h3>
    ${mission.tips.map(t => `
      <div class="tip-item">
        <span class="tip-icon">${t.icon}</span>
        <span>${t.text}</span>
      </div>
    `).join('')}
  `;
  document.getElementById('result-tips').innerHTML = tipsHtml;
  const curIdx = MISSION_ORDER.indexOf(missionId);
  const nextBtn = document.getElementById('btn-next-mission');
  if (curIdx < MISSION_ORDER.length - 1) {
    const nextId = MISSION_ORDER[curIdx + 1];
    nextBtn.style.display = 'inline-block';
    nextBtn.textContent = 'Следующая миссия →';
    nextBtn.dataset.next = nextId;
    nextBtn.onclick = nextMission;
  } else {
    nextBtn.style.display = 'inline-block';
    nextBtn.innerHTML = `
    <!-- ИКОНКА ФЛАГА -->
    <span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ffffff) drop-shadow(0 0 15px #aaaaaa);">
        <line x1="4" y1="3" x2="4" y2="21" stroke="#aaaaaa" stroke-width="1.5" stroke-linecap="round"/>
        <rect x="4" y="3" width="16" height="10" rx="0.5" fill="#ffffff" opacity="0.9"/>
        <rect x="4"  y="3"  width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="12" y="3"  width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="8"  y="5.5" width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="16" y="5.5" width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="4"  y="8"  width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="12" y="8"  width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="8"  y="10.5" width="4" height="2.5" fill="#333333" opacity="0.9"/>
        <rect x="16" y="10.5" width="4" height="2.5" fill="#333333" opacity="0.9"/>
      </svg>
    </span>
    Итоги игры`;
    nextBtn.onclick = showFinalResults;
  }
  showScreen('result');
}

function nextMission() {
  const nextId = document.getElementById('btn-next-mission').dataset.next;
  if (nextId) openModal(nextId);
  else goHome();
}

function showFinalResults() {
  // Подсчитываем максимальный возможный счет для всех пройденных миссий
  let totalMaxScore = 0;
  state.completedMissions.forEach(missionId => {
    const m = MISSIONS[missionId];
    let maxForMission = 0;
    m.storyboard.forEach(scene => {
      if (scene.type === 'choice') {
        maxForMission += 100;
      }
    });
    totalMaxScore += maxForMission;
  });
  const percentage = totalMaxScore > 0 ? Math.round((state.totalScore / totalMaxScore) * 100) : 0;
  
  let emoji, title, message;
  if (percentage >= 90) { 
    emoji = `${TROPHY_SVG_BIG}`; 
    title = 'ЛЕГЕНДАРНЫЙ ЗАЩИТНИК!'; 
    message = 'Ты прошел все миссии с блестящим результатом! Теперь ты настоящий эксперт по цифровой безопасности.';
  } else if (percentage >= 70) { 
    emoji = `${SILVER_MEDAL_SVG}`; 
    title = 'ОПЫТНЫЙ БОЕЦ!'; 
    message = 'Отличная работа! Ты хорошо разбираешься в основах безопасности, но есть куда расти.';
  } else if (percentage >= 50) { 
    emoji = `${BRONZE_MEDAL_SVG}`; 
    title = 'НАЧИНАЮЩИЙ ЗАЩИТНИК'; 
    message = 'Неплохо! Но стоит еще раз пройти некоторые миссии и запомнить правила безопасности.';
  } else { 
    emoji = `${BOOKS_SVG}` 
    title = 'УЧИСЬ И ЗАЩИЩАЙСЯ'; 
    message = 'Рекомендуем пройти миссии еще раз. Знания о безопасности могут спасти тебя от реальных мошенников!';
  }
  
  document.getElementById('result-emoji').innerHTML = emoji;
  document.getElementById('result-title').innerHTML = title;
  
  let breakdownHtml = `<p style="font-size: 1rem; color: var(--text); margin-bottom: 20px;">${message}</p>`;
  breakdownHtml += `<div style="background: var(--surface2); border-radius: 12px; padding: 20px; margin-bottom: 20px;">`;
  breakdownHtml += `<div style="font-family: var(--font-head); font-size: 1.5rem; color: var(--accent3); margin-bottom: 10px;">${state.totalScore} / ${totalMaxScore} очков</div>`;
  breakdownHtml += `<div style="font-size: 0.9rem; color: var(--muted);">Общий результат: ${percentage}%</div>`;
  breakdownHtml += `</div>`;
  
  breakdownHtml += `<div style="text-align: left; margin-bottom: 20px;">`;
  breakdownHtml += `<h4 style="font-family: var(--font-head); font-size: 0.85rem; color: var(--accent); margin-bottom: 12px; text-transform: uppercase;">Результаты по миссиям:</h4>`;
  state.completedMissions.forEach((missionId, idx) => {
    const mInfo = MISSIONS[missionId];
    let maxForMission = 0;
    let scoreForMission = 0;
    mInfo.storyboard.forEach(scene => {
      if (scene.type === 'choice') {
        maxForMission += 100;
      }
    });
    // Для упрощения показываем просто процент прохождения
    const mPct = maxForMission > 0 ? Math.round((state.totalScore / totalMaxScore) * 100) : 0;
    breakdownHtml += `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border);">
        <span style="font-size: 0.85rem; color: var(--text);">${idx + 1}. ${mInfo.title}</span>
        <span style="font-family: var(--font-head); font-size: 0.85rem; color: var(--good);">Пройдено</span>
      </div>
    `;
  });
  breakdownHtml += `</div>`;
  
  document.getElementById('result-tips').innerHTML = breakdownHtml;
  
  const nextBtn = document.getElementById('btn-next-mission');
  nextBtn.style.display = 'inline-block';
  nextBtn.innerHTML = `${REFRESH_SVG} Пройти заново`;
  nextBtn.onclick = resetGame;
  
  showScreen('result');
}

function resetGame() {
  state.totalScore = 0;
  state.completedMissions = [];
  localStorage.removeItem('stopScamProgress');
  updateStatsDisplay();
  goHome();
}

document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

// Загрузка прогресса из localStorage
function loadProgress() {
  const saved = localStorage.getItem('stopScamProgress');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      state.totalScore = data.totalScore || 0;
      state.completedMissions = data.completedMissions || [];
    } catch (e) {
      console.error('Ошибка загрузки прогресса:', e);
    }
  }
  updateStatsDisplay();
}

// Сохранение прогресса в localStorage
function saveProgress() {
  const data = {
    totalScore: state.totalScore,
    completedMissions: state.completedMissions
  };
  localStorage.setItem('stopScamProgress', JSON.stringify(data));
  updateStatsDisplay();
}

// Обновление отображения статистики
function updateStatsDisplay() {
  document.getElementById('home-total-score').textContent = state.totalScore;
  document.getElementById('home-missions-completed').textContent = state.completedMissions.length + '/6';
  document.getElementById('total-score-display').textContent = state.totalScore;

  // Обновляем визуальное состояние карточек миссий
  const allMissionIds = ['dropper', 'gosuslugi', 'klad', 'terror', 'bully', 'crypto'];
  allMissionIds.forEach(id => {
    const card = document.getElementById('card-' + id);
    if (card) {
      if (state.completedMissions.includes(id)) {
        card.classList.add('completed');
        card.style.opacity = '0.7';
        card.style.pointerEvents = 'none';
      } else {
        card.classList.remove('completed');
        card.style.opacity = '1';
        card.style.pointerEvents = 'auto';
      }
    }
  });

  // Обновляем кнопку "Начать с Миссии 1"
  const btnStart = document.getElementById('btn-start-mission1');
  if (btnStart) {
    if (state.completedMissions.includes('dropper')) {
      btnStart.disabled = true;
      btnStart.style.background = '#0090a0';
      btnStart.style.color = '#c4c4c4';
      btnStart.textContent = 'Миссия 1 уже пройдена';
      btnStart.style.cursor = 'not-allowed';
    } else {
      btnStart.disabled = false;
      btnStart.style.background = '#00d5ec';
      btnStart.style.color = '#fff';
      btnStart.textContent = '▶ Начать с Миссии 1';
      btnStart.style.cursor = 'pointer';
    }
  }
  // Обновляем кнопку "Финальный тест"
  const btnFinal = document.getElementById('btn-final');
  if (btnFinal) {
      btnFinal.disabled = false;
      btnFinal.style.background = '#00d5ec';
      btnFinal.style.color = '#fff';
      btnFinal.textContent = 'Финальный тест';
      btnFinal.style.cursor = 'pointer';
  }
}

// Сброс прогресса
function resetProgress() {
  if (confirm('Вы уверены, что хотите сбросить весь прогресс? Это действие нельзя отменить.')) {
    state.totalScore = 0;
    state.completedMissions = [];
    localStorage.removeItem('stopScamProgress');
    updateStatsDisplay();
  }
}

// === ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ===

// Перемешивание массива (алгоритм Фишера-Йетса)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Перемешивание вариантов ответа в вопросе с сохранением правильного ответа
function shuffleChoices(choices) {
  // Находим индекс правильного ответа
  const correctIndex = choices.findIndex(c => c.correct);
  if (correctIndex === -1) return choices;

  const correctChoice = choices[correctIndex];
  const wrongChoices = choices.filter((c, i) => i !== correctIndex);

  // Перемешиваем неправильные ответы
  const shuffledWrong = shuffleArray(wrongChoices);

  // Создаем новый массив с перемешанными вариантами
  const allShuffled = shuffleArray([correctChoice, ...shuffledWrong]);

  // Переназначаем буквы A, Б, В, Г, Д...
  const letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К'];
  return allShuffled.map((choice, index) => ({
    ...choice,
    letter: letters[index] || String.fromCharCode(1040 + index) // А=1040 в Unicode
  }));
}

// Перемешивание вариантов в вопросе финального теста
function shuffleFinalQuestionChoices(question) {
  const correctAnswer = question.choices[question.correct];
  const wrongAnswers = question.choices.filter((_, i) => i !== question.correct);
  const shuffledWrong = shuffleArray(wrongAnswers);
  const allShuffled = shuffleArray([correctAnswer, ...shuffledWrong]);

  // Находим новый индекс правильного ответа
  const newCorrectIndex = allShuffled.indexOf(correctAnswer);

  return {
    ...question,
    choices: allShuffled,
    correct: newCorrectIndex
  };
}

// Глобальное хранилище для перемешанных вопросов финального теста
let shuffledFinalQuestions = [];

// Подготовка перемешанных вопросов для финального теста
function prepareShuffledFinalQuestions() {
  shuffledFinalQuestions = FINAL_TEST_QUESTIONS.map(q => shuffleFinalQuestionChoices(q));
  return shuffledFinalQuestions;
}

// === ЗВУКОВАЯ СИСТЕМА ===
const SoundManager = {
  enabled: true,
  audioContext: null,

  init() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.log('Web Audio API not supported');
    }
  },

  playTone(freq, type, duration, volume = 0.1) {
    if (!this.enabled || !this.audioContext) return;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    osc.connect(gain);
    gain.connect(this.audioContext.destination);
    osc.frequency.value = freq;
    osc.type = type;
    gain.gain.setValueAtTime(volume, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
    osc.start();
    osc.stop(this.audioContext.currentTime + duration);
  },

  playCorrect() {
    this.playTone(523.25, 'sine', 0.15, 0.1);
    setTimeout(() => this.playTone(659.25, 'sine', 0.15, 0.1), 80);
    setTimeout(() => this.playTone(783.99, 'sine', 0.2, 0.1), 160);
  },

  playWrong() {
    this.playTone(150, 'sawtooth', 0.3, 0.08);
    setTimeout(() => this.playTone(100, 'sawtooth', 0.4, 0.08), 150);
  },

  playClick() {
    this.playTone(800, 'sine', 0.05, 0.03);
  },

  playSuccess() {
    this.playTone(523.25, 'sine', 0.1, 0.1);
    setTimeout(() => this.playTone(659.25, 'sine', 0.1, 0.1), 100);
    setTimeout(() => this.playTone(783.99, 'sine', 0.1, 0.1), 200);
    setTimeout(() => this.playTone(1046.50, 'sine', 0.2, 0.1), 300);
  },

  playScore() {
    this.playTone(880, 'sine', 0.1, 0.05);
    setTimeout(() => this.playTone(1174.66, 'sine', 0.15, 0.05), 100);
  },

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('stopScamSound', this.enabled ? 'on' : 'off');
    return this.enabled;
  }
};



// === ЭФФЕКТЫ ЧАСТИЦ ===
function createParticles(element) {
  const rect = element.getBoundingClientRect();
  const colors = ['#00e5ff', '#00e096', '#ffe500'];

  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = (rect.left + rect.width / 2) + 'px';
    particle.style.top = (rect.top + rect.height / 2) + 'px';
    particle.style.width = Math.random() * 8 + 4 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = '50%';

    const angle = (Math.PI * 2 * i) / 12;
    const velocity = Math.random() * 60 + 40;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity - 50;

    particle.style.transform = `translate(${tx}px, ${ty}px)`;
    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
  }
}

// Добавляем звуковой индикатор в DOM
function addSoundToggle() {
  const toggle = document.createElement('button');
  toggle.className = 'sound-indicator';
  toggle.id = 'sound-toggle';
  toggle.innerHTML = `${SOUND_SVG}`;
  toggle.onclick = () => {
    const enabled = SoundManager.toggle();
    toggle.innerHTML = enabled ? `${SOUND_SVG}` : `${MUTE_SVG}`;
    toggle.classList.toggle('muted', !enabled);
  };
  document.body.appendChild(toggle);

  // Загружаем состояние звука
  const savedSound = localStorage.getItem('stopScamSound');
  if (savedSound === 'off') {
    SoundManager.enabled = false;
    toggle.innerHTML = `${MUTE_SVG}`;
    toggle.classList.add('muted');
  }
}

// Инициализация при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  SoundManager.init();
  addSoundToggle();
  loadProgress();
});

// Добавляем звуки для кнопок
document.addEventListener('click', (e) => {
  if (e.target.closest('button')) {
    SoundManager.playClick();
  }
});

// === СИСТЕМА ЖИЗНЕЙ И ТАЙМЕРА ===

function updateLivesDisplay() {
  const livesEl = document.getElementById('lives-count');
  if (livesEl) {
    livesEl.textContent = state.lives;
    // Анимация при потере жизни
    if (state.lives < 3) {
      livesEl.parentElement.classList.add('life-lost');
      setTimeout(() => livesEl.parentElement.classList.remove('life-lost'), 300);
    }
  }
}

function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timeLeft = 15;
  state.timerActive = true;

  // Показываем таймер
  const timerContainer = document.getElementById('timer-container');
  if (timerContainer) {
    timerContainer.classList.remove('hidden');
    timerContainer.classList.add('active');
  }
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timeLeft -= 0.1;
    updateTimerDisplay();

    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      state.timerActive = false;
      handleTimeOut();
    }
  }, 100);
}

function updateTimerDisplay() {
  const timerBar = document.getElementById('timer-bar');
  const timerText = document.getElementById('timer-text');
  const timerContainer = document.getElementById('timer-container');

  if (!timerBar || !timerText || !timerContainer) return;

  const percentage = (state.timeLeft / 15) * 100;
  timerBar.style.width = percentage + '%';
  timerText.textContent = Math.ceil(state.timeLeft);

  // Меняем цвет в зависимости от оставшегося времени
  if (state.timeLeft <= 5) {
    timerBar.style.background = 'linear-gradient(90deg, #ff3b6b, #ff7043)';
    timerBar.style.boxShadow = '0 0 15px rgba(255,59,107,.8)';
    timerText.style.color = '#ff3b6b';
  } else if (state.timeLeft <= 10) {
    timerBar.style.background = 'linear-gradient(90deg, #ffe500, #ff7043)';
    timerBar.style.boxShadow = '0 0 15px rgba(255,229,0,.5)';
    timerText.style.color = '#ffe500';
  } else {
    timerBar.style.background = 'linear-gradient(90deg, #00e096, #ffe500)';
    timerBar.style.boxShadow = '0 0 15px rgba(0,224,150,.5)';
    timerText.style.color = '#00c281';
  }
}

function handleTimeOut() {
  // Время вышло - теряем жизнь и показываем правильный ответ
  SoundManager.playWrong();
  state.lives--;
  updateLivesDisplay();

  // Скрываем таймер
  const timerContainer = document.getElementById('timer-container');
  if (timerContainer) {
    timerContainer.classList.remove('active');
    timerContainer.classList.add('hidden');
  }
  if (state.lives <= 0) {
    gameOver();
    return;
  }

  // Находим текущую сцену с выбором и показываем правильный ответ
  const currentScene = document.querySelector('.scene.active');
  if (currentScene) {
    const choiceBtns = currentScene.querySelectorAll('.choice-btn');
    choiceBtns.forEach(btn => btn.disabled = true);

    // Подсвечиваем правильный ответ
    const sceneIdx = parseInt(currentScene.id.replace('scene-', ''));
    const mission = MISSIONS[state.currentMission];
    const scene = mission.storyboard[sceneIdx];

    if (scene && scene.choices) {
      scene.choices.forEach((c, ci) => {
        if (c.correct) {
          const btn = document.getElementById(`choice-${sceneIdx}-${ci}`);
          if (btn) btn.classList.add('correct');
        }
      });
    }

    // Показываем feedback
    const fbBox = currentScene.querySelector('.feedback-box');
    if (fbBox) {
      fbBox.classList.add('show', 'bad');
      const fb = scene.feedback.wrong;
      currentScene.querySelector(`#fb-title-${sceneIdx}`).innerHTML = `${ALARM_SVG} Время вышло!`;
      currentScene.querySelector(`#fb-text-${sceneIdx}`).textContent = fb.text;
      currentScene.querySelector(`#fb-fact-${sceneIdx}`).textContent = fb.fact;
    }
  }
}

function gameOver() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  const timerContainer = document.getElementById('timer-container');
  if (timerContainer) {
    timerContainer.classList.add('hidden');
    timerContainer.classList.remove('active');
  }
  state.timerActive = false;

  showScreen('result');
  document.getElementById('result-emoji').innerHTML = `
    <!-- ИКОНКА РАЗБИТОГО СЕРДЦА -->
    <span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
      <svg width="96" height="96" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ff2020) drop-shadow(0 0 15px #cc0000);">
        <path d="M50 80 Q20 60 15 40 Q10 20 30 18 Q42 18 50 32 L44 48 L54 58 Z" fill="#ff3030" opacity="0.9"/>
        <path d="M50 80 Q80 60 85 40 Q90 20 70 18 Q58 18 50 32 L56 48 L46 58 Z" fill="#ff5252" opacity="0.9"/>
        <polyline points="50,32 44,48 54,58 48,80" stroke="#7f0000" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 32 Q28 22 38 20" stroke="#ff8a80" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6"/>
      </svg>
    </span>
  `;
  document.getElementById('result-title').textContent = 'Жизни закончились!';
  document.getElementById('result-score-num').textContent = `Счёт: ${state.totalScore}`;
  document.getElementById('result-tips').innerHTML = `
    <h3>
      <!-- ИКОНКА ГРУСТНОГО СМАЙЛИКА -->
      <span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 15px #0288d1);">
          <circle cx="12" cy="12" r="10" fill="#4fc3f7" opacity="0.8"/>
          <circle cx="9" cy="10" r="1.5" fill="#0d47a1" opacity="0.95"/>
          <circle cx="15" cy="10" r="1.5" fill="#0d47a1" opacity="0.95"/>
          <path d="M7.5 7.5 Q9 6.5 10.5 7.5" stroke="#0d47a1" stroke-width="1.3" fill="none" stroke-linecap="round"/>
          <path d="M13.5 7.5 Q15 6.5 16.5 7.5" stroke="#0d47a1" stroke-width="1.3" fill="none" stroke-linecap="round"/>
          <path d="M8.5 16 Q12 13.5 15.5 16" stroke="#0d47a1" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        </svg>
      </span>
      Не сдавайся!
    </h3>
    <div class="tip-item">
    <!-- ИКОНКА ЛАМПОЧКИ -->
      <span class="tip-icon">
        <span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
            <path d="M12 3 Q6 3 6 9 Q6 13 9 15 L9 16 H15 L15 15 Q18 13 18 9 Q18 3 12 3Z" fill="#fff176" opacity="0.9"/>
            <path d="M12 5 Q8 5 8 9 Q8 11.5 10 13" stroke="#ffffff" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.5"/>
            <rect x="9" y="16" width="6" height="1.2" rx="0.3" fill="#bfa000" opacity="0.9"/>
            <rect x="9" y="17.5" width="6" height="1.2" rx="0.3" fill="#bfa000" opacity="0.9"/>
            <rect x="9.5" y="19" width="5" height="1.5" rx="0.5" fill="#9e8000" opacity="0.9"/>
            <line x1="12" y1="0" x2="12" y2="1.5" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="4.5" y1="2.8" x2="5.5" y2="3.8" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="19.5" y1="2.8" x2="18.5" y2="3.8" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="2.5" y1="9" x2="4" y2="9" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="21.5" y1="9" x2="20" y2="9" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </span>
      </span>
      <span>Попробуй ещё раз! С каждым разом ты становишься лучше.</span>
    </div>
    <div class="tip-item">
    <!-- ИКОНКА ТАЙМЕРА -->
      <span class="tip-icon">
        <span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #4fc3f7) drop-shadow(0 0 15px #0288d1);">
            <rect x="10" y="2" width="4" height="1.5" rx="0.75" fill="#4fc3f7" opacity="0.9"/>
            <rect x="11.25" y="3.5" width="1.5" height="1.5" fill="#4fc3f7" opacity="0.9"/>
            <circle cx="12" cy="13" r="8" fill="#1e88e5" opacity="0.8"/>
            <circle cx="12" cy="13" r="7" fill="#1565c0" opacity="0.5"/>
            <line x1="12" y1="7"  x2="12" y2="8.5" stroke="#4fc3f7" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="12" y1="17.5" x2="12" y2="19" stroke="#4fc3f7" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="6"  y1="13" x2="7.5" y2="13" stroke="#4fc3f7" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="16.5" y1="13" x2="18" y2="13" stroke="#4fc3f7" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="12" y1="13" x2="12" y2="8.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="12" y1="13" x2="15.5" y2="11" stroke="#4fc3f7" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="12" cy="13" r="1" fill="#ffffff" opacity="0.9"/>
          </svg>
        </span>
      </span>
      <span>Обращай внимание на таймер - не трать слишком много времени.</span>
    </div>
    <div class="tip-item">
    <!-- ИКОНКА МИШЕНИ -->
      <span class="tip-icon">
        <span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #ff2020) drop-shadow(0 0 15px #cc0000);">
            <circle cx="12" cy="12" r="10" fill="#ff3030" opacity="0.8"/>
            <circle cx="12" cy="12" r="7.5" fill="#ffffff" opacity="0.9"/>
            <circle cx="12" cy="12" r="5" fill="#ff3030" opacity="0.8"/>
            <circle cx="12" cy="12" r="2.5" fill="#ffffff" opacity="0.9"/>
            <circle cx="12" cy="12" r="1" fill="#ff3030" opacity="0.9"/>
            <line x1="17" y1="7" x2="13" y2="11" stroke="#333333" stroke-width="1.5" stroke-linecap="round"/>
            <polygon points="17,5 19,9 15,8" fill="#333333" opacity="0.9"/>
          </svg>
        </span>
      </span>
      <span>Внимательно читай вопросы и варианты ответов.</span>
    </div>
  `;

  const nextBtn = document.getElementById('btn-next-mission');
  nextBtn.style.display = 'inline-block';
  nextBtn.textContent = '↻ Попробовать снова';
  nextBtn.onclick = () => {
    openModal(state.currentMission);
  };
}

// ФИНАЛЬНЫЙ ТЕСТ - ВОПРОСЫ
const FINAL_TEST_QUESTIONS = [
  {
    question: 'Что такое дроппер?',
    choices: ['Сотрудник банка, проверяющий транзакции', 'Пособник мошенников, пропускающий краденые деньги через свою карту', 'Человек, который инвестирует в криптовалюту', 'Специалист по финансовой безопасности'],
    correct: 1
  },
  {
    question: 'Можно ли называть код из СМС сотрудникам банка?',
    choices: ['Да, если они представились сотрудником безопасности', 'Нет, никогда и никому', 'Можно, если звонок с официального номера банка', 'Да, для подтверждения операции по вкладу'],
    correct: 1
  },
  {
    question: 'Как мошенники чаще всего вербуют подростков?',
    choices: ['Предлагают легкую работу с высоким доходом', 'Рассылают приглашения на бесплатные курсы', 'Звонят от имени учебного центра', 'Пишут с предложением пройти стажировку'],
    correct: 0
  },
  {
    question: 'Что делать, если незнакомец предлагает перевести деньги через твою карту за процент?',
    choices: ['Согласиться, если процент больше 10%', 'Отказаться и заблокировать контакт', 'Попробовать один раз с небольшой суммой', 'Взять карту друга, чтобы не рисковать своей'],
    correct: 1
  },
  {
    question: 'Какая статья УК РФ грозит дропперам?',
    choices: ['Статья 159 - мошенничество', 'Статья 174.1 - легализация преступных доходов', 'Статья 163 - вымогательство', 'Административная ответственность'],
    correct: 1
  },
  {
    question: 'Как распознать фишинговый сайт?',
    choices: ['По отсутствию раздела «О компании»', 'По подозрительному URL и просьбе ввести данные', 'По медленной загрузке страниц', 'По большому количеству всплывающих окон'],
    correct: 1
  },
  {
    question: 'Что такое социальная инженерия?',
    choices: ['Метод обучения сотрудников компаний', 'Манипуляции людьми для получения информации', 'Раздел программирования ИИ', 'Способ защиты от вирусов'],
    correct: 1
  },
  {
    question: 'Как защитить свои персональные данные?',
    choices: ['Регулярно менять номер телефона', 'Не передавать незнакомцам и использовать сложные пароли', 'Хранить данные только в облачных сервисах', 'Давать информацию только проверенным сайтам'],
    correct: 1
  },
  {
    question: 'Что делать при кибербуллинге?',
    choices: ['Ответить обидчику тем же', 'Заблокировать обидчика и рассказать взрослым', 'Удалить аккаунт навсегда', 'Написать жалобу в полицию самостоятельно'],
    correct: 1
  },
  {
    question: 'Как проверить надёжность крипто-проекта?',
    choices: ['Изучить обещания доходности на сайте', 'По отзывам в интернете и официальной информации', 'Посмотреть рекламу у популярных блогеров', 'Проверить наличие красивого дизайна сайта'],
    correct: 1
  }
];

// ГЛОБАЛЬНОЕ СОСТОЯНИЕ ДЛЯ ФИНАЛЬНОГО ТЕСТА
let finalTestState = {
  currentQuestion: 0,
  correctCount: 0,
  timer: 15,
  timerInterval: null,
  isTestActive: false
};

// ФУНКЦИИ ДЛЯ ФИНАЛЬНОГО ТЕСТА
function openFinalTest() {
  const completedMissions = state.completedMissions.length;
  if (completedMissions < 6) {
    alert(`Сначала пройди все 6 миссий! Сейчас пройдено: ${completedMissions}/6`);
    return;
  }
  const playBtn = document.getElementById('btn-start-final-test');
  playBtn.style.background = '#00e5ff';
  playBtn.style.color = '#0a0d14';
  playBtn.style.setProperty('--glow-color', '#00e5ff');
  document.getElementById('modal-final-test').classList.add('open');
}

function closeFinalTest() {
  document.getElementById('modal-final-test').classList.remove('open');
}

function startFinalTest() {
  closeFinalTest();
  // Подготовка перемешанных вопросов при каждом запуске теста
  prepareShuffledFinalQuestions();
  finalTestState = {
    currentQuestion: 0,
    correctCount: 0,
    timer: 15,
    timerInterval: null,
    isTestActive: true
  };
  showScreen('final-test');
  renderFinalQuestion();
}

function renderFinalQuestion() {
  const q = shuffledFinalQuestions[finalTestState.currentQuestion];
  const container = document.getElementById('final-questions-container');

  // Обновляем прогресс
  const progressPercent = ((finalTestState.currentQuestion) / FINAL_TEST_QUESTIONS.length) * 100;
  document.getElementById('final-progress-fill').style.width = `${progressPercent}%`;

  // Обновляем счётчик
  document.getElementById('final-correct-count').textContent = finalTestState.correctCount;

  // Рендерим вопрос
  container.innerHTML = `
    <div class="scene active">
      <div class="scene-context" style="border-left-color: #00e5ff;">
        <span>
          <span style="display: inline-flex; align-items: center; vertical-align: middle; margin-right: 8px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; filter: drop-shadow(0 0 8px #f5c518) drop-shadow(0 0 15px #f0b90b);">
              <circle cx="12" cy="12" r="10" fill="#ffd700" opacity="0.8"/>
              <path d="M9.5 9.5 C9.5 8 10.5 7 12 7 C13.5 7 14.5 8 14.5 9.5 C14.5 11 12 11.5 12 13" stroke="#7a6000" stroke-width="2" stroke-linecap="round" fill="none"/>
              <circle cx="12" cy="16.5" r="1" fill="#7a6000" opacity="0.9"/>
            </svg>
          </span>
          Вопрос ${finalTestState.currentQuestion + 1} из ${FINAL_TEST_QUESTIONS.length}
        </span>
      </div>
      <div class="messages">
        <div class="msg system">${q.question}</div>
      </div>
      <div class="choices">
        ${q.choices.map((choice, i) => `
          <button class="choice-btn" onclick="answerFinalQuestion(${i})" id="final-choice-${i}">
            <span class="choice-letter">${String.fromCharCode(65 + i)}</span>
            <span>${choice}</span>
          </button>
        `).join('')}
      </div>
      <div class="feedback-box" id="final-feedback">
        <div class="feedback-title" id="final-fb-title"></div>
        <div class="feedback-text" id="final-fb-text"></div>
        <button class="btn-next" onclick="nextFinalQuestion()">Далее →</button>
      </div>
    </div>
  `;

  // Запускаем таймер
  startFinalTimer();
}

function startFinalTimer() {
  if (finalTestState.timerInterval) clearInterval(finalTestState.timerInterval);

  finalTestState.timer = 15;
  finalTestState.timerActive = true;

  updateFinalTimerDisplay();

  finalTestState.timerInterval = setInterval(() => {
    finalTestState.timer -= 0.1;
    updateFinalTimerDisplay();

    if (finalTestState.timer <= 0) {
      clearInterval(finalTestState.timerInterval);
      finalTestState.timerActive = false;
      timeUpFinal();
    }
  }, 100);
}

function updateFinalTimerDisplay() {
  const timerBar = document.getElementById('final-timer-bar');
  const timerText = document.getElementById('final-timer-text');
  const timerValue = document.getElementById('final-timer');

  if (!timerBar || !timerText) return;

  const percentage = (finalTestState.timer / 15) * 100;
  timerBar.style.width = percentage + '%';
  timerText.textContent = Math.ceil(finalTestState.timer);
  if (timerValue) timerValue.textContent = Math.ceil(finalTestState.timer);

  // Меняем цвет в зависимости от оставшегося времени (как в обычных миссиях)
  if (finalTestState.timer <= 5) {
    timerBar.style.background = 'linear-gradient(90deg, #ff3b6b, #ff7043)';
    timerBar.style.boxShadow = '0 0 15px rgba(255,59,107,.8)';
    timerText.style.color = '#ff3b6b';
  } else if (finalTestState.timer <= 10) {
    timerBar.style.background = 'linear-gradient(90deg, #ffe500, #ff7043)';
    timerBar.style.boxShadow = '0 0 15px rgba(255,229,0,.5)';
    timerText.style.color = '#ffe500';
  } else {
    timerBar.style.background = 'linear-gradient(90deg, #00e096, #ffe500)';
    timerBar.style.boxShadow = '0 0 15px rgba(0,224,150,.5)';
    timerText.style.color = '#00c281';
  }
}

function timeUpFinal() {
  disableFinalChoices();
  const fbBox = document.getElementById('final-feedback');
  fbBox.classList.add('show', 'bad');
  document.getElementById('final-fb-title').innerHTML = `${ALARM_SVG} Время вышло!`;
  document.getElementById('final-fb-text').textContent = 'К сожалению, время на ответ истекло.';
}

function answerFinalQuestion(selectedIndex) {
  if (!finalTestState.isTestActive) return;

  clearInterval(finalTestState.timerInterval);
  finalTestState.isTestActive = false;

  const q = shuffledFinalQuestions[finalTestState.currentQuestion];
  const isCorrect = selectedIndex === q.correct;

  disableFinalChoices();

  // Показываем правильный и неправильный ответы
  const buttons = document.querySelectorAll('#final-questions-container .choice-btn');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add('correct');
    } else if (i === selectedIndex && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // Обновляем счёт
  if (isCorrect) {
    finalTestState.correctCount++;
    document.getElementById('final-correct-count').textContent = finalTestState.correctCount;
  }

  // Показываем feedback
  const fbBox = document.getElementById('final-feedback');
  fbBox.classList.add('show', isCorrect ? 'good' : 'bad');
  // Создаем SVG галочку для правильного ответа в финальном тесте
  const checkmarkSVG = isCorrect
    ? '<div class="mission-checkmark"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 8px #34d399) drop-shadow(0 0 15px #10b981);"><circle cx="12" cy="12" r="10" fill="#34d399" opacity="0.4"/><path d="M7 12L10.5 15.5L17 8.5" stroke="#6ee7b7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
    : '';

  document.getElementById('final-fb-title').innerHTML = isCorrect ? checkmarkSVG + 'Верно!' : `${CROSS_SVG_MINI} Неверно!`;
  document.getElementById('final-fb-text').textContent = isCorrect
    ? 'Правильный ответ! Так держать!'
    : `Правильный ответ: ${q.choices[q.correct]}`;
}

function disableFinalChoices() {
  const buttons = document.querySelectorAll('#final-questions-container .choice-btn');
  buttons.forEach(btn => btn.disabled = true);
}

function nextFinalQuestion() {
  finalTestState.currentQuestion++;

  if (finalTestState.currentQuestion >= FINAL_TEST_QUESTIONS.length) {
    finishFinalTest();
  } else {
    finalTestState.isTestActive = true;
    renderFinalQuestion();
  }
}

function finishFinalTest() {
  showScreen('certificate');

  // Заполняем сертификат данными
  const today = new Date();
  const dateStr = today.toLocaleDateString('ru-RU');

  document.getElementById('cert-player-name').textContent = 'Участник';
  document.getElementById('cert-total-score').textContent = state.totalScore;
  document.getElementById('cert-final-score').textContent = `${finalTestState.correctCount}/10`;
  document.getElementById('cert-date').textContent = dateStr;

  // Сохраняем результат в localStorage
  localStorage.setItem('stopScam_finalTestCompleted', 'true');
  localStorage.setItem('stopScam_finalTestScore', finalTestState.correctCount.toString());
  localStorage.setItem('stopScam_certificateDate', dateStr);
}

function quitFinalTest() {
  if (confirm('Вы уверены, что хотите выйти из финального теста? Прогресс будет потерян.')) {
    clearInterval(finalTestState.timerInterval);
    finalTestState.isTestActive = false;
    goHome();
  }
}

function downloadCertificate() {
  alert('💾 Функция сохранения сертификата будет доступна в следующей версии! Вы можете сделать скриншот экрана.');
}