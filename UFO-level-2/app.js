// / from data.js
 var tableData = data;

/// Get a reference to the table body
var tbody = d3.select("tbody");
  
  ///  Loop Through `data` and console.log each UFO sighting report object
function renderTable(data){

  /// clear data in tbody
      tbody.html('');
 
  // / populate the table with filteredData
      data.forEach(function(filteredSightings){
        // console.log(filteredSightings)

  /// append fileteredrecord to row on tbody
         var row=tbody.append("tr");
  
  /// loop throught the filteredRecord and use d3 to append row 
          Object.entries(filteredSightings).forEach(function([key,value]){
              //  console.log(key,value);
               var cell = row.append("td")
               cell.text(value);
          });
        });
  }

///  Create event handlers for clicking the filter button
 var button = d3.select ("#filter-btn");
 button.on("click",() => {
console.log("button-click")

  // / prevent page fromrefreshing
  d3.event.preventDefault();
 
 /// Select the input elements and get the raw HTML node
   var datetimeInput = d3.select("#datetime");
   var cityInput = d3.select("#city");
   var stateInput = d3.select("#state");
   var countryInput = d3.select("#country");
   var shapeInput = d3.select("#shape");
 
 /// Get the value property of the input elements
   var datetimeValue = datetimeInput.property("value");
   var cityValue = cityInput.property("value");
   var stateValue = stateInput.property("value");
   var countryValue = countryInput.property("value");    
   var shapeValue = shapeInput.property("value");
// console.log("datetimeValue", datetimeValue)
 

/// Create filteredData
  var filterData = tableData
      
 /// create if statements
  if (datetimeValue != "") {
    filterData = filterData.filter (function (sighting) {
       return sighting.datetime == datetimeValue;
      });
    }
    //  console.log(filterData)
    
 if (cityValue != "") {
    filterData = filterData.filter(function (sighting) {
     return sighting.city === cityValue;
     });
    }
 
   if (stateValue != "") {
    filterData = filterData.filter(function (sighting) {
     return sighting.state === stateValue;
     });
    }
 
   if (countryValue != "") {
    filterData = filterData.filter(function (sighting) {
     return sighting.country === countryValue;
     });
   }
 
   if (shapeValue != "") {
    filterData = filterData.filter(function (sighting) {
      return sighting.shape === shapeValue;
     });

    }
     console.log(filterData)
     renderTable(filterData)
      
    })
    
  renderTable(data) 
  