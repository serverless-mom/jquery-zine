## Who is this book for?

If you understand Javascript okay but are struggling with jQuery, this book is for you!

If you've never written a line of Javascript before, some of this book will be a little off-base but you should be able to do all the exercises. If you'd like to learn some Javascript before getting started, I recommend the [Basic Javascript](https://www.freecodecamp.org/map) course at [freecodecamp.org](https://www.freecodecamp.org).

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

Really this is just standard javascript, but since we use jQuery so much it's a little more compact than usual: we set `$() = window.jQuery()` so we can call jQuery with a single character. If you want to prove it to yourself, open your browser's developer console and enter `window.jQuery === $`. You should get back `true`.

So let's take this apart piece by piece:
`$(` -> Hey jQuery, I want you to find something for me.

 `'.plant-button'` -> Here's a CSS selector, for anything with the class `'plant-button'`

  `.on()` -> I want to set up an event listener. I'm going to tell you something to wait for, and what to do when it happens.

  `'click'` -> the event you're waiting for is a click

  `event => {}` -> here's the code I want you to run when the click happens. We'll call this function with a single parameter, an `event` that represents what just happened.

----

One part we have to address about jQuery just being Javascript is the somewhat magical `$` that appears all over. Clearly this is an eldritch symbol that calls the witch jQuery forth from her thousand-year slumber.

[jquery witch rears back in shock from her spellbook as A dark, misshapen creature, formed of no solid corpus but more a mass of tentacles, presses its head through a magical book (like there's a magic portal in the book), ]

Nope! It's just a function, like any other function. jQuery gets used so much that it's useful to be able to call it with a single character, and the dollar sign is easy to read in code. Few other software libraries get the distinction of a single-character name, but one of the other notable examples is Lodash, which is so useful for handling arrays and objects that most of the time it's bound to `_` (Get it, *Low Dash*?)

The line of jQuery we've been looking at is pretty complex. Let's start simple: setting up an environment where we can run some jQuery commands.

## Chapter 2: Eye of Newt, Toe of Frog, and other essential tools for mastering jQuery

jQuery is a library, which just means it's a bunch of pre-written javascript to make your code writing easier. jQuery is too big to easily copy and paste all of it into our own script file, so to use it in a web page you have two options:
1. Download all of jQuery and serve it as a file next to your own script.js file.
2. Link to a site where jQuery is served.

Option 1 means you can develop a fully working interactive site with no need for a web connection after you download jQuery, but unless you're learning Jquery on a flakey internet connection, it's usually more convenient to go with option 2.

When you go to link jQuery to your page ([code.jquery.com](https://code.jquery.com/) is a good resource) you'll see a few terms that deserve definition:

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

## Something Really Important to Remember about ~jQuery~ actually any programming
### start with the simplest version. No, simpler

Imagine you're building a car. because you live in the woods you have to order each part off the internet. When each part arrives you install and connect it, until you have a complete internal combustion engine in the shell of a car.

What do you think will happen when you turn the key the first time?

You're probably guessing  that the first time you turn the keys, nothing works like its supposed to. More interesting than the fact that you can't put together 1,000 pieces of an engine and have it work the first time, is how hard the car is to fix at this point.

Say you're turning the key and hearing nothing. It could be a dead battery. The battery connections could be corroded, the lock cylinder cracked, something could be draining the battery, or the starter could be broken.

We always want to start with code that does the simplest possible thing. If it's supposed to trigger an animation, play a sound, and show a message, start with code that *just* shows a message

-------------
Let's build some HTML with a big, obvious target for clicking. I don't want to use any fancy CSS to style the page, so we'll give a long bit of text to click on:
```
<!DOCTYPE html>
<html>
    <head>
        <title>Our First jQuery Page</title>
    </head>
    <body>
      <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script src="./script.js"></script>
      <h1>hello world!</h1>
      <p class="click-me">click me and something good will happen</p>
    </body>
</html>
```
Now some JQuery to say 'when anything with class `click-me` gets clicked, log "I caught a click!"'

```
$(document).ready(() => {
  $('.click-me').on('click', (event) => {
    event.preventDefault()
    console.log('I caught a click!')
  })
})
```
You can copy/paste this code right now and see it working, but when you're done come back her and we'll break it apart line-by-line

`$(document).ready(() => {`
  This makes sure we're waiting for the document to be ready before we start trying to add stuff to it.

`  $('.click-me').on('click', (event) => {`
  A lot happens on this line!
  * we use jQuery to find anything with the class `click-me`,
  * then we add an event listener with `.on()`. We're going to give `.on()` two arguments: a kind of event to listen for, and a function to call when that event happens.
  * We say we want to listen for a `'click'`
  * we give `.on()` a function, which takes one parameter, an `event` that tells us a bit about who got clicked

`    event.preventDefault()`
  "whatever you would normally do when this thing got clicked, don't do it" since we put this listener on a paragraph `p` element, we really don't need this line because by default clicking on a `<p>` does... nothing. But for reasons I'll cover in chapter *XX*, it's better to do this every time

`    console.log('I caught a click!')`
  The only thing our click handler does is log the fact that it got a click


One question you might ask about this code, if you've written any jQuery before: why do we say `$('.click-me').on('click'` instead of `$('.click-me').click`?

## something really important to remember about jQuery
#### "I am known by many names"
A whole bunch of JQuery methods have multiple names. These aren't similar ways to do the same thing, they're identical functions you can call in at least two ways. The one I'm always running into is:
`$('.plant-button').on('click', event => {`
which is the same thing as:
`$('.plant-button').click(event => {`
The only lesson here is that, when you're looking at documentation or examples on StackOverflow, you might notice stuff like this. If so be aware it's possible that both versions work the same!
------------------

Right now, when we load our page, we need to open the console to see any result from clicking on the text. In the next chapter we'll output these changes to a page.

## Chapter 4: actually changing the page
### This is a really short chapter.

We're going to make a pretty tiny change to our javascript to actually change the page
```
$(document).ready(() => {
  $('.click-me').on('click', (event) => {
    event.preventDefault()
    $('h1').html('I am changed, transformed, transfigured!')
  })
})
```
There's only one line changed:
`$('h1').html('I am changed, transformed, transfigured!')`
This line starts by finding all the H1's in the page and changing their html to new text.
If you run this code with an HTML page in the, you'll need to refresh the page to reset the H1 back to its initial value.

I'd like to make a little change to the HTML at the same time. What I'd like is to have two places you can click to change the H1. Let's add a second item with the `click-me` class:

```
<!DOCTYPE html>
<html>
    <head>
        <title>Our First jQuery Page</title>
    </head>
    <body>
      <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script src="./script.js"></script>
      <h1>hello world!</h1>
      <p class="click-me">click me and something good will happen</p>
      <h2>no clicking me!</h2>
      <a class="click-me">I too may be clicked</a>
    </body>
</html>
```

Look back up and ask what we need to change about the pages Javascript to make both these areas click-able.

...

....

......

Actually we don't need to change anything! the selector for our click handler started with the selector `$('.click-me')` which like all class-based selectors really says "anything on the page with this class."

* anyway I didn't have much more to do in this chapter. Let's make something cool already!


## Chapter 5: Lets plant a garden
### in which our heroine uses jQuery to create something nice

Most guides to JQuery, and front-end javascript in general, make the same 'basic app,' a to-do list app that lets you create, remove, and modify individual items in an overall list.

It's a nice application but not very 'witchy', so let's do something all witches should know how to do: tend a garden.

Our garden will be very simple, it just lets us plant 3 types of plant, water them to make them grow, and trim them.

Here's what our finished version will look like.

[screenshot of the garden app]

Let's take a look at the HTML of our garden

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



### "Spells for many occasions" (section for after explanation of event listeners)

Because event listeners point to classes, it's possible to point to multiple elements on the page with the same listener. How does this work?

In a new directory, create a new directory with a file called `index.html` and a file called `index.js`. Paste this code in the HTML file:

```
<!DOCTYPE html>
<html>
    <head>
        <title>A Few Small Spells</title>
    </head>
    <body>
      <h1></h1>
      <button class="summon-darkness">Summon Darkness</button>
      <button class="dispatch-bats">Dispatch Bats</button>
      <button class="dispatch-bats">More Bats!</button>
      <button class="reset">Reset</button>
      <div class="spell-box"></div>
      <script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>
      <script src="./index.js"></script>
    </body>
</html>
```

And this code in the JavaScript file:

```
$(".summon-darkness").on("click", event => {
  $(".spell-box").append("Darkness!")
})

$(".dispatch-bats").on("click", event => {
  $(".spell-box").append("Bats!")
})


$(".reset").on("click", event => {
  $(".spell-box").html("")
})
```
If you open the HTML file in your browser, you'll see four buttons. Play around with them and see that you can make text appear and disappear by clicking buttons.

Now take a closer look at the JavaScript file. Wait a minute, you may be thinking, there are four buttons on the page, but only three event listeners! So how is it that you can trigger an event from all four buttons. Take a look at the `Dispatch Bats` and `More Bats!` buttons in the HTML. They both have `class="dispatch-bats"`. This means that when  *either* button is clicked, the following code runs:

```
$(".dispatch-bats").on("click", event => {
  $(".spell-box").append("Bats!")
})
```

## Why won't this work?
Event Listeners on stuff that isn't there yet
```
function setupWatering() {
  $(".water-button").on("click", (event) => {
    event.preventDefault()
    const plantIndex = getPlantIndex(event.target)
    PLANTS[plantIndex].stage++
    renderGarden()
  })
}
```
this code seems like it work! but if I add any *new* divs that contain `<button class="water-button">water me!</button>` *after* we added a click handler, they won't work. This kind of flies in the face of what we've learned before: click handlers should tend to stick around, and if you give them a class to target they should target all things with that class.

The problem here is that we started with a selector for the button which, presumably, is inside some div showing a plant. Let's look at another way to write this selector that looks really similar:

```
function setupWatering() {
  $("body").on("click", ".water-button",(event) => {
    //the code inside the handler would be identical
  })
}
```

now it's saying 'hey HTML body, any time something gets clicked inside you, *and* the thing clicked had the class water-button, do this'. But this code will work for buttons we add later.

Click handlers are like patient spirits, and the very first thing we give them is the house they're going to haunt. If we start with `'body'` then the spirit will see clicks anywhere on the page. But if we start with the button name, it won't see other new buttons added later to haunt them, even if they meet the criteria.
## Taming the Strange Evils of Multiple Event Listeners (for later)

As you start working with event listeners, you may begin to notice that they can harbor strange and troubling side effects. Perhaps you find that event listener you intended to add once is in fact added thrice!

The best way to diagnose this is to add a `console.log` statement inside your click handler, then check to see if the handler is 'firing' more than once.