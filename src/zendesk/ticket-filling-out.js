import {selectElementAmongListOfSimilarSelectors, simulateClick} from "../utility/utility-functions.js";
import {DL, logError} from "../debug/logging-levels";

export function insertTextReact(parent, text, selectorDescription) {
    if (!parent) {
        logError(`Parent not found for ${selectorDescription}`);
        return;
    }

    let element;
    if (parent.tagName === 'TEXTAREA' || parent.tagName === 'INPUT') {
        element = parent;
    } else {
        element = parent.querySelector('input');
    }

    if (!element) {
        logError(`TAG: ${parent.tagName} - Input field not found for ${selectorDescription}`, DL.AVG);
        if (parent.tagName === 'TEXTAREA' || parent.tagName === 'INPUT') {
            element = parent;
        }
        else {
            logError(`Input field not found for ${selectorDescription}`);
            return;
        }

    }

    function setNativeValue(inputElement, value) {
        let valueSetter;
        const valueSetterPropertyDescriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
        if (valueSetterPropertyDescriptor) {
            valueSetter = valueSetterPropertyDescriptor.set;

            if(!valueSetter) {
                logError('valueSetter not found for ' + selectorDescription);
            }

            return;
        } else {
            logError("valueSetterPropertyDescriptor not found for " + selectorDescription);
        }

        const prototype = Object.getPrototypeOf(inputElement);

        let prototypeValueSetter;
        const prototypePropertyDescriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
        if (prototypePropertyDescriptor) {
            prototypeValueSetter = prototypePropertyDescriptor.set;

            if(!prototypeValueSetter) {
                logError('prototypeValueSetter not found for ' + selectorDescription);
            }

            return;
        } else {
            logError("prototypePropertyDescriptor not found for " + selectorDescription);
        }

        // if the setter function on the actual element is different from the prototype's setter function (which could
        // happen if React has overridden it to include additional behavior), retrieve the original setter function from the prototype
        if (valueSetter && valueSetter !== prototypeValueSetter) {
            prototypeValueSetter.call(inputElement, value);
        } else {
            valueSetter.call(inputElement, value);
        }

        function selectDropdownItem(itemNumber) {
            // Get the item based on the Downshift item id format.
            const itemId = `downshift-7-item-${itemNumber}`;
            const itemElement = document.getElementById(itemId);

            if (itemElement) {
                // Create a new custom event that mimics a click or selection.
                const customEvent = new CustomEvent('keydown', {
                    bubbles: true,
                    cancelable: true,
                    detail: {
                        key: 'Enter'
                    }
                });

                // Dispatch the event on the item.
                itemElement.dispatchEvent(customEvent);
            }
        }

        setTimeout(() => inputElement.dispatchEvent(new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            key: 'Enter',
            code: 'Enter'
        })), 300);

    }

    setNativeValue(element, text);

    element.dispatchEvent(new Event('input', { bubbles: true, cancelable: true  }));
    element.dispatchEvent(new Event('change', { bubbles: true, cancelable: true  }));
}

export function grabTicket() {
    const selectedElement = selectElementAmongListOfSimilarSelectors(
        "[data-test-id=\"assignee-field-take-it-button\"]",
        0,
        'Grab Ticket'
    );

    // Click on the ticket element
    simulateClick(selectedElement);
}

export function setHOAssignee(assigneeName) {
    const button = selectElementAmongListOfSimilarSelectors(
        "[data-test-id=\"ticket-form-field-dropdown-button\"] [aria-labelledby=\"downshift-5-label\"]",
        0,
        'HO Assignee'
    );

    setTimeout(() => insertTextReact(button, assigneeName, 'HO Assignee'), 500);
}

export function setTicketCategory(category) {
    const button = selectElementAmongListOfSimilarSelectors(
        "[data-test-id=\"ticket-form-field-dropdown-button\"] [aria-labelledby=\"downshift-6-label\"]",
        0,
        'Ticket Category');

    setTimeout(() => insertTextReact(button, category, 'Ticket Category'), 500);
}

export function setTicketSubcategory(subcategory) {
    const element = selectElementAmongListOfSimilarSelectors(
        "[data-test-id=\"ticket-fields-multiline-field\"]",
        0,
        'Ticket Subcategory');

    insertTextReact(element, subcategory, 'Ticket Subcategory');
}

export function setTicketType() {
    const dropdownButton = selectElementAmongListOfSimilarSelectors("[data-test-id=\"ticket-fields-type-select\"]", 0, 'Ticket Type Dropdown Button');

    // Simulate a click on the dropdown button to open the dropdown
    simulateClick(dropdownButton);

    setTimeout(() => dropdownButton.dispatchEvent(new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        key: 'ArrowDown',
        code: 'ArrowDown'
    })), 100);

    setTimeout(() => dropdownButton.dispatchEvent(new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        key: 'Enter',
        code: 'Enter'
    })), 300);
}
export function insertTicketReply(replyText, shouldIncludeTranscript, hasPtBrTag) {
    let reply;

    reply = hasPtBrTag ? replyText['pt'] : replyText['en'];

    if (!reply) {
        logError(`No reply found. ReplyText: ${replyText}, hasPtBrTag: ${hasPtBrTag}`);
        return;
    }

    if (shouldIncludeTranscript) {
        const allReplies = document.querySelectorAll('#wrapper.ember-view #main_panes .rich_text .event-container .body');

        const transcript = allReplies[allReplies.length - 1].innerHTML;

        const emptyLine = '<p><br data-cke-filler=\"true\"></p>';

        reply = reply + emptyLine + emptyLine + '---------------' + emptyLine + emptyLine + transcript;
    }

    const element = document.querySelector('[data-test-id="standalone-rich-text-ckeditor"]');


    if (element.ckeditorInstance) {
        element.ckeditorInstance.setData(reply);
    } else {
        logError(`No CKEditor found while trying to insert ticket reply. Retrying.`);
        console.dir(element);
        setTimeout(() => insertTicketReply(replyText, shouldIncludeTranscript, hasPtBrTag), 1000);
    }
}

export function insertTicketTitle(title, hasPtBrTag) {
    const titleElement = document.querySelector('[data-test-id="ticket-pane-subject"]');

    insertTextReact(titleElement, hasPtBrTag ? title['pt'] : title['en'], 'Ticket Title');
}

function checkLanguage() {
    // check tags section to determine language
    const tagsSection = document.querySelector('div[aria-labelledby="downshift-11-label"] > div');

    if (tagsSection) {
        const allTags = tagsSection.querySelectorAll('.garden-tag-item');

        // check if any of the tag's textContent is exactly "pt-br"
        return Array.from(allTags).some(tag => tag.textContent === 'pt-br');
    }

    logError("Tags section not found while trying to determine language.");

    return null;
}

export function fillOutTicket(hoAssignee, category, subcategory, reply, title, includeTranscript) {
    grabTicket();
    setHOAssignee(hoAssignee);
    setTicketCategory(category);
    setTicketSubcategory(subcategory);
    setTicketType();

    const hasPtBrTag = checkLanguage();

    if (null !== hasPtBrTag) {
        insertTicketTitle(title, hasPtBrTag);
        insertTicketReply(reply, includeTranscript, hasPtBrTag);
    } else {
        logError("Could not determine language");
    }
}