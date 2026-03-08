// ==UserScript==
// @name      Clean WhatsApp - Optimized Performance
// @version   51
// @description Unfudge Whatsapp shortcomings
// @grant     none
// @namespace https://web.whatsapp.com
// @match     https://web.whatsapp.com/*
// ==/UserScript==

if (!document.getElementById('wa-drawer-styles')) {
  const style = document.createElement('style');
  style.id = 'wa-drawer-styles';
  style.innerHTML = `
    /* 1. SURGICAL REMOVAL OF THE SELF-ENCRYPTION BANNER */
    div._amk6:has(span[data-icon="lock-small"]) {
       display: none !important;
    }

    /* 2. DRAWER & EXPANSION */
    ._aigw._as6h {
      transition: width 0.3s ease, min-width 0.3s ease, opacity 0.3s ease !important;
      overflow: hidden !important;
    }
    :root.hide-drawer ._aigw._as6h {
      width: 0px !important; min-width: 0px !important; flex-basis: 0px !important;
      opacity: 0 !important; pointer-events: none !important;
    }
    ._aigw._as6h + div { flex-grow: 1 !important; flex-shrink: 1 !important; }

    /* 3. PERMANENT TOGGLE BUTTON */
    #btn-permanent-toggle {
      background: transparent; border: none; cursor: pointer; color: white;
      width: 40px !important; height: 40px !important;
      display: flex; align-items: center; justify-content: center;
      border-radius: 50% !important; transition: background-color 0.2s;
      margin: 10px auto !important; padding: 0 !important;
    }

    /* 4. THE CHECKMARK FIX (RESTORATION) */
    span[data-icon="status-dblcheck"][style*="color: rgb(83, 189, 235)"] svg,
    span[data-icon="status-vcheck"][style*="color: rgb(83, 189, 235)"] svg,
    [style*="var(--ff-repro-status-check)"] svg {
      color: #29D7FF !important;
    }

    /* 5. COLORS & UI TWEAKS */
    a, a:visited, .x1xlr1w8, [role="button"] { color: #008DE1 !important; }
    .xfn3atn { background-color: #008DE1 !important; }

    .x1p4gyq8, .x1uxpw6z, .lexical-rich-text-input, [contenteditable="true"] {
      box-shadow: none !important; outline: none !important; border: none !important;
    }

    ._ak72._ak7p, .x4wrhlh { background-color: rgba(104, 126, 177, 0.1) !important; }
    .xjdcl3y { caret-color: #2386F0 !important; }

    /* 6. RAIL CLEANUP */
    button[aria-label="Channels"], button[aria-label="Communities"], button[aria-label="Meta AI"], header hr { display: none !important; }
    div[role="tablist"][aria-label="chat-list-filters"] { display: none !important; }

    /* 7. BUBBLES & BACKGROUND */
    [data-asset-chat-background-dark] { background-image: none !important; background-color: #0b141a !important; }
    .message-out ._amk6 { background-color: #1c2932 !important; }
    .message-out ._amk7 { color: #1c2932 !important; }
    .x1595w2n { background: radial-gradient(circle at top right, #1c2932 40%, rgba(28, 41, 50, 0) 80%) !important; }
  `;
  document.head.appendChild(style);
}

const svgLeft = '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>';
const svgRight = '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>';

let throttleTimeout = null;

const runLogic = () => {
  const root = document.documentElement;
  const isHidden = root.classList.contains('hide-drawer');
  const navRailItem = document.querySelector('button[data-navbar-item="true"]');
  const railContainer = navRailItem ? navRailItem.closest('.x78zum5.xdt5ytf') : null;

  if (railContainer && !document.getElementById('btn-permanent-toggle')) {
      const toggleBtn = document.createElement('button');
      toggleBtn.id = 'btn-permanent-toggle';
      toggleBtn.innerHTML = isHidden ? svgRight : svgLeft;
      railContainer.insertBefore(toggleBtn, railContainer.firstChild);

      toggleBtn.onclick = () => {
          const nowHidden = root.classList.toggle('hide-drawer');
          toggleBtn.innerHTML = nowHidden ? svgRight : svgLeft;
          setTimeout(() => window.dispatchEvent(new Event('resize')), 310);
      };
      toggleBtn.onmouseover = () => { toggleBtn.style.backgroundColor = 'rgba(255,255,255,0.1)'; };
      toggleBtn.onmouseout = () => { toggleBtn.style.backgroundColor = 'transparent'; };
  }

  const existingBtn = document.getElementById('btn-permanent-toggle');
  if (existingBtn) { existingBtn.innerHTML = isHidden ? svgRight : svgLeft; }

  const docButton = document.querySelector('button[data-tab="8"]');
  if (docButton && docButton.parentElement) { docButton.parentElement.style.display = 'none'; }

  const lockIcon = document.querySelector('span[data-icon="lock-outline"]');
  if (lockIcon) {
    const footer = lockIcon.closest('.x9f619.x78zum5.x6s0dn4');
    if (footer) footer.style.display = 'none';
  }
};

let observer = new MutationObserver(() => {
  if (!throttleTimeout) {
    throttleTimeout = setTimeout(() => {
      runLogic();
      throttleTimeout = null;
    }, 400);
  }
});
observer.observe(document.body, { childList: true, subtree: true });