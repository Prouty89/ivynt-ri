

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# iVoyant React Developer Assignment

### Overview

You will build a React application from scratch to demonstrate your capabilities as a software
engineer. You can use any resources or libraries to help you accomplish this. This assignment is
an example of some of the challenges we solve at iVoyant.
Required Technologies and Frameworks:  React
Preferred (but optional) technologies:  Redux, Redux-Saga
Preferred UI Framework:  Ant Design ( https://ant.design/ )


### What this exercise intends to measure:

 Software architecture
 Usage of design patterns (i.e. HOC)  State management  Separation of Concerns  Making parallel and Sequential Rest calls  Coding Style
 Demonstrate usage of Git (Feature branches and Merge requests). You will create
Merge requests and will most likely merge on your own.

- Participants are free to use their creativity and add additional functionality than what is
required.

- While you do not have to be on a video session while solving this problem, we will need you to
commit code to git every so often (3 hours). This will enable us to see progress over time and
your thought process

### Problem Statement:

- You will build a configurable application that makes API calls, processes data, and conditionally
displays it in the UI.
- You will also need to create a mock API server that runs locally. We recommend you look at
* JSON-server project (using)

- This application will be configuration driven. Styling, text, API endpoints, etc. will all be specified
    in a config. Once functionality has been implemented, it should be easy to create multiple
    instances of the application by changing variables in the config.

- The example we have given below is for applying payments. A different config loaded into the
same application could handle many other business use cases. Another example could be
updating customer information and displaying the updated info in the table.
You will be given some initial sample data to work with. However, the data may be changed
when we demo your application.

UI Components:

 Table
 Modal
 Forms (2)

o Dummy Payment Form
o Dummy Credit Form

Use case:

  Fetch Application Config from an end point (Call 1)  Fetch all invoices from an end point. (Call 2)  Fetch vendors from another end point (Call3) 
  Merge Data (PostProcessor) – A function to normalize / filter and do any data massage.  Display it on the table. Columns to Display will come from Configuration from Call1
 Last column of the table will have a button (Payment Button).  Payment button will be enabled only if there if Amount Due is > 0
 When Payment Button is clicked, a modal is shown
 Modal workflow:
o Modal will be a separate component – that will be loaded on button click
o What component the modal will load will be based on the following condition
If there is credit available with the vendor -> Ask user if he wants to apply
available credit (whether Credit Adjustment can be used or not will be
dependent on config. If we set credit adjustment enabled to false in
config, user will not be able to use credit)
Once Credit is applied, if there is still amount Due, then continue the flow
(load next payment component), where user can make remaining
payment due. In this the amount to be paid should be (original Amount
Due – credit applied).
Once This entire flow is complete, show the new amount Due in the table
If the amount Due now becomes 0, then Disable button. 

## Data Flow: 

Call 1 (Get Config) -> Call2 (Call Data Api) , Call 3 (Call vendor API) 2 and 3 should be in parallel -
> PostProcessor (A function to normalize data and filter data) -> Render Table