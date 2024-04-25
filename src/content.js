import { setUpUI } from "./zendesk/modify-ui.js";
import {DL, log} from "./debug/logging-levels.js";

function checkUrlAndSetUpUI() {
    log("Content.js - Checking URL...", DL.MAX);

    const requiredUrlStart = "https://strikingly.zendesk.com/agent/tickets/";

    if (window.location.href.startsWith(requiredUrlStart)) {
        log("Content.js - URL matches. Setting up UI...", DL.MIN);
        setUpUI();
    }
}

// Function to continuously check the URL at defined intervals
function continuouslyCheckUrl() {
    let lastUrl = window.location.href;  // Store the last URL for comparison

    setInterval(() => {
        const currentUrl = window.location.href;
        if (currentUrl !== lastUrl) {
            log("Content.js - URL change detected.");
            lastUrl = currentUrl;  // Update the last URL
            checkUrlAndSetUpUI();
        }
    }, 500);  // Check every half second

    checkUrlAndSetUpUI();
}

// Start the continuous URL check when the window is loaded
window.addEventListener('load', () => setTimeout(continuouslyCheckUrl, 300));


// run webpack: npx webpack --config webpack.config.js