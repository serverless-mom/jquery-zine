$( document ).ready( () => {
  $('.plant-button').on('click', event => {
    event.preventDefault()
    console.log('someone clicked the plant button!')
  })
})
