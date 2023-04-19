<<<<<<< HEAD
# Travel App Assessment

This take-home assignment will allow you to showcase your abilities as a full-stack software engineer using the tools and environments you’re comfortable with. Our goal is to give you a view into a day in the life of an engineer at Abode; this assignment is very similar to work that our engineers do every day! There are a few required pieces of our tech stack that you’ll have to use, but outside of those, feel free to use any libraries and tools you would prefer.

This assignment should take you ~5 hours to complete. Please don’t spend more than 10 hours total.

## Background/Product Spec

In this assignment, we’ll be asking you to implement a Travel web app. The app should display a list of 30 cities, along with relevant information (what country they’re in, a picture of the city, etc). The user will be able to mark Cities as “visited”.  The user can then switch between viewing visited and non-visited cities, which will help them plan future trips!

## Details

This assignment is divided into 2 main parts: first, you’ll work on some server-side code that will source the data used in the travel app, and then you’ll write some UI code that will create the user experience for the app.

### Setting up

You'll be using a platform called Firebase to create your Travel app. [Firebase](https://firebase.google.com/) is a Backend as a Service platform that combines many common infrastructure needs into a single place. It's what we use to power the Abode platform, so you'll be getting a really good taste of what our engineers do every day!

You'll need to create your own Firebase project to complete this assignment. The assignment shouldn't come close to going over Firebase's free tier of service, so there should be no charge to you for setting up the project. To get started:

1. Github Configuration
    - Clone this Repository
    - Create a new private Github Repository for the cloned project
2. Go to [https://console.firebase.google.com/](https://console.firebase.google.com/) and click "Add project". This requires you to have a Google account (aka a Gmail address) and to be logged in with that account.
3. Once you've created your project, you can follow the instructions here: [https://firebase.google.com/docs/cli](https://firebase.google.com/docs/cli) to set up the Firebase CLI and connect this directory to the project you created in Step 1
    - Note: make sure you select "realtime database" and "functions" when prompted after running `firebase init`. This will make sure your project has the correct configurations for this assignment.
4. Once you've initialized and set up the project, you can paste your app configuration from your Firebase project into the indicated spot in `src/index.js`. Instructions on how to get that config are here: [https://firebase.google.com/docs/web/learn-more#config-object](https://firebase.google.com/docs/web/learn-more#config-object)

### Part 1: Server

Objective: create a Firebase function that can fetch some data from the provided Web API and save that data in the Realtime Database (RTDB). You’ll need to modify the data slightly before writing it to the RTDB; there’s at least one additional field that are needed by the UI that aren’t included in the API.

The API you'll be using is the [Teleport Developer API](https://developers.teleport.org/). The API docs can be found here: [https://developers.teleport.org/api/reference](https://developers.teleport.org/api/reference). You may need to use more than one endpoint! Not all the required information may be present in the responses from a particular endpoint.

> 🗣️ Hint: the "Urban Areas" section of the API reference may be particularly useful ;)
> 

This is an example of what the final JSON objects should look like in the RTDB:

```json
{
	"id": 1234, // should be a unique ID you generate
	"name": "London",
	"country": "UK",
	"visited": false,
	"image": "<https://images.net/london.jpg>"
}

```

Here's a good link to get you started with writing a Firebase function if you haven't done it before: [https://firebase.google.com/docs/functions/get-started](https://firebase.google.com/docs/functions/get-started). If you've done any kind of serverless function development before, you should feel right at home!

You should implement this function as an HTTP-triggered function. This means that you should be able to hit the endpoint with an HTTP request to make it run (e.g. with `curl`). Here's a useful doc on how to build HTTP-triggered Firebase functions: [https://firebase.google.com/docs/functions/http-events](https://firebase.google.com/docs/functions/http-events)

Once you've successfully run the function and the data is in the RTDB, you can start implementing the second part of the assessment!

### Part 2: UI

Objective: build a UI that displays and allows for interaction with the Cities data you’ve sourced in Part 1. Your UI code must

- Be written in React
    - If you have experience with Redux, use it for state management. If not, use whatever method you're comfortable with!
- Use the Firebase Client SDK to fetch and write data to and from the RTDB

The design of the UI is up to you! Feel free to use any UI toolkits you’d like. There are several product functionality requirements your UI must meet:

- There must be a mechanism to switch between viewing visited and non-visited Cities (by default all Cities are non-visited, so the visited view should be empty until a user marks a City as visited). The specifics of this mechanism are up to you (we suggest implementing a toggle of some kind to switch between the two views).
- In the UI, each City must show:
    - An image of the city
    - The city’s name
    - The city’s country
    - A way to mark a City as visited. This UI interaction must write the data to the RTDB (i.e. the “visited” status must persist between refreshes)

We've included a basic setup for using the Firebase SDK on the client in this repo. This is just to get you started, so feel free to modify/change it around if your React setup requires that!
The main part is in `src/index.js`. This file contains the code needed to connect to the RTDB.

## Expectations

While we don't expect your code to be perfect (ours certainly isn't!), we do expect you to do your best to write as close to production-quality code as you can. This assessment is your way to demonstrate your engineering skills, so take full advantage and show us what you've got! We'll be looking for thoughtfully written code that's easy to read, follows best practices,
and has good performance characteristics.

More than whether you followed every convention, we care about seeing your thought process, your critical thinking skills, and your ability to complete a task within the product spec.

Please submit only your own work. You are more than welcome to take inspiration from others, Google problems that come up, and use documentation sites! But at the end of the day, we care about *your* thought process, so make sure you're only turning in code that you've designed and written yourself.

## Example UI

We’ve included an example below of what your UI might look like; please note that this is just an example! It’s here to spark your own creativity and show you what a complete submission might look like. Please don’t recreate this example exactly, as we really want to see what sorts of design decisions you make with the assignment :)
![example-ui](https://user-images.githubusercontent.com/16907570/230651777-d8a3c3f5-be4b-4c4d-8b70-0c941a9e00a7.png)

## Submitting the assignment!

Once you’ve finished, please add the following emails as Collaborators on your project:

- evan@abodehr.com
- jahziel@abodehr.com
- steven@abodehr.com
=======
# abode-travel-takehome
>>>>>>> b2253c8368d92768827c01b1441d1475234f061c
