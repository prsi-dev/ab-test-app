const signedUpUsers = new Set();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.eventName === "sign-up") {
    console.log(signedUpUsers);

    if (signedUpUsers.has(body.user)) {
      console.log("User already signed up", body);

      return;
    } else {
      console.log("New user sign-up", body);

      signedUpUsers.add(body.user); // Track the user as signed up.
      // Send sign-up event to GTM or to an analytics endpoint.
      // gtag(){dataLayer.push({...body, event: 'sign-up-success'});}
    }
  } else {
    //Add new user to the list of signed up users
    signedUpUsers.add(body.user);
    //Send data to GTM to store analytics
    //gtag(){dataLayer.push(body);}
  }

  if (body.eventName === "page-view") {
    console.log("Page viewed", body);

    //Send data to GTM to store analytics
    //gtag(){dataLayer.push(body);}
  }

  if (body.eventName === "click") {
    console.log("Click", body);
  }

  return body;
});
