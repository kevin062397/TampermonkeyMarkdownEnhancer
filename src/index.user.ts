// ==UserScript==
// @name         Markdown Enhancer
// @author       Haoyuan Kevin Xia
// @description  Enhance Markdown editing experience.
// @grant        none
// @match        *
// @namespace    https://github.com/kevin062397/TampermonkeyMarkdownEnhancer
// @version      1.0.0
// ==/UserScript==

(() => {
    const selectors = ["textarea"].join(", ");

    const PAIRS: Record<string, [string, string]> = {
        '"': ['"', '"'],
        "'": ["'", "'"],
        "(": ["(", ")"],
        "[": ["[", "]"],
        "{": ["{", "}"],
        "<": ["<", ">"],
        "`": ["`", "`"]
    };

    const wrapSelectedText = (textarea: HTMLTextAreaElement, leading: string, trailing: string): void => {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.slice(start, end);

        // Replace selection with wrapped text
        const newText = leading + selectedText + trailing;
        textarea.setRangeText(newText, start, end, "end");

        // Reselect the original content (without wrapping chars)
        textarea.selectionStart = start + 1;
        textarea.selectionEnd = start + 1 + selectedText.length;
    };

    const handleKeydown = (event: KeyboardEvent): void => {
        const textarea = event.target as HTMLTextAreaElement;

        if (event.key in PAIRS) {
            event.preventDefault();
            const [leading, trailing] = PAIRS[event.key];
            wrapSelectedText(textarea, leading, trailing);
        }
    };

    const attachListener = (textArea: HTMLTextAreaElement): void => {
        if (textArea.dataset.markdownEnhancerAttached === "true") {
            return;
        }
        textArea.addEventListener("keydown", handleKeydown);
        textArea.dataset.markdownEnhancerAttached = "true";
    };

    const attachListenerToAllTextAreas = (): void => {
        document.querySelectorAll<HTMLTextAreaElement>(selectors).forEach(attachListener);
    };

    // Run on page load
    attachListenerToAllTextAreas();

    // Observe future changes (for dynamically loaded content)
    const observer = new MutationObserver(() => {
        attachListenerToAllTextAreas();
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
