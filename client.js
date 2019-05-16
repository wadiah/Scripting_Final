// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');

// our default array of dreams
const dreams = [
  'i saw a spooky web ghost once. he was scary',
  'please banish my web demons kind oni',
  'Hi'
];

// define variables that reference elements on our page
const dreamsList = document.getElementById('dreams');
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements['dream'];

// a helper function that creates a list item for a given dream
const appendNewDream = function(dream) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = dream;
  dreamsList.appendChild(newListItem);
}

// iterate through every dream and add it to our page
dreams.forEach( function(dream) {
  appendNewDream(dream);
});

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  // get dream value and add it to the list
  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value);

  // reset form
  dreamInput.value = '';
  dreamInput.focus();
};

document.getElementById('submit-dream').onclick = function() {
  document.getElementById("onisleep").style.display = "none";
  document.getElementById("oniawake").style.opacity = "0.8";
  document.getElementById("oniawake").style.display = "block";
  document.getElementById("he-sleep").innerHTML = "The oni is awake!";
  document.getElementById("feed-him").innerHTML = "RUN!<p>Oni-chan has listened to your words. Thank you for feeding him. He will help you ward off any future evil spirits.";
  
};
