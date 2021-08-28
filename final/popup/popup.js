var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  console.log(n);
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

window.onload = function () {
  document.getElementById("prev").addEventListener("click", function() { plusDivs(-1) }, false);// plusDivs(-1));//.onclick = plusDivs(-1);
  document.getElementById("next").addEventListener("click", function() { plusDivs(1) }, false);// plusDivs(1));//.onclick = plusDivs(1);
}

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