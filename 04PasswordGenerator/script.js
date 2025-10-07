// DOM elements
const lengthRange = document.getElementById("lengthRange");
const lengthValue = document.getElementById("lengthValue");
const generateBtn = document.getElementById("generateBtn");
const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");
const easySay = document.getElementById("easy");
const easyRead = document.getElementById("read");
const allChars = document.getElementById("character");
const uppercase = document.getElementById("Uppercase");
const lowercase = document.getElementById("Lowercase");
const numbers = document.getElementById("Numbers");
const symbols = document.getElementById("Symbols");
const strengthIndicator = document.createElement("p");
strengthIndicator.style.marginTop = "10px";
strengthIndicator.style.fontWeight = "600";
strengthIndicator.style.color = "#fff";
passwordOutput.parentNode.appendChild(strengthIndicator);

// Character sets
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-={}[]|:;<>,.?/~`";

// Easy-to-read & easy-to-say characters
const easyReadChars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
const easySayChars = "bcdfghjklmnpqrstvwxyzaeiou";

// Update slider value
lengthRange.addEventListener("input", () => {
    lengthValue.innerText = lengthRange.value;
});

// Function to generate password
function generatePassword() {
    const length = parseInt(lengthRange.value);
    let charSet = "";

    if (allChars.checked) {
        charSet = upperChars + lowerChars + numberChars + symbolChars;
    } else {
        if (uppercase.checked) charSet += upperChars;
        if (lowercase.checked) charSet += lowerChars;
        if (numbers.checked) charSet += numberChars;
        if (symbols.checked) charSet += symbolChars;
    }

    if (easyRead.checked) charSet = charSet.split("").filter(c => easyReadChars.includes(c)).join("");
    if (easySay.checked) charSet = charSet.split("").filter(c => easySayChars.includes(c)).join("");

    if (charSet === "") {
        alert("Please select at least one character type!");
        return "";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }
    return password;
}

// Password strength function
function getStrength(password) {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 12) strength++;
    let types = 0;
    if (/[A-Z]/.test(password)) types++;
    if (/[a-z]/.test(password)) types++;
    if (/[0-9]/.test(password)) types++;
    if (/[^A-Za-z0-9]/.test(password)) types++;
    if (types >= 3) strength++;
    if (strength <= 1) return "Weak";
    if (strength === 2) return "Medium";
    return "Strong";
}

// Generate button
generateBtn.addEventListener("click", () => {
    const pwd = generatePassword();
    if (!pwd) return;
    passwordOutput.value = pwd;
    const strength = getStrength(pwd);
    strengthIndicator.innerText = `Strength: ${strength}`;
    if (strength === "Weak") strengthIndicator.style.color = "#ff4d4d";
    else if (strength === "Medium") strengthIndicator.style.color = "#ffd700";
    else strengthIndicator.style.color = "#00ff88";
});

// Copy to clipboard
copyBtn.addEventListener("click", () => {
    if (!passwordOutput.value) return;
    passwordOutput.select();
    navigator.clipboard.writeText(passwordOutput.value);
    alert("Password copied!");
});
