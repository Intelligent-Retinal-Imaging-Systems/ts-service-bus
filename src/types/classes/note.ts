export class Note {
    public Date: Date; // Change to Date for better type safety
    public Text: string;

    constructor(date?: Date, text: string = "") {
        this.Date = date || new Date(); // Default to the current date and time if not provided
        this.Text = text; // Use the provided text or default to an empty string
    }
}
