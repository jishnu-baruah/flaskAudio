let chunks = [];
let recorder;
let audioBlob;

const startRecordBtn = document.getElementById("start-record-btn");
const stopRecordBtn = document.getElementById("stop-record-btn");
const audioPlayback = document.getElementById("audio-playback");
const uploadBtn = document.getElementById("upload-btn");
const audioFileInput = document.getElementById("audio-file");

startRecordBtn.addEventListener("click", async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder = new MediaRecorder(stream);
    
    recorder.ondataavailable = (e) => {
        chunks.push(e.data);
    };
    
    recorder.onstop = () => {
        audioBlob = new Blob(chunks, { type: "audio/webm" });
        chunks = [];

        const audioURL = URL.createObjectURL(audioBlob);
        audioPlayback.src = audioURL;

        // Prepare for upload
        const file = new File([audioBlob], "recording.webm", { type: "audio/webm" });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        audioFileInput.files = dataTransfer.files;

        uploadBtn.disabled = false;
    };

    recorder.start();
    startRecordBtn.disabled = true;
    stopRecordBtn.disabled = false;
});

stopRecordBtn.addEventListener("click", () => {
    recorder.stop();
    stopRecordBtn.disabled = true;
    startRecordBtn.disabled = false;
});
