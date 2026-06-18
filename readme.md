# Clean WhatsApp Web 
> **Unfudge WhatsApp shortcomings.**

A precision UserScript designed to declutter the WhatsApp Web interface, fix layout expansion issues, and unify the visual experience into a clean, bluish theme.

---

## Key Improvements

### Layout & Navigation
* **Permanent Drawer Toggle:** A clean, circular button fixed at the very top of the vertical rail.
* **Perfect Expansion:** When the chat list is hidden, the main chat window expands instantly to fill the entire left side of the screen—no dead space.
* **Zero-Delay UI:** The toggle button stays in place and simply swaps icons, providing an instant response without flickering or loading delays.

### Interface Decluttering
* **Minimalist Vertical Rail:** Completely removed the **Meta AI**, **Communities**, and **Channels** icons, along with their associated dividers.
* **No Ghost Hovers:** Targeted parent containers so that tooltips and background hover effects are fully disabled in empty rail slots.
* **Surgical Banner Removal:** Automatically hides the "Messages to yourself..." encryption banner while ensuring your actual conversation remains untouched.
* **Attach Menu Cleanup:** Hides bloated options like "Ask Meta AI" and "Document" from the attachment menu.

### Visual Theme (Bluish)
* **Unified Link Colors:** All links and action text are set to a consistent `#008DE1`.
* **Precision Read Receipts:** Restored the logic where checkmarks stay a neutral grey when delivered and only turn a bright `#29D7FF` blue specifically when read.
* **UI Accents:** Progress bars, unread badges, and caret (cursor) colors are unified into the blue palette.
* **Search Box Fix:** Removed the aggressive green border/glow effect when the search input is focused.

---

## Installation

1.  Install a UserScript manager extension for your browser:
    * [Tampermonkey](https://www.tampermonkey.net/)
    * [Violentmonkey](https://violentmonkey.github.io/)
2.  Create a **New Script** in your manager dashboard.
3.  Paste the contents of the `clean-whatsapp.user.js` file into the editor.
4.  Save and refresh [WhatsApp Web](https://web.whatsapp.com).

---

## Technical Details
* **Version:** 51
* **Logic:** Uses a `MutationObserver` to ensure styles are re-applied instantly as WhatsApp dynamically renders new components.
* **Style Injection:** Injects a custom CSS block into the `:root` to ensure high-priority overrides without breaking native React functionality.

---
## License

MIT License — Copyright (c) 2025 nodefive

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
