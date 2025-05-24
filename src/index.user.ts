// ==UserScript==
// @name         Markdown Enhancer
// @author       Haoyuan Kevin Xia
// @description  Enhance Markdown editing experience.
// @grant        none
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAABVklEQVQ4jaWTvU4CQRSFv5nddYEQlGqxtLEgMTE+gfEJMJY0UBp9ADot7WzsobEk4AsYGysT408CCY2NCWyFEsLfOq7FCruLiBBPMsmce+d+c5orXNdl9fg5p30Oz3CVxSISmq2kWXi/2CqJxNFTTlO9orOSZGCm+DASc2d1p0Nk2MIYtVFaLC+Sh3ctx0hY3fjmQp+PFe82MJyOLXGVNTBTSw0DDMwUuMqSwJ+xZ0npMQDkuLC9Dpm0/yCT9mrBftC7Qg8DMmmoZCG3451K9icw6MfSg+axCcUD/w6wuwFr0TDorQ83LzMA1TqcXvuRwRuuZOGq7vmTPdi//CUBQLUWBlRrkC/7yfJl/00IECxO+9I9JKP+PagJ4KEZbkz789vprJ4kgKZ6s7tzpDudb4DQ7Gj/dWlAZNgCodlSSbNgjNrEu40JdZ401fP2YNRGSbMg/rvOXw5if53KPKbxAAAAAElFTkSuQmCC
// @icon64       data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxKAAAsSgF3enRNAAAEu0lEQVR4nO1bTWgbRxT+3s7Y6MeVol5CaQ6NoWAMLrEb6CGGml57MfhgyEkGH0qr0LTHQOihkGPaYNFTwDoFfDDkkrsLNmnBtU0MJhBwLikhl9py9Yc9o+lhtbW0OxvteqWVVtYHQrsz81bv+/bNm9lFj5RS8IJ0bv8WKblISs6SEtOejEKGIr6riG0qYmvF/NSWFxtqJ0A6t581lLhH9dNPO+JleNiTLPGomJ8qvG+QqwCpOwcTTFaf9Ovd9gpFfFey+O2TlcmXun5D15jO7We5KG1HnTwAkBLTXJS207n9rL7fFgFXci9+MGT1odsFz0YzEDwFwRIAADGS6qC7/sHPTsxvWQEXJxg5PXIdW2fxH4/zn/3S3NYiQDq3n2WysqozrsWvoRa7CkW8I453C6QEYrV3iFXfaPslSyw154X/BUjdOZjgorQNqGSrQRLlsXHIxh2PCpisIFk6BJNlWw+VBR+7aeUE49yg+kRH/t/UROTIA4BkiYbvSVuPSppcTRiAGfr2hGeR7/eQfx8Uca0IpMS0lRQNAGCy8r3duDw2HmnyFhRxlMfGHe2GEvcAgFLfvbjFZGWzubMWv4Zq/OOQXAwH8erfjsQoWWLWICUX7YNrsauhORYWdJxIyUWDlJxtbjwbzQxE6NuhiONsNNPSRkrOGvbkJ3hvNzbdhJ0bKTHt2AqLCC55XqHjpn0WuExwRkCP9/bdhOSXPAJ0yf1SCaDDUIBeO9BrDAXwOvCTDLCxDBQWgPlJ/z80P2nabiyb1/KL7AxwfN/8ZGf827uBMt/80fJO7OjDL7QDN5aBL6+fny+tA4Udbz+SnQFWF87Pf38NzD325+jxfSAdM4+LNeDKz/7sLWT++bPl3HMENJMHTEJe7oSdvO5aXmCRtx8HRaAc0E4EHfl+Q+Ak6CZCFMgDHVoF7CJEhTwAdOzBv5lwVMgDASJgad3ZtrqgJ68b2y+4cARYS2C7u20tl+3GzV0H5hrvLvfeAk8P/PkzPwnc+Mg83jgENl57sws0BdqJ4GevMDcO/PTVxWx1OcerAIGTYGFHH+J+COgQZJ/hBx1JgoUd4LgG/Pq1eX73mf8Q3nvrbLOIuQnpRl53LTd0bBV4euCftN1+ad1JyO3uupFfWvfnR189DbpNJx1RN/J+p11fCQC4i9AOF805fScA4F+EIAm3LwUAvIsQdLXpWwGA9iIEJQ/4EKBY0x93275b+wwLngW4+8x0vFgzj/0iiH1hB1h5DtSV+Vl53hnygI9XYoOCC78SG1QMBei1A73GUIBeO9BrOASw/ns7iNBxG0aAvYHLSi/8CAU6boYivtsySAzwFLBxU8R3DUWs5V+iI6dHICVCdSwMkBKOWgJFbNNQxNbsg2O1d6E5FhZ0nBSxNaOYn9pSxuirlsHVN2ADlAuYrOgKKPaK+aktAwDqxB/Ye5Olw4GYCqQEkqVDR7tkiUdmf6NiJPPtXzuDVjNASuCDk5eOqhFFfPfot89ngKZlULL4bYBaRjJZblwgetOByYqWPEBlk2vjbFg0FfGyOSYroLroTNmcBTMSqnl7EVV0QWXJ4jldGe2lL531VDzdKKq60Q0HuwVljL6qE39w4eJpOwa1fP4/dwE+6nA0/bkAAAAASUVORK5CYII=
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
