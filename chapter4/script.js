$(document).ready(() => {
  $('.click-me').on('click', (event) => {
    event.preventDefault()
    $('h1').html('I am changed, transformed, transfigured!')
  })
})
