import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const ResumeUpload = ({ onAnalysisComplete, onError, setLoading }) => {
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (!file.name.endsWith('.pdf')) {
      onError('Please upload a PDF file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    
    try {
      setLoading(true);
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
      const response = await axios.post(`${API_URL}/api/analyze`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onAnalysisComplete(response.data);
    } catch (error) {
      onError(error.response?.data?.detail || 'Error analyzing resume');
    }
  }, [onAnalysisComplete, onError, setLoading]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    multiple: false,
  });

  return (
    <div className="upload-area" {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="upload-message">
        Drag and drop your resume here, or click to select
      </div>
      <div className="upload-note">
        Only PDF Files are accepted of size max(2MB)
      </div>
    </div>
  );
};

export default ResumeUpload; 