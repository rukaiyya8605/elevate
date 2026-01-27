// -----------------------------
// Task 7: DOM Manipulation
// -----------------------------

// 1. Select HTML elements
const title = document.getElementById('title');
const description = document.getElementById('description');
const changeTextBtn = document.getElementById('change-text-btn');
const toggleColorBtn = document.getElementById('toggle-color-btn');

// 2. Modify text dynamically
changeTextBtn.addEventListener('click', () => {
    // Update heading text
    title.textContent = "DOM Manipulation in Action!";
    
    // Update paragraph text
    description.textContent = "You clicked the 'Change Text' button.";
    
    console.log("Text updated successfully."); // Debugging
});

// 3. Toggle class to change styles dynamically
toggleColorBtn.addEventListener('click', () => {
    // Toggle 'red-text' class on paragraph
    description.classList.toggle('red-text');
    
    console.log("Color toggled."); // Debugging
});

// 4. Extra: Dynamically change styles directly
description.style.fontWeight = "bold"; // Makes text bold initially
