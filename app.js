// CONFIGURACIÓN
const STORAGE_KEY = 'ketoTrackerData';
const START_DATE = new Date('2026-01-05');
const DAILY_WATER_GOAL = 13;

// MENÚS COMPLETOS 4 SEMANAS
const MENUS = {
    semana1: {
        lunes: {
            desayuno: "☕ Bulletproof Coffee + 3 huevos revueltos con mantequilla",
            almuerzo: "🍗 Pechuga de pollo a la plancha con ensalada verde",
            cena: "🐟 Tortitas de atún con vegetales salteados"
        },
        martes: {
            desayuno: "🍳 Omelette de 3 huevos con queso y champiñones",
            almuerzo: "🥩 Carne molida con puré de coliflor",
            cena: "🐟 Salmón al horno con espárragos"
        },
        miercoles: {
            desayuno: "🥑 Huevos benedictinos keto",
            almuerzo: "🍕 Pizza Keto (receta especial)",
            cena: "🥩 Costillas de cerdo con ensalada"
        },
        jueves: {
            desayuno: "☕ Bulletproof Coffee + 2 salchichas + aguacate",
            almuerzo: "🍛 Pollo al curry con arroz de coliflor",
            cena: "🍔 Hamburguesa sin pan con queso"
        },
        viernes: {
            desayuno: "🥞 Crepe keto con queso crema",
            almuerzo: "🥩 Filete de res con mantequilla de ajo",
            cena: "🍲 Sopa de pollo cremosa"
        },
        sabado: {
            desayuno: "🍳 Huevos rancheros keto",
            almuerzo: "🍗 Pollo asado con vegetales",
            cena: "🐟 Atún sellado con ensalada"
        },
        domingo: {
            desayuno: "🥞 Pancakes keto con mantequilla",
            almuerzo: "🎉 Día especial libre (dentro de keto)",
            cena: "🥗 Ensalada grande con proteína"
        }
    },
    semana2: {
        lunes: {
            desayuno: "🍳 Huevos con tocino y aguacate",
            almuerzo: "🍗 Alitas de pollo al horno con salsa buffalo",
            cena: "🐟 Filete de pescado con vegetales"
        },
        martes: {
            desayuno: "🍳 Omelette de jamón y queso",
            almuerzo: "🥩 Carne asada con ensalada",
            cena: "🍄 Champiñones rellenos de queso"
        },
        miercoles: {
            desayuno: "⚡ AYUNO 18H - Solo agua/café/té",
            almuerzo: "🍗 Pollo al limón con espárragos",
            cena: "🥩 Costillas BBQ keto"
        },
        jueves: {
            desayuno: "⚡ AYUNO 18H - Solo líquidos sin calorías",
            almuerzo: "🐟 Hamburguesas de salmón",
            cena: "🍛 Pollo tikka masala keto"
        },
        viernes: {
            desayuno: "🍳 Revuelto de huevos con chorizo",
            almuerzo: "🥩 Filete con mantequilla compound",
            cena: "🍲 Sopa de mariscos"
        },
        sabado: {
            desayuno: "🍳 Huevos estrellados con jamón serrano",
            almuerzo: "🍗 Pechuga rellena de espinacas y queso",
            cena: "🐟 Atún en escabeche keto"
        },
        domingo: {
            desayuno: "⚡ AYUNO 18H - Preparación para chicharronada",
            almuerzo: "🎉 CHICHARRONADA ESPECIAL",
            cena: "🥗 Ligera - Ensalada con proteína"
        }
    },
    semana3: {
        lunes: {
            desayuno: "🍳 Huevos con aguacate y bacon",
            almuerzo: "🍗 Pollo al horno con vegetales rostizados",
            cena: "🍲 Sopa de res con vegetales"
        },
        martes: {
            desayuno: "🍳 Omelette con champiñones y queso",
            almuerzo: "🐟 Filete de atún sellado",
            cena: "🥩 Hígado de res encebollado"
        },
        miercoles: {
            desayuno: "⚡ AYUNO ANCESTRAL",
            almuerzo: "🍗 Pechuga rellena de espinacas",
            cena: "🐟 Salmón con espárragos"
        },
        jueves: {
            desayuno: "⚡ AYUNO ANCESTRAL",
            almuerzo: "🥩 Carne molida con puré de brócoli",
            cena: "🍖 Menudencia variada"
        },
        viernes: {
            desayuno: "⚡ AYUNO ANCESTRAL",
            almuerzo: "🦐 Mariscos salteados",
            cena: "🥩 Costillas de cerdo al horno"
        },
        sabado: {
            desayuno: "⚡ AYUNO ANCESTRAL",
            almuerzo: "🍛 Pollo al curry cremoso",
            cena: "🥗 Ensalada césar con pollo"
        },
        domingo: {
            desayuno: "⚡ AYUNO ANCESTRAL",
            almuerzo: "🎉 PARRILLADA ESPECIAL",
            cena: "🍲 Ligera - Caldo de huesos"
        }
    },
    semana4: {
        lunes: {
            desayuno: "⚡ AYUNO 18 HORAS",
            almuerzo: "🥩 Filete de res con mantequilla",
            cena: "🍗 Pollo al limón con vegetales"
        },
        martes: {
            desayuno: "⚡ AYUNO",
            almuerzo: "🐟 Salmón con espárragos",
            cena: "🥗 ÚLTIMA COMIDA antes de ayuno 24h"
        },
        miercoles: {
            desayuno: "⚡ AYUNO 24H COMPLETO",
            almuerzo: "🍲 ROMPER AYUNO: Caldo + Pollo",
            cena: "🍳 Ligera - Huevos revueltos"
        },
        jueves: {
            desayuno: "⚡ AYUNO 20H - Mini Reto 20/4",
            almuerzo: "🥩 Costillas BBQ keto",
            cena: "🍔 Hamburguesa gourmet sin pan"
        },
        viernes: {
            desayuno: "⚡ AYUNO 20H - Mini Reto 20/4",
            almuerzo: "🐟 Atún sellado con ensalada",
            cena: "🍕 Pizza Keto (tu favorita)"
        },
        sabado: {
            desayuno: "⚡ AYUNO 18 HORAS",
            almuerzo: "🍗 Alitas de pollo al horno",
            cena: "🦐 Filete con camarones"
        },
        domingo: {
            desayuno: "🎉 BRUNCH ESPECIAL LIBRE",
            almuerzo: "🎉 DÍA LIBRE - ¡LO LOGRASTE!",
            cena: "🎉 CELEBRACIÓN"
        }
    }
};

// ESTADO
let appData = { weights: [], water: {}, fastingTimers: {} };

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    updateAllViews();
    setInterval(updateFastingTimers, 1000);
});

// NAVEGACIÓN
function showView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewName + '-view').classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-view="${viewName}"]`).classList.add('active');
    
    if (viewName === 'home') updateHomeView();
    if (viewName === 'water') updateWaterView();
    if (viewName === 'fasting') updateFastingView();
    if (viewName === 'progress') updateProgressView();
}

// VISTA HOME
function updateHomeView() {
    const today = new Date();
    const dayOfWeek = today.toLocaleDateString('es-ES', { weekday: 'long' });
    const dayNumber = Math.floor((today - START_DATE) / (1000 * 60 * 60 * 24)) + 1;
    const weekNumber = Math.min(Math.ceil(dayNumber / 7), 4);
    
    document.getElementById('current-day').textContent = 
        `${dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)} - Día ${dayNumber}`;
    document.getElementById('current-week').textContent = `Semana ${weekNumber}`;
    
    loadTodayMenu(weekNumber, dayOfWeek);
    
    const todayKey = today.toISOString().split('T')[0];
    const waterCount = appData.water[todayKey] || 0;
    const percentage = Math.min((waterCount / DAILY_WATER_GOAL) * 100, 100);
    document.getElementById('water-progress').style.width = percentage + '%';
    document.getElementById('water-count').textContent = `${waterCount}/${DAILY_WATER_GOAL}`;
}

function loadTodayMenu(week, dayOfWeek) {
    const dayMap = {
        'lunes': 'lunes', 'martes': 'martes', 'miércoles': 'miercoles',
        'jueves': 'jueves', 'viernes': 'viernes', 'sábado': 'sabado', 'domingo': 'domingo'
    };
    
    const weekKey = `semana${week}`;
    const dayKey = dayMap[dayOfWeek.toLowerCase()];
    
    if (MENUS[weekKey] && MENUS[weekKey][dayKey]) {
        const menu = MENUS[weekKey][dayKey];
        document.getElementById('breakfast-menu').textContent = menu.desayuno;
        document.getElementById('lunch-menu').textContent = menu.almuerzo;
        document.getElementById('dinner-menu').textContent = menu.cena;
    } else {
        document.getElementById('breakfast-menu').textContent = 'Menú no disponible';
        document.getElementById('lunch-menu').textContent = 'Menú no disponible';
        document.getElementById('dinner-menu').textContent = 'Menú no disponible';
    }
}

// VISTA AGUA
function updateWaterView() {
    const today = new Date().toISOString().split('T')[0];
    const count = appData.water[today] || 0;
    
    document.getElementById('water-counter').textContent = count;
    
    const percentage = Math.min((count / DAILY_WATER_GOAL) * 100, 100);
    document.getElementById('water-circle-progress').style.background = 
        `conic-gradient(#3b82f6 ${percentage * 3.6}deg, #e5e7eb 0deg)`;
    
    document.getElementById('glasses-remaining').textContent = 
        `Faltan: ${Math.max(0, DAILY_WATER_GOAL - count)} vasos`;
}

function addWater() {
    const today = new Date().toISOString().split('T')[0];
    if (!appData.water[today]) appData.water[today] = 0;
    if (appData.water[today] < DAILY_WATER_GOAL) {
        appData.water[today]++;
        saveData();
        updateWaterView();
        updateHomeView();
    }
}

function removeWater() {
    const today = new Date().toISOString().split('T')[0];
    if (appData.water[today] && appData.water[today] > 0) {
        appData.water[today]--;
        saveData();
        updateWaterView();
        updateHomeView();
    }
}

// VISTA AYUNO
function updateFastingView() {
    const list = document.getElementById('fasting-list');
    list.innerHTML = '';
    
    const sorted = Object.entries(appData.fastingTimers)
        .sort((a, b) => new Date(b[1].startTime) - new Date(a[1].startTime));
    
    if (sorted.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">No hay ayunos activos</p>';
        return;
    }
    
    sorted.forEach(([id, timer]) => {
        const card = document.createElement('div');
        card.className = 'fasting-card';
        
        const now = Date.now();
        const elapsed = now - new Date(timer.startTime).getTime();
        const target = timer.targetHours * 60 * 60 * 1000;
        const percentage = Math.min((elapsed / target) * 100, 100);
        
        const hours = Math.floor(elapsed / (1000 * 60 * 60));
        const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <div>
                    <div style="font-weight: 600; font-size: 1.125rem;">Ayuno ${timer.targetHours}h</div>
                    <div style="color: #6b7280; font-size: 0.875rem;">
                        ${new Date(timer.startTime).toLocaleString('es-ES')}
                    </div>
                </div>
                <button onclick="stopFasting('${id}')" class="btn-secondary" style="padding: 0.5rem 1rem; width: auto;">
                    Terminar
                </button>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
            <div style="margin-top: 0.5rem; text-align: center; font-size: 1.5rem; font-weight: bold; color: #3b82f6;">
                ${hours}h ${minutes}m
            </div>
        `;
        
        list.appendChild(card);
    });
}

function startFasting() {
    const hours = parseInt(prompt('¿Cuántas horas de ayuno? (12, 14, 16, 18, 20, 24)', '16'));
    if (hours && hours > 0) {
        const id = Date.now().toString();
        appData.fastingTimers[id] = {
            startTime: new Date().toISOString(),
            targetHours: hours
        };
        saveData();
        updateFastingView();
    }
}

function stopFasting(id) {
    if (confirm('¿Terminar este ayuno?')) {
        delete appData.fastingTimers[id];
        saveData();
        updateFastingView();
    }
}

function updateFastingTimers() {
    Object.entries(appData.fastingTimers).forEach(([id, timer]) => {
        const now = Date.now();
        const elapsed = now - new Date(timer.startTime).getTime();
        const target = timer.targetHours * 60 * 60 * 1000;
        
        if (elapsed >= target) {
            alert(`¡Ayuno de ${timer.targetHours}h completado! 🎉`);
            delete appData.fastingTimers[id];
            saveData();
        }
    });
    
    if (document.getElementById('fasting-view').classList.contains('active')) {
        updateFastingView();
    }
}

// VISTA PROGRESO
function updateProgressView() {
    const today = new Date();
    const dayNumber = Math.max(1, Math.floor((today - START_DATE) / (1000 * 60 * 60 * 24)) + 1);
    
    document.getElementById('days-completed').textContent = Math.min(dayNumber, 28);
    document.getElementById('days-remaining').textContent = Math.max(0, 28 - dayNumber);
    
    if (appData.weights.length > 0) {
        const latest = appData.weights[appData.weights.length - 1];
        document.getElementById('current-weight').textContent = latest.weight.toFixed(1) + ' kg';
        
        const lost = 90 - latest.weight;
        document.getElementById('weight-lost').textContent = lost.toFixed(1) + ' kg';
    }
    
    renderWeightChart();
    renderWaterHistory();
}

function addWeight() {
    const weight = parseFloat(prompt('Ingresa tu peso actual (kg):', '90'));
    if (weight && weight > 0) {
        appData.weights.push({ date: new Date().toISOString(), weight: weight });
        saveData();
        updateProgressView();
    }
}

function renderWeightChart() {
    const canvas = document.getElementById('weight-chart');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (appData.weights.length === 0) {
        ctx.fillStyle = '#6b7280';
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Sin datos aún', canvas.width / 2, canvas.height / 2);
        return;
    }
    
    const padding = 40;
    const chartWidth = canvas.width - 2 * padding;
    const chartHeight = canvas.height - 2 * padding;
    
    const weights = appData.weights.map(w => w.weight);
    const minWeight = Math.min(...weights) - 1;
    const maxWeight = Math.max(...weights) + 1;
    
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();
    
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    appData.weights.forEach((point, index) => {
        const x = padding + (index / (appData.weights.length - 1 || 1)) * chartWidth;
        const y = canvas.height - padding - ((point.weight - minWeight) / (maxWeight - minWeight)) * chartHeight;
        
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    });
    
    ctx.stroke();
}

function renderWaterHistory() {
    const container = document.getElementById('water-history');
    container.innerHTML = '';
    
    const last7 = Object.entries(appData.water)
        .sort((a, b) => new Date(b[0]) - new Date(a[0]))
        .slice(0, 7);
    
    if (last7.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280;">Sin datos aún</p>';
        return;
    }
    
    last7.forEach(([date, count]) => {
        const div = document.createElement('div');
        div.style.cssText = 'display: flex; justify-content: space-between; padding: 0.75rem; background: #f9fafb; border-radius: 0.5rem; margin-bottom: 0.5rem;';
        
        const dateObj = new Date(date);
        const dateStr = dateObj.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' });
        
        const percentage = Math.min((count / DAILY_WATER_GOAL) * 100, 100);
        const emoji = percentage >= 100 ? '🎉' : percentage >= 75 ? '💧' : '💦';
        
        div.innerHTML = `
            <span style="font-weight: 500;">${dateStr}</span>
            <span>${emoji} ${count}/${DAILY_WATER_GOAL} (${percentage.toFixed(0)}%)</span>
        `;
        
        container.appendChild(div);
    });
}

// ALMACENAMIENTO
function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function loadData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) appData = JSON.parse(stored);
}

function updateAllViews() {
    updateHomeView();
    updateWaterView();
    updateFastingView();
    updateProgressView();
}
