console.log("DOGEGD SCRIPT LOADED");
const $ = (id) => document.getElementById(id);

const settingsDialog = $("settingsDialog");
const gameDialog = $("gameDialog");
const playerDialog = $("playerDialog");

let games = [
  {
    id: "curve-rush-2",
    title: "Curve Rush 2",
    subtitle: "Ready to play",
    embed: "https://unblockedgames88.gitlab.io/c1/curve-rush-2/"
  },
  {
    id: "stickman-warriors",
    title: "Stickman Warriors",
    subtitle: "Ready to play",
    embed: "https://ubgw.gitlab.io/stickman-warriors/"
  },
  {
    id: "slope",
    title: "Slope",
    subtitle: "Ready to play",
    embed: "https://slopepro.github.io/slope/"
  },
  {
    id: "1v1-lol",
    title: "1v1.LOL",
    subtitle: "Ready to play",
    embed: "https://lesson1225.github.io/lesson306/lesson-271/"
  },
  {
    id: "rally-racer-dirt",
    title: "Rally Racer Dirt",
    subtitle: "Racing",
    embed: "https://qz-games.github.io/Games04/rally-racer-dirt/"
  },
  {
    id: "diggy",
    title: "Diggy",
    subtitle: "Ready to play",
    embed: "https://ubgwtf.gitlab.io/diggy/"
  },
  {
    id: "hoop-royale",
    title: "Hoop Royale",
    subtitle: "Sports",
    embed: "https://html-online-game.github.io/hoop-royale/"
  },
  {
    id: "2048",
    title: "2048",
    subtitle: "Puzzle",
    embed: "https://unblokedgames.github.io/projects/2048/index.html"
  },
  {
    id: "among-us",
    title: "Among Us",
    subtitle: "Multiplayer",
    embed: "https://unblokedgames.github.io/projects/among-us/index.html"
  },
  {
    id: "bitlife",
    title: "BitLife",
    subtitle: "Simulation",
    embed: "https://unblokedgames.github.io/projects/bitlife/index.html"
  },
  {
    id: "ages-of-conflict",
    title: "Ages of Conflict",
    subtitle: "Strategy",
    embed: "https://unblokedgames.github.io/projects/ages-of-conflict/index.html"
  },
  {
    id: "a-small-world-cup",
    title: "A Small World Cup",
    subtitle: "Sports",
    embed: "https://unblokedgames.github.io/projects/a-small-world-cup/index.html"
  },
  {
    id: "baldis-basics",
    title: "Baldi's Basics",
    subtitle: "Horror",
    embed: "https://unblokedgames.github.io/projects/baldis-basics/index.html"
  },
  {
    id: "ball-sort-puzzle",
    title: "Ball Sort Puzzle",
    subtitle: "Puzzle",
    embed: "https://unblokedgames.github.io/projects/ball-sort-puzzle/index.html"
  },
  {
    id: "basket-and-ball",
    title: "Basket and Ball",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/basket-and-ball/index.html"
  },
  {
    id: "blackjack",
    title: "Blackjack",
    subtitle: "Card Game",
    embed: "https://unblokedgames.github.io/projects/blackjack/index.html"
  },
  {
    id: "block-the-pig",
    title: "Block the Pig",
    subtitle: "Puzzle",
    embed: "https://unblokedgames.github.io/projects/block-the-pig/index.html"
  },
  {
    id: "cell-machine",
    title: "Cell Machine",
    subtitle: "Puzzle",
    embed: "https://unblokedgames.github.io/projects/cell-machine/index.html"
  },
  {
    id: "chrome-dino",
    title: "Chrome Dino",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/chrome-dino/index.html"
  },
  {
    id: "circlo",
    title: "Circlo",
    subtitle: "Platformer",
    embed: "https://unblokedgames.github.io/projects/circlo/index.html"
  },
  {
    id: "cookie-clicker",
    title: "Cookie Clicker",
    subtitle: "Idle",
    embed: "https://unblokedgames.github.io/projects/cookie-clicker/index.html"
  },
  {
    id: "core-ball",
    title: "Core Ball",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/core-ball/index.html"
  },
  {
    id: "crazy-cattle-3d",
    title: "Crazy Cattle 3D",
    subtitle: "3D",
    embed: "https://unblokedgames.github.io/projects/crazy-cattle-3d/index.html"
  },
  {
    id: "cut-the-rope",
    title: "Cut the Rope: Time Travel",
    subtitle: "Puzzle",
    embed: "https://unblokedgames.github.io/projects/ctr-time-travel/index.html"
  },
  {
    id: "death-run-3d",
    title: "Death Run 3D",
    subtitle: "3D",
    embed: "https://unblokedgames.github.io/projects/death-run-3d/index.html"
  },
  {
    id: "doodle-jump",
    title: "Doodle Jump",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/doodle-jump/index.html"
  },
  {
    id: "drift-boss",
    title: "Drift Boss",
    subtitle: "Racing",
    embed: "https://unblokedgames.github.io/projects/drift-boss/index.html"
  },
  {
    id: "drift-hunters",
    title: "Drift Hunters",
    subtitle: "Racing",
    embed: "https://unblokedgames.github.io/projects/drift-hunters/index.html"
  },
  {
    id: "eaglercraft",
    title: "Eaglercraft",
    subtitle: "Sandbox",
    embed: "https://unblokedgames.github.io/projects/eaglercraft/index.html"
  },
  {
    id: "edge-surf",
    title: "Edge Surf",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/edge-surf/index.html"
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/flappy-bird/index.html"
  },
  {
    id: "fruit-ninja",
    title: "Fruit Ninja",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/fruit-ninja/index.html"
  },
  {
    id: "geodash",
    title: "Geometry Dash",
    subtitle: "Platformer",
    embed: "https://unblokedgames.github.io/projects/geodash/index.html"
  },
  {
    id: "geodash-subzero",
    title: "Geometry Dash SubZero",
    subtitle: "Platformer",
    embed: "https://unblokedgames.github.io/projects/geodash-subzero/index.html"
  },
  {
    id: "google-feud",
    title: "Google Feud",
    subtitle: "Trivia",
    embed: "https://unblokedgames.github.io/projects/google-feud/index.html"
  },
  {
    id: "google-snake",
    title: "Google Snake",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/google-snake/index.html"
  },
  {
    id: "hextris",
    title: "Hextris",
    subtitle: "Puzzle",
    embed: "https://unblokedgames.github.io/projects/hextris/index.html"
  },
  {
    id: "idle-breakout",
    title: "Idle Breakout",
    subtitle: "Idle",
    embed: "https://unblokedgames.github.io/projects/idle-breakout/frame.html"
  },
  {
    id: "little-alchemy",
    title: "Little Alchemy",
    subtitle: "Puzzle",
    embed: "https://unblokedgames.github.io/projects/little-alchemy/index.html"
  },
  {
    id: "madalin-stunt-cars-2",
    title: "Madalin Stunt Cars 2",
    subtitle: "Racing",
    embed: "https://unblokedgames.github.io/projects/madalin-stunt-cars-2/index.html"
  },
  {
    id: "madalin-stunt-cars-3",
    title: "Madalin Stunt Cars 3",
    subtitle: "Racing",
    embed: "https://unblokedgames.github.io/projects/madalin-stunt-cars-3/index.html"
  },
  {
    id: "mario",
    title: "Super Mario",
    subtitle: "Platformer",
    embed: "https://unblokedgames.github.io/projects/mario/index.html"
  },
  {
    id: "minesweeper",
    title: "Minesweeper",
    subtitle: "Puzzle",
    embed: "https://unblokedgames.github.io/projects/minesweeper/index.html"
  },
  {
    id: "pacman",
    title: "Pac-Man",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/pacman/index.html"
  },
  {
    id: "paperio2",
    title: "Paper.io 2",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/paperio2/index.html"
  },
  {
    id: "papery-planes",
    title: "Papery Planes",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/papery-planes/index.html"
  },
  {
    id: "poker",
    title: "Poker",
    subtitle: "Card Game",
    embed: "https://unblokedgames.github.io/projects/poker/poker.html"
  },
  {
    id: "project-sand",
    title: "Project Sand",
    subtitle: "Sandbox",
    embed: "https://unblokedgames.github.io/projects/project-sand/index.html"
  },
  {
    id: "retro-bowl",
    title: "Retro Bowl",
    subtitle: "Sports",
    embed: "https://unblokedgames.github.io/projects/retro-bowl/index.html"
  },
  {
    id: "retro-bowl-college",
    title: "Retro Bowl College",
    subtitle: "Sports",
    embed: "https://unblokedgames.github.io/projects/retro-bowl-college/index.html"
  },
  {
    id: "rocketpult",
    title: "Rocketpult",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/rocketpult/index.html"
  },
  {
    id: "rooftop-snipers",
    title: "Rooftop Snipers",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/rooftop-snipers/index.html"
  },
  {
    id: "sandtrix",
    title: "Sandtrix",
    subtitle: "Puzzle",
    embed: "https://unblokedgames.github.io/projects/sandtrix/index.html"
  },
  {
    id: "save-the-doge",
    title: "Save the Doge",
    subtitle: "Puzzle",
    embed: "https://unblokedgames.github.io/projects/save-the-doge/index.html"
  },
  {
    id: "smash-karts",
    title: "Smash Karts",
    subtitle: "Racing",
    embed: "https://unblokedgames.github.io/projects/smash-karts/index.html"
  },
  {
    id: "solitaire",
    title: "Solitaire",
    subtitle: "Card Game",
    embed: "https://unblokedgames.github.io/projects/solitaire/index.html"
  },
  {
    id: "stack",
    title: "Stack",
    subtitle: "Arcade",
    embed: "https://unblokedgames.github.io/projects/stack/index.html"
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    subtitle: "Runner",
    embed: "https://unblokedgames.github.io/subway-surfers.html"
  },
  {
    id: "totm",
    title: "There Is Only One Me",
    subtitle: "Puzzle",
    embed: "https://unblokedgames.github.io/projects/totm/index.html"
  },
  {
    id: "waterworks",
    title: "Waterworks",
    subtitle: "Strategy",
    embed: "https://unblokedgames.github.io/projects/waterworks/index.html"
  },
  {
    id: "wbwwb",
    title: "We Become What We Behold",
    subtitle: "Story",
    embed: "https://unblokedgames.github.io/projects/wbwwb/index.html"
  },
  {
    id: "fnaf-1",
    title: "Five Nights at Freddy's 1",
    subtitle: "Horror",
    embed: "https://unblokedgames.github.io/projects/fnaf-1/index.html"
  },
  {
    id: "fnaf-2",
    title: "Five Nights at Freddy's 2",
    subtitle: "Horror",
    embed: "https://unblokedgames.github.io/projects/fnaf-2/index.html"
  },
  {
    id: "fnaf-3",
    title: "Five Nights at Freddy's 3",
    subtitle: "Horror",
    embed: "https://unblokedgames.github.io/projects/fnaf-3/index.html"
  },
  {
    id: "fnaf-4",
    title: "Five Nights at Freddy's 4",
    subtitle: "Horror",
    embed: "https://unblokedgames.github.io/projects/fnaf-4/index.html"
  },
  {
    id: "moto-x3m",
    title: "Moto X3M",
    subtitle: "Racing",
    embed: "https://unblokedgames.github.io/projects/moto-x3m/index.html"
  },
  {
    id: "moto-x3m-2",
    title: "Moto X3M 2",
    subtitle: "Racing",
    embed: "https://unblokedgames.github.io/projects/moto-x3m-2/index.html"
  },
  {
    id: "moto-x3m-winter",
    title: "Moto X3M Winter",
    subtitle: "Racing",
    embed: "https://unblokedgames.github.io/projects/moto-x3m-winter/index.html"
  },
  {
    id: "moto-x3m-pool-party",
    title: "Moto X3M Pool Party",
    subtitle: "Racing",
    embed: "http://unblokedgames.github.io/projects/moto-x3m-pool-party/index.html"
  },
  {
    id: "moto-x3m-spooky-land",
    title: "Moto X3M Spooky Land",
    subtitle: "Racing",
    embed: "https://unblokedgames.github.io/projects/moto-x3m-spooky-land/index.html"
  },
  {
    id: "ovo",
    title: "OvO",
    subtitle: "Platformer",
    embed: "https://unblokedgames.github.io/projects/ovo/frame.html"
  },
  {
    id: "ovo-2",
    title: "OvO 2",
    subtitle: "Platformer",
    embed: "https://unblokedgames.github.io/projects/ovo-2/frame.html"
  }
];

// SAFE TEXT
function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

// WEBSITE NAME
function setSiteName(name) {
  const clean = name.trim().slice(0, 24) || "dogegd";

  $("brandName").textContent = clean;
  $("footerName").textContent = clean;
  document.title = `${clean} | play`;
  $("siteName").value = clean;
}

$("openSettings").addEventListener("click", () => {
  settingsDialog.showModal();
});

$("saveSettings").addEventListener("click", () => {
  setSiteName($("siteName").value);
  settingsDialog.close();
});

$("resetSettings").addEventListener("click", () => {
  setSiteName("dogegd");
});

// DISPLAY GAMES
function renderGames() {
  const grid = $("gameGrid");

  grid.querySelectorAll(".game-card").forEach(card => card.remove());

  games.forEach(game => {
    const card = document.createElement("article");
    card.className = "game-card";

    card.innerHTML = `
      <div class="game-art"></div>
      <button class="remove-game" aria-label="Remove game">×</button>
      <div class="game-icon">🎮</div>
      <div class="game-info">
        <h3>${safeText(game.title)}</h3>
        <p>${safeText(game.subtitle || "Ready to play")}</p>
        <span class="play-link">Play ↗</span>
      </div>
    `;

    card.querySelector(".remove-game").addEventListener("click", event => {
      event.stopPropagation();
      games = games.filter(item => item.id !== game.id);
      renderGames();
    });

    card.addEventListener("click", () => openGame(game));

    grid.insertBefore(card, $("addGame"));
  });

  $("gameCount").textContent = String(games.length).padStart(2, "0");
}

// ADD GAME
$("addGame").addEventListener("click", () => {
  $("gameTitle").value = "";
  $("gameSubtitle").value = "";
  $("gameEmbed").value = "";
  gameDialog.showModal();
});

$("cancelGame").addEventListener("click", () => {
  gameDialog.close();
});

$("saveGame").addEventListener("click", () => {
  const title = $("gameTitle").value.trim();

  if (!title) {
    $("gameTitle").focus();
    return;
  }

  const embed = $("gameEmbed").value.trim();
  let safeEmbed = "";

  if (embed) {
    try {
      const parsed = new URL(embed);

      if (parsed.protocol === "https:" || parsed.protocol === "http:") {
        safeEmbed = parsed.href;
      }
    } catch {
      alert("Please enter a valid game URL.");
      return;
    }
  }

  games.push({
    id: crypto.randomUUID
      ? crypto.randomUUID()
      : String(Date.now()),
    title,
    subtitle: $("gameSubtitle").value.trim() || "Ready to play",
    embed: safeEmbed
  });

  renderGames();
  gameDialog.close();
});

// CREATE FULLSCREEN BUTTON
const playerTop = playerDialog.querySelector(".player-top");
const fullscreenButton = document.createElement("button");

fullscreenButton.className = "icon-button";
fullscreenButton.id = "fullscreenBtn";
fullscreenButton.type = "button";
fullscreenButton.textContent = "⛶";
fullscreenButton.title = "Toggle fullscreen";
fullscreenButton.setAttribute("aria-label", "Toggle fullscreen");

playerTop.insertBefore(fullscreenButton, $("closePlayer"));

// FULLSCREEN
fullscreenButton.addEventListener("click", async () => {
  try {
    const gameFrame = $("playerFrame");

    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await gameFrame.requestFullscreen();
    }
  } catch (error) {
    console.error("Fullscreen error:", error);
  }
});

document.addEventListener("fullscreenchange", () => {
  fullscreenButton.textContent =
    document.fullscreenElement ? "⛶" : "⛶";

  fullscreenButton.title =
    document.fullscreenElement ? "Exit fullscreen" : "Toggle fullscreen";
});

// OPEN GAME
function openGame(game) {
  $("playerTitle").textContent = game.title;
  playerFrame.replaceChildren();

  if (game.embed) {
    const iframe = document.createElement("iframe");

    iframe.src = game.embed;
    iframe.title = game.title;
    iframe.allow = "fullscreen; autoplay; gamepad";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    playerFrame.appendChild(iframe);
  } else {
    const placeholder = document.createElement("div");

    placeholder.className = "player-placeholder";
    placeholder.innerHTML = `
      <div class="play-symbol">▶</div>
      <h3>Game slot ready</h3>
      <p>Add an embed URL to play this game.</p>
    `;

    playerFrame.appendChild(placeholder);
  }

  if (!playerDialog.open) {
    playerDialog.showModal();
  }
}

$("closePlayer").addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }

  playerDialog.close();
});

// STARFIELD
const canvas = $("stars");
const ctx = canvas.getContext("2d");

let width = 0;
let height = 0;
let stars = [];
let pointer = { x: -1000, y: -1000 };

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function resizeStars() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const count = Math.min(125, Math.floor(width * height / 10500));

  stars = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    r: Math.random() * 1.35 + 0.35,
    a: Math.random() * 0.55 + 0.25
  }));
}

function drawStars() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];

    if (!reduceMotion) {
      s.x += s.vx;
      s.y += s.vy;

      if (s.x < 0 || s.x > width) s.vx *= -1;
      if (s.y < 0 || s.y > height) s.vy *= -1;
    }

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(204,211,255,${s.a})`;
    ctx.fill();

    for (let j = i + 1; j < stars.length; j++) {
      const other = stars[j];
      const dx = s.x - other.x;
      const dy = s.y - other.y;
      const distance = Math.hypot(dx, dy);

      if (distance < 105) {
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(other.x, other.y);
        ctx.strokeStyle =
          `rgba(139,153,255,${(1 - distance / 105) * 0.12})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    }

    const dx = s.x - pointer.x;
    const dy = s.y - pointer.y;
    const distance = Math.hypot(dx, dy);

    if (distance < 155) {
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(pointer.x, pointer.y);
      ctx.strokeStyle =
        `rgba(151,139,255,${(1 - distance / 155) * 0.42})`;
      ctx.lineWidth = 0.9;
      ctx.stroke();
    }
  }

  if (!reduceMotion) {
    requestAnimationFrame(drawStars);
  }
}

window.addEventListener("resize", resizeStars);

window.addEventListener("pointermove", event => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
});

window.addEventListener("pointerleave", () => {
  pointer = { x: -1000, y: -1000 };
});

resizeStars();
drawStars();
renderGames();