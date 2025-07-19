# Resume Analyzer

A powerful web application for analyzing resumes using NLP and machine learning techniques.

## Features

- Resume PDF parsing and text extraction
- NLP-based information extraction (Skills, Education, Experience, Certifications)
- Job role recommendations
- Recruiter dashboard with analytics
- Modern React.js frontend
- FastAPI backend

## Project Structure

```
resume-analyzer/
├── frontend/           # React.js frontend application
├── backend/           # FastAPI backend application
└── README.md
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Start the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

- `POST /api/analyze`: Upload and analyze a resume
- `GET /api/recommendations`: Get job role recommendations
- `GET /api/analytics`: Get recruiter analytics

## Technologies Used

- Frontend: React.js, Axios, Chart.js
- Backend: FastAPI, PyPDF2, SpaCy
- NLP: SpaCy for NER and information extraction

backend:

cd backend

venv\Scripts\activate

pip install -r requirements.txt

python main.py

frontend:

cd frontend

npm install

npm start
