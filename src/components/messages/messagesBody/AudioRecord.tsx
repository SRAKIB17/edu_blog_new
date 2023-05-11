'use client'
import { useEffect, useRef } from 'react'

export default function AudioRecord({ recordButtonHandleRef }: { recordButtonHandleRef: any }) {
    const canvasRef = useRef<any>()
    const showRecordStatusRef = useRef<any>()

    useEffect(() => {
        const canvas: any = canvasRef.current

        let audioCtx: any;
        const canvasCtx = canvas.getContext("2d");

        //main block for doing the audio recording

        if (navigator.mediaDevices.getUserMedia) {
            console.log('getUserMedia supported.');

            const constraints = { audio: true };
            let chunks: any = [];

            let onSuccess = function (stream: any) {
                const mediaRecorder = new MediaRecorder(stream);
                visualize(stream);
                recordButtonHandleRef.current.onmousedown = () => {
                    mediaRecorder.start();
                    showRecordStatusRef.current.style.height = '50px'
                    console.log("recorder started");
                }
                recordButtonHandleRef.current.ontouchstart = () => {
                    mediaRecorder.start();
                    showRecordStatusRef.current.style.height = '50px'
                    console.log("recorder started");
                }
                recordButtonHandleRef.current.onmouseup = () => {
                    console.log("recorder stopped");
                    showRecordStatusRef.current.style.height = '0px'
                    mediaRecorder.stop();
                }
                recordButtonHandleRef.current.ontouchend = () => {
                    console.log("recorder stopped");
                    showRecordStatusRef.current.style.height = '0px'
                    mediaRecorder.stop();
                }

                mediaRecorder.onstop = function (e) {

                    // audio.controls = true;
                    const blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
                    chunks = [];
                    const audioURL = window.URL.createObjectURL(blob);
                    const audio = document.createElement('audio')
                    audio.src = audioURL;
                    audio.setAttribute('controls', "true")
                    document.getElementById('testMessages')?.appendChild(audio)
                    console.log("recorder stopped");
                }

                mediaRecorder.ondataavailable = function (e) {
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


            draw()

            function draw() {
                const WIDTH = canvas.width
                const HEIGHT = canvas.height;

                requestAnimationFrame(draw);

                analyser.getByteTimeDomainData(dataArray);

                canvasCtx.fillStyle = '#4d76fd';
                canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

                canvasCtx.lineWidth = 2;
                canvasCtx.strokeStyle = 'white';

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
        <div className='absolute bottom-[60px] z-20 w-full h-0 overflow-hidden transition-[2ms] bg-primary ' ref={showRecordStatusRef}>
            {/* <svg fill="#000000" version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg"
                width="30" height="30" viewBox="0 0 32 32">

                <rect width="32" height="32" fill="none" />
                <g>
                    <circle cx="16" cy="16" r="4" className="recordingStartMessage" fill="red" />
                    <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M16,22c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6 S19.3,22,16,22z" fill="#4d76fd" />
                </g>
            </svg> */}
            <canvas
                ref={canvasRef}
                className="visualizer overflow-hidden w-full h-full"
            >
            </canvas>
        </div>
    )
}
