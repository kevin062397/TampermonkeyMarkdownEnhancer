# TampermonkeyMarkdownEnhancer

**TampermonkeyMarkdownEnhancer** is a user script that enhances the Markdown editing experience in all `<textarea>` elements on any website. It provides keyboard shortcuts for wrapping text, indenting/outdenting lines, and inserting spaces, making Markdown editing faster and more convenient.

## Features

- **Quick Wrapping:**
    - Select text and press any of the following keys to wrap the selection:
        - For `"`, `'`, `` ` ``, `_`, `*`, `~`, a selection is required.
        - For `(`, `[`, `{`, `<`, wrapping can occur without a selection.
- **Indentation with Tab:**
    - Press `Tab` to indent the current line or all selected lines by 4 spaces (configurable in code).
    - Press `Shift+Tab` to outdent the current line or all selected lines by up to 4 spaces.
- **Smart Spaces:**
    - Pressing `Tab` with no selection inserts spaces to the next tab stop (multiple of 4 spaces).
- **Paste hyperlinks as Markdown links:**
    - If there is selected text and a hyperlink (e.g., `https://example.com`) is pasted, the selected text will be wrapped in Markdown link syntax: `[selected text](https://example.com)`.
    - If the clipboard content is not a hyperlink or there is no selection, the default paste behavior is used.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser.
2. Clone this repository and build the project locally:
    ```sh
    git clone https://github.com/kevin062397/TampermonkeyMarkdownEnhancer
    cd TampermonkeyMarkdownEnhancer
    npm install
    npm run build
    ```
3. Create a new user script in Tampermonkey and paste the contents of `dist/index.user.js` into the editor.
4. Save the script.

## Usage

- **Wrap text:**
    - Select text and press a wrapping key (see above).
- **Indent:**
    - Select lines and press `Tab`.
- **Outdent:**
    - Select lines and press `Shift+Tab`.
- **Insert spaces:**
    - Place the cursor and press `Tab` (with no selection).
- **Paste hyperlinks as Markdown links:**
    - Select text and paste a hyperlink.

## Development

- Source code: [src/index.user.ts](src/index.user.ts)
- Build:
    ```sh
    npm install
    npm run build
    ```
