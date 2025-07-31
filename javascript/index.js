const button = document.getElementById("generate-advice");

const advice = document.getElementById("message")

async function seekAdvice(){
    advice.textContent = "loading advice...";
    advice.classList.remove("sucess", "error");
    advice.classList.add("loading");

    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();

        advice.textContent = `"${data.slip.advice}"`;
        advice.classList.remove("loading");
        advice.classList.add("sucess");
    } catch (erro) {
        advice.textContent = "Error loading tips. Please try again.";
        advice.classList.remove("loading");
        advice.classList.add("error");
    }    
} 

button.addEventListener("click", seekAdvice);