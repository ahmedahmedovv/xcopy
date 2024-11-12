# XCopy Chrome Extension

XCopy is a simple Chrome extension that enhances your copy experience by automatically removing extra whitespace from selected text when copying.

## Features

- Right-click context menu integration
- Automatically removes:
  - Multiple spaces
  - Line breaks
  - Leading/trailing whitespace
- Preserves single spaces between words
- Works on any selectable text on web pages

## Installation

1. Clone this repository or download the files
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the `xcopy` folder

## Usage

1. Select any text on a webpage
2. Right-click to open the context menu
3. Click "XCopy"
4. The cleaned text is now in your clipboard, ready to paste

## How It Works

XCopy processes selected text by:
1. Replacing all whitespace sequences (spaces, tabs, newlines) with a single space
2. Removing leading and trailing whitespace
3. Copying the cleaned text to your clipboard

## Permissions

The extension requires the following permissions:
- `contextMenus`: To add the XCopy option to the right-click menu
- `clipboardWrite`: To copy the processed text
- `scripting`: To execute the copy functionality
- `activeTab`: To access the current tab's content

## License

[Add your chosen license here]

## Contributing

Feel free to submit issues and pull requests to improve the extension.