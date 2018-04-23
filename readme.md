## Who is this book for?

If you understand Javascript okay but are struggling with jQuery, this book is for you!

If you've never written a line of Javascript before, some of this book will be a little off-base but you should be able to do all the exercises. If you'd like to learn some Javascript before getting started, I recommend the 'Basic Javascript' course at freecodecamp.org.

If you're an experienced developer who is curious about whether jQuery is useful at all, check out Wes Bos' free course at javascript30.com, which teaches you a bunch of browser and code skills all using native Javascript without the need for jQuery.

## Chapter 1: jQuery is just javascript

When we first see jQuery, it can sort of look like wizard writing:

```
$('.plant-button').on('click', event => {
  event.preventDefault()
  console.log('someone clicked the plant button!')
})
```

`$`?  `.on()`? This must be some fancy new programming language designed for use with jQuery, right?

Really this is just standard javascript, but since we use jQuery so much it's a little more compact than usual: we set `$() = window.jQuery()` so we can call jQuery with a single character. If you want to prove it to yourself, open your browser's developer console and enter `window.jQuery === $()`. You should get back `true`.

So let's take this apart piece by piece:
`$(` -> Hey jQuery, I want you to find something for me.

 `'.plant-button'` -> Here's a CSS selector, for anything with the class `'plant-button'`

  `.on()` -> I want to set up an event listener. I'm going to tell you something to wait for, and what to do when it happens.

  `'click'` -> the event you're waiting for is a click

  `event => {}` -> here's the code I want you to run when the click happens. We'll call this function with a single parameter, an `event` that represents what just happened.

----

One part we have to address about jQuery just being Javascript is the somewhat magical `$` that appears all over. Clearly this is an eldritch symbol that calls the witch jQuery forth from her thousand-year slumber.

[jquery witch rears back in shock from her spellbook as A dark, mis-shapen creature, formed of no solid corpus but more a mass of tentacles, presses its head through a magical book (like there's a magic portal in the book), ]

Nope! It's just a function, like any other function. jQuery gets used so much that it's useful to be able to call it with a single character, and the dollar sign is easy to read in code. Few other software libraries get the distinction of a single-character name, but one of the other notable examples is Lodash, which is so useful for handling arrays and objects that most of the time it's bound to `_` (Get it, *Low Dash*?)

The line of jQuery we've been looking at is pretty complex. Let's start simple: setting up an environment where we can run some jQuery commands.

## Chapter 2: Eye of Newt, Toe of Frog, and other essential tools for mastering jQuery

jQuery is a library, which just means it's a bunch of pre-written javascript to make your code writing easier. jQuery is too big to easily copy and paste all of it into our own script file, so to use it in a web page you have two options:
1. Download all of jQuery and serve it as a file next to your own script.js file.
2. Link to a site where jQuery is served.

Option 1 means you can develop a fully working interactive site with no need for a web connection after you download jQuery, but unless you're learning Jquery on a flakey internet connection, it's usually more convenient to go with option 2.

When you go to link jQuery to your page (`https://code.jquery.com/` is a good resource) you'll see a few terms that deserve definition:

CDN - A content delivery network which serves your file by the fastest possible route.

Minified - Did you know that line breaks are (almost) never required in Javasvcript? If you remove them from your code, it will run just the same but the file will be slightly smaller. Minified jQuery does this and a few other changes to the code so it's a smaller file that's basically impossible to read. Crucially, no actual code is removed so *minified code always works exactly the same way as the unaltered code.*

jQuery Slim - While lots of Javascript code has a 'minified' version, jQuery slim is unique to this library: it makes the entire library faster and smaller by removing components you might not need, specifically  ajax, effects, and currently deprecated code. (If you don't know what these terms mean, don't worry about it.)

Okay enough book learning, let's summon jQuery to do our will! Grab the script link and drop it into your web page.

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
In our `script.js` file, we want to test that jQuery is working, so lets `console.log` something inside a basic jQuery `document.ready` function:

```
$( document ).ready( () => {
  console.log('jQuery is working!')
})
```

If jQuery isn't working, we should see something like `'Uncaught ReferenceError: $ is not defined'` in the web console.

Let's try using jQuery on the page. Open the web console and enter a line of code right into the console:

`$('h1').text('goodbye horses')`

What's this line of code doing? So, here's something really important to remember about jQuery, which I'll explain in a section called "Something Really Important to Remember about jQuery."

## Something Really Important to Remember about jQuery:

#### jQuery starts by finding something

[jQuery witch speaks into a magic mirror, saying "eye of frog and demon's bile, find me a header with a class of 'title'" as "<h1>" appears in the glass]
jQuery's simplest function is `$()` with some selector (like a class name) inside the parenthesis. What this does is search the page for matching elements. Everything you call afterward like `.html()` is a 'chained method' that happens after jQuery has found stuff on the page.
When trying to say what it is your code should do, if you start with a statement like "Add an H1 to the page that says 'hello'" you'll probably find it difficult to write in jQuery because you didn't start with finding something. It would be better to say 'Find an unordered list on the page, then add an H1 to the top of it.'

---------

Our code starts by finding the only visible HTML element on the page and setting its text to something new.

## Chapter 3: Let's Get Interactive

We've got jQuery working in our page, but once the h1 is changed the fun is over, and jQuery is really supposed to be about interactive web pages.

Let's create a page that the user can click on to make something happen. At first, this 'something' will be a console.log statement.

## Chapter 4: Double eventing, and events on parents
## Something Really Important to Remember about ~jQuery~ actually any programming
### start with the simplest version. No, simpler

Imagine you're building a car. because you live in the woods you have to order each part off the internet. When each part arrives you install and connect it, until you have a complete internal combustion engine in the shell of a car.

What do you think will happen when you turn the key the first time?

You're probably guessing  that the first time you turn the keys, nothing works like its supposed to. More interesting than the fact that you can't put together 1,000 pieces of an engine and have it work the first time, is how hard the car is to fix at this point.

Say you're turning the key and hearing nothing. It could be a dead battery. The battery connections could be corroded, the lock cylinder cracked, something could be draining the battery, or the starter could be broken.

## something really important to remember about jQuery
#### "I am known by many names"
A whole bunch of JQuery methods have multiple names. These aren't similar ways to do the same thing, they're identical functions you can call in at least two ways. The one I'm always running into is:
`$('.plant-button').on('click', event => {`
which is the same thing as:
`$('.plant-button').click(event => {`
The only lesson here is that, when you're looking at documentation or examples on StackOverflow, you might notice stuff like this. If so be aware it's possible that both versions work the same!

## something really important to remember about jQuery
#### when jQuery breaks, it usually happens silently

Let's take a look at some simple, broken, javascript:

```
  let name = 'steve'
  console.log('hi there, ' + nombre + '!')
```

Try running this code and your browser (or whatever you use to run Javascript) will immediately complain `Uncaught ReferenceError: nombre is not defined`

[panel 1: jQuery witch speaks to a clay golem. The golem is broad-shouldered with huge arms and massive fingers ending in claw-like points (think of clayface from Batman the Animated Series) with a smooth, rounded head and a pair of flat round eyes and no mouth. jQuery witch says "go and find a div with ID 'total-price', make its contents bold, give it a red border, and then double its size" as she points off to the right

panel 2: the golem looks at a bunch of html (don't draw the HTML I'll add it from a screenshot, just draw like, a blank sheet of paper the golem is looking at) and thinks to himself "there's nothing here with a matching ID"

panel 3: the golem returns to the witch's side
witch: did you complete your task?
golem: ...
witch: I'll take that as a yes
]

But what happens when we use jQuery to find something that doesn't exist?

`$('.wrong-class').html('<div>new content!</div>')`
(this code is supposed to find anything with the class `wrong-class` and set its HTML content to be a new div)

running this code gives us no errors at all, not even a warning that jQuery couldn't set the HTML of the element with `wrong-class` since it found no  matching elements!

Even worse, when finding sent to find something that doesn't exist jQuery will return with... something. Entering `$('.wrong-class')`
in your browser's console will return something like `m.fn.init [prevObject: m.fn.init(1), context: document, selector: ".wrong-class"]` instead of `null` or `undefined` which probably would have made more sense.

The best way to check whether jQuery really found something is to ask its length. This protects you from trying to do stuff when jQuery found nothing, *and* from accidentally selecting too much:

[the same setup as the previous strip, with the witch and the golem, but this time she's just finished using a tiny, leaf-shaped iron knife to cut a slit in the golems face where a mouth should be
witch: when I sent you to find divs, did you find anything?
golem: yes, I've got a list of everything I found.
witch: and how long is this list?
golem: zero]

In my sample page:
`$('.wrong-class').length` returns 0
`$('div').length` returns 15, there are a whole bunch of divs in my document!
`$('.right-class').length` returns 1
