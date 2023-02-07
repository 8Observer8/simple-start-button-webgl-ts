import { mat4, vec3 } from "gl-matrix";
import { gl, initWebGLContext } from "./webgl-context.js";

const startButton = document.getElementById("startButton");
startButton.onclick = onStartButtonClick;

function onStartButtonClick() {
    console.log("Start game");
}

function draw() {
    gl.clear(gl.COLOR_BUFFER_BIT);
}

function init() {
    if (!initWebGLContext("renderCanvas")) return;

    gl.clearColor(0.2, 0.3, 0.1, 1);

    startButton.hidden = false;

    const startButtonHalfWidth = startButton.clientWidth / 2;
    const startButtonHalfHeight = startButton.clientHeight / 2;

    const startButtonPosX = gl.canvas.clientWidth / 2 - startButtonHalfWidth;
    startButton.style.left = `${startButtonPosX}px`;

    const startButtonPosY = gl.canvas.clientHeight / 2 - startButtonHalfHeight;
    startButton.style.top = `${startButtonPosY}px`;

    draw();
}

init();
