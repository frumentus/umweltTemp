
function seedRandom(seed) {
  // Simple seed-based random number generator
  let state = seed % 2147483647;
  if (state <= 0) state += 2147483646;
  
  return () => {
      state = (state * 16807) % 2147483647;
      return (state - 1) / 2147483646;
  };
}



function getseed(g,t) {
  g = g.innerHTML == "_" ? 90000 : parseInt("9"+g.innerHTML+"00")
  t = t.innerHTML == "_" ? 8000 : parseInt("8"+t.innerHTML+"0")
  return g+t
}


function shuffleArray(arr, seed) {
  // Create a seeded random number generator
  const random = seedRandom(seed);

  // Start from the last element and swap with a randomly selected element before it
  for (let i = arr.length - 1; i > 0; i--) {
      // Generate a random index to swap with the current element
      const j = Math.floor(random() * (i + 1));

      // Swap arr[i] with arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}





// Shuffle function using seedrandom
function shuffleWithSeed(g,t,idx) {

  const seed = getseed(g,t)

  console.log(seed)


  if(idx.innerHTML == "_") {idx = 0}
  else {idx = parseInt(idx.innerHTML)}


  var rng = seedRandom(seed);
  var shuffledArray = [...items];

  console.log()
  shuffledArray = doshuffleArray(shuffledArray,rng)

  console.log(shuffledArray)
  // lastcliclk = shuffledArray[idx];
  shuffledArray[idx].click()
}


function doshuffleArray(arr,rng) {
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index to swap with the current element
    const j = Math.floor(rng() * (i + 1));

    // Swap arr[i] with arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}


// // Call the shuffle function with the array and seed
// var shuffledArray = shuffleWithSeed(myArray, seed);

// // Display the shuffled array
// console.log(shuffledArray);