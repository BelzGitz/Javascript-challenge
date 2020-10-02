
var tableData = data;

// Get a reference to the table body
 var tbody = d3.select("tbody");

 /// Step 1: Loop Through `data` and console.log ufo report object
tableData.forEach(function(ufoReport) {
 console.log(ufoReport);
 var row = tbody.append("tr");
});

// // Step 4: Use d3 to append 1 cell per ufo report
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
