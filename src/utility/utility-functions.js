// Selects all elements matching the selector, then returns only the nth element
export function selectElementAmongListOfSimilarSelectors(selector, positionInArray = 0, selectorDescription) {
    const elements = document.querySelectorAll(selector);

    if (elements.length > positionInArray) {
        return elements[positionInArray];
    }

    console.error(`Element not found for ${selectorDescription}`, selector, positionInArray);

    return null;
}

export function simulateClick(element) {
    if (!element) {
        console.error('Element not provided for simulateClick');
        return;
    }

    element.click();
}