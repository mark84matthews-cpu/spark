# Working Rules — Spark
#working-rules

## Project Vision
A highly aesthetic, premium, distraction-free quote and memory bank designed to instantly lift mood and inspire. Every quote or memory glows softly over a stunning natural landscape custom-matched to its vibe.

## Rules of Engagement
- **Dyslexia First:** Extremely concise writing. Zero clutter. One focus point at a time.
- **Banned Words:** Never use: *honestly*, *genuinely*, *straightforward*, *otherworldly*. No padding.
- **No Cheerleading:** Provide silent truth, high quality, and challenge weak design choices.
- **Wait for explicit approval ("go"):** Ask before creating or changing state. (Approval received to build).

## UI Design System
- **Pure Canvas:** No headers, no titles, no frames. The quote is the focal point.
- **Picturesque Landscapes:** High-resolution nature backdrops that shift smoothly based on positive emotions.
- **Soft Glow:** Elegant serif typography with a gentle golden or cool neon glow overlay.
- **Micro-Buttons:** Tiny, translucent flat-stone pills at the absolute bottom of the screen (Hopeful, Determined, Peaceful, Inspired) to keep clutter to zero.
- **Voice Trigger:** A single, tiny, elegant microphone icon for voice-to-text dictation.

## Technical Architecture
- **Tech Stack:** HTML5, Vanilla CSS, Vanilla JavaScript.
- **Persistence:** Connected to a free Firebase Firestore database so user quotes never get wiped by aggressive phone memory/cache cleanup.
- **PWA Capabilities:** Service Worker (`sw.js`) and Web Manifest (`manifest.json`) for full offline capability and home-screen installation.
