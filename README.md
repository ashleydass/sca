# SCA React Test

## Solution

The solution consists of two layers - Client and Server, containing the front-end React app and the backend ASP.Net Core Web API. Both these components must be run simulataneously in order to experience a complete flow.

### Server

Navigate to the server directory on a terminal or Windows PowerShell and run ```dotnet run --project .\ScaApi\ScaApi.csproj``` to start the Web API host.

### Client

Navigate to the client directory on another terminal or Windows PowerShell and run

* ```yarn``` - to install the NPM packages from package.json
* ```npm start``` - to run the app in your default browser.

To execute the tests use ```npm test``` in a separate window.

#### Known issues:
* There are three failing tests as a result of incomplete unit tests.
* When typing into the text input fields the focus gets displaced not capturing any further key strokes. As a workaround and to check the complete flow, default values are pre-populated on page load.

## Requirements Summary

1.	Using React.JS (SSR optional), create a single page app that renders this form

![Subscribe form](/images/form.png "Subscribe form")

2.	The page must be responsive
3.	Create an API endpoint (using either node.js or .net core) that will receive the data from the form
4.	From your API, it should send the data through a POST request to:
```https://ckzvgrbymezqegu.form.io/reacttestform/submission```

5. The http request must contain this header:
```x-auth: react-test```

6. JSON body must follow this model:
```json
{
 "data": {
    "firstName": "String",
    "lastName": " String ",
    "email": " String ",
    "mobilePhone": " String "
  }
}
```
7. Display this message when the submission is successful:

![Submission Result](/images/result.png "Submission Result")