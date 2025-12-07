// ============================================
// 1. INITIALIZATION & DOM READY
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    // Hide loading screen after a short delay
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 800);

    // Initialize all features
    initializeClock();
    initializeGreeting();
    initializeSearchEngine();
    initializeKeyboardShortcuts();
}

// ============================================
// 2. CLOCK & GREETING
// ============================================

function initializeClock() {
    const clockElement = document.getElementById('clock');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }

    // Update immediately and then every second
    updateClock();
    setInterval(updateClock, 1000);
}

function initializeGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();

    let greeting;
    if (hour < 12) {
        greeting = 'Good Morning';
    } else if (hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}

// ============================================
// 3. SEARCH ENGINE SWITCHING
// ============================================

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const tabs = document.querySelectorAll('.tab');

const engines = {
    google: {
        action: 'https://www.google.com/search',
        placeholder: 'Google search...',
        name: 'q'
    },
    baidu: {
        action: 'https://www.baidu.com/s',
        placeholder: 'Baidu search...',
        name: 'wd'
    },
    bing: {
        action: 'https://www.bing.com/search',
        placeholder: 'Bing search...',
        name: 'q'
    },
    github: {
        action: 'https://github.com/search',
        placeholder: 'GitHub search...',
        name: 'q'
    }
};

function initializeSearchEngine() {
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => switchSearchEngine(tab));

        // Number key shortcuts (1-4)
        document.addEventListener('keydown', (e) => {
            const num = parseInt(e.key);
            if (num >= 1 && num <= 4 && !isInputFocused()) {
                e.preventDefault();
                tabs[num - 1].click();
            }
        });
    });
}

function switchSearchEngine(tab) {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));

    // Add active class to clicked tab
    tab.classList.add('active');

    // Update form action and input placeholder
    const engineKey = tab.dataset.engine;
    const engine = engines[engineKey];

    searchForm.action = engine.action;
    searchInput.placeholder = engine.placeholder;
    searchInput.name = engine.name;

    searchInput.focus();
}

// ============================================
// 4. KEYBOARD SHORTCUTS
// ============================================

function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // "/" - Focus search input
        if (e.key === '/' && !isInputFocused()) {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }

        // "Escape" - Clear search and blur
        if (e.key === 'Escape') {
            if (isInputFocused()) {
                searchInput.value = '';
                searchInput.blur();
            }
        }
    });
}

function isInputFocused() {
    return document.activeElement === searchInput;
}

// ============================================
// 5. TOAST NOTIFICATIONS
// ============================================

function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

function showWelcomeToast() {
    setTimeout(() => {
        showToast('💡 Tip: Press "/" to search, Esc to clear', 4000);
    }, 2000);
}

// ============================================
// 6. SMOOTH ANIMATIONS & EFFECTS
// ============================================

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add stagger animation to app cards
const appCards = document.querySelectorAll('.app-card');
appCards.forEach((card, index) => {
    card.style.animationDelay = `${0.9 + (index * 0.03)}s`;
});

// ============================================
// 7. SECRET CONSOLE LOG (Preserved)
// ============================================

console.log("%c Looking for something? Try fetching '/api/config'", "color: #00E5FF; font-size: 12px;");

// ============================================
// 8. PERFORMANCE OPTIMIZATION
// ============================================

// Preload Font Awesome icons
const iconPreload = document.createElement('link');
iconPreload.rel = 'preload';
iconPreload.as = 'style';
iconPreload.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(iconPreload);
