export class PersonName {
    public First: string;
    public Middle: string;
    public Last: string;

    constructor(first: string = "", middle: string = "", last: string = "") {
        this.First = first;   // Initialize with the provided first name or an empty string
        this.Middle = middle; // Initialize with the provided middle name or an empty string
        this.Last = last;     // Initialize with the provided last name or an empty string
    }
}
