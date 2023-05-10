'use client'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Test() {
    useEffect(() => {
        // set up basic variables for app

        const recordButton: any = document.querySelector('.record');
        const stopButton: any = document.querySelector('.stop');



        const canvas: any = document.querySelector('.visualizer');


        // const mainSection = document.querySelector('.main-controls');

        // disable stop button while not recording

        stopButton.disabled = true;

        // visualiser setup - create web audio api context and canvas

        let audioCtx: any;
        const canvasCtx = canvas.getContext("2d");

        //main block for doing the audio recording

        if (navigator.mediaDevices.getUserMedia) {
            console.log('getUserMedia supported.');

            const constraints = { audio: true };
            let chunks = [];

            let onSuccess = function (stream: any) {
                const mediaRecorder = new MediaRecorder(stream);
                visualize(stream);

                recordButton.onclick = function () {
                    mediaRecorder.start();
                    console.log(mediaRecorder.state);
                    console.log("recorder started");
                    recordButton.style.background = "red";

                    stopButton.disabled = false;
                    recordButton.disabled = true;
                }

                stopButton.onclick = function () {
                    mediaRecorder.stop();
                    console.log(mediaRecorder.state);
                    console.log("recorder stopped");
                    recordButton.style.background = "";
                    recordButton.style.color = "";
                    // mediaRecorder.requestData();

                    stopButton.disabled = true;
                    recordButton.disabled = false;
                }

                mediaRecorder.onstop = function (e) {

                    // const clipContainer = document.createElement('article');
                    // const audio = document.createElement('audio');
                    // const deleteButton = document.createElement('button');

                    // clipContainer.classList.add('clip');
                    // audio.setAttribute('controls', '');
                    // deleteButton.textContent = 'Delete';
                    // deleteButton.className = 'delete';


                    // clipContainer.appendChild(audio);
                    // clipContainer.appendChild(clipLabel);
                    // clipContainer.appendChild(deleteButton);
                    // soundClips.appendChild(clipContainer);

                    // audio.controls = true;
                    // const blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
                    // chunks = [];
                    // const audioURL = window.URL.createObjectURL(blob);
                    // // audio.src = audioURL;
                    // console.log("recorder stopped");
                    // deleteButton.onclick = function (e) {
                    //     e.target.closest(".clip").remove();
                    // }

                }

                mediaRecorder.ondataavailable = function (e) {
                    console.log(e.data)
                    chunks.push(e.data);
                }
            }

            let onError = function (err: any) {
                console.log('The following error occured: ' + err);
            }

            navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

        } else {
            console.log('getUserMedia not supported on your browser!');
        }

        function visualize(stream: any) {
            if (!audioCtx) {
                audioCtx = new AudioContext();
            }

            const source = audioCtx.createMediaStreamSource(stream);

            const analyser = audioCtx.createAnalyser();
            analyser.fftSize = 2048;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            source.connect(analyser);
            //analyser.connect(audioCtx.destination);

            draw()

            function draw() {
                const WIDTH = canvas.width
                const HEIGHT = canvas.height;

                requestAnimationFrame(draw);

                analyser.getByteTimeDomainData(dataArray);

                canvasCtx.fillStyle = 'rgb(200, 200, 200)';
                canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

                canvasCtx.lineWidth = 2;
                canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

                canvasCtx.beginPath();

                let sliceWidth = WIDTH * 1.0 / bufferLength;
                let x = 0;


                for (let i = 0; i < bufferLength; i++) {

                    let v = dataArray[i] / 128.0;
                    let y = v * HEIGHT / 2;

                    if (i === 0) {
                        canvasCtx.moveTo(x, y);
                    } else {
                        canvasCtx.lineTo(x, y);
                    }

                    x += sliceWidth;
                }

                canvasCtx.lineTo(canvas.width, canvas.height / 2);
                canvasCtx.stroke();

            }
        }

    }, [])
    return (
        <main >

            <section className='col-start-2 col-end-12 pt-10' >
                <div className="wrapper">

                    <section className="main-controls">

                        <canvas className="visualizer" height="60px"></canvas>


                        <div id="buttons">
                            <button className="record">Record</button>
                            <button className="stop">Stop</button>
                        </div>
                    </section>

                    <section className="sound-clips">


                    </section>

                </div>


            </section>

        </main>
    )
}
