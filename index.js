var noOfRows = 0;
var noOfCols = 0;

// Storing buttons temporarily
const addColButton = document.getElementById("b2");
const addRowButton = document.getElementById("b3");

function generateTable() {
  noOfRows = parseInt(document.getElementById("t1").value);
  noOfCols = parseInt(document.getElementById("t2").value);

  // Added validation
  if (!(parseInt(noOfRows) > 0 && parseInt(noOfCols) > 0)) {
    alert("Give a valid input to row & column.");
    return;
  }

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
      addCellStyle(cell, i, j);
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
    addCellStyle(cell, noOfRows, i);
  }
  noOfRows++;
}

function addColumn() {
  for (var i = 0; i < noOfRows; i++) {
    var row = document.getElementById("row" + i);
    if (row) {
      var cell = row.insertCell();
      addCellStyle(cell, i, noOfRows);
    }
  }
  noOfCols++;
}

function addCellStyle(cell, row, col) {
  cell.style.fontSize = "14px";
  cell.style.border = "2px solid gray";
  cell.style.backgroundColor = "#f4f4f4";
  cell.style.padding = "10px 30px";
  cell.innerHTML =
    "Cell <b style='font-size:16px'>(" + row + "/" + col + ")</b>";
}
