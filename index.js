const app = "I don't do much."

function bumpCounter() {
  var counter = 0

  function addBump() {
    counter += 1
  }

  function getBumps() {
    return counter
  }
  return {
    addBump,
    getBumps
  }
}


function createAnimal(animalType) {

  function inner(deadlyDevice) {
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
}
