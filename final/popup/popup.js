window.onload = function () {
  //slideshow vals
  const SECHAND = 0, NEW = 1;
  var className = ["mySlides_secHand", "mySlides_new"];
  var slideIndex = [1, 1];
  
  //hardcoded dummy slideshow
  var usedNames = ["Adidas | Zip Up", "Grey Adidas Tshirt", "ADIDAS | Mens Ultimate Tee"];
  var usedUrls = ["https://poshmark.ca/listing/Adidas-Zip-Up-60c252337ec30cead433e3cf", 
                  "https://poshmark.ca/listing/Grey-Adidas-Tshirt-6125733d6e2846a0697dbf4f", 
                  "https://poshmark.ca/listing/ADIDAS-Mens-Ultimate-Tee-5e5c9426de696a1dd83f1fde"];
  var usedPrices = ["$17.19", "$26.99", "$26.99"];
  var newNames = ["Openly Gray T-Shirt", "Dinosaur Shirt, Pocket Shirt", "Girl Shirt"];
  var newUrls = ["https://www.etsy.com/ca/listing/857384253/girls-shirt-inspired-shirt?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=grey+shirt&ref=sr_gallery-1-7&organic_search_click=1&pro=1&frs=1", 
                  "https://www.etsy.com/ca/listing/734984538/openly-gray-t-shirt-color-options?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=grey+shirt&ref=sc_gallery-1-3&plkey=615bbcfe72ad0dea90fa26d54ba2f547343b487f%3A734984538", 
                  "https://www.etsy.com/ca/listing/1019180965/dinosaur-shirt-pocket-shirt-jurassic?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=grey+shirt&ref=sr_gallery-1-4&organic_search_click=1&pro=1&frs=1"];
  var newPrices = ["$26.00", "$25.00", "$20.00"];


  showDivs(slideIndex[SECHAND], SECHAND);
  showDivs(slideIndex[NEW], NEW);

  function plusDivs(n, div) {
    showDivs(slideIndex[div] += n, div);
  }

  function showDivs(n, div) {
    var i;
    var x = document.getElementsByClassName(className[div]);
    if (n > x.length) {slideIndex[div] = 1}
    if (n < 1) {slideIndex[div] = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex[div]-1].style.display = "block";  
    updateItemInfo(div);
  }

  function updateItemInfo(div){
    if (div == SECHAND){
      var itemName = document.getElementById('used-name');
      itemName.innerHTML = usedNames[slideIndex[div]-1];
      var itemPrice = document.getElementById('used-price');
      itemPrice.innerHTML = "Buy at " + usedPrices[slideIndex[div]-1];

      itemPrice.setAttribute('href', usedUrls[slideIndex[div]-1]);
    }
    else {
      var itemName = document.getElementById('new-name');
      itemName.innerHTML = newNames[slideIndex[div]-1];
      var itemPrice = document.getElementById('new-price');
      itemPrice.innerHTML = "Buy at " + newPrices[slideIndex[div]-1];

      itemPrice.href = newUrls[slideIndex[div]-1];
    }
  }

  function updateStars(description) {
    var stars = 0;
    if (description == "We Avoid")
      stars = 1;
    if (description == "Not Good Enough")
      stars = 2;
    if (description == "It's a Start")
      stars = 3;
    if (description == "Good")
      stars = 4;
    if (description == "Great")
      stars = 5;
    
    for (i = 0; i < 5; i++) {
      var idName = "star" + i;
      if (i < stars)
        document.getElementById(idName).className = "fa fa-star checked"; 
      else
        document.getElementById(idName).className = "fa fa-star"; 
    }

    var rateDesc = document.getElementById('rate-description');
    rateDesc.innerHTML = description;
  }  

  updateStars("Good");
  document.getElementById("prev_sechand").addEventListener("click", function() { plusDivs(-1, SECHAND) }, false);
  document.getElementById("next_sechand").addEventListener("click", function() { plusDivs(1, SECHAND) }, false);
  document.getElementById("prev_new").addEventListener("click", function() { plusDivs(-1, NEW) }, false);
  document.getElementById("next_new").addEventListener("click", function() { plusDivs(1, NEW) }, false);
}


chrome.tabs.query({
  active: true,
  lastFocusedWindow: true,
}, tabs => {
  var parser = document.createElement('a');
  parser.href = tabs[0].url;
  parser.hostname.replace('www.','');
});

/*var saveNote = document.querySelector('#save-note');
var deleteNotes = document.querySelector('#delete-notes');


// Populate Notes From Page
chrome.tabs.query({
  active: true,
  lastFocusedWindow: true
}, tabs => {
  let url = tabs[0].url;
  let notesList = document.getElementById("notes");

  // Grab the notes for the page
  chrome.storage.local.get(url, notes => {
    if (notes[url]) {
      for (var i = 0; i < notes[url].length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(notes[url][i]));
        notesList.appendChild(li);
      }
    }
  });
});


// Delete Notes
deleteNotes.onclick = function () {
  chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
  }, tabs => {
    let url = tabs[0].url;
    chrome.storage.local.get(url, notes => {
      notes[url] = []
      chrome.storage.local.set(notes);
      chrome.tabs.sendMessage(tabs[0].id, {notes: notes[url], action: "clear"}, _ => {
        console.log("Cleared page");
        location.reload();
      });
    });
  });
}

// Save Note
saveNote.onclick = function () {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    // Something
    let url = tabs[0].url;
    chrome.storage.local.get(url, notes => {
      if (notes[url])
        notes[url].push(note);
      else
        notes[url] = [note];
      chrome.tabs.sendMessage(tabs[0].id, {notes: [note], action: "add"}, _ => {
        console.log("Added Note: '"+ note);
      });
      chrome.storage.local.set(notes);
    });
  });
  location.reload();
};*/