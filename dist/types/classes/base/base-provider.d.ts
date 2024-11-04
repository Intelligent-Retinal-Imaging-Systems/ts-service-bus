import { PersonName } from '../../';
export declare abstract class BaseProvider {
    NPI: string;
    Name: PersonName;
    Associations: string;
    Degrees: string;
    Taxonomy: string;
    Email: string;
    constructor(npi?: string, // Default value
    associations?: string, // Default value
    degrees?: string, // Default value
    taxonomy?: string, // Default value
    email?: string);
}
