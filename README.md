
# Web Developer Coding Assessment (React + TypeScript + Vite)
Listed below are the requirements for our React coding assignment. We anticipate the coding assignment to take between 2-4 hours to complete. Please reach out via email if you have any
questions or need any additional information/clarification. Good luck and we look forward to
seeing what you come up with!
- Using React, write a website that calls the Unsplash API to search a list of photos and displays the thumbnails in a grid.

```js
https://unsplash.com/documentation#search-photos 
i.e. GET /search/photos?page=1&query=dog
```

- When the user scrolls to the bottom of the page, the next page of photos should be loaded automatically and displayed (infinite scroll).

- Clicking a photo should navigate the user to a details route that displays the full-size
photo along with some of the photo metadata (user name, like count, etc.)

- On the main page, user should be able to filter by color and orientation (see parameters section of documentation [unsplash docs](https://unsplash.com/documentation#parameters-16)

- Styling should be responsive, i.e. when shrunk down to mobile width, only one column should be displayed. Feel free to use any CSS framework/styling library you please.

- Code should be provided via a Git repository pushed to your Git provider of choice (if repo is private, it should be shared with the interviewer). Alternatively, email a .zip of the Git repo to the interviewer.

##### NOTE: You can register for free demo Unsplash API access via https://unsplash.com/join.

Alternatively you can use our demo key, HTTP Authorization header with a value of Client-ID ```bPfgiIw4vW72MUt72sWrzfIR4KSMdhe3J0brvyZqoCs``` to make your requests. 

Demo requests are rate limited to 50 requests per hour, so feel free to hardcode the response data in the code sample you provide ( _whatever is easiest for you_ ).