// makeGrid function creates the drawing "canvas" for user to create design
function makeGrid() {
    // user chosen number of rows as "height"
    const height = document.getElementById("inputHeight").value;
    // user chosen number of columns as "width"
    const width = document.getElementById("inputWidth").value;
    // creates table for "canvas" to draw on
    const canvas = document.getElementById("pixelCanvas");
    // makes sure there are no rows to start on "canvas"
    canvas.innerHTML = "";

    // for loop builds out "canvas" based on user-defined "height" and "width"
    for (let user_row = 0; user_row < height; user_row++) {
        const row = pixelCanvas.insertRow(); // inserts the rows
        for (let user_column = 0; user_column < width; user_column++) {
            const cell = row.insertCell(); // inserts the cells
            // looks for click event to call changeColor
            cell.addEventListener('click', function(changeColor) {
              changeColor.target.style.backgroundColor = colorPicker.value;
            });
        }
    }
    event.preventDefault();
}
