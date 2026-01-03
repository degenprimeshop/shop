# DEGEN PRIME SHOP // PROJECT BIBLE
**Status:** STABLE (Pre-Lunch Masterpiece)
**Aesthetic:** Cyber-Terminal / High-Trust Logistics / Degen Command Center

---

## 1. THE "GOLDEN HOUR" VISUAL IDENTITY
* **The Vibe:** It is NOT a retail store. It is a **Logistics Layer**. It feels like a hacker's terminal or a shipping command center.
* **Color Palette:**
    * **Background:** Pure Black (`bg-black`) + Zinc-950 for inputs.
    * **Primary Accent:** Neon Purple (`#a855f7` / `text-purple-500`) used for branding and borders.
    * **Status/Live:** Neon Green (`#22c55e` / `text-green-500` or `green-400`) used *only* for "Live" indicators and Tickers.
    * **Text:** High-Contrast Grays (`text-zinc-300`, `text-zinc-400`). Never use dark gray on black.
* **Textures:**
    * **CRT Overlay:** Mandatory scanline gradient over the entire page (`z-[60]`, `pointer-events-none`).
    * **Glitch Effect:** Applied to the main "DEGEN PRIME" title.
    * **High Voltage:** The "Connect Wallet" button must have a double-layer glow/shadow.

## 2. LAYOUT ARCHITECTURE (DO NOT CHANGE)
* **Header:** Wide format. 
    * *Left:* Ape Logo (Scale: `w-32`) + Title. 
    * *Right:* Wallet Button (Anchored right).
    * *Top Right:* Utility Links (`[ How It Works ]`, `[ Terms ]`).
* **The Ticker:** The "Live Transaction" ticker must be at the **ABSOLUTE TOP**, above the header. High visibility Green text.
* **The Processor:** Centered "Terminal Box" with a Purple Header Bar (`GATEWAY: NOWPAYMENTS_API`).
* **Footer:** Minimalist. The **"SYSTEM LIVE"** status must be mathematically centered using `absolute inset-0`.

## 3. COPYWRITING & TERMINOLOGY
* **Forbidden Words:** "Checkout", "Buy Now", "Get Cost", "Shop". (Too Web2).
* **Mandatory Words:** "ANALYZE", "LOGISTICS LAYER", "GATEWAY", "TX", "STATUS".
* **Formatting:** Use `[ BRACKETS ]` for links. Use `//` and `///` for separators. Use `_underscores_` for emphasis.
* **The Hook:** "BUY ANYTHING* WITH CRYPTO." (Keep the asterisk).
* **Sub-Hook:** "SPECIALIZED: ELECTRONICS // FOOTWEAR".

## 4. INTEGRATIONS & TRUST SIGNALS
* **Payment Gateway:** NOWPayments.
* **Accepted Coins:** Explicitly list `[ ETH ] [ SOL ] [ BASE ] [ BTC ] [ +300_ALTS ]`.
* **Trust Badge:** Must include `// ENCRYPTED_PROCESSING_VIA_NOWPAYMENTS` under the coin strip.
* **Active Targets:** Explicitly list `>> SNEAKERS`, `>> GPUS`, `>> CONSOLES` in the processor.

## 5. TECHNICAL GUARDRAILS (PREVENT THE "BULLSHIT")
1.  **Directives:** Every page must start with `"use client";`.
2.  **Navigation:** Do NOT use a separate `navbar.tsx` component in `layout.tsx`. The header is built directly into `page.tsx` to preserve the wide layout.
3.  **Styles:** Do not use `styled-jsx` tags if they cause parser errors. Use `dangerouslySetInnerHTML` for keyframes (Glitch/Scroll) to be safe.
4.  **Clean State:** When pasting new code, delete the entire file contents first.

---
**LAST STABLE BUILD:** `app/bingohomepage/page-v5.tsx`