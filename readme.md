Who is this book for?

If you understand Javascript okay but are struggling with JQuery, this book is for you!

If you've never written a line of Javascript before, some of this book will be a little off-base but you should be able to do all the exercises.

Chapter 1: JQuery is just javascript

When we first see some JQuery, it can sort of look like wizard writing:
```
$('.plant-button').on('click', event => {
  event.preventDefault()
  console.log('someone clicked the plant button!')
})
```

Dollar signs? .on()? This must be some fancy new programming language designed for use with JQuery, right?

really this is just totally standard javascript, but since we use JQuery so much it's a little more compact than usual: we helpfully set $() = window.jQuery() so we can call jQuery with a single character. If you want to prove it to yourself, open your browser's developer console and enter `window.jQuery === $`. You should get back `true`

So let's take this apart piece by piece:
`$(` -> Hey jQuery, I want you to find something for me
   `'.plant-button'` -> As usual, here's a CSS selector, for anything with the class `plant-button`
    `.on(` -> I want to set up an event listener. I'm going to tell you something to wait for, and what to do when it happens
      `'click',` -> the event you're waiting for is a click
        `event => {` -> here's the code I want you to run when the click happens. We'll call this function with a single parameter, an `event` that represents what just happened

So here's something really important tp remember about jQuery, which I'll explain in a section called "something really important to remember about jQuery"

## something really important to remember about jQuery
#### jQuery starts by finding something
JQuery's simplest function is `$()` with some selector (like a class name) inside the parenthesis. What this does is search the page for matching elements. Everything you call afterward like `.html()` is a 'chained method' that happens after jQuery has found stuff on the page.
When trying to say what it is your code should do, if you start with a statement like "Add an H1 to the page that says 'hello'" you'll probably find it difficult to write in jQuery because you didn't start with finding something. It would be better to say 'Find an unordered list on the page, then add an H1 to the top of it.'

## something really important to remember about jQuery
#### when jQuery breaks, it usually happens silently

Lets take a look at some simple, broken, javascript:

```
  let name = 'steve'
  console.log('hi there, ' + nombre + '!')
```

Try running this code and your browser (or whatever you use to run Javascript) will immediately complain `Uncaught ReferenceError: nombre is not defined`

But what happens when we use jQuery to find something that doesn't exist?

`$('.wrong-class').html('<div>new content!</div>')`
(this code is supposed to find anything with the class `wrong-class` and set its HTML content to be a new div)

running this code gives us no errors at all, not even a warning that jQuery couldn't set the HTML of the element with `wrong-class` since it found no  matching elements!
