// Debug levels
export const DL = {
    NONE: -1,
    MIN: 0,
    AVG: 1,
    MAX: 2
};

// Current debug level
let currentDebugLevel = DL.MAX;  // Default level

// Logging function
export function log(message, level = DL.AVG) {
    if (level <= currentDebugLevel) {
        console.log("HHZD - " + message);
    }
}

export function logError(message) {
    console.error("HHZD - " + message);
}