import {configurations, hoAssignee, saveChanges} from "./canned-reply-settings.js";
import {fillOutTicket} from "./ticket-filling-out.js";
import {DL, log} from "../debug/logging-levels";

function addButtons() {
    log("Adding buttons", DL.MAX);

    // Target the area where the button container should be added
    const buttonArea = document.querySelector("#main_panes div:not(.is-cached) > header.ember-view");

    // Check if the main area where buttons should be added exists
    if (!buttonArea) {
        log("Main area not found while trying to add buttons. Retrying.", DL.AVG);
        setTimeout(addButtons, 300);
        return;
    }

    // Check if the container for buttons already exists, create it if it does not
    let buttonContainer = document.querySelector(".hhzd-canned-replies");
    if (!buttonContainer) {
        buttonContainer = document.createElement("div");
        buttonContainer.className = "hhzd-canned-replies";
        buttonArea.appendChild(buttonContainer);  // Append the new container to the specified area
    }

    // Clear existing buttons to prevent duplicates
    buttonContainer.innerHTML = '';

    // Loop through configurations to create and append buttons to the new container
    configurations.forEach((config, index) => {
        const button = document.createElement("button");
        button.textContent = config.subcategory;
        button.onclick = function() {
            fillOutTicket(hoAssignee, config.category, config.subcategory, config.reply, config.title);
        };

        button.oncontextmenu = function(event) {
            event.preventDefault();  // Prevent the default context menu
            showCustomForm(event, button, config);  // Trigger custom form for editing button behavior
        };

        // Append each button to the container
        buttonContainer.appendChild(button);
    });

    checkIfButtonsWereAdded();
}

function checkIfButtonsWereAdded() {
    // Target the area where the button container should be added
    const buttonArea = document.querySelector("#main_panes div:not(.is-cached) > header.ember-view");

    // Check if the main area where buttons should be added exists
    if (!buttonArea) {
        log("Buttons weren't added. Trying again.")
        setTimeout(addButtons, 300);
    }
}

function showCustomForm(event, button, config) {
    // Remove any previously created forms to avoid duplicates
    const existingForm = document.querySelector('.hhzd-custom-form');
    if (existingForm) {
        document.body.removeChild(existingForm);
    }

    const form = document.createElement('div');
    form.className = 'hhzd-custom-form';
    form.style.position = 'fixed';  // Use 'fixed' to position relative to the viewport
    form.style.left = `${event.clientX}px`;
    form.style.top = `${event.clientY}px`;
    form.style.backgroundColor = 'white';  // Ensure visibility
    form.style.border = '1px solid black';
    form.style.padding = '10px';
    form.style.zIndex = 1000;  // Ensure the form is on top

    form.innerHTML = `
        <label>Assignee: <input type="text" id="assignee-input" value="Irish"></label>
        <label>Reply: <input type="text" id="reply-input" value="${config.reply}"></label>
        <button type="button" onclick="saveChanges(this.parentNode, '${config.subcategory}')">Save</button>
    `;

    document.body.appendChild(form);

    // Function to remove the form if clicking outside of it
    function handleClickOutside(event) {
        if (!form.contains(event.target)) {
            document.body.removeChild(form);
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscapePress);
        }
    }

    // Function to remove the form on pressing the Esc key
    function handleEscapePress(event) {
        if (event.key === "Escape") {
            document.body.removeChild(form);
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscapePress);
        }
    }

    // Add event listeners for clicking outside the form and pressing the Esc key
    setTimeout(() => { // Timeout ensures that the initial click doesn't remove the form
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleEscapePress);
    }, 0);
}


export function setUpUI() {
    log("Setting up UI", DL.MAX);
    addButtons();
}
