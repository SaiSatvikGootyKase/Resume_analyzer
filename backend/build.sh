#!/bin/bash
set -e

echo "Updating pip..."
pip install --upgrade pip

echo "Installing setuptools and wheel..."
pip install --upgrade setuptools wheel

echo "Installing Python dependencies..."
pip install -r requirements.txt

echo "Verifying SpaCy model installation..."
python -c "import spacy; nlp = spacy.load('en_core_web_sm'); print('SpaCy model loaded successfully')"

echo "Build completed successfully!" 