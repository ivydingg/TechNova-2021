

window.onload = function () {
  const SECHAND = 0, NEW = 1;
  var className = ["mySlides_secHand", "mySlides_new"];
  var slideIndex = [1, 1];
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

  updateStars("Not Good Enough");
  document.getElementById("prev_sechand").addEventListener("click", function() { plusDivs(-1, SECHAND) }, false);
  document.getElementById("next_sechand").addEventListener("click", function() { plusDivs(1, SECHAND) }, false);
  document.getElementById("prev_new").addEventListener("click", function() { plusDivs(-1, NEW) }, false);
  document.getElementById("next_new").addEventListener("click", function() { plusDivs(1, NEW) }, false);
}


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