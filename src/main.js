// query selector variables go here 👇
let htmlImage = document.getElementById('motivationalImage')
let posterTitle = document.querySelector('h1')
let quote = document.querySelector('h3')
let randomPosterButton = document.querySelector('.show-random')
let makePosterButton = document.querySelector('.show-form')
let returnToMainButton = document.querySelector('.show-main')
let backToMainButton = document.querySelector('.back-to-main')
let savedPostersButton = document.querySelector('.show-saved')
let savePosterButton = document.querySelector('.save-poster')
// let createCustomPosterButton = document.querySelector('.make-poster')

let images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
let titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
let quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
let savedPosters = [];
let currentPoster = [];

// functions and event handlers go here 👇
createPoster()

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster() {
  //Create a poster and overwrite contents of 'currentPoster' with the image, title, and quote
  console.log('createPoster function')
  htmlImage.src = images[getRandomIndex(images)]
  currentPoster.splice(0, 1, htmlImage.src)
  posterTitle.innerText = titles[getRandomIndex(titles)]
  currentPoster.splice(1, 1, posterTitle.innerText)
  quote.innerText = quotes[getRandomIndex(quotes)]
  currentPoster.splice(2, 1, quote.innerText)
}

function showForm() {
  console.log('showForm function')
  document.querySelector('.main-poster').classList.add('hidden')
  document.querySelector('.poster-form').classList.remove('hidden')
}

function backToMain() {
  console.log('backToMan function')
  //Hide the Form, create a new poster, then show the main page
  document.querySelector('.poster-form').classList.add('hidden')
  document.querySelector('.saved-posters').classList.add('hidden')
  createPoster()
  document.querySelector('.main-poster').classList.remove('hidden')
}

function showSavedPosters() {
  console.log('showSavedPoster function')
  document.querySelector('.main-poster').classList.add('hidden')
  //forEach loop to add all posters to page
  savedPosters.forEach((posterObject) => {
    //Check if the element already exists
    if (document.getElementById(posterObject.id) === null) {
      //Create a new mini-poster element, a new img element, a new h2 element, and a new h4 element
      let newMiniPoster = document.createElement('mini-poster')
      let miniImage = document.createElement('img')
      miniImage.src = posterObject.imageURL
      let miniH2 = document.createElement('h2')
      miniH2.innerText = posterObject.title
      let miniH4 = document.createElement('h4')
      miniH4.innerText = posterObject.quote
      // //Assign an ID to the mini-poster element, add the classList to it, then append the image, h2, and h4
      newMiniPoster.id = posterObject.id
      newMiniPoster.classList.add('mini-poster')
      newMiniPoster.appendChild(miniImage)
      newMiniPoster.appendChild(miniH2)
      newMiniPoster.appendChild(miniH4)
      //add the mini-poster to the DOM
      let miniPostersElement = document.getElementById('postersGrid')
      miniPostersElement.appendChild(newMiniPoster)
    }
  })
  document.querySelector('.saved-posters').classList.remove('hidden')
}

function savePoster() {
  console.log('savePoster function')
  // Create a new Poster object and push into 'savedPosters'
  savedPosters.push(new Poster(currentPoster[0], currentPoster[1], currentPoster[2]))
}

// function createCustomPoster() {
//   console.log('createCustomPoster function')
//   htmlImage.src = document.getElementById('poster-image-url').value
//   currentPoster.splice(0, 1, htmlImage.src)
//   posterTitle.innerText = document.getElementById('poster-title').value
//   currentPoster.splice(1, 1, posterTitle.innerText)
//   quote.innerText = document.getElementById('poster-quote').value
//   currentPoster.splice(2, 1, quote.innerText)
//   // savePoster()
//   document.querySelector('.poster-form').classList.add('hidden')
//   document.querySelector('.main-poster').classList.remove('hidden')
// }

randomPosterButton.addEventListener('click', createPoster)
makePosterButton.addEventListener('click', showForm)
returnToMainButton.addEventListener('click', backToMain)
savedPostersButton.addEventListener('click', showSavedPosters)
backToMainButton.addEventListener('click', backToMain)
savePosterButton.addEventListener('click', savePoster)
// createCustomPosterButton.addEventListener('click', createCustomPoster)

