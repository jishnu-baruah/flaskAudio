
---

# Flask Audio Recording and Upload App

This is a simple Flask web application that allows users to record audio using their browser and upload it to the backend for storage.

## Features

- Record audio directly from the browser using the HTML5 MediaRecorder API.
- Playback the recorded audio before uploading.
- Upload the recorded audio file to the Flask backend.
- Store the uploaded audio files in the `uploads/` directory.

## Project Structure

```
flask-audio-app/
│
├── app.py                    # Main Flask application
├── static/
│   └── js/
│       └── record.js          # JavaScript for recording audio
├── templates/
│   └── index.html             # Jinja template for the frontend
├── uploads/                   # Directory to store uploaded audio files
└── requirements.txt           # Python dependencies
```

## Requirements

- Python 3.x
- Flask

## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/flask-audio-app.git
cd flask-audio-app
```

2. Create and activate a virtual environment (optional but recommended):

```
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

3. Install the required dependencies:

```
pip install -r requirements.txt
```

## Running the Application

1. Start the Flask application:

```
python app.py
```

2. Open your browser and navigate to `http://127.0.0.1:5000/`.

3. You can now record audio, playback the recording, and upload it to the server.

## Usage

- **Start Recording**: Click the "Start Recording" button to begin capturing audio.
- **Stop Recording**: Click the "Stop Recording" button to stop capturing audio.
- **Playback**: Once recording is finished, the audio will be available for playback.
- **Upload**: After playback, click "Upload Audio" to send the file to the backend.

## File Upload Path

Uploaded audio files are stored in the `uploads/` directory by default. Make sure this folder exists or is created by the application.

## Dependencies

- Flask 2.0.1
- Jinja2 (used via Flask)
- HTML5 for audio recording

## Troubleshooting

### ModuleNotFoundError: No module named 'flask'

If you encounter this error, ensure that Flask is installed in your environment:

```
pip install Flask
```

If you're using a virtual environment, make sure it is activated before running the application.

## License

This project is licensed under the BSD-3-Clause License.

---
