// ==UserScript==
// @name         Markdown Enhancer
// @author       Haoyuan Kevin Xia
// @description  Enhance Markdown editing experience.
// @grant        none
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAABVklEQVQ4jaWTvU4CQRSFv5nddYEQlGqxtLEgMTE+gfEJMJY0UBp9ADot7WzsobEk4AsYGysT408CCY2NCWyFEsLfOq7FCruLiBBPMsmce+d+c5orXNdl9fg5p30Oz3CVxSISmq2kWXi/2CqJxNFTTlO9orOSZGCm+DASc2d1p0Nk2MIYtVFaLC+Sh3ctx0hY3fjmQp+PFe82MJyOLXGVNTBTSw0DDMwUuMqSwJ+xZ0npMQDkuLC9Dpm0/yCT9mrBftC7Qg8DMmmoZCG3451K9icw6MfSg+axCcUD/w6wuwFr0TDorQ83LzMA1TqcXvuRwRuuZOGq7vmTPdi//CUBQLUWBlRrkC/7yfJl/00IECxO+9I9JKP+PagJ4KEZbkz789vprJ4kgKZ6s7tzpDudb4DQ7Gj/dWlAZNgCodlSSbNgjNrEu40JdZ401fP2YNRGSbMg/rvOXw5if53KPKbxAAAAAElFTkSuQmCC
// @icon64       data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxKAAAsSgF3enRNAAAEu0lEQVR4nO1bTWgbRxT+3s7Y6MeVol5CaQ6NoWAMLrEb6CGGml57MfhgyEkGH0qr0LTHQOihkGPaYNFTwDoFfDDkkrsLNmnBtU0MJhBwLikhl9py9Yc9o+lhtbW0OxvteqWVVtYHQrsz81bv+/bNm9lFj5RS8IJ0bv8WKblISs6SEtOejEKGIr6riG0qYmvF/NSWFxtqJ0A6t581lLhH9dNPO+JleNiTLPGomJ8qvG+QqwCpOwcTTFaf9Ovd9gpFfFey+O2TlcmXun5D15jO7We5KG1HnTwAkBLTXJS207n9rL7fFgFXci9+MGT1odsFz0YzEDwFwRIAADGS6qC7/sHPTsxvWQEXJxg5PXIdW2fxH4/zn/3S3NYiQDq3n2WysqozrsWvoRa7CkW8I453C6QEYrV3iFXfaPslSyw154X/BUjdOZjgorQNqGSrQRLlsXHIxh2PCpisIFk6BJNlWw+VBR+7aeUE49yg+kRH/t/UROTIA4BkiYbvSVuPSppcTRiAGfr2hGeR7/eQfx8Uca0IpMS0lRQNAGCy8r3duDw2HmnyFhRxlMfGHe2GEvcAgFLfvbjFZGWzubMWv4Zq/OOQXAwH8erfjsQoWWLWICUX7YNrsauhORYWdJxIyUWDlJxtbjwbzQxE6NuhiONsNNPSRkrOGvbkJ3hvNzbdhJ0bKTHt2AqLCC55XqHjpn0WuExwRkCP9/bdhOSXPAJ0yf1SCaDDUIBeO9BrDAXwOvCTDLCxDBQWgPlJ/z80P2nabiyb1/KL7AxwfN/8ZGf827uBMt/80fJO7OjDL7QDN5aBL6+fny+tA4Udbz+SnQFWF87Pf38NzD325+jxfSAdM4+LNeDKz/7sLWT++bPl3HMENJMHTEJe7oSdvO5aXmCRtx8HRaAc0E4EHfl+Q+Ak6CZCFMgDHVoF7CJEhTwAdOzBv5lwVMgDASJgad3ZtrqgJ68b2y+4cARYS2C7u20tl+3GzV0H5hrvLvfeAk8P/PkzPwnc+Mg83jgENl57sws0BdqJ4GevMDcO/PTVxWx1OcerAIGTYGFHH+J+COgQZJ/hBx1JgoUd4LgG/Pq1eX73mf8Q3nvrbLOIuQnpRl53LTd0bBV4euCftN1+ad1JyO3uupFfWvfnR189DbpNJx1RN/J+p11fCQC4i9AOF805fScA4F+EIAm3LwUAvIsQdLXpWwGA9iIEJQ/4EKBY0x93275b+wwLngW4+8x0vFgzj/0iiH1hB1h5DtSV+Vl53hnygI9XYoOCC78SG1QMBei1A73GUIBeO9BrOASw/ns7iNBxG0aAvYHLSi/8CAU6boYivtsySAzwFLBxU8R3DUWs5V+iI6dHICVCdSwMkBKOWgJFbNNQxNbsg2O1d6E5FhZ0nBSxNaOYn9pSxuirlsHVN2ADlAuYrOgKKPaK+aktAwDqxB/Ye5Olw4GYCqQEkqVDR7tkiUdmf6NiJPPtXzuDVjNASuCDk5eOqhFFfPfot89ngKZlULL4bYBaRjJZblwgetOByYqWPEBlk2vjbFg0FfGyOSYroLroTNmcBTMSqnl7EVV0QWXJ4jldGe2lL531VDzdKKq60Q0HuwVljL6qE39w4eJpOwa1fP4/dwE+6nA0/bkAAAAASUVORK5CYII=
// @match        *
// @namespace    https://github.com/kevin062397/TampermonkeyMarkdownEnhancer
// @version      1.4.0
// ==/UserScript==

(() => {
    const selectors = ["textarea"].join(", ");

    const WRAP_CHARACTERS: Record<string, { leading: string; trailing: string; isSelectionRequired: boolean }> = {
        "(": { leading: "(", trailing: ")", isSelectionRequired: false },
        "[": { leading: "[", trailing: "]", isSelectionRequired: false },
        "{": { leading: "{", trailing: "}", isSelectionRequired: false },
        "<": { leading: "<", trailing: ">", isSelectionRequired: false },
        '"': { leading: '"', trailing: '"', isSelectionRequired: true },
        "'": { leading: "'", trailing: "'", isSelectionRequired: true },
        "`": { leading: "`", trailing: "`", isSelectionRequired: true },
        _: { leading: "_", trailing: "_", isSelectionRequired: true },
        "*": { leading: "*", trailing: "*", isSelectionRequired: true },
        "~": { leading: "~", trailing: "~", isSelectionRequired: true }
    };

    const TAB_SIZE = 4;

    // Helper to check if a string is a hyperlink (http/https/ftp/mailto)
    const isHyperlink = (text: string): boolean => {
        return /^(https?:\/\/|ftp:\/\/|mailto:)[^\s]+$/i.test(text.trim());
    };

    const wrapSelectedText = (textArea: HTMLTextAreaElement, leading: string, trailing: string): void => {
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;
        const selectedText = textArea.value.slice(start, end);

        // Replace selection with wrapped text
        const newText = leading + selectedText + trailing;
        textArea.setRangeText(newText, start, end, "end");

        // Reselect the original content (without wrapping chars)
        textArea.selectionStart = start + 1;
        textArea.selectionEnd = start + 1 + selectedText.length;
    };

    const indentSelectedLines = (textArea: HTMLTextAreaElement, tabSize: number): void => {
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;
        const value = textArea.value;

        // Find line starts for selection
        const beforeSelection = value.slice(0, start);

        const selectionStartLine = beforeSelection.lastIndexOf("\n") + 1;
        const selectionEndLine = value.indexOf("\n", end) >= 0 ? value.indexOf("\n", end) : value.length; // The end index is exclusive, so it's before the next line break or before the end of text

        const selectedLines = value.slice(selectionStartLine, selectionEndLine).split("\n");

        // Add spaces to each selected line
        const indentedLines = selectedLines.map((line) => " ".repeat(tabSize) + line);

        const newText = indentedLines.join("\n");

        // Replace the selected lines with indented ones
        textArea.setRangeText(newText, selectionStartLine, selectionEndLine, "end");

        // Update selection to cover the newly indented lines
        const addedChars = tabSize * selectedLines.length;
        textArea.selectionStart = start + tabSize;
        textArea.selectionEnd = end + addedChars;
    };

    const insertSpaces = (textArea: HTMLTextAreaElement, tabSize: number): void => {
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;
        const value = textArea.value;

        // Find the current line and calculate the number of spaces to insert
        const currentLine = value.slice(0, start).split("\n").pop() || "";
        const spacesToInsert = tabSize - (currentLine.length % tabSize); // Calculate the number of spaces to reach the next multiple of tab size
        const spaces = " ".repeat(spacesToInsert);

        // Insert spaces at the cursor position
        textArea.setRangeText(spaces, start, end, "end");
        textArea.selectionStart = start + spacesToInsert;
        textArea.selectionEnd = start + spacesToInsert;
    };

    const outdentSelectedLines = (textArea: HTMLTextAreaElement, tabSize: number): void => {
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;
        const value = textArea.value;

        // Find line starts for selection
        const beforeSelection = value.slice(0, start);
        const selectionStartLine = beforeSelection.lastIndexOf("\n") + 1;
        const selectionEndLine = value.indexOf("\n", end) >= 0 ? value.indexOf("\n", end) : value.length; // The end index is exclusive, so it's before the next line break or before the end of text

        const selectedLines = value.slice(selectionStartLine, selectionEndLine).split("\n");

        // Remove up to tabSize spaces from each selected line
        const outdentedLines = selectedLines.map((line) =>
            line.startsWith(" ".repeat(tabSize)) ? line.slice(tabSize) : line.replace(/^ +/, "")
        );

        const newText = outdentedLines.join("\n");

        // Calculate how many spaces were actually removed
        let removedChars = 0;
        let removedCharsFirstLine = 0;
        selectedLines.forEach((line, i) => {
            const original = line;
            const outdented = outdentedLines[i];
            removedChars += original.length - outdented.length;
            if (i === 0) {
                removedCharsFirstLine = original.length - outdented.length;
            }
        });

        // Replace the selected lines with outdented ones
        textArea.setRangeText(newText, selectionStartLine, selectionEndLine, "end");

        // Update selection to cover the newly outdented lines
        textArea.selectionStart = Math.max(start - removedCharsFirstLine, selectionStartLine); // Ensure selection doesn't go before the start of the line
        textArea.selectionEnd = Math.max(end - removedChars, selectionStartLine); // Ensure selection doesn't go before the start of the line
    };

    const toggleWrap = (textArea: HTMLTextAreaElement, wrap: string): void => {
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;
        const value = textArea.value;
        const wrapLen = wrap.length;
        // Check if already wrapped (selection or text before/after selection)
        const before = value.slice(start - wrapLen, start);
        const after = value.slice(end, end + wrapLen);
        const selectedText = value.slice(start, end);
        if (before === wrap && after === wrap) {
            // Remove wrapping from outside selection
            textArea.setSelectionRange(start - wrapLen, end + wrapLen);
            textArea.setRangeText(selectedText, start - wrapLen, end + wrapLen, "end");
            textArea.selectionStart = start - wrapLen;
            textArea.selectionEnd = start - wrapLen + selectedText.length;
        } else if (selectedText.startsWith(wrap) && selectedText.endsWith(wrap) && selectedText.length >= wrapLen * 2) {
            // Remove wrapping from inside selection
            const unwrapped = selectedText.slice(wrapLen, -wrapLen);
            textArea.setRangeText(unwrapped, start, end, "end");
            textArea.selectionStart = start;
            textArea.selectionEnd = start + unwrapped.length;
        } else {
            // Add wrapping
            const wrapped = wrap + selectedText + wrap;
            textArea.setRangeText(wrapped, start, end, "end");
            textArea.selectionStart = start + wrapLen;
            textArea.selectionEnd = start + wrapLen + selectedText.length;
        }
    };

    // Detect OS for modifier key
    const getOSModifierKey = (): "ctrl" | "meta" => {
        const platform = navigator.platform.toLowerCase();
        if (platform.includes("mac")) {
            // Command for macOS
            return "meta";
        }
        if (platform.includes("win")) {
            // Control for Windows
            return "ctrl";
        }
        // For Linux and others, use Control
        return "ctrl";
    };

    const osModifierKey = getOSModifierKey();

    const handleKeydown = (event: KeyboardEvent): void => {
        const textArea = event.target as HTMLTextAreaElement;

        const { selectionStart, selectionEnd } = textArea;
        const hasSelection = selectionStart !== selectionEnd;

        // OS-specific modifier logic
        const isModifierKey =
            (osModifierKey === "meta" && event.metaKey && !event.ctrlKey) ||
            (osModifierKey === "ctrl" && event.ctrlKey && !event.metaKey);
        // Toggle bold
        if (isModifierKey && event.key.toLowerCase() === "b") {
            event.preventDefault();
            if (hasSelection) {
                toggleWrap(textArea, "**");
            }
            return;
        }
        // Toggle italic
        if (isModifierKey && event.key.toLowerCase() === "i") {
            event.preventDefault();
            if (hasSelection) {
                toggleWrap(textArea, "*");
            }
            return;
        }

        // Handle wrapping characters
        if (event.key in WRAP_CHARACTERS) {
            const { leading, trailing, isSelectionRequired } = WRAP_CHARACTERS[event.key];

            if (hasSelection || !isSelectionRequired) {
                // If text is selected or wrapping is allowed without selection
                event.preventDefault();
                wrapSelectedText(textArea, leading, trailing);
            }
        }

        // Handle Tab for indentation
        if (event.key === "Tab" && !event.shiftKey) {
            event.preventDefault();

            if (hasSelection) {
                // If text is selected, indent the selected lines
                indentSelectedLines(textArea, TAB_SIZE);
            } else {
                // If no text is selected, insert spaces
                insertSpaces(textArea, TAB_SIZE);
            }
        }

        // Handle Shift+Tab for outdentation
        if (event.key === "Tab" && event.shiftKey) {
            event.preventDefault();
            outdentSelectedLines(textArea, TAB_SIZE);
        }
    };

    const handlePaste = (event: ClipboardEvent): void => {
        const textArea = event.target as HTMLTextAreaElement;

        // Only handle if there is a selection and clipboard has text
        if (!event.clipboardData) {
            return;
        }

        const pasteText = event.clipboardData.getData("text");

        const { selectionStart, selectionEnd } = textArea;
        const hasSelection = selectionStart !== selectionEnd;

        if (hasSelection && isHyperlink(pasteText)) {
            // If text is selected and clipboard content is a hyperlink
            event.preventDefault();
            const selectedText = textArea.value.slice(selectionStart, selectionEnd);
            const markdownLink = `[${selectedText}](${pasteText.trim()})`;
            textArea.setRangeText(markdownLink, selectionStart, selectionEnd, "end");
            // Place cursor after the inserted link
            const newCursor = selectionStart + markdownLink.length;
            textArea.selectionStart = newCursor;
            textArea.selectionEnd = newCursor;
        }
        // Otherwise, allow default paste
    };

    const attachListener = (textArea: HTMLTextAreaElement): void => {
        if (textArea.dataset.markdownEnhancerAttached === "true") {
            return;
        }
        textArea.addEventListener("keydown", handleKeydown);
        textArea.addEventListener("paste", handlePaste);
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
