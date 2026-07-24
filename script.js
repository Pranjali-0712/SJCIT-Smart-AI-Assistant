// ================================
// SJCIT Smart AI Assistant
// ================================

// Welcome Message
window.onload = function () {

    appendMessage(
        "bot",
        "👋 Welcome to SJCIT Smart AI Assistant!\n\nI can help you with:\n\n🎓 Admissions\n💼 Placements\n🏠 Hostel\n📚 Library\n🚌 Transport\n📖 Courses\n☎ Contact\n🏫 Departments"
    );

};

// ================================
// Send Message
// ================================

function sendMessage() {

    let input = document.getElementById("userInput");
    let text = input.value.trim();

    if (text === "") return;

    appendMessage("user", text);

    input.value = "";

    typingAnimation(text);

}

// ================================
// Enter Key Support
// ================================

document.getElementById("userInput").addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        sendMessage();

    }

});

// ================================
// Quick Buttons
// ================================

function quickAsk(question) {

    document.getElementById("userInput").value = question;

    sendMessage();

}

// ================================
// Typing Animation
// ================================

async function typingAnimation(question) {

    appendMessage("bot", "Typing...");

    setTimeout(async () => {

        document.querySelector(".bot:last-child").remove();

        const data = await getBotReply(question);

        console.log(data);

        appendMessage(
            "bot",
            data.reply,
            data.image,
            data.map
        );

    }, 800);

}

// ================================
// Append Message
// ================================

function appendMessage(sender, text, image = "", map = "") {

    const chatbox = document.getElementById("chatbox");

    const message = document.createElement("div");
    message.className = sender;

    const textDiv = document.createElement("div");

    textDiv.innerHTML =
        sender === "bot"
            ? "🤖 " + text.replace(/\n/g, "<br>")
            : "👤 " + text;

    message.appendChild(textDiv);

    // Image
    if (image) {

        const img = document.createElement("img");

        img.src = image;

        img.style.width = "100%";
        img.style.maxWidth = "350px";
        img.style.marginTop = "10px";
        img.style.borderRadius = "10px";
        img.style.cursor = "pointer";

        // Open image popup
        img.onclick = function () {

            document.getElementById("imageModal").style.display = "flex";

            document.getElementById("fullImage").src = image;

        };

        message.appendChild(img);

    }

    // Google Map
    if (map) {

        const link = document.createElement("a");

        link.href = map;

        link.target = "_blank";

        link.innerHTML = "📍 Open Location";

        link.style.display = "inline-block";
        link.style.marginTop = "10px";

        message.appendChild(link);

    }

    chatbox.appendChild(message);

    chatbox.scrollTop = chatbox.scrollHeight;

}

// ================================
// Backend API
// ================================

async function getBotReply(message) {

    const language =
        document.getElementById("language").value;

const response = await fetch("https://sjcit-smart-ai-assistant.onrender.com/chat",  {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            message,
            language

        })

    });

    return await response.json();
}
// ================================
// Voice Recognition
// ================================

function startVoice() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

        alert("Speech Recognition is not supported in this browser.");

        return;

    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";

    recognition.continuous = false;

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;

    recognition.onstart = function () {

        console.log("🎤 Listening...");

    };

    recognition.onresult = function (event) {

        const speech = event.results[0][0].transcript;

        document.getElementById("userInput").value = speech;

        sendMessage();

    };

    recognition.onerror = function (event) {

        console.log("Voice Error:", event.error);

        if (event.error !== "aborted") {

            alert("Voice Error: " + event.error);

        }

    };

    recognition.onend = function () {

        console.log("🎤 Voice recognition ended");

    };

    recognition.start();

}

// ================================
// Dark Mode
// ================================

function toggleTheme() {

    document.body.classList.toggle("dark");

    const btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {

        btn.innerHTML = "☀️";

    } else {

        btn.innerHTML = "🌙";

    }

}

// ================================
// Image Popup
// ================================

const modal = document.getElementById("imageModal");

const fullImage = document.getElementById("fullImage");

const closeBtn = document.getElementById("closeBtn");

// Close when clicking X
closeBtn.addEventListener("click", function (e) {

    e.stopPropagation();

    modal.style.display = "none";

});

// Close when clicking outside image
modal.addEventListener("click", function (e) {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});
// =============================
// Quick Access Toggle
// =============================

function toggleQuickMenu() {

    const menu = document.getElementById("quickButtons");
    const arrow = document.getElementById("quickArrow");

    menu.classList.toggle("show");
    arrow.classList.toggle("rotate");

}
