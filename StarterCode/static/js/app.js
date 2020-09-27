
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


// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
//Append a cell to the tabledata for each value in the UFO sighting  report object
  var cell = row.append("td");
  cell.text(value);
  });
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
// Create filtered data 
      var filteredData = tableData.filter(function(sighting){
           return sighting.datetime === inputValue;
      });

// clear data in tbody
      tbody.text('');

// populate the table with filteredData
      filteredData.forEach(function(filteredRecord){
// append fileteredrecord to row on tbody
       var row=tbody.append("tr");

//loop throught the filteredRecord and use d3 to append row 
        Object.entries(filteredRecord).forEach(function([key,value]){
             console.log(key,value);
             var cell = row.append("td")
             cell.text(value);
        })
      })
               
});
