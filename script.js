// Default settings configuration
const defaultSettings = {
    graphicsQuality: '5',
    fullscreen: false,
    masterVolume: 80,
    muteAudio: false,
    chatEnabled: true,
    friendRequests: true
};

// Load settings from localStorage or use defaults
function loadSettings() {
    const savedSettings = localStorage.getItem('robloxSettings');
    if (savedSettings) {
        try {
            return JSON.parse(savedSettings);
        } catch (error) {
            console.error('Failed to parse saved settings, using defaults:', error);
            return { ...defaultSettings };
        }
    }
    return { ...defaultSettings };
}

// Save settings to localStorage
function saveSettings(settings) {
    localStorage.setItem('robloxSettings', JSON.stringify(settings));
}

// Apply settings to UI
function applySettingsToUI(settings) {
    document.getElementById('graphics-quality').value = settings.graphicsQuality;
    document.getElementById('fullscreen').checked = settings.fullscreen;
    document.getElementById('master-volume').value = settings.masterVolume;
    document.getElementById('volume-value').textContent = settings.masterVolume + '%';
    document.getElementById('mute-audio').checked = settings.muteAudio;
    document.getElementById('chat-enabled').checked = settings.chatEnabled;
    document.getElementById('friend-requests').checked = settings.friendRequests;
}

// Get current settings from UI
function getSettingsFromUI() {
    return {
        graphicsQuality: document.getElementById('graphics-quality').value,
        fullscreen: document.getElementById('fullscreen').checked,
        masterVolume: parseInt(document.getElementById('master-volume').value),
        muteAudio: document.getElementById('mute-audio').checked,
        chatEnabled: document.getElementById('chat-enabled').checked,
        friendRequests: document.getElementById('friend-requests').checked
    };
}

// Show status message
function showStatus(message, isSuccess = true) {
    const statusElement = document.getElementById('status-message');
    statusElement.textContent = message;
    statusElement.className = 'status-message show ' + (isSuccess ? 'success' : 'error');
    
    setTimeout(() => {
        statusElement.classList.remove('show');
    }, 3000);
}

// Initialize the application
function init() {
    // Load and apply saved settings
    const settings = loadSettings();
    applySettingsToUI(settings);

    // Update volume display when slider changes
    const volumeSlider = document.getElementById('master-volume');
    volumeSlider.addEventListener('input', (e) => {
        document.getElementById('volume-value').textContent = e.target.value + '%';
    });

    // Save button handler
    document.getElementById('save-btn').addEventListener('click', () => {
        const currentSettings = getSettingsFromUI();
        saveSettings(currentSettings);
        showStatus('Settings saved successfully!', true);
        console.log('Settings saved:', currentSettings);
    });

    // Reset button handler
    document.getElementById('reset-btn').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all settings to default?')) {
            applySettingsToUI(defaultSettings);
            saveSettings(defaultSettings);
            showStatus('Settings reset to default values!', true);
            console.log('Settings reset to defaults');
        }
    });

    console.log('Roblox Settings Manager initialized');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
