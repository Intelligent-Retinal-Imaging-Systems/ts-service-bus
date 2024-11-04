 
import * as IrisPublic from "../dist/Iris.Public";

/** 
 * Application entry point 
 * Uncomment out lines to test functionality
*/
async function main() {
  // await createOrder();       
  // await waitResults();
  // await waitEvents();
}

/**
 * Sample execution of creating a new order request object and sending it
 */
async function createOrder()  {

    // Requires that the service bus connection string specific to orders (provided by IRIS), has been set in config.json
    let config: IrisPublic.Config = require('./config.json');
 
    let orderobj: IrisPublic.OrderRequest = new IrisPublic.OrderRequest(config.ClientGuid);

    orderobj.Order.LocalId = "2031203"      // Your identifier.  Will be found in subsequent order events
    orderobj.Site.LocalId = "102330B"       // Site identifier must match site in the IRIS system
    orderobj.Patient.LocalId = "TestMRN1234";
    orderobj.Patient.Name.First = "Test";
    orderobj.Patient.Name.Last = "Patient";
    orderobj.Patient.addGender(IrisPublic.GenderContext.BirthGender,  IrisPublic.Gender.M);
    orderobj.Patient.addGender(IrisPublic.GenderContext.IdentityGender,  IrisPublic.Gender.F);
    orderobj.Patient.Dob = "1/1/2000";

    await IrisPublic.SendOrder(orderobj);
}

/** 
 * Sample implementation of results receiver 
 * Waits 2 minutes for results
*/
async function waitResults() {
    // Requires that the service bus connection string specific to results (provided by IRIS), has been set in config.json
    await IrisPublic.WaitResults((res: IrisPublic.OrderResult) => {
        console.log("Received results for order: ", res.Order.LocalId); 
    }, 120);
}

/** 
 * Sample implementation of events receiver 
 * Waits 2 minutes for events
 * */
async function waitEvents() {
    // Requires that the service bus connection string specific to events (provided by IRIS), has been set in config.json
    await IrisPublic.WaitEvents((res: any) => {
        console.log("Received event for order  " ); 
    }, 120);
}


// call the main function
main().catch((err) => {
    console.log("Error occurred: ", err);
    process.exit(1);
});

