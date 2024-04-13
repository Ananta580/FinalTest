var noOfRows = 0;
var noOfCols = 0;
function generateTable() {
  noOfRows = parseInt(document.getElementById("t1").value);
  noOfCols = parseInt(document.getElementById("t2").value);

  // Added validation
  if (!(parseInt(noOfRows) > 0 && parseInt(noOfCols) > 0)) {
    alert("Give a valid input to row & column.");
    return;
  }

  // Storing buttons temporarily
  const addColButton = document.getElementById("b2");
  const addRowButton = document.getElementById("b3");

  // To generate table
  var table = document.createElement("table");
  table.setAttribute("id", "dynamicTable");
  table.style.borderCollapse = "collapse";
  table.style.marginBottom = "20px";

  // To generate table rows and columns
  for (var i = 0; i < noOfRows; i++) {
    var row = table.insertRow();
    row.setAttribute("id", "row" + i);
    for (var j = 0; j < noOfCols; j++) {
      var cell = row.insertCell();
      cell.style.border = "1px solid black";
      cell.style.padding = "10px 20px";
      cell.textContent = "Cell " + i + ", " + j;
    }
  }

  // Clear content and append buttons back
  document.body.innerHTML = "";
  document.body.appendChild(table);
  addColButton.style.marginRight = "10px";
  document.body.appendChild(addColButton);
  document.body.appendChild(addRowButton);
}

function addRow() {
  var table = document.getElementById("dynamicTable");
  var row = table.insertRow();
  row.setAttribute("id", "row" + noOfRows);
  for (var i = 0; i < noOfCols; i++) {
    var cell = row.insertCell();
    cell.style.border = "1px solid black";
    cell.style.padding = "10px 20px";
    cell.textContent = "Cell " + noOfRows + ", " + i;
  }
  noOfRows++;
}

function addColumn() {
  for (var i = 0; i < noOfRows; i++) {
    var row = document.getElementById("row" + i);
    if (row) {
      var cell = row.insertCell();
      cell.style.border = "1px solid black";
      cell.style.padding = "10px 20px";
      cell.textContent = "Cell " + i + ", " + noOfRows;
    }
  }
  noOfCols++;
}

document.getElementById("b1").addEventListener("onClick", generateTable);
document.getElementById("b2").addEventListener("onClick", addColumn);
document.getElementById("b3").addEventListener("onClick", addRow);
