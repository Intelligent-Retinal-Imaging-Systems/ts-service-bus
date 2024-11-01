import { GenderContext, Gender } from "../enums";

export class PersonGender {
    public Context: GenderContext; // You may want to initialize this if it has a default value
    public Value: Gender; // You may want to initialize this if it has a default value

    constructor(context?: GenderContext, value?: Gender) {
        this.Context = context || ({} as GenderContext); // Initialize to an empty object or appropriate default
        this.Value = value || ({} as Gender); // Initialize to an empty object or appropriate default
    }
}
