# sheryians-assingnments

# ⚡ The Journey: Building a Pokémon Gen I Landing Page

> **"Code is not just about syntax; it's about the decisions we make to bring a vision to life."**

This repository documents my learning journey through the **Sheryians** web development assignment. The goal was not just to replicate a design, but to understand the *why* behind every line of CSS and HTML. This is the story of how I built a dynamic, character-focused landing page for **Pikachu**.

## 🗺️ The Mission
**Objective:** Create a high-fidelity, responsive hero section for a Pokémon profile.
**Constraint:** Use only HTML and CSS (no JavaScript for layout), focusing on positioning, typography, and asset management.

---

## 🚩 Key Decisions & Trade-offs

### 1. The Layout Strategy: Flexbox vs. Grid
**The Decision:** I chose **Flexbox** for the main `header` container instead of CSS Grid.
**Why?**
- The design required a simple two-column split (60% content, 40% sidebar).
- Flexbox offered easier vertical alignment (`align-items: center`) for the text content against the large character image.
- **Lesson Learned:** While Grid is powerful for 2D layouts, Flexbox remains superior for simple 1D row/column distributions where content alignment is key.

### 2. Typography: Balancing Personality and Readability
**The Decision:** I paired **Orbitron** (for futuristic tags) with **Poppins** (for headings) and **Montserrat** (for body text).
**The Challenge:** Initially, I tried using a single font family, but it felt flat.
**The Fix:** By importing multiple weights from Google Fonts, I created a visual hierarchy.
- *Orbitron* gives the "Gen I" tag a tech/gaming feel.
- *Poppins* provides a clean, modern look for the main "Pikachu" heading.
**Lesson Learned:** Typography is 80% of design. Don't be afraid to mix fonts if they serve different semantic purposes.

### 3. The "Pokeball" Background: SVG vs. Image
**The Decision:** Instead of downloading a PNG for the background Pokeball, I embedded an **SVG directly into the CSS** as a `background-image` data URI.
**Why?**
- **Performance:** No extra HTTP request.
- **Scalability:** SVGs never pixelate, regardless of screen size.
- **Control:** I could adjust the `opacity` directly in CSS to make it subtle (`0.15`) without needing an image editor.
**Lesson Learned:** Inline SVGs are a powerful tool for simple icons and decorative elements. They keep the project lightweight and self-contained.

### 4. Positioning the Character: The Z-Index Battle
**The Decision:** The Pikachu image needed to overlap both the yellow and cream sections seamlessly.
**The Implementation:**
- Used `position: absolute` for the `.character-overlay`.
- Set `z-index: 10` to ensure it floated above the background colors.
- Used `bottom: 5%` and `left: 57%` to anchor it visually.
**Challenge:** The image kept getting cut off by the `overflow: hidden` on the parent header.
**Fix:** I had to carefully balance the `height` of the overlay and the `overflow` properties to ensure the character wasn't clipped while keeping the layout clean.
**Lesson Learned:** `position: absolute` removes an element from the normal flow. You must manually manage its space and stacking context (`z-index`) to avoid clipping issues.

---

## 💡 What I Learned

### 1. The Power of `box-sizing: border-box`
Starting with `* { box-sizing: border-box; }` was a game-changer. It ensured that padding and borders didn't unexpectedly increase the width of my elements, making the 60%/40% split mathematically precise.

### 2. Relative Units are Your Friend
Using `%` for widths and `vh`/`vw` for heights made the layout fluid. When I resized the browser, the design held up much better than if I had used fixed `px` values.

### 3. Debugging is Part of the Process
I spent 30 minutes figuring out why the sidebar navigation dots weren't aligning. It turned out to be a missing `flex-direction: column` on the container.
**Takeaway:** When Flexbox behaves weirdly, check the *parent's* direction first.

### 4. Asset Management Matters
Organizing images (`pikachu-transparent.png`, `logo.png`) and keeping the file names consistent prevented broken links. A messy folder structure leads to messy code.

---

## 🛠️ Tech Stack
- **HTML5**: Semantic structure.
- **CSS3**: Flexbox, Absolute Positioning, Custom Fonts, SVG Data URIs.
- **Tools**: VS Code, Google Fonts, Remix Icons.

## 📂 Project Structure
```text
Sheryians-Repo/
│
├── index.html        # The skeleton
├── style.css         # The skin and soul
├── assets/           # Images (Pikachu, Logo)
└── README.md         # This story   