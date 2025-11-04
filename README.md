# settingsRBX

A modern, user-friendly interface for managing Roblox settings.

## Features

- **Graphics Settings**: Adjust graphics quality and fullscreen mode
- **Audio Settings**: Control master volume and mute options
- **Privacy Settings**: Manage chat and friend request permissions
- **Persistent Storage**: Settings are automatically saved to browser localStorage
- **Responsive Design**: Works on desktop and mobile devices

## Usage

1. Open `index.html` in your web browser
2. Adjust your preferred settings using the interface
3. Click "Save Settings" to persist your changes
4. Click "Reset to Default" to restore default values

## File Structure

```
settingsRBX/
├── index.html      # Main HTML structure
├── styles.css      # Styling and layout
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## Settings Options

### Graphics
- **Quality**: Low (1), Medium (5), High (10)
- **Fullscreen**: Toggle fullscreen mode

### Audio
- **Master Volume**: 0-100%
- **Mute Audio**: Toggle audio on/off

### Privacy
- **Enable Chat**: Allow/disable chat functionality
- **Allow Friend Requests**: Accept/decline friend requests

## Technical Details

Settings are stored in the browser's localStorage using the key `robloxSettings`. The application uses vanilla JavaScript with no external dependencies.

## Browser Compatibility

Works with all modern browsers that support:
- HTML5
- CSS3
- ES6 JavaScript
- localStorage API

## License

Open source - feel free to use and modify as needed.