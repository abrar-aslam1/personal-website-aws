const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://jbuuh6pbl3qqpwad3f2r773wc40tbpxk.lambda-url.us-east-1.on.aws/");
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        console.error("Error updating counter:", error);
    }
}

updateCounter();
