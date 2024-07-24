# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Launch countdown timer solution](#frontend-mentor---launch-countdown-timer-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [My Screenshot](#my-screenshot)
    - [Links](#links)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Javascript](#javascript)
    - [Continued development](#continued-development)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### My Screenshot

![](./images/launchscreenshot.png)


### Links

- Solution URL: [Github](https://github.com/adeladanseun/FM-countdowntimer.github.io)
- Live Site URL: [Github Pages](https://adeladanseun.github.io/FM-countdowntimer.github.io)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid


### What I learned
- Code Planning: I learned how to plan ahead of a problem. The challenge required counter to start at a particular time but I chose to implement my solution using the exact time of loading the page and a random time in the near future. I did implemented the solution so it could easily be modified to work with data from an API, thus serving a bigger purpose.
- JS Modularity: I learned to write my Javascript code in sections. A good practice that I implement as a norm in my codes.
- CSS Properties: I got more understanding of how CSS properties combine to create the required effects.


---
### Javascript
The function shown below was implemented in other to adhere to the _"Don't repeat yourself"_ rule otherwise known as _DRY_. Rather than writing the code four times to control four different objects to do similar things, I created data structures that would aid implementation.
```js
function valueDisplay(array = valueCompute()) {
  for (let i = 0; i < 4; i++) {
    if (array[i] != parseInt(itemHolder[i].text.innerText)) {
      itemHolder[i].wipe.classList.add('spin')
      setTimeout(() => {
        if (array[i] < 10) {
          itemHolder[i].text.innerText = `0${array[i]}`
          return
        }
        itemHolder[i].text.innerText = array[i];
      }, 200)
      setTimeout(() => {
        itemHolder[i].wipe.classList.remove('spin')
      }, 400)
    }
  }
}
```


### Continued development

In future projects, I would like to work with API's in larger scales than completed projects. I would also like to improve my animation skill by combining CSS code with extensize Javascript.



## Author

- Frontend Mentor - [@adeladanseun](https://www.frontendmentor.io/profile/adeladanseun)
- LinkedIn - [@oluwaseunadeladan](https://www.linkedin.com/in/oluwaseunadeladan/)


