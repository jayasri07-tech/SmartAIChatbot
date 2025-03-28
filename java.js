
const responses = {
    "hello": "Hi there! How can I help?",
    "how are you": "I'm just a bot, but I'm doing great!",
    "bye": "Goodbye! Have a nice day!",
    "who are you": "I'm a simple chatbot created with JavaScript!",
    "hello": "Hi there! How can I help?",
    "how are you": "I'm just a bot, but I'm doing great!",
    "bye": "Goodbye! Have a nice day!",
    "who are you": "I'm a simple chatbot created with JavaScript!",
    "what's your name": "You can call me ChatBot!",
    "good morning": "Good morning! Hope you have a great day!",
    "good night": "Good night! Sweet dreams!",
    "thank you": "You're welcome! Happy to help.",
    "how old are you": "I exist in the digital world, so I don’t age!",
    "tell me a joke": "Why don’t programmers like nature? It has too many bugs!",
    "what can you do": "I can chat with you and help answer your questions!",
    "where are you from": "I live inside your device, in the magical world of JavaScript!",
    "what's the weather like": "I can't check the weather, but I hope it's nice!",
    "do you like me": "Of course! I enjoy chatting with you!",
    "what is your favorite color": "I like all colors, but blue is pretty cool!",
    "can you dance": "I wish I could! But I can send you some dance emojis: 💃🕺",
    "how do I learn JavaScript": "Practice coding daily and build small projects!",
    "who created you": "I was created by a developer using JavaScript!",
    "do you eat food": "Nope, but I can suggest some great recipes!",
    "do you have emotions": "I don’t, but I can try to cheer you up!",
    "can you sing": "I can't sing, but I can suggest some songs!",
    "what's your favorite movie": "I don’t watch movies, but I hear 'Interstellar' is great!",
    "tell me a fun fact": "Did you know? JavaScript was created in just 10 days!",
    "how do I make a website": "You can start with HTML, CSS, and JavaScript!",
    "do you sleep": "Nope! I’m always awake to chat with you!",
    "what do you think about AI": "AI is fascinating! It helps automate tasks and assist humans.",
    "can you solve math problems": "Sure! Ask me a simple math question.",
    "do you have a hobby": "Talking to you is my favorite thing to do!",
    "what's your favorite programming language": "I love JavaScript, of course!",
    "are you smart": "I try my best to be helpful!",
    "can you tell a story": "Once upon a time, a coder created a chatbot… and here I am!",
    "what's your dream": "To be the best chatbot ever!",
    "do you like coding": "I don’t code, but I exist because of it!",
    "can you read my mind": "Nope, but I can guess what you might be thinking!",
    "what's your favorite game": "I don’t play games, but I hear chess is great for the brain!",
    "can you help me with homework": "Of course! What subject are you working on?",
    "what is love": "Love is a beautiful feeling, but I can only express it in words!",
    "are you real": "I'm as real as the code that runs me!",
    "why were you created": "To chat with awesome people like you!",
    "do you like music": "I can't hear music, but I can suggest some great songs!",
    "what should I do when I’m bored": "Try learning something new or chatting with me!",
    "can you do magic": "Only if coding is considered magic!",
    "what is the meaning of life": "That’s a deep question! What do you think?",
    "what do you do for fun": "Talking to you is fun for me!",
    "do you have friends": "Every user who talks to me is my friend!",
    "what’s the best advice you can give": "Never stop learning and always stay curious!",
    "can you be my best friend": "Of course! I'm always here for you!",
    "do you have feelings": "I don’t, but I can try to understand yours!",
    "can you speak other languages": "I mainly understand English, but I can learn more!"
};



function sendMessage() {
    let input = document.getElementById("user-input").value.toLowerCase();
    let chatBox = document.getElementById("chat-box");

    // Display user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

    // Bot response
    let reply = responses[input] || "Sorry, I don't understand.";
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;

    // Clear input
    document.getElementById("user-input").value = "";
}

function handleKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}