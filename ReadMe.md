# Single Page Applications Sprint Challenge

The sprint challenge is your chance to independently work through material and build on what you learned this week. In today's project you will build a form for Lambda Eats, a website designed to bring food to hungry coders.

## Introduction

In this challenge you will be working from the `Lambda Eats` homepage to create a functional `Pizza?` button that leads to a build your own pizza custom form.

## **Self-Study Questions**

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

1. In 1-2 sentences, explain what React's `useRouteMatch` hook is used for.
   Provides access to the match object
   If it is provided with no arguments, it returns the closest match in the component or its parents.
   A primary use case would be to construct nested paths.
   from https://css-tricks.com/the-hooks-of-react-router/

2. How would you explain form validation to someone who has never programmed before?
   Validation is an automatic check to ensure that data entered is sensible and feasible. Validation cannot ensure data is accurate. When programming, it is important that you include validation for data inputs. This stops unexpected or abnormal data from crashing your program and prevents you from receiving impossible garbage outputs.
   from https://www.computerscience.gcse.guru/theory/validation
   Before submitting data to the server, it is important to ensure all required form controls are filled out, in the correct format. This is called client-side form validation, and helps ensure data submitted matches the requirements set forth in the various form controls. This article leads you through basic concepts and examples of client-side form validation. Client-side validation is an initial check and an important feature of good user experience; by catching invalid data on the client-side, the user can fix it straight away. If it gets to the server and is then rejected, a noticeable delay is caused by a round trip to the server and then back to the client-side to tell the user to fix their data.
   from https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

3. In 1-2 sentences, define end to end testing.
   Just as it sounds: test from start to finish. End-to-end testing is a technique used to test whether the flow of an application right from start to finish is behaving as expected. The purpose of performing end-to-end testing is to identify system dependencies and to ensure that the data integrity is maintained between various system components and systems. The entire application is tested for critical functionalities such as communicating with the other systems, interfaces, database, network, and other applications.
   from https://www.tutorialspoint.com/software_testing_dictionary/end_to_end_testing.htm#:~:text=End%2Dto%2Dend%20testing%20is,various%20system%20components%20and%20systems.

You are expected to be able to answer all these questions. Your responses contribute to your Sprint Challenge grade. Skipping this section **will** prevent you from passing this challenge.

## Instructions

### Task 1: Set Up The Project With Git

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add your project manager as collaborator on Github.
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [x] CD into the project base directory.
- [x] Download project dependencies by running `npm install`
- [x] Start up the app using `npm start`
- [x] Create a new branch: git checkout -b `<firstName-lastName>`. Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.

### Task 2: Minimum Viable Product

Your MVP should include, at a minimum, the following components.

- [x] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable)
- [x] A form with a "/pizza" route
- [x] A name text input field
- [ ] Validation for name - name must be at least 2 characters
- [x] Dropdown form component for pizza size
- [x] Checklist form component for toppings - at least 4 (hint: name each separately!)
- [x] Text input form component for special instructions
- [x] An Add to Order button that submits form and returns a database record of name, pizza size, sauce, and special instructions

#### Testing MVP

Implement the following tests in Cypress:

- [ ] test that you can add text to the box
- [ ] test that you can select multiple toppings
- [ ] test that you can submit the form

You may use the following wireframe (also in a folder above) as guidance as you design your site but it is not required that you do so.

**Form Wireframe:**
![Form Wireframe](https://i.imgur.com/ii7wc0u.png)

## Task 3: Stretch Goals

If you complete the MVP, move on to the following stretch goals. As usual, these goals represent a mix of additional at-level work in addition to work that is beyond the scope of what you've learned, but attainable with your current knowledge (and google).

- [ ] Toggle form component for gluten free crust
- [ ] Turn your form into a modal that pops up on the home page
- [ ] Turn form element sections into nested routes
- [ ] Create a `cart` page with additional form options like: delivery or pickup, the option to add utensils and straws, add a tip, etc.
- [ ] Test more of the application with Cypress
- [ ] Add functionality to your order button that it leads to a Congrats! Pizza is on it's way! page **and** returns a database record of the whole order

**"Pizza is on its Way" Wireframe:**

> Get the gif: https://giphy.com/gifs/happiness-9fuvOqZ8tbZOU

![Pizza](https://i.imgur.com/AkId0mo.gif)

## FAQs

**How do I return a database record of the order?**

One of your goals is to return a database record of the order - for this you'll need to write a post request. For more detailed steps, use the below:

1. Create a new state
2. Post to [reqres](https://reqres.in/) database with `axios`
3. Log data in console

## Resources

👀 [Peek at Uber Eats for Inspiration](https://ubereats.com/)

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your TL will count the project as complete by merging the branch back into master.

## Grading rubric

[NEED TO ADD: Sprint challenge grading rubric](https://www.notion.so/e7b32e56ebad4f57b3521efb886f4508)

cloned and branched 06/13/2020 pnl
