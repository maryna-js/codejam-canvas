let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', fillCanvas4);

function fillCanvas4() {
    let matrix4x4 = [
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
    ];
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let width = matrix4x4[0].length;
    let height = matrix4x4.length;
    let scale = 1;
    canvas.width = 4;
    canvas.height = 4;
    for(let row = 0; row < height; row++) {
    for(let col = 0; col < width; col++) {
        ctx.fillStyle = '#' + matrix4x4[row][col];
        ctx.fillRect(col * scale, row * scale, scale, scale);
        }
    }
}


