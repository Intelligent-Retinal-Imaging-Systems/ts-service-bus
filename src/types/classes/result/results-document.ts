export class ResultsDocument {
    public Content: string;
    public Encoding: string;
    public Type: string;

    constructor(content: string, encoding: string, type: string) {
        this.Content = content;
        this.Encoding = encoding;
        this.Type = type;
    }
}
