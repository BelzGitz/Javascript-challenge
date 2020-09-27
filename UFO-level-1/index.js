
var tableData = data;
// Get a reference to the table body
 var tbody = d3.select("tbody");
 /// Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
tableData.forEach(function(ufoReport) {
 console.log(ufoReport);
 var row = tbody.append("tr");
});

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
//Append a cell to the tabledata for each value in the UFO sighting  report object
  var cell = tbody.append("td");
  cell.text(value);
  });

//  Getting a reference to the button on the page with the id property set to `click-me`
  var button = d3.select("#filter-btn");

// Create event handlers for clicking the button
button.on("click", function() {
// prevent page from refreshing
    d3.event.preventDefault();
// Select the input element and get the raw HTML node
     var inputElement = d3.select("#datetime");

//  Get the value property of the input element
     var inputValue = inputElement.property("value");
// Print the value to the console
     console.log(inputValue);
     


  
})


  

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  // d3.select("h1>span").text(inputValue);



// We can use the `on` function in d3 to attach an event to the handler function
// button.on("click", handleClick);

// You can also define the click handler inline
// button.on("click", function() {
  // console.log("Hi, a button was clicked!");
  // console.log(d3.event.target);
// });

// Event handlers are just normal functions that can do anything you want
// button.on("click", function() {
//   d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
// });

// Input fields can trigger a change event when new text is entered.
// inputField.on("change", function() {
//   var newText = d3.event.target.value;
//   console.log(newText);
// });

