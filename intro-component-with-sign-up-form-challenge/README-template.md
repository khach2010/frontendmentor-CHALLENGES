# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
  It take around 4 to 5 hours to design and implement the simple form validation logic. 
      + Design : 2.5h
      + JS form validation: 1.5h
  This is a desktop and mobile responsive version. For table, it needs a further adjustment.
### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/khach2010/frontendmentor-CHALLENGES)
- Live Site URL: [Add live site URL here](https://intro-component-with-signup-form-tule.netlify.app/)

## My process

### Built with

- SCSS
- CSS custom properties
- Flexbox
- Desktop and mobile responsive

### What I learned

  Use scss - scss variable 
  A handle terminal comment to watch the change in scss file and compile the scss to css file - "sass --watch scss/style.scss css/style.css".
  _ Create a ready css custom class for the JS part 
  _ Create JS helper functions to handle displaying messages for validateInputs() function

To see how you can add code snippets, see below:

```css ready custom class
   .input-control.success input {
        border-color: $primary-color-green;
      }
    
      .input-control.error input {
          border-color: $primary-color-red;
      }
      
      .input-control .error {
          text-align: right;
          color: $primary-color-red;
          font-family: $font-stack-1;
          font-weight: 500;
          line-height: 16px;
          font-size: 11px;
          height: 13px;
          font-style: italic;
      }
```
```js helper functions
const setError = (element, message) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.innerText = message
  inputControl.classList.add('error')
  inputControl.classList.remove('success')
}
const setSuccess = (element) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.innerText = ''
  inputControl.classList.add('success')
  inputControl.classList.remove('error')
}
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
```


### Continued development
 Table view size needs further adjustment

### Useful resources

- [JS form validation](https://dev.to/javascriptacademy/form-validation-using-javascript-34je) - This helped me for the JS part simple form validation.

## Author

- Website - [Tu Le](https://mtle.nl/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/khach2010)


