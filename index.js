function generateTable() {
  var noOfRows = parseInt(document.getElementById("t1").value);
  var noOfCols = parseInt(document.getElementById("t2").value);

  if (!(parseInt(noOfRows) > 0 && parseInt(noOfCols) > 0)) {
    alert("Give a valid input to row & column.");
    return;
  }

  const addColButton = document.getElementById("b2");
  const addRowButton = document.getElementById("b3");

  var table = document.createElement("table");
  table.setAttribute("id", "dynamicTable");
  table.style.borderCollapse = "collapse";
  table.style.marginBottom = "20px";

  for (var i = 0; i < noOfRows; i++) {
    var row = table.insertRow();
    for (var j = 0; j < noOfCols; j++) {
      var cell = row.insertCell();
      cell.style.border = "1px solid black";
      cell.style.padding = "10px 20px";
      cell.textContent = "Cell " + i + ", " + j;
    }
  }

  document.body.innerHTML = "";
  document.body.appendChild(table);
  document.body.appendChild(addColButton);
  document.body.appendChild(addRowButton);
}

document.getElementById("b1").addEventListener("onClick", generateTable);
