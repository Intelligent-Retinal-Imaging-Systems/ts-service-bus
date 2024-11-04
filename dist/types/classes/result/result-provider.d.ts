import { PersonName } from "../../";
export declare class ResultProvider {
    NPI: string;
    Name: PersonName;
    Associations?: string;
    Degrees?: string;
    Taxonomy?: string;
    Email: string;
    constructor(npi: string, name: PersonName, email: string, associations?: string, degrees?: string, taxonomy?: string);
}
