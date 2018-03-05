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
