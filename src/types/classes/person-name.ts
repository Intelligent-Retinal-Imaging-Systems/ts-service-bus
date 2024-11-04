export class PersonName {
    public First: string;
    public Middle: string;
    public Last: string;

    constructor(first: string = "", middle: string = "", last: string = "") {
        this.First = first;
        this.Middle = middle;
        this.Last = last;
    }
}
