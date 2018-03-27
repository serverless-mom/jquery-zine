## Who is this book for?

If you understand Javascript okay but are struggling with jQuery, this book is for you!

If you've never written a line of Javascript before, some of this book will be a little off-base but you should be able to do all the exercises. If you'd like to learn some Javascript before getting started I'd recommend the 'Basic Javascript' course at freecodecamp.org

If you're an experienced developer who is curious about whether jQuery is useful at all, check out Wes Bos' free course javascript30.com, which teaches you a bunch of browser and code skills all using native Javascript without the need for jQuery

## Chapter 1: jQuery is just javascript

When we first see some jQuery, it can sort of look like wizard writing:

```
$('.plant-button').on('click', event => {
  event.preventDefault()
  console.log('someone clicked the plant button!')
})
```

Dollar signs? .on()? This must be some fancy new programming language designed for use with jQuery, right?

really this is just totally standard javascript, but since we use jQuery so much it's a little more compact than usual: we helpfully set $() = window.jQuery() so we can call jQuery with a single character. If you want to prove it to yourself, open your browser's developer console and enter `window.jQuery === $`. You should get back `true`

So let's take this apart piece by piece:
`$(` -> Hey jQuery, I want you to find something for me
   `'.plant-button'` -> As usual, here's a CSS selector, for anything with the class `plant-button`
    `.on(` -> I want to set up an event listener. I'm going to tell you something to wait for, and what to do when it happens
      `'click',` -> the event you're waiting for is a click
        `event => {` -> here's the code I want you to run when the click happens. We'll call this function with a single parameter, an `event` that represents what just happened

----

One other bit we have to address about jQuery being just Javascript is the somewhat-magical `$` that appears all over. Clearly this is a new eldritch symbol that calls the witch jQuery forth from her thousand-year slumber.

[illo of jQuery witch rising from a pentagram ringed with dollar signs]

Nope! It's just a function, like any other function. jQuery gets used so much that it's useful to be able to call it with a single character, and the dollar sign is easy to read in the code. Few other software libraries get the distinction of a single-character name, but the other notable example is Lodash, which is so useful for handling arrays and objects that most of the time it's bound to `_` (get it? Low Dash?)

The line of jQuery we've been looking at is pretty complex. Let's start simple: setting up an environment where we can run some jQuery commands.

## Chapter 2 eye of newt and toe of frog (and other essential tools for mastering jQuery)

jQuery is a library, which just means its a bunch of pre-written javascript to make your code writing easier. jQuery is too big to easily copy and paste all of it into our own script file, so to use it in a web page you have two options:
1. download all of jQuery and serve it as a file next to your own script.js file.
2. link to a site where jQuery is served

Option 1 means you can develop a fully working interactive site with no need for a web connection after you download jQuery, but unless you're learning Jquery on a flakey internet connection, it's usually more convenient to go with option 2.

When you go to link jQuery to your page (https://code.jquery.com/ is a good resource) you'll see a few terms that deserve definition:

CDN - a content delivery network which serves your file by the fastest possible route

Minified - did you know that line breaks are (almost) never required in Javasvcript? If you remove them from your code, it will run just the same but the file will be slightly smaller. Minified jQuery has this and a few other changes done to the code so that it's a smaller file that's basically impossible to read. Crucially, no actual code is removed so *minified code always works exactly the same way as uncompressed code*

jQuery Slim - While lots of Javascript code has a 'minified' version, jQuery slim is unique to this library: it makes the entire library faster and smaller by removing components you might not need, specifically the ajax, effects, and currently deprecated code (if you don't know what these terms mean, don't worry about it)

Okay enough book learning, let's summon jQuery to do our will! grab the script link and drop it into your web page

```
<!DOCTYPE html>
<html>
    <head>
        <title>Our First JQuery Page</title>
    </head>
    <body>
      <h1>hello world!</h1>
      <script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>
      <script src="./script.js"></script>
    </body>
</html>
```
in our `script.js` file, we want to test that jQuery is working, so lets console.log something inside a basic jQuery `document.ready` function:

```
$( document ).ready( () => {
  console.log('jQuery is working!')
})
```

if jQuery isn't working we should see something like 'Uncaught ReferenceError: $ is not defined' in the web console.

Let's try using jQuery on the page. Open the web console and enter a line of code right on the console:

`$('h1').text('goodbye horses')`

What's this line of code doing? So here's something really important to remember about jQuery, which I'll explain in a section called "something really important to remember about jQuery"

## something really important to remember about jQuery
#### jQuery starts by finding something
jQuery's simplest function is `$()` with some selector (like a class name) inside the parenthesis. What this does is search the page for matching elements. Everything you call afterward like `.html()` is a 'chained method' that happens after jQuery has found stuff on the page.
When trying to say what it is your code should do, if you start with a statement like "Add an H1 to the page that says 'hello'" you'll probably find it difficult to write in jQuery because you didn't start with finding something. It would be better to say 'Find an unordered list on the page, then add an H1 to the top of it.'

---------
So our code starts by finding the only visible HTML element on the page and setting its text to something new.

Chapter 3: let's get interactive

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
