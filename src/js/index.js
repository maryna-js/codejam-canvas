let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', fillCanvas4);

function fillCanvas4() {
    let requestURL = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        let matrix4x4 = request.response;
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
    };
}

let btn32 = document.getElementById('btn32');
btn32.addEventListener('click', fillCanvas32);

function fillCanvas32() {
    let requestURL = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        let flattenedRGBAValues = request.response.flat(2);
        let canvas = document.getElementById("canvas"); 
        let ctx = canvas.getContext("2d");
        canvas.height = 32;
        canvas.width = 32;
        const imgData = new ImageData(Uint8ClampedArray.from(flattenedRGBAValues), 32, 32);
        ctx.putImageData(imgData, 0, 0);
    };
}

let btn256 = document.getElementById('btn256');
btn256.addEventListener('click', fillCanvas256);

function fillCanvas256() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.onload = function() {
        canvas.width = 256;
        canvas.height = 256;
        ctx.drawImage(img, 0, 0);
    };
    img.src = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/image.png';
}


