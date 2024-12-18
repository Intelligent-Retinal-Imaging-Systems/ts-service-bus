import { EvaluationType } from "../../";
/**
 * Structure containing order details
 */
export declare class RequestOrder {
    /**
     * Optionally specify the procedure (CPT Code)
     */
    CPTCode: string;
    /**
     * If specified, this identifies when orders should be available from the worklist
     */
    ScheduledTime: any;
    /**
     * Order identifier as specified by the submitting organization
     */
    LocalId: string;
    /**
     * US State where the exam is being performed. Important for proper assignment of Graders
     */
    State: string;
    /**
     * If true, the exam will only include one eye as there is a known issue preventing the capture of the other eye
     */
    SingleEyeOnly: boolean;
    /**
     * If specified, the reason that only one eye is being captured. Based on customer configuration, this could render in the final report
     */
    MissingEyeReason: string;
    /**
     * Any additional order specified information typically JSON embedded
     */
    AdditionalInfo: string;
    /**
     * Optional encounter number as generally created from the customers EMR/EHR
     */
    EncounterNumber: string;
    /**
     * Collection of evaluation types required for the order (which exams to perform).
     * Default to DR. Do not change without consulting IRIS support as evaluation types must
     * be subscribed to prior to submission.
     */
    EvaluationTypes: EvaluationType[];
    /**
     * Optionally supply identifier as typically originating from a DICOM source
     */
    StudyInstanceUniqueId: string;
    /**
     * Optionally supply the department id (specified by the submitting organization) that the exam will be fulfilled from.
     */
    DepartmentId: string;
    /**
     * Optionally supply identifier as is typically generated by submitting organizations EMR/EHR
     */
    OrderableIdentifier: string;
    constructor(cptCode?: string, scheduledTime?: any, localId?: string, state?: string, singleEyeOnly?: boolean, missingEyeReason?: string, additionalInfo?: string, encounterNumber?: string, evaluationTypes?: EvaluationType[], studyInstanceUniqueId?: string, departmentId?: string, orderableIdentifier?: string);
}
