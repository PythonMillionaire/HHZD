/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/debug/logging-levels.js":
/*!*************************************!*\
  !*** ./src/debug/logging-levels.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DL: () => (/* binding */ DL),
/* harmony export */   log: () => (/* binding */ log),
/* harmony export */   logError: () => (/* binding */ logError)
/* harmony export */ });
// Debug levels
var DL = {
  NONE: -1,
  MIN: 0,
  AVG: 1,
  MAX: 2
};

// Current debug level
var currentDebugLevel = DL.MAX; // Default level

// Logging function
function log(message) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DL.AVG;
  if (level <= currentDebugLevel) {
    console.log("HHZD - " + message);
  }
}
function logError(message) {
  console.error("HHZD - " + message);
}

/***/ }),

/***/ "./src/utility/utility-functions.js":
/*!******************************************!*\
  !*** ./src/utility/utility-functions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectElementAmongListOfSimilarSelectors: () => (/* binding */ selectElementAmongListOfSimilarSelectors),
/* harmony export */   simulateClick: () => (/* binding */ simulateClick)
/* harmony export */ });
// Selects all elements matching the selector, then returns only the nth element
function selectElementAmongListOfSimilarSelectors(selector) {
  var positionInArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var selectorDescription = arguments.length > 2 ? arguments[2] : undefined;
  var elements = document.querySelectorAll(selector);
  if (elements.length > positionInArray) {
    return elements[positionInArray];
  }
  console.error("Element not found for ".concat(selectorDescription), selector, positionInArray);
  return null;
}
function simulateClick(element) {
  if (!element) {
    console.error('Element not provided for simulateClick');
    return;
  }
  element.click();
}

/***/ }),

/***/ "./src/zendesk/canned-reply-settings.js":
/*!**********************************************!*\
  !*** ./src/zendesk/canned-reply-settings.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configurations: () => (/* binding */ configurations),
/* harmony export */   hoAssignee: () => (/* binding */ hoAssignee),
/* harmony export */   saveChanges: () => (/* binding */ saveChanges)
/* harmony export */ });
/* The canned reply settings for each reply type */

var hoAssignee;
var configurations = [{
  category: "Feedback",
  subcategory: "Product Feedback",
  reply: "ab"
}, {
  category: "Feedback",
  subcategory: "Coffee Chat",
  reply: "a"
}, {
  category: "Site Editor",
  subcategory: "User Education/Onboarding",
  title: {
    en: "[Strikingly] Thank you for chatting with us!",
    pt: "[Strikingly] Obrigado pelo seu contato!"
  },
  reply: {
    en: "<p>Happy to have you on board, Montgomery!</p><p><br data-cke-filler=\"true\"></p><p>I see that you’re still building your site. <i><strong>Are you looking for specific features for it?</strong></i> Let me know, and I’d be glad to help you out.</p><p><br data-cke-filler=\"true\"></p><p>To help you get started, you <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/en-us/articles/215046457-Adding-and-Deleting-Sections\">can add/remove/reorder sections</a> and fill in the content you need for your site. Here are a few sections I recommend:</p><p><br data-cke-filler=\"true\"></p><ul><li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/en-us/articles/206200951-Getting-Started-with-Simple-Store\">Simple Store section</a> - If you have plans on earning or selling stuff online, this would be a great place to start.</li><li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/en-us/articles/214364068-Add-Simple-Blog\">Simple Blog section</a> - Share your ideas and thoughts online by writing your blogs.</li></ul><p><br data-cke-filler=\"true\"></p><p>If you want to learn more, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/en-us/articles/218517717-Welcome-to-Strikingly-\">check out this video</a> to get familiar with the site editor. Also, check out our <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.strikingly.com/s/discover#\">Discover page</a> for design inspiration, samples, or ideas on what you can do with your site. It has a vast collection of wonderfully made sites created by our users.&nbsp;</p><p><br data-cke-filler=\"true\"></p><p>By the way, here’s the transcript of our recent conversation. We’re here 24/7 if you need any help!</p><p><br data-cke-filler=\"true\"></p><p>| Happiness Officer</p>",
    pt: "<p>Feliz em ter você a bordo, Pft-artedesign!</p><p><br data-cke-filler=\"true\"></p><p>Vi que você ainda está construindo o seu site. Está procurando por funcionalidades específicas para o seu site? Deixe-me saber, eu ficarei feliz em ajudar você. Para começar, você pode <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/pt-pt/articles/900004307883-Apresentando-Strikingly-6-Se%C3%A7%C3%B5es-de-edi%C3%A7%C3%A3o-Arrastar-e-Soltar-\">adicionar/remover/ordenar seções </a>para preencher o conteúdo que você precisa para o seu site.</p><p><br data-cke-filler=\"true\"></p><p>Algumas seções que eu posso sugerir são as seguintes:</p><p><br data-cke-filler=\"true\"></p><p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/pt-pt/articles/900000073803-Loja-FAQs\">Seção de Loja Simples</a> - Se você tem planos de ganhar ou vender coisas online, este seria um ótimo lugar para começar.<br><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/en-us/articles/214364068-Add-Simple-Blog\">Seção Blog Simples</a> - Compartilhe as suas idéias e pensamentos online, escrevendo seus próprios blogs.</p><p><br data-cke-filler=\"true\"></p><p>Caso queira saber mais, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/en-us/articles/218517717-Welcome-to-Strikingly-\">assista a este vídeo</a> para ajudá-lo a se familiarizar com o Editor. Ademais, se você está procurando inspiração, amostras ou idéias sobre o que você pode fazer com seu site, confira a <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.strikingly.com/s/discover\">nossa página Descobrir</a>. Ela possui uma ampla coleção de sites maravilhosamente elaborados por nossos usuários.</p><p><br data-cke-filler=\"true\"></p><p>Por sinal, aqui está a cópia do nosso chat. Estamos aqui 24 horas por dia, 7 dias por semana se você precisar de alguma ajuda!&nbsp;</p><p><br data-cke-filler=\"true\"></p><p>| Happiness Officer</p>"
  }
}, {
  category: "Update",
  subcategory: "Status Update",
  reply: "d"
}, {
  category: "Closure",
  subcategory: "Ticket Closure",
  reply: "f"
}];
function saveChanges(form, subcategory) {
  var assignee = form.querySelector("#assignee-input").value;
  var reply = form.querySelector("#reply-input").value;
  var config = configurations.find(function (c) {
    return c.subcategory === subcategory;
  });
  hoAssignee = assignee;
  if (config) {
    config.reply = reply;
  }
  document.body.removeChild(form); // Remove the form after saving
}

/***/ }),

/***/ "./src/zendesk/modify-ui.js":
/*!**********************************!*\
  !*** ./src/zendesk/modify-ui.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setUpUI: () => (/* binding */ setUpUI)
/* harmony export */ });
/* harmony import */ var _canned_reply_settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canned-reply-settings.js */ "./src/zendesk/canned-reply-settings.js");
/* harmony import */ var _ticket_filling_out_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-filling-out.js */ "./src/zendesk/ticket-filling-out.js");
/* harmony import */ var _debug_logging_levels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../debug/logging-levels */ "./src/debug/logging-levels.js");



function addButtons() {
  (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_2__.log)("Adding buttons", _debug_logging_levels__WEBPACK_IMPORTED_MODULE_2__.DL.MAX);

  // Target the area where the button container should be added
  var buttonArea = document.querySelector("#main_panes div:not(.is-cached) > header.ember-view");

  // Check if the main area where buttons should be added exists
  if (!buttonArea) {
    (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_2__.log)("Main area not found while trying to add buttons. Retrying.", _debug_logging_levels__WEBPACK_IMPORTED_MODULE_2__.DL.AVG);
    setTimeout(addButtons, 300);
    return;
  }

  // Check if the container for buttons already exists, create it if it does not
  var buttonContainer = document.querySelector(".hhzd-canned-replies");
  if (!buttonContainer) {
    buttonContainer = document.createElement("div");
    buttonContainer.className = "hhzd-canned-replies";
    buttonArea.appendChild(buttonContainer); // Append the new container to the specified area
  }

  // Clear existing buttons to prevent duplicates
  buttonContainer.innerHTML = '';

  // Loop through configurations to create and append buttons to the new container
  _canned_reply_settings_js__WEBPACK_IMPORTED_MODULE_0__.configurations.forEach(function (config, index) {
    var button = document.createElement("button");
    button.textContent = config.subcategory;
    button.onclick = function () {
      (0,_ticket_filling_out_js__WEBPACK_IMPORTED_MODULE_1__.fillOutTicket)(_canned_reply_settings_js__WEBPACK_IMPORTED_MODULE_0__.hoAssignee, config.category, config.subcategory, config.reply, config.title);
    };
    button.oncontextmenu = function (event) {
      event.preventDefault(); // Prevent the default context menu
      showCustomForm(event, button, config); // Trigger custom form for editing button behavior
    };

    // Append each button to the container
    buttonContainer.appendChild(button);
  });
  checkIfButtonsWereAdded();
}
function checkIfButtonsWereAdded() {
  // Target the area where the button container should be added
  var buttonArea = document.querySelector("#main_panes div:not(.is-cached) > header.ember-view");

  // Check if the main area where buttons should be added exists
  if (!buttonArea) {
    (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_2__.log)("Buttons weren't added. Trying again.");
    setTimeout(addButtons, 300);
  }
}
function showCustomForm(event, button, config) {
  // Remove any previously created forms to avoid duplicates
  var existingForm = document.querySelector('.hhzd-custom-form');
  if (existingForm) {
    document.body.removeChild(existingForm);
  }
  var form = document.createElement('div');
  form.className = 'hhzd-custom-form';
  form.style.position = 'fixed'; // Use 'fixed' to position relative to the viewport
  form.style.left = "".concat(event.clientX, "px");
  form.style.top = "".concat(event.clientY, "px");
  form.style.backgroundColor = 'white'; // Ensure visibility
  form.style.border = '1px solid black';
  form.style.padding = '10px';
  form.style.zIndex = 1000; // Ensure the form is on top

  form.innerHTML = "\n        <label>Assignee: <input type=\"text\" id=\"assignee-input\" value=\"Irish\"></label>\n        <label>Reply: <input type=\"text\" id=\"reply-input\" value=\"".concat(config.reply, "\"></label>\n        <button type=\"button\" onclick=\"saveChanges(this.parentNode, '").concat(config.subcategory, "')\">Save</button>\n    ");
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
  setTimeout(function () {
    // Timeout ensures that the initial click doesn't remove the form
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapePress);
  }, 0);
}
function setUpUI() {
  (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_2__.log)("Setting up UI", _debug_logging_levels__WEBPACK_IMPORTED_MODULE_2__.DL.MAX);
  addButtons();
}

/***/ }),

/***/ "./src/zendesk/ticket-filling-out.js":
/*!*******************************************!*\
  !*** ./src/zendesk/ticket-filling-out.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillOutTicket: () => (/* binding */ fillOutTicket),
/* harmony export */   grabTicket: () => (/* binding */ grabTicket),
/* harmony export */   insertTextReact: () => (/* binding */ insertTextReact),
/* harmony export */   insertTicketReply: () => (/* binding */ insertTicketReply),
/* harmony export */   insertTicketTitle: () => (/* binding */ insertTicketTitle),
/* harmony export */   setHOAssignee: () => (/* binding */ setHOAssignee),
/* harmony export */   setTicketCategory: () => (/* binding */ setTicketCategory),
/* harmony export */   setTicketSubcategory: () => (/* binding */ setTicketSubcategory),
/* harmony export */   setTicketType: () => (/* binding */ setTicketType)
/* harmony export */ });
/* harmony import */ var _utility_utility_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utility-functions.js */ "./src/utility/utility-functions.js");
/* harmony import */ var _debug_logging_levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../debug/logging-levels */ "./src/debug/logging-levels.js");


function insertTextReact(parent, text, selectorDescription) {
  if (!parent) {
    (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_1__.logError)("Parent not found for ".concat(selectorDescription));
    return;
  }
  var element;
  if (parent.tagName === 'TEXTAREA' || parent.tagName === 'INPUT') {
    element = parent;
  } else {
    element = parent.querySelector('input');
  }
  if (!element) {
    (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_1__.logError)("TAG: ".concat(parent.tagName, " - Input field not found for ").concat(selectorDescription), _debug_logging_levels__WEBPACK_IMPORTED_MODULE_1__.DL.AVG);
    if (parent.tagName === 'TEXTAREA' || parent.tagName === 'INPUT') {
      element = parent;
    } else {
      (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_1__.logError)("Input field not found for ".concat(selectorDescription));
      return;
    }
  }
  function setNativeValue(inputElement, value) {
    var valueSetter;
    var valueSetterPropertyDescriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
    if (valueSetterPropertyDescriptor) {
      valueSetter = valueSetterPropertyDescriptor.set;
      if (!valueSetter) {
        (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_1__.logError)('valueSetter not found for ' + selectorDescription);
      }
      return;
    } else {
      (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_1__.logError)("valueSetterPropertyDescriptor not found for " + selectorDescription);
    }
    var prototype = Object.getPrototypeOf(inputElement);
    var prototypeValueSetter;
    var prototypePropertyDescriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
    if (prototypePropertyDescriptor) {
      prototypeValueSetter = prototypePropertyDescriptor.set;
      if (!prototypeValueSetter) {
        (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_1__.logError)('prototypeValueSetter not found for ' + selectorDescription);
      }
      return;
    } else {
      (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_1__.logError)("prototypePropertyDescriptor not found for " + selectorDescription);
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
      var itemId = "downshift-7-item-".concat(itemNumber);
      var itemElement = document.getElementById(itemId);
      if (itemElement) {
        // Create a new custom event that mimics a click or selection.
        var customEvent = new CustomEvent('keydown', {
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
    setTimeout(function () {
      return inputElement.dispatchEvent(new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        key: 'Enter',
        code: 'Enter'
      }));
    }, 300);
  }
  setNativeValue(element, text);
  element.dispatchEvent(new Event('input', {
    bubbles: true,
    cancelable: true
  }));
  element.dispatchEvent(new Event('change', {
    bubbles: true,
    cancelable: true
  }));
}
function grabTicket() {
  var selectedElement = (0,_utility_utility_functions_js__WEBPACK_IMPORTED_MODULE_0__.selectElementAmongListOfSimilarSelectors)("[data-test-id=\"assignee-field-take-it-button\"]", 0, 'Grab Ticket');

  // Click on the ticket element
  (0,_utility_utility_functions_js__WEBPACK_IMPORTED_MODULE_0__.simulateClick)(selectedElement);
}
function setHOAssignee(assigneeName) {
  var button = (0,_utility_utility_functions_js__WEBPACK_IMPORTED_MODULE_0__.selectElementAmongListOfSimilarSelectors)("[data-test-id=\"ticket-form-field-dropdown-button\"] [aria-labelledby=\"downshift-5-label\"]", 0, 'HO Assignee');
  setTimeout(function () {
    return insertTextReact(button, assigneeName, 'HO Assignee');
  }, 500);
}
function setTicketCategory(category) {
  var button = (0,_utility_utility_functions_js__WEBPACK_IMPORTED_MODULE_0__.selectElementAmongListOfSimilarSelectors)("[data-test-id=\"ticket-form-field-dropdown-button\"] [aria-labelledby=\"downshift-6-label\"]", 0, 'Ticket Category');
  setTimeout(function () {
    return insertTextReact(button, category, 'Ticket Category');
  }, 500);
}
function setTicketSubcategory(subcategory) {
  var element = (0,_utility_utility_functions_js__WEBPACK_IMPORTED_MODULE_0__.selectElementAmongListOfSimilarSelectors)("[data-test-id=\"ticket-fields-multiline-field\"]", 0, 'Ticket Subcategory');
  insertTextReact(element, subcategory, 'Ticket Subcategory');
}
function setTicketType() {
  var dropdownButton = (0,_utility_utility_functions_js__WEBPACK_IMPORTED_MODULE_0__.selectElementAmongListOfSimilarSelectors)("[data-test-id=\"ticket-fields-type-select\"]", 0, 'Ticket Type Dropdown Button');

  // Simulate a click on the dropdown button to open the dropdown
  (0,_utility_utility_functions_js__WEBPACK_IMPORTED_MODULE_0__.simulateClick)(dropdownButton);
  setTimeout(function () {
    return dropdownButton.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      key: 'ArrowDown',
      code: 'ArrowDown'
    }));
  }, 100);
  setTimeout(function () {
    return dropdownButton.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      key: 'Enter',
      code: 'Enter'
    }));
  }, 300);
}
function insertTicketReply(replyText, shouldIncludeTranscript, hasPtBrTag) {
  var reply;
  reply = hasPtBrTag ? replyText['pt'] : replyText['en'];
  if (!reply) {
    (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_1__.logError)("No reply found. ReplyText: ".concat(replyText, ", hasPtBrTag: ").concat(hasPtBrTag));
    return;
  }
  if (shouldIncludeTranscript) {
    var allReplies = document.querySelectorAll('#wrapper.ember-view #main_panes .rich_text .event-container .body');
    var transcript = allReplies[allReplies.length - 1].innerHTML;
    var emptyLine = '<p><br data-cke-filler=\"true\"></p>';
    reply = reply + emptyLine + emptyLine + '---------------' + emptyLine + emptyLine + transcript;
  }
  var element = document.querySelector('[data-test-id="standalone-rich-text-ckeditor"]');
  if (element.ckeditorInstance) {
    element.ckeditorInstance.setData(reply);
  } else {
    (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_1__.logError)("No CKEditor found while trying to insert ticket reply. Retrying.");
    console.dir(element);
    setTimeout(function () {
      return insertTicketReply(replyText, shouldIncludeTranscript, hasPtBrTag);
    }, 1000);
  }
}
function insertTicketTitle(title, hasPtBrTag) {
  var titleElement = document.querySelector('[data-test-id="ticket-pane-subject"]');
  insertTextReact(titleElement, hasPtBrTag ? title['pt'] : title['en'], 'Ticket Title');
}
function checkLanguage() {
  // check tags section to determine language
  var tagsSection = document.querySelector('div[aria-labelledby="downshift-11-label"] > div');
  if (tagsSection) {
    var allTags = tagsSection.querySelectorAll('.garden-tag-item');

    // check if any of the tag's textContent is exactly "pt-br"
    return Array.from(allTags).some(function (tag) {
      return tag.textContent === 'pt-br';
    });
  }
  (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_1__.logError)("Tags section not found while trying to determine language.");
  return null;
}
function fillOutTicket(hoAssignee, category, subcategory, reply, title, includeTranscript) {
  grabTicket();
  setHOAssignee(hoAssignee);
  setTicketCategory(category);
  setTicketSubcategory(subcategory);
  setTicketType();
  var hasPtBrTag = checkLanguage();
  if (null !== hasPtBrTag) {
    insertTicketTitle(title, hasPtBrTag);
    insertTicketReply(reply, includeTranscript, hasPtBrTag);
  } else {
    (0,_debug_logging_levels__WEBPACK_IMPORTED_MODULE_1__.logError)("Could not determine language");
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zendesk_modify_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zendesk/modify-ui.js */ "./src/zendesk/modify-ui.js");
/* harmony import */ var _debug_logging_levels_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug/logging-levels.js */ "./src/debug/logging-levels.js");


function checkUrlAndSetUpUI() {
  (0,_debug_logging_levels_js__WEBPACK_IMPORTED_MODULE_1__.log)("Content.js - Checking URL...", _debug_logging_levels_js__WEBPACK_IMPORTED_MODULE_1__.DL.MAX);
  var requiredUrlStart = "https://strikingly.zendesk.com/agent/tickets/";
  if (window.location.href.startsWith(requiredUrlStart)) {
    (0,_debug_logging_levels_js__WEBPACK_IMPORTED_MODULE_1__.log)("Content.js - URL matches. Setting up UI...", _debug_logging_levels_js__WEBPACK_IMPORTED_MODULE_1__.DL.MIN);
    (0,_zendesk_modify_ui_js__WEBPACK_IMPORTED_MODULE_0__.setUpUI)();
  }
}

// Function to continuously check the URL at defined intervals
function continuouslyCheckUrl() {
  var lastUrl = window.location.href; // Store the last URL for comparison

  setInterval(function () {
    var currentUrl = window.location.href;
    if (currentUrl !== lastUrl) {
      (0,_debug_logging_levels_js__WEBPACK_IMPORTED_MODULE_1__.log)("Content.js - URL change detected.");
      lastUrl = currentUrl; // Update the last URL
      checkUrlAndSetUpUI();
    }
  }, 500); // Check every half second

  checkUrlAndSetUpUI();
}

// Start the continuous URL check when the window is loaded
window.addEventListener('load', function () {
  return setTimeout(continuouslyCheckUrl, 300);
});

// run webpack: npx webpack --config webpack.config.js
})();

/******/ })()
;
//# sourceMappingURL=content.js.map