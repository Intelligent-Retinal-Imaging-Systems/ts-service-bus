export class DiagnosisCode {
    public Code: string = ""; // Initialize to an empty string
    public Description: string = ""; // Initialize to an empty string

    constructor(code?: string, description?: string) {
        this.Code = code || this.Code; // Use provided value or default
        this.Description = description || this.Description; // Use provided value or default
    }
}
