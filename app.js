// Default preloaded Wit/Hoid quotes mapped to unique picturesque natural landscapes
const DEFAULT_SPARKS = [
  {
    id: 'default-1',
    text: "I promise you, Kaladin: You will be warm again.",
    author: "Wit — Oathbringer",
    mood: "hopeful",
    bgUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80" // Misty redwoods morning sun
  },
  {
    id: 'default-2',
    text: "You are not worse for your association with the world, but it is better for its association with you.",
    author: "Wit — Oathbringer",
    mood: "hopeful",
    bgUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80" // Golden sun rays green hills
  },
  {
    id: 'default-3',
    text: "The longer you live, the more you fail. Failure is the mark of a life well lived. In turn, the only way to live without failure is to be of no use to anyone.",
    author: "Wit — Words of Radiance",
    mood: "determined",
    bgUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" // Giant jagged mountain peaks
  },
  {
    id: 'default-4',
    text: "I’ve decided that I don’t like the word 'impossible'. It has too many syllables. 'Unlikely' is much better. It sounds like a challenge.",
    author: "Wit — The Way of Kings",
    mood: "determined",
    bgUrl: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80" // Snowy mountain peak blue sky
  },
  {
    id: 'default-5',
    text: "Accept the pain, but don't accept that you deserved it.",
    author: "Wit — Oathbringer",
    mood: "peaceful",
    bgUrl: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1200&q=80" // Lavender violet sunset field
  },
  {
    id: 'default-6',
    text: "Sometimes a story is just a story. But other times, it is a key. A key to a door you didn't even know was locked.",
    author: "Wit — Oathbringer",
    mood: "peaceful",
    bgUrl: "https://images.unsplash.com/photo-1439853949127-fa647821ebb0?auto=format&fit=crop&w=1200&q=80" // Alpine starry twilight mirror lake
  },
  {
    id: 'default-7',
    text: "The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.",
    author: "Wit — The Way of Kings",
    mood: "inspired",
    bgUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80" // Crackling campfire under starry sky
  },
  {
    id: 'default-8',
    text: "All great art is hated. It is difficult to make something nobody hates; it is easy to make something nobody loves.",
    author: "Wit — Words of Radiance",
    mood: "inspired",
    bgUrl: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1200&q=80" // Aurora borealis mountains
  }
];

// Fallback natural background pools by mood for dynamic user quotes
const NATURE_FALLBACKS = {
  hopeful: [
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80"
  ],
  determined: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  ],
  peaceful: [
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1439853949127-fa647821ebb0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=80"
  ],
  inspired: [
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80"
  ]
};

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

// Modals & Overlays
const dictationOverlay = document.getElementById('dictation-overlay');
const modalSpinner = document.getElementById('modal-spinner');
const modalStatus = document.getElementById('modal-status');
const voiceContainer = document.getElementById('voice-transcription-container');
const transcriptionText = document.getElementById('transcription-text');
const quoteOptionsContainer = document.getElementById('quote-options-container');
const optionsScrollList = document.getElementById('options-scroll-list');
const batchMoodSelect = document.getElementById('batch-mood-select');

// Modal Actions
const cancelDictation = document.getElementById('cancel-dictation');
const tryAgainDictation = document.getElementById('try-again-dictation');
const saveDictation = document.getElementById('save-dictation');

// Settings Elements
const settingsBtn = document.getElementById('settings-btn');
const settingsOverlay = document.getElementById('settings-overlay');
const closeSettings = document.getElementById('close-settings');
const saveSettings = document.getElementById('save-settings');
const geminiKeyInput = document.getElementById('gemini-key-input');

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
  const naturePool = NATURE_FALLBACKS[mood];
  const randomBg = naturePool[Math.floor(Math.random() * naturePool.length)];
  
  const newSpark = {
    id: 'user-' + Date.now() + Math.random().toString(36).substring(2, 7),
    text: text,
    author: author || "Moments of Reflection",
    mood: mood,
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
        bgUrl: newSpark.bgUrl
      });
    } catch (e) {
      console.warn("Could not sync to cloud. Local save secure.", e);
    }
  }
}

// ----------------------------------------------------
// UI RENDERING LAYER
// ----------------------------------------------------
function getFilteredSparks() {
  return sparks.filter(spark => spark.mood === currentMood);
}

function renderActiveSpark() {
  const pool = getFilteredSparks();
  if (pool.length === 0) {
    quoteText.textContent = "No moments saved for this vibe yet. Tap the mic below to find some!";
    quoteAuthor.textContent = "";
    changeBackground("https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1200&q=80");
    return;
  }

  if (currentSparkIndex >= pool.length) {
    currentSparkIndex = 0;
  }

  const spark = pool[currentSparkIndex];

  quoteCard.classList.remove('fade-in');
  quoteCard.style.opacity = 0;
  
  setTimeout(() => {
    quoteText.textContent = spark.text;
    quoteAuthor.textContent = spark.author;
    
    quoteCard.classList.add('fade-in');
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
    // If no key is set, fallback to polishing the user's spoken words as a single local option
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
The user spoke or dictated a query describing a specific theme, scene, book, or character.

User voice query: "${userQuery}"

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
let activeQueryText = '';

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechGen = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechGen();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.onstart = () => {
    micBtn.classList.add('listening');
    transcriptionText.textContent = "";
    modalStatus.textContent = "Listening...";
    modalSpinner.classList.remove('hidden');
    voiceContainer.classList.remove('hidden');
    quoteOptionsContainer.classList.add('hidden');
    
    // Action buttons initial state
    cancelDictation.classList.remove('hidden');
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
    transcriptionText.textContent = currentText ? `“${currentText}”` : "";
    
    if (finalTranscription) {
      activeQueryText = finalTranscription.trim();
      processSpokenQuery();
    }
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    modalStatus.textContent = "Microphone error. Try again.";
    setTimeout(() => {
      dictationOverlay.classList.add('hidden');
      micBtn.classList.remove('listening');
    }, 2000);
  };

  recognition.onend = () => {
    micBtn.classList.remove('listening');
  };
}

// Phase 2: Contact Gemini and Render candidates with Checkboxes
async function processSpokenQuery() {
  modalStatus.textContent = "Searching online book quote archive...";
  voiceContainer.classList.add('hidden');
  
  try {
    const data = await queryAIQuotes(activeQueryText);
    retrievedCandidates = data.quotes || [];
    
    if (retrievedCandidates.length === 0) {
      modalStatus.textContent = "No matches found.";
      modalSpinner.classList.add('hidden');
      tryAgainDictation.classList.remove('hidden');
      return;
    }

    // Load active mood default in selector
    batchMoodSelect.value = currentMood;
    
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
        </div>
      `;
      
      card.addEventListener('click', () => toggleOptionSelection(card));
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

// Actions
micBtn.addEventListener('click', () => {
  if (!recognition) {
    alert("Speech recognition is not supported on this browser. Try Chrome or Safari.");
    return;
  }
  recognition.start();
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

// Batch Save Selected Sparks
saveDictation.addEventListener('click', async () => {
  const selectedCards = document.querySelectorAll('.quote-option-card.selected');
  const targetMood = batchMoodSelect.value;
  
  if (selectedCards.length === 0) return;

  for (let card of selectedCards) {
    const idx = parseInt(card.getAttribute('data-index'), 10);
    const item = retrievedCandidates[idx];
    await addSpark(item.text, item.author, targetMood);
  }

  dictationOverlay.classList.add('hidden');
  
  // Immediately pivot to the saved feeling and load the first newly added quote
  currentMood = targetMood;
  currentSparkIndex = 0;
  updateActiveMoodButton();
  renderActiveSpark();
});

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  initDatabase();
  renderActiveSpark();
});
