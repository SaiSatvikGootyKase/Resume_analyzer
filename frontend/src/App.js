import React, { useState } from 'react';
import ResumeUpload from './components/ResumeUpload';
import AnalysisResults from './components/AnalysisResults';
import ResumeScore from './components/ResumeScore';
import './styles.css'; // Import the new CSS file

function App() {
  const [analysisResults, setAnalysisResults] = useState(null);

  // Dummy handlers to prevent errors
  const handleError = (msg) => alert(msg);
  const handleAnalysisComplete = (data) => setAnalysisResults(data);
  const setLoading = (loading) => {};
  
  return (
    <div className="startup-card">
      <div className="heading-serif">Resume Analyzer</div>
      {!analysisResults ? (
        <ResumeUpload
          onError={handleError}
          onAnalysisComplete={handleAnalysisComplete}
          setLoading={setLoading}
        />
      ) : (
        <>
          <AnalysisResults results={analysisResults} loading={false} error={null} />
          <div style={{ marginTop: '2.5rem' }}>
            {analysisResults.score !== undefined && (
              <ResumeScore score={analysisResults.score} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App; 