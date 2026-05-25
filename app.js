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

// Dynamic Unsplash Featured Image helper generating beautiful, unique landscapes matching each mood
function getRandomBg(mood) {
  const keywordMap = {
    hopeful: "sunrise,mist,redwoods",
    determined: "mountains,cliff,peaks",
    peaceful: "lake,stars,twilight",
    inspired: "campfire,forest,milkyway"
  };
  const keywords = keywordMap[mood] || "nature,landscape";
  const uniqueId = Math.floor(Math.random() * 1000000);
  return `https://images.unsplash.com/featured/1200x800/?${keywords}&sig=${uniqueId}`;
}

// Global App State
let sparks = [];
let currentMood = 'hopeful';
let currentSparkIndex = 0;
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
const quoteOptionsContainer = document.getElementById('quote-options-container');
const optionsScrollList = document.getElementById('options-scroll-list');

// Modal Actions
const cancelDictation = document.getElementById('cancel-dictation');
const doneSpeakingBtn = document.getElementById('done-speaking-btn');
const tryAgainDictation = document.getElementById('try-again-dictation');
const saveDictation = document.getElementById('save-dictation');

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
      .then(reg => console.log('Service Worker registered successfully!', reg.scope))
      .catch(err => console.log('Service Worker registration failed:', err));
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
quoteCard.addEventListener('click', () => {
  const pool = getFilteredSparks();
  if (pool.length > 1) {
    currentSparkIndex = (currentSparkIndex + 1) % pool.length;
    renderActiveSpark();
  }
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

  const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
  const prompt = `You are an elite, highly insightful quote curator and literary expert.
The user spoke or typed a query describing a specific theme, scene, book, or character.

User query: "${userQuery}"

INSTRUCTIONS:
1. Find up to 5 real, powerful, and deeply inspirational quotes that perfectly match the user's query.
2. Ensure the quotes are real, verbatim from literature (like fantasy books, classic stories, philosophy) or historical contexts.
3. For each quote, identify the exact speaker/author and the source book (e.g. "Wit — Oathbringer by Brandon Sanderson" or "Marcus Aurelius — Meditations").
4. If the query is highly personal or cannot be matched to literature, do not fail. Instead, write 2 or 3 beautifully polished, inspiring, poetic variations of the user's words as quotes, credited to "Personal Reflection".
5. Output must be strictly valid JSON according to this schema:
    {
      "quotes": [
        {
          "text": "The exact quote verbatim",
          "author": "Character/Author — Book Title/Source"
        }
      ]
    }
Do NOT include any markdown code blocks, backticks, or explanation outside the JSON. Return only the raw JSON string.`;

  const payload = {
    contents: [{
      parts: [{ text: prompt }]
    }],
    generationConfig: {
      responseMimeType: "application/json"
    }
  };

  const response = await fetch(`${API_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }

  const result = await response.json();
  const rawText = result.candidates[0].content.parts[0].text;
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
    modalStatus.textContent = "Listening... Tap 'Done' when finished speaking.";
    modalSpinner.classList.remove('hidden');
    voiceContainer.classList.remove('hidden');
    searchEditedBtn.classList.add('hidden');
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
      // Show manual search button in case they stop talking but want to edit
      searchEditedBtn.classList.remove('hidden');
    }
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    modalStatus.textContent = "Microphone error. Try editing and searching.";
    modalSpinner.classList.add('hidden');
    searchEditedBtn.classList.remove('hidden');
  };

  recognition.onend = () => {
    micBtn.classList.remove('listening');
  };
}

// Phase 2: Contact Gemini and Render candidates with Checkboxes and Individual Mood selectors
async function processSpokenQuery(queryText) {
  modalStatus.textContent = "Searching online book quote archive...";
  voiceContainer.classList.add('hidden');
  doneSpeakingBtn.classList.add('hidden');
  
  try {
    const data = await queryAIQuotes(queryText);
    retrievedCandidates = data.quotes || [];
    
    if (retrievedCandidates.length === 0) {
      modalStatus.textContent = "No matches found.";
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
      card.className = "quote-option-card selected"; // Checked by default
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
    saveDictation.classList.remove('hidden');
    
    updateSaveButtonCount();
    
  } catch (error) {
    console.error("Gemini Query Failed", error);
    modalStatus.textContent = "AI Search failed. Check API Key or Internet.";
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

// Done Speaking stops mic and queries AI
doneSpeakingBtn.addEventListener('click', () => {
  if (recognition) {
    recognition.stop();
  }
  const text = transcriptionText.value.trim();
  if (text.length > 2) {
    processSpokenQuery(text);
  }
});

// Search edited manually triggers query
searchEditedBtn.addEventListener('click', () => {
  if (recognition) {
    recognition.stop();
  }
  const text = transcriptionText.value.trim();
  if (text.length > 2) {
    processSpokenQuery(text);
  }
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

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  initDatabase();
  renderActiveSpark();
});
