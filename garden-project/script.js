const PLANTS = [
  {type: "tulip", stage: 1},
  {type: "rose", stage: 3}
]

function generatePlant(plant, index) {
  console.log(plant, index)
  let imagePlaceholder
  if (plant.stage === 1) {
    imagePlaceholder = "empty pot"
  } else if (plant.stage == 2) {
    imagePlaceholder = "single sprout"
  } else if (plant.stage >= 3 && plant.type === "rose") {
    imagePlaceholder = "rose"
  } else if (plant.stage >= 3 && plant.type === "tulip") {
    imagePlaceholder = "tulip"
  } else {
    imagePlaceholder = "nasturtium"
  }
  return (
    `
      <li class="plant-container" data-index="${index}">
        <div>${imagePlaceholder}</div>
        <button class="water-button">Water me!</button>
        <button class="trim-button">Trim me!</button>
      </li>
    `
  )
}

function preparePlantData(plantList) {
  const plants = plantList.map((plant, index) =>
    generatePlant(plant, index)
  )
  return plants.join("")
}

function renderGarden() {
  const plant = preparePlantData(PLANTS)
  $(".garden-plot").html(plant)
}

function getPlantIndex(plant) {
  const plantIndexString = $(plant).parent().attr("data-index")
  return parseInt(plantIndexString, 10)
}

function handleNewPlant() {
  $(".plant-button").on("click", (event) => {
    event.preventDefault()
    PLANTS.push({type: event.target.id, stage: 1})
    renderGarden();
  })
}

function handleWatering() {
  $(".water-button").on("click", (event) => {
    event.preventDefault()
    const plantIndex = getPlantIndex(event.target)
    PLANTS[plantIndex].stage++
    renderGarden()
  })
}

function handleTrim() {
  
}

function handleGarden() {
  renderGarden();
  handleNewPlant();
  handleWatering();
  // handleTrim();
}


$(handleGarden)
