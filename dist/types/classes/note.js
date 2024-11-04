"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    constructor(date, text = "") {
        this.Date = date || new Date(); // Default to the current date and time if not provided
        this.Text = text; // Use the provided text or default to an empty string
    }
}
exports.Note = Note;
