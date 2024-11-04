import { PersonName } from "../../";
export declare class RequestPCP {
    Name: PersonName;
    NPI?: string;
    EmailAddress?: string;
    FaxNumber?: string;
    constructor(name?: PersonName, npi?: string, emailAddress?: string, faxNumber?: string);
}
