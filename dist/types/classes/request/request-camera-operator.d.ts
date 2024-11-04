import { PersonName } from "../../";
export declare class RequestCameraOperator {
    NPI: string;
    Name: PersonName;
    Associations: string;
    Degrees: string;
    Taxonomy: string;
    Email: string;
    constructor(npi?: string, name?: PersonName, associations?: string, degrees?: string, taxonomy?: string, email?: string);
}
