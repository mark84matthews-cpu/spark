// Hand-curated bank of 80 stunning, high-contrast natural sceneries (100% stable & fast)
const NATURE_PHOTO_IDS = [
  "1502082553048-f009c37129b9", "1470071459604-3b5ec3a7fe05", "1464822759023-fed622ff2c3b", "1454496522488-7a8e488e8606", "1475924156734-496f6cac6ec1",
  "1439853949127-fa647821ebb0", "1504280390367-361c6d9f38f4", "1483347756197-71ef80e95f73", "1448375240586-882707db888b", "1441974231531-c6227db76b6e",
  "1506318137071-a8e063b4bec0", "1507525428034-b723cf961d3e", "1506744038136-46273834b3fb", "1506012787146-f92b2d7d6d96", "1473448912268-2022ce9509d8",
  "1498084393753-b411b2d26b34", "1526481280693-3bfa7568e0f3", "1506703719100-a0f3a48c0f86", "1534447677768-be436bb09401", "1518837695005-2083093ee35b",
  "1418065460487-3e41a6c84dc5", "1501785888041-af3ef285b470", "1472214222541-d510753a4907", "1469474968028-56623f02e42e", "1513836279014-a89f7a76ae86",
  "1500530855697-b586d89ba3ee", "1447752875215-b2761acb3c5d", "1542224566-6e85f2e6772f", "1426604966848-d7adac402bff", "1433832597046-4f10e10ac764",
  "1470240731273-7821a6eeb6bd", "1505761671935-60b3a7424954", "1510784722467-175517e7dbe6", "1476514525535-07fb3b4ae5f1", "1518495973542-4542c06a5843",
  "1465146344425-f00d5f5c8f07", "1533090161767-e6ffed986c88", "1519681393784-d120267933ba", "1500627869374-13598b3a164a", "1490730141103-6cac27aaab94",
  "1506260427847-2bb5e463890d", "1501854140801-50d01698950b", "1504851149312-7a075b496cc7", "1528164344705-47542687000d", "1494548162494-384bba4ab999",
  "1475113548554-5a36f1f523d6", "1509023467868-1c41819bb23b", "1539593302142-b13c6d7a3641", "1518609878373-06d740f60d8b", "1520013817300-1f4c1cb20d3f",
  "1461749280684-dccba630e2f6", "1511497584788-876760111969", "1513407030348-c983a97b98d8", "1508739773434-c26b3d09e071", "1516690561799-46d8f74f9abf",
  "1523712999610-f77fbcfc3843", "1509316975850-ff9c5deb0cd9", "1531366936337-7c912a4589a7", "1508193638397-1c4234db14d8", "1446776811953-b23d57bd21aa",
  "1419242902214-272b3f66ee7a", "1532274402991-76b5b592461a", "1510312305653-c12166a70aff", "1518098268026-4e43a1a009de", "1540206395-be35a1f88e82",
  "1509063942475-acb8d2036a3e", "1503614472-84142be0576e", "1516026672322-bc52d61a55d5", "1535498730771-e535898651a2", "1541079525-4b7264a2c2e5",
  "1542273917-380d8858db16"
];

function getPhotoUrl(id) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;
}

// Default preloaded Wit/Hoid quotes mapped to unique picturesque natural landscapes
const DEFAULT_SPARKS = [
  {
    id: 'default-1',
    text: "I promise you, Kaladin: You will be warm again.",
    author: "Wit — Oathbringer",
    mood: "hopeful",
    styleClass: "style-gold-cormorant",
    bgUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80" // Misty redwoods morning sun
  },
  {
    id: 'default-2',
    text: "You are not worse for your association with the world, but it is better for its association with you.",
    author: "Wit — Oathbringer",
    mood: "hopeful",
    styleClass: "style-serene-lexend",
    bgUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80" // Golden sun rays green hills
  },
  {
    id: 'default-3',
    text: "The longer you live, the more you fail. Failure is the mark of a life well lived. In turn, the only way to live without failure is to be of no use to anyone.",
    author: "Wit — Words of Radiance",
    mood: "determined",
    styleClass: "style-starlight-cinzel",
    bgUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" // Giant jagged mountain peaks
  },
  {
    id: 'default-4',
    text: "I’ve decided that I don’t like the word 'impossible'. It has too many syllables. 'Unlikely' is much better. It sounds like a challenge.",
    author: "Wit — The Way of Kings",
    mood: "determined",
    styleClass: "style-neon-syne",
    bgUrl: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80" // Snowy mountain peak blue sky
  },
  {
    id: 'default-5',
    text: "Accept the pain, but don't accept that you deserved it.",
    author: "Wit — Oathbringer",
    mood: "peaceful",
    styleClass: "style-serene-lexend",
    bgUrl: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1200&q=80" // Lavender violet sunset field
  },
  {
    id: 'default-6',
    text: "Sometimes a story is just a story. But other times, it is a key. A key to a door you didn't even know was locked.",
    author: "Wit — Oathbringer",
    mood: "peaceful",
    styleClass: "style-warm-lora",
    bgUrl: "https://images.unsplash.com/photo-1439853949127-fa647821ebb0?auto=format&fit=crop&w=1200&q=80" // Alpine starry twilight mirror lake
  },
  {
    id: 'default-7',
    text: "The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.",
    author: "Wit — The Way of Kings",
    mood: "inspired",
    styleClass: "style-warm-lora",
    bgUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80" // Crackling campfire under starry sky
  },
  {
    id: 'default-8',
    text: "All great art is hated. It is difficult to make something nobody hates; it is easy to make something nobody loves.",
    author: "Wit — Words of Radiance",
    mood: "inspired",
    styleClass: "style-gold-cormorant",
    bgUrl: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1200&q=80" // Aurora borealis mountains
  }
];

// Dynamic preset landscape picker custom-matched to each target positive feeling
function getRandomBg(mood) {
  const indexMap = {
    hopeful: [0, 20],      // Sunrises, glowing hills, bright mountains
    determined: [20, 40],  // Massive peaks, dense woods, stark sky
    peaceful: [40, 60],    // Alpine lakes, autumn forests, pink sunset
    inspired: [60, 78]     // Campfires, starry sky, northern lights
  };
  const range = indexMap[mood] || [0, 20];
  const start = range[0];
  const end = range[1];
  const size = end - start;
  const randomIndex = start + Math.floor(Math.random() * size);
  return getPhotoUrl(NATURE_PHOTO_IDS[randomIndex]);
}

// Global App State
let sparks = [];
let currentMood = 'hopeful';
let currentSparkIndex = 0;
let activeGridBackdrops = []; // Stores the currently visible 15 landscape presets
let db = null; // Firestore reference

// Voice Curation Temp Deck
let retrievedCandidates = [];

// DOM Elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteCard = document.getElementById('quote-card');
const bgLayer1 = document.getElementById('bg-layer-1');
const bgLayer2 = document.getElementById('bg-layer-2');
const micBtn = document.getElementById('mic-btn');
const moodSelector = document.getElementById('mood-selector');

// Search DOM Elements
const searchToggleBtn = document.getElementById('search-toggle-btn');
const localSearchContainer = document.getElementById('local-search-container');
const localSearchInput = document.getElementById('local-search-input');

// Modals & Overlays
const dictationOverlay = document.getElementById('dictation-overlay');
const modalSpinner = document.getElementById('modal-spinner');
const modalStatus = document.getElementById('modal-status');
const voiceContainer = document.getElementById('voice-transcription-container');
const transcriptionText = document.getElementById('transcription-text');
const searchEditedBtn = document.getElementById('search-edited-btn');
const savePersonalQuoteBtn = document.getElementById('save-personal-quote-btn');
const quoteOptionsContainer = document.getElementById('quote-options-container');
const optionsScrollList = document.getElementById('options-scroll-list');

// Modal Actions
const cancelDictation = document.getElementById('cancel-dictation');
const doneSpeakingBtn = document.getElementById('done-speaking-btn');
const tryAgainDictation = document.getElementById('try-again-dictation');
const saveDictation = document.getElementById('save-dictation');

// Floating Actions & Delete Overlay
const deleteBtn = document.getElementById('delete-btn');
const changeBgBtn = document.getElementById('change-bg-btn');
const deleteOverlay = document.getElementById('delete-overlay');
const cancelDelete = document.getElementById('cancel-delete');
const confirmDelete = document.getElementById('confirm-delete');

// Backdrop Customization Overlay
const backdropOverlay = document.getElementById('backdrop-overlay');
const cancelBackdrop = document.getElementById('cancel-backdrop');
const moreBackdropBtn = document.getElementById('more-backdrop-btn');
const surpriseBackdrop = document.getElementById('surprise-backdrop');
const backdropGrid = document.getElementById('backdrop-grid');

// Settings Elements
const settingsBtn = document.getElementById('settings-btn');
const settingsOverlay = document.getElementById('settings-overlay');
const closeSettings = document.getElementById('close-settings');
const saveSettings = document.getElementById('save-settings');
const geminiKeyInput = document.getElementById('gemini-key-input');
const aiTextQueryInput = document.getElementById('ai-text-query-input');
const aiTextQueryBtn = document.getElementById('ai-text-query-btn');

// Service Worker Registration for PWA Offline Support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log('Service Worker registered successfully!', reg.scope);
        
        // Listen for new service worker updates
        reg.onupdatefound = () => {
          const installingWorker = reg.installing;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // New update is installed; reload to apply it instantly
                console.log('New update installed! Forcing clean reload...');
                window.location.reload();
              }
            }
          };
        };
      })
      .catch(err => console.log('Service Worker registration failed:', err));
  });

  // Automatically refresh when the new active service worker takes control
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
}

// ----------------------------------------------------
// DATABASE LAYER: Offline-First Local Storage + Firebase
// ----------------------------------------------------
function initDatabase() {
  const localData = localStorage.getItem('spark_memory_bank');
  if (localData) {
    sparks = JSON.parse(localData);
    
    // Proactive Database Self-Healing: assign style classes to old saved quotes instantly
    let databaseUpgraded = false;
    sparks = sparks.map(spark => {
      if (!spark.styleClass) {
        databaseUpgraded = true;
        const defaultMatch = DEFAULT_SPARKS.find(d => d.id === spark.id);
        if (defaultMatch) {
          spark.styleClass = defaultMatch.styleClass;
        } else {
          const moodStyles = {
            hopeful: ['style-gold-cormorant', 'style-serene-lexend'],
            determined: ['style-starlight-cinzel', 'style-neon-syne'],
            peaceful: ['style-serene-lexend', 'style-warm-lora'],
            inspired: ['style-warm-lora', 'style-neon-syne']
          };
          const pool = moodStyles[spark.mood] || ['style-serene-lexend'];
          spark.styleClass = pool[Math.floor(Math.random() * pool.length)];
        }
      }
      return spark;
    });
    
    if (databaseUpgraded) {
      saveToLocalStorage();
    }
  } else {
    sparks = [...DEFAULT_SPARKS];
    saveToLocalStorage();
  }

  // Auto-fill Settings key if saved
  const savedKey = localStorage.getItem('spark_gemini_key');
  if (savedKey) {
    geminiKeyInput.value = savedKey;
  }

  // Attempt to initialize Firebase Firestore from config
  if (window.firebaseConfigured && window.firebase) {
    try {
      firebase.initializeApp(window.firebaseConfig);
      db = firebase.firestore();
      
      db.collection("moments").onSnapshot((snapshot) => {
        const cloudSparks = [];
        snapshot.forEach((doc) => {
          cloudSparks.push({ id: doc.id, ...doc.data() });
        });
        
        if (cloudSparks.length > 0) {
          sparks = mergeSparks(sparks, cloudSparks);
          saveToLocalStorage();
          renderActiveSpark();
        }
      });
      console.log("Firebase Firestore connected & synced!");
    } catch (e) {
      console.warn("Firestore initialization failed. Running in Local-Only Mode.", e);
    }
  }
}

function saveToLocalStorage() {
  localStorage.setItem('spark_memory_bank', JSON.stringify(sparks));
}

function mergeSparks(local, cloud) {
  const mergedMap = new Map();
  DEFAULT_SPARKS.forEach(s => mergedMap.set(s.id, s));
  local.forEach(s => mergedMap.set(s.id, s));
  cloud.forEach(s => mergedMap.set(s.id, s));
  return Array.from(mergedMap.values());
}

async function addSpark(text, author, mood) {
  const randomBg = getRandomBg(mood);
  
  // Dynamically assign style classes based on the chosen positive feeling
  const moodStyles = {
    hopeful: ['style-gold-cormorant', 'style-serene-lexend'],
    determined: ['style-starlight-cinzel', 'style-neon-syne'],
    peaceful: ['style-serene-lexend', 'style-warm-lora'],
    inspired: ['style-warm-lora', 'style-neon-syne']
  };
  const stylesPool = moodStyles[mood] || ['style-serene-lexend'];
  const randomStyle = stylesPool[Math.floor(Math.random() * stylesPool.length)];

  const newSpark = {
    id: 'user-' + Date.now() + Math.random().toString(36).substring(2, 7),
    text: text,
    author: author || "Moments of Reflection",
    mood: mood,
    styleClass: randomStyle,
    bgUrl: randomBg
  };

  sparks.unshift(newSpark);
  saveToLocalStorage();

  if (db) {
    try {
      await db.collection("moments").doc(newSpark.id).set({
        text: newSpark.text,
        author: newSpark.author,
        mood: newSpark.mood,
        styleClass: newSpark.styleClass,
        bgUrl: newSpark.bgUrl
      });
    } catch (e) {
      console.warn("Could not sync to cloud. Local save secure.", e);
    }
  }
}

// ----------------------------------------------------
// UI RENDERING LAYER & KEYWORD SEARCH
// ----------------------------------------------------
function getFilteredSparks() {
  let pool = sparks.filter(spark => spark.mood === currentMood);
  
  // Filter by home screen keyword search input
  const query = localSearchInput.value.trim().toLowerCase();
  if (query) {
    pool = pool.filter(spark => 
      spark.text.toLowerCase().includes(query) || 
      spark.author.toLowerCase().includes(query)
    );
  }
  return pool;
}

function renderActiveSpark() {
  const pool = getFilteredSparks();
  if (pool.length === 0) {
    quoteText.textContent = "No matching moments found. Try clearing your search or dictating new ones!";
    quoteAuthor.textContent = "";
    changeBackground("https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1200&q=80");
    return;
  }

  if (currentSparkIndex >= pool.length) {
    currentSparkIndex = 0;
  }

  const spark = pool[currentSparkIndex];

  // Smooth, instant opacity fade-out of the ENTIRE quote card
  quoteCard.style.opacity = 0;
  
  setTimeout(() => {
    quoteText.textContent = spark.text;
    quoteAuthor.textContent = spark.author;
    document.getElementById('quote-mood-tag').value = spark.mood;
    document.getElementById('quote-style-tag').value = spark.styleClass || "style-serene-lexend";
    
    // Reset previous style classes
    quoteText.className = "";
    
    // Apply this quote's unique visual masterpiece style class
    const styleClass = spark.styleClass || "style-serene-lexend";
    quoteText.classList.add(styleClass);
    
    // Dynamic Font-Sizing based on Quote Length and Typeface Thickness (Empathetic Layout Scaling)
    const length = spark.text.length;
    const isThinSerif = ['style-gold-cormorant', 'style-starlight-cinzel', 'style-warm-lora'].includes(styleClass);
    const multiplier = isThinSerif ? 1.18 : 1.0; // Boost size by 18% for thinner delicate fonts
    
    if (length < 65) {
      quoteText.style.fontSize = `clamp(${1.8 * multiplier}rem, ${7.5 * multiplier}vw, ${2.5 * multiplier}rem)`;
    } else if (length < 130) {
      quoteText.style.fontSize = `clamp(${1.35 * multiplier}rem, ${5.5 * multiplier}vw, ${1.9 * multiplier}rem)`;
    } else {
      quoteText.style.fontSize = `clamp(${1.1 * multiplier}rem, ${4.6 * multiplier}vw, ${1.5 * multiplier}rem)`;
    }
    
    // Smooth opacity fade-in
    quoteCard.style.opacity = 1;
    
    changeBackground(spark.bgUrl);
  }, 300);
}

function changeBackground(url) {
  const activeLayer = bgLayer1.classList.contains('active') ? bgLayer1 : bgLayer2;
  const inactiveLayer = bgLayer1.classList.contains('active') ? bgLayer2 : bgLayer1;

  const tempImg = new Image();
  tempImg.src = url;
  tempImg.onload = () => {
    inactiveLayer.style.backgroundImage = `url('${url}')`;
    activeLayer.classList.remove('active');
    inactiveLayer.classList.add('active');
  };
  tempImg.onerror = () => {
    // Fallback: apply background instantly even if preloading hits a connection timeout
    inactiveLayer.style.backgroundImage = `url('${url}')`;
    activeLayer.classList.remove('active');
    inactiveLayer.classList.add('active');
  };
}

function updateActiveMoodButton() {
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-mood') === currentMood);
  });
}

// Local Search Input handlers
searchToggleBtn.addEventListener('click', () => {
  localSearchContainer.classList.toggle('hidden');
  if (!localSearchContainer.classList.contains('hidden')) {
    localSearchInput.focus();
  } else {
    localSearchInput.value = "";
    currentSparkIndex = 0;
    renderActiveSpark();
  }
});

localSearchInput.addEventListener('input', () => {
  currentSparkIndex = 0;
  renderActiveSpark();
});

// Tap quote card to cycle quotes
quoteCard.addEventListener('click', (e) => {
  // Stop cycling if they clicked the individual mood or style pills
  if (e.target.closest('#quote-mood-tag') || e.target.closest('#quote-style-tag')) return;

  const pool = getFilteredSparks();
  if (pool.length > 1) {
    currentSparkIndex = (currentSparkIndex + 1) % pool.length;
    renderActiveSpark();
  }
});

// Re-tag active quote mood on the fly
document.getElementById('quote-mood-tag').addEventListener('change', async (e) => {
  const pool = getFilteredSparks();
  if (pool.length === 0) return;
  
  const activeSpark = pool[currentSparkIndex];
  const newMood = e.target.value;
  
  if (activeSpark.mood === newMood) return;
  
  // 1. Update mood locally
  activeSpark.mood = newMood;
  
  // Also pick a matching background for the new mood feeling!
  activeSpark.bgUrl = getRandomBg(newMood);
  saveToLocalStorage();
  
  // 2. Sync tag update to Firestore cloud
  if (db) {
    try {
      await db.collection("moments").doc(activeSpark.id).update({
        mood: newMood,
        bgUrl: activeSpark.bgUrl
      });
    } catch (err) {
      console.warn("Could not sync mood re-tag to cloud. Local secure.", err);
    }
  }
  
  // 3. Smoothly fade card and cycle/re-render (it now belongs to a different screen tab!)
  const newPool = getFilteredSparks();
  if (currentSparkIndex >= newPool.length && currentSparkIndex > 0) {
    currentSparkIndex = newPool.length - 1;
  }
  
  renderActiveSpark();
});

// Change active quote style/font on the fly
document.getElementById('quote-style-tag').addEventListener('change', async (e) => {
  const pool = getFilteredSparks();
  if (pool.length === 0) return;
  
  const activeSpark = pool[currentSparkIndex];
  const newStyle = e.target.value;
  
  if (activeSpark.styleClass === newStyle) return;
  
  // 1. Update style locally
  activeSpark.styleClass = newStyle;
  saveToLocalStorage();
  
  // 2. Sync style update to Firestore cloud
  if (db) {
    try {
      await db.collection("moments").doc(activeSpark.id).update({
        styleClass: newStyle
      });
    } catch (err) {
      console.warn("Could not sync style re-tag to cloud. Local secure.", err);
    }
  }
  
  // 3. Immediately re-render active quote to display the new typeface & glow instantly
  renderActiveSpark();
});

// Mood selector button handlers
moodSelector.addEventListener('click', (e) => {
  const button = e.target.closest('.mood-btn');
  if (!button) return;

  const targetMood = button.getAttribute('data-mood');
  if (targetMood === currentMood) return;

  currentMood = targetMood;
  currentSparkIndex = 0;
  
  updateActiveMoodButton();
  renderActiveSpark();
});

// ----------------------------------------------------
// SETTINGS OVERLAY
// ----------------------------------------------------
settingsBtn.addEventListener('click', () => {
  settingsOverlay.classList.remove('hidden');
});

closeSettings.addEventListener('click', () => {
  settingsOverlay.classList.add('hidden');
});

saveSettings.addEventListener('click', () => {
  const key = geminiKeyInput.value.trim();
  localStorage.setItem('spark_gemini_key', key);
  settingsOverlay.classList.add('hidden');
});

// ----------------------------------------------------
// GEMINI DYNAMIC QUOTE FINDER CLIENT
// ----------------------------------------------------
async function queryAIQuotes(userQuery) {
  const apiKey = localStorage.getItem('spark_gemini_key');
  if (!apiKey) {
    console.log("No Gemini API key found. Falling back to local cleaning mode.");
    return {
      quotes: [
        {
          text: userQuery,
          author: "Personal Reflection"
        }
      ]
    };
  }

  const API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent';
  const prompt = `You are an elite, highly insightful quote curator, literary expert, and general wisdom archivist.
The user spoke or typed their query: "${userQuery}".

It is highly likely to contain phonetic mishearings, typos, or garbled terms (e.g., 'calendar' or 'calladin' instead of 'Kaladin', 'wit' or 'white' instead of 'Wit', 'oath bringer' instead of 'Oathbringer', 'words of radiance' instead of 'Words of Radiance', 'marcus' instead of 'Marcus Aurelius').

INSTRUCTIONS:
1. Reconstruct the user's intended query by analyzing phonetic sounds and context.
2. Find up to 5 real, powerful, and deeply inspirational quotes, general wisdom statements, or rich literary extracts/passages matching the query.
3. Broaden your search to allow ANY topic:
   - General quotes & wisdom (e.g., "inspiring quotes", stoic philosophy, or even playful/quirky queries like "quotes about a tomato").
   - Deep literary extracts: If they search for a book, character, theme, or story, or if their search query contains words like "extract", "passage", "scene", "paragraph", or "story", you MUST return a rich, powerful multi-sentence passage or paragraph (between 3 to 5 sentences long) that fully captures the context, scene, or dialogue, rather than just a single-sentence quote! This is extremely important to give deep, immersive context to the user.
4. For each quote/extract, identify the exact speaker/author and source context (e.g., "Wit — Oathbringer by Brandon Sanderson" or "Marcus Aurelius — Meditations" or "General Wisdom" or "Playful Reflection").
5. If the query is highly personal or cannot be matched to literature, do not fail. Instead, write 2 or 3 beautifully polished, inspiring, poetic variations of the user's words as quotes, credited to "Personal Reflection".
6. Output must be strictly valid JSON according to this schema:
    {
      "quotes": [
        {
          "text": "The exact quote verbatim, general wisdom statement, or rich multi-sentence literary extract (up to 3-5 sentences long)",
          "author": "Character/Author — Book Title/Source"
        }
      ]
    }
Do NOT include any markdown code blocks, backticks, or explanation outside the JSON. Return only the raw JSON string.`;

  const payload = {
    contents: [{
      parts: [{ text: prompt }]
    }]
  };

  const response = await fetch(`${API_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    let errorDetail = `HTTP Error ${response.status}`;
    try {
      const errJson = await response.json();
      if (errJson && errJson.error && errJson.error.message) {
        errorDetail = errJson.error.message;
      }
    } catch (e) {}
    throw new Error(errorDetail);
  }

  const result = await response.json();
  if (!result.candidates || !result.candidates[0] || !result.candidates[0].content) {
    throw new Error("Invalid API response format");
  }
  let rawText = result.candidates[0].content.parts[0].text.trim();
  
  // Clean markdown wrapping if AI Studio ignores the mimeType parameter
  if (rawText.startsWith("```")) {
    rawText = rawText.replace(/^```json/, '').replace(/^```/, '').replace(/```$/, '').trim();
  }
  return JSON.parse(rawText);
}

// ----------------------------------------------------
// MULTI-QUOTE DICTATION INTERACTION FLOW
// ----------------------------------------------------
let recognition = null;

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechGen = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechGen();
  
  // Continuous = true ensures the mic doesn't cut off when the user pauses!
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.onstart = () => {
    micBtn.classList.add('listening');
    transcriptionText.value = "";
    modalStatus.textContent = "Listening... Tap 'Done Speaking' to pause and edit.";
    modalSpinner.classList.remove('hidden');
    voiceContainer.classList.remove('hidden');
    searchEditedBtn.classList.add('hidden');
    savePersonalQuoteBtn.classList.add('hidden');
    quoteOptionsContainer.classList.add('hidden');
    
    // Action buttons initial state
    cancelDictation.classList.remove('hidden');
    doneSpeakingBtn.classList.remove('hidden');
    tryAgainDictation.classList.add('hidden');
    saveDictation.classList.add('hidden');
    
    dictationOverlay.classList.remove('hidden');
  };

  recognition.onresult = (event) => {
    let interimTranscription = '';
    let finalTranscription = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscription += event.results[i][0].transcript;
      } else {
        interimTranscription += event.results[i][0].transcript;
      }
    }

    const currentText = finalTranscription || interimTranscription;
    if (currentText) {
      transcriptionText.value = currentText;
    }
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    modalStatus.textContent = "Microphone error. You can type your search below.";
    modalSpinner.classList.add('hidden');
    searchEditedBtn.classList.add('full-width');
    searchEditedBtn.classList.remove('hidden');
    savePersonalQuoteBtn.classList.remove('hidden');
  };

  recognition.onend = () => {
    micBtn.classList.remove('listening');
    modalSpinner.classList.add('hidden');
    modalStatus.textContent = "Review your prompt. Edit spelling, then tap Search.";
    
    doneSpeakingBtn.classList.add('hidden');
    searchEditedBtn.classList.add('full-width');
    searchEditedBtn.classList.remove('hidden');
    savePersonalQuoteBtn.classList.remove('hidden');
    tryAgainDictation.classList.remove('hidden');
  };
}

// Phase 2: Contact Gemini and Render candidates with Checkboxes and Individual Mood selectors
async function processSpokenQuery(queryText) {
  modalStatus.textContent = "Searching online book quote archive...";
  voiceContainer.classList.add('hidden');
  doneSpeakingBtn.classList.add('hidden');
  savePersonalQuoteBtn.classList.add('hidden');
  
  try {
    const data = await queryAIQuotes(queryText);
    retrievedCandidates = data.quotes || [];
    
    // De-duplicate: Omit quotes that are already saved in your bank
    const freshCandidates = retrievedCandidates.filter(item => {
      const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
      const candidateNorm = normalize(item.text);
      return !sparks.some(savedSpark => normalize(savedSpark.text) === candidateNorm);
    });
    
    retrievedCandidates = freshCandidates;
    
    if (retrievedCandidates.length === 0) {
      modalStatus.textContent = "All found sparks are already in your memory bank!";
      modalSpinner.classList.add('hidden');
      tryAgainDictation.classList.remove('hidden');
      return;
    }
    
    // Clear spinner
    modalSpinner.classList.add('hidden');
    modalStatus.textContent = "Sparks Found!";
    
    // Render list elements
    optionsScrollList.innerHTML = "";
    retrievedCandidates.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = "quote-option-card"; // Unchecked by default!
      card.setAttribute('data-index', index);
      
      card.innerHTML = `
        <div class="card-checkbox">
          <span class="checkbox-tick"></span>
        </div>
        <div class="card-content">
          <p class="option-text">“${item.text}”</p>
          <p class="option-author">${item.author}</p>
          <!-- Individual Card Specific Mood Tagging Dropdown -->
          <select class="card-mood-select">
            <option value="hopeful">☀️ Hopeful</option>
            <option value="determined">🛡️ Determined</option>
            <option value="peaceful">🪶 Peaceful</option>
            <option value="inspired">🔥 Inspired</option>
          </select>
        </div>
      `;
      
      // Default to active screen mood
      const select = card.querySelector('.card-mood-select');
      select.value = currentMood;
      
      // Stop event propagation so clicking select doesn't toggle checkbox!
      select.addEventListener('click', (e) => {
        e.stopPropagation();
      });
      
      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-mood-select')) return;
        toggleOptionSelection(card);
      });
      
      optionsScrollList.appendChild(card);
    });

    quoteOptionsContainer.classList.remove('hidden');
    tryAgainDictation.classList.remove('hidden');
    saveDictation.classList.add('full-width');
    saveDictation.classList.remove('hidden');
    
    updateSaveButtonCount();
    
  } catch (error) {
    console.error("Gemini Query Failed", error);
    let userMsg = error.message;
    if (userMsg === "Failed to fetch") {
      userMsg = "Internet connection lost or request blocked";
    }
    modalStatus.textContent = `AI Search failed: ${userMsg}. Check API Key or Internet.`;
    modalSpinner.classList.add('hidden');
    tryAgainDictation.classList.remove('hidden');
  }
}

function toggleOptionSelection(card) {
  card.classList.toggle('selected');
  updateSaveButtonCount();
}

function updateSaveButtonCount() {
  const selectedCount = document.querySelectorAll('.quote-option-card.selected').length;
  saveDictation.textContent = `Save Sparks (${selectedCount})`;
  saveDictation.classList.toggle('hidden', selectedCount === 0);
}

// Microphones Action Click
micBtn.addEventListener('click', () => {
  if (!recognition) {
    alert("Speech recognition is not supported on this browser. Try Chrome or Safari.");
    return;
  }
  recognition.start();
});

// Done Speaking simply stops mic to allow editing (does NOT search automatically)
doneSpeakingBtn.addEventListener('click', () => {
  if (recognition) {
    recognition.stop();
  }
});

// Search edited triggers query (shows spinner loader first)
searchEditedBtn.addEventListener('click', () => {
  if (recognition) {
    recognition.stop();
  }
  const text = transcriptionText.value.trim();
  if (text.length > 2) {
    modalSpinner.classList.remove('hidden');
    modalStatus.textContent = "Searching book quotes archive...";
    searchEditedBtn.classList.add('hidden');
    savePersonalQuoteBtn.classList.add('hidden');
    tryAgainDictation.classList.add('hidden');
    processSpokenQuery(text);
  } else {
    alert("Please speak or type a longer search query.");
  }
});

// Save custom/personal quote directly without online query
savePersonalQuoteBtn.addEventListener('click', async () => {
  if (recognition) {
    recognition.stop();
  }
  const text = transcriptionText.value.trim();
  if (text.length < 2) {
    alert("Please type or speak your custom quote first.");
    return;
  }
  
  // Directly save locally and cloud sync under the currently active mood
  await addSpark(text, "Personal Reflection", currentMood);
  
  // Close modal and focus on the newly added quote
  dictationOverlay.classList.add('hidden');
  currentSparkIndex = 0;
  renderActiveSpark();
});

cancelDictation.addEventListener('click', () => {
  if (recognition) recognition.abort();
  dictationOverlay.classList.add('hidden');
});

// "Try Again" cleans overlay and automatically restarts the voice recording
tryAgainDictation.addEventListener('click', () => {
  quoteOptionsContainer.classList.add('hidden');
  dictationOverlay.classList.add('hidden');
  
  setTimeout(() => {
    if (recognition) {
      recognition.start();
    }
  }, 350);
});

// Batch Save Selected Sparks with Card-Specific Moods
saveDictation.addEventListener('click', async () => {
  const selectedCards = document.querySelectorAll('.quote-option-card.selected');
  if (selectedCards.length === 0) return;

  let lastSavedMood = currentMood;

  for (let card of selectedCards) {
    const idx = parseInt(card.getAttribute('data-index'), 10);
    const item = retrievedCandidates[idx];
    const cardMood = card.querySelector('.card-mood-select').value;
    
    await addSpark(item.text, item.author, cardMood);
    lastSavedMood = cardMood;
  }

  dictationOverlay.classList.add('hidden');
  
  // Immediately pivot to the saved feeling and load the first newly added quote
  currentMood = lastSavedMood;
  currentSparkIndex = 0;
  updateActiveMoodButton();
  renderActiveSpark();
});

// ----------------------------------------------------
// SETTINGS DYNAMIC TEXT-BASED AI SEARCH
// ----------------------------------------------------
aiTextQueryBtn.addEventListener('click', () => {
  const query = aiTextQueryInput.value.trim();
  if (query.length < 3) {
    alert("Please enter a longer search prompt.");
    return;
  }

  // Close Settings modal
  settingsOverlay.classList.add('hidden');
  
  // Open dictation modal, display spinner, run query
  dictationOverlay.classList.remove('hidden');
  modalStatus.textContent = "Searching book quotes archive...";
  modalSpinner.classList.remove('hidden');
  voiceContainer.classList.add('hidden');
  quoteOptionsContainer.classList.add('hidden');
  
  cancelDictation.classList.remove('hidden');
  doneSpeakingBtn.classList.add('hidden');
  tryAgainDictation.classList.add('hidden');
  saveDictation.classList.add('hidden');
  
  processSpokenQuery(query);
  
  // Clear settings input
  aiTextQueryInput.value = "";
});

// ----------------------------------------------------
// FLOATING CANVAS ACTIONS: Banishing Quotes & Swapping Backgrounds
// ----------------------------------------------------
deleteBtn.addEventListener('click', () => {
  const pool = getFilteredSparks();
  if (pool.length === 0) return;
  deleteOverlay.classList.remove('hidden');
});

cancelDelete.addEventListener('click', () => {
  deleteOverlay.classList.add('hidden');
});

confirmDelete.addEventListener('click', async () => {
  const pool = getFilteredSparks();
  if (pool.length === 0) return;
  
  const activeSpark = pool[currentSparkIndex];
  
  // 1. Filter out the banished spark from our active database array
  sparks = sparks.filter(s => s.id !== activeSpark.id);
  saveToLocalStorage();
  
  // 2. Sync deletion to Firestore cloud database in background
  if (db) {
    try {
      await db.collection("moments").doc(activeSpark.id).delete();
    } catch (e) {
      console.warn("Could not delete from Firestore. Local banish secure.", e);
    }
  }
  
  deleteOverlay.classList.add('hidden');
  
  // 3. Recalculate index bounds and smoothly cycle quote
  const newPool = getFilteredSparks();
  if (currentSparkIndex >= newPool.length && currentSparkIndex > 0) {
    currentSparkIndex = newPool.length - 1;
  }
  
  renderActiveSpark();
});

// Render a random selection of 15 landscapes from our 80-photo masterpiece library
function renderBackdropGrid(forceNewBatch = false) {
  if (forceNewBatch || activeGridBackdrops.length === 0) {
    // Shuffle and pick 15 unique photo IDs
    const shuffled = [...NATURE_PHOTO_IDS].sort(() => 0.5 - Math.random());
    activeGridBackdrops = shuffled.slice(0, 15).map(id => getPhotoUrl(id));
  }

  backdropGrid.innerHTML = "";
  activeGridBackdrops.forEach((url) => {
    const thumb = document.createElement('div');
    thumb.className = "backdrop-thumbnail";
    thumb.style.backgroundImage = `url('${url}')`;
    thumb.setAttribute('data-url', url);
    
    thumb.addEventListener('click', async () => {
      const pool = getFilteredSparks();
      if (pool.length === 0) return;
      
      const activeSpark = pool[currentSparkIndex];
      
      // Update visual selection indicators
      document.querySelectorAll('.backdrop-thumbnail').forEach(t => t.classList.remove('selected'));
      thumb.classList.add('selected');
      
      backdropOverlay.classList.add('hidden');
      await updateBackdropImage(activeSpark, url);
    });
    
    backdropGrid.appendChild(thumb);
  });
}

// Open Backdrop customizer
changeBgBtn.addEventListener('click', () => {
  const pool = getFilteredSparks();
  if (pool.length === 0) return;
  
  // Render a random batch of 15 on open
  renderBackdropGrid(false);

  // Pre-highlight current backdrop in the grid if present
  const activeSpark = pool[currentSparkIndex];
  document.querySelectorAll('.backdrop-thumbnail').forEach(thumb => {
    const url = thumb.getAttribute('data-url');
    thumb.classList.toggle('selected', url === activeSpark.bgUrl);
  });
  
  backdropOverlay.classList.remove('hidden');
});

cancelBackdrop.addEventListener('click', () => {
  backdropOverlay.classList.add('hidden');
});

moreBackdropBtn.addEventListener('click', () => {
  // Regenerate a brand new random set of 15 thumbnails!
  renderBackdropGrid(true);
});

surpriseBackdrop.addEventListener('click', async () => {
  const pool = getFilteredSparks();
  if (pool.length === 0) return;
  
  const activeSpark = pool[currentSparkIndex];
  // Select a random landscape from our massive 80-photo deck
  const randId = NATURE_PHOTO_IDS[Math.floor(Math.random() * NATURE_PHOTO_IDS.length)];
  const newBg = getPhotoUrl(randId);
  
  backdropOverlay.classList.add('hidden');
  await updateBackdropImage(activeSpark, newBg);
});

async function updateBackdropImage(activeSpark, newBg) {
  // 1. Update background image URL in local quote object
  activeSpark.bgUrl = newBg;
  saveToLocalStorage();
  
  // 2. Sync background update to Firestore in background
  if (db) {
    try {
      await db.collection("moments").doc(activeSpark.id).update({
        bgUrl: newBg
      });
    } catch (e) {
      console.warn("Could not sync background update to cloud. Local update secure.", e);
    }
  }
  
  // 3. Instantly trigger a premium cross-fade transition
  changeBackground(newBg);
}

// ----------------------------------------------------
// SETTINGS DIAGNOSTICS KEY TESTING
// ----------------------------------------------------
const runDiagnosticsBtn = document.getElementById('run-diagnostics-btn');
const diagnosticsResult = document.getElementById('diagnostics-result');

if (runDiagnosticsBtn) {
  runDiagnosticsBtn.addEventListener('click', async () => {
    const apiKey = geminiKeyInput.value.trim() || localStorage.getItem('spark_gemini_key');
    if (!apiKey) {
      diagnosticsResult.textContent = "Please save or enter an API Key above first.";
      diagnosticsResult.classList.remove('hidden');
      return;
    }

    diagnosticsResult.textContent = "Querying Google API...";
    diagnosticsResult.classList.remove('hidden');

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`);
      if (!response.ok) {
        let errText = `HTTP Error ${response.status}`;
        try {
          const errJson = await response.json();
          if (errJson && errJson.error && errJson.error.message) {
            errText = errJson.error.message;
          }
        } catch (e) {}
        diagnosticsResult.textContent = `Error: ${errText}`;
        return;
      }

      const data = await response.json();
      if (!data.models || data.models.length === 0) {
        diagnosticsResult.textContent = "No models found under your account key.";
        return;
      }

      // Filter and print models that support generateContent
      const supportedModels = data.models
        .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
        .map(m => m.name.replace('models/', ''))
        .join('\n');

      if (!supportedModels) {
        diagnosticsResult.textContent = "Your API key has access to models, but none support generateContent.";
      } else {
        diagnosticsResult.textContent = `Success! Available Models:\n\n${supportedModels}`;
      }
    } catch (err) {
      diagnosticsResult.textContent = `Failed to connect:\n${err.message}`;
    }
  });
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  initDatabase();
  renderActiveSpark();
  renderBackdropGrid();
});
