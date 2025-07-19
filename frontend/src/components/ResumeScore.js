import React, { useEffect, useState } from 'react';
import { Card, Typography, LinearProgress, Avatar, Fade } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CelebrationIcon from '@mui/icons-material/Celebration';

const getScoreColor = (score) => {
  if (score >= 70) return 'success';
  return 'error';
};

const getMessage = (score) => {
  if (score >= 90) return "Excellent! Your resume stands out!";
  if (score >= 75) return "Great job! Just a few tweaks left.";
  if (score >= 60) return "Good! Keep improving your resume.";
  return "Let's work on your resume for a better score!";
};

const ResumeScore = ({ score }) => {
  const [displayScore, setDisplayScore] = useState(0);

  // Animate the score number
  useEffect(() => {
    let start = 0;
    const end = score;
    if (start === end) return;
    let increment = end > start ? 1 : -1;
    let timer = setInterval(() => {
      start += increment;
      setDisplayScore(start);
      if (start === end) clearInterval(timer);
    }, 15);
    return () => clearInterval(timer);
  }, [score]);
  
  return (
    <Fade in timeout={800}>
      <Card
        elevation={0}
        sx={{
          p: 6,
          mb: 6,
          mt: 2,
          textAlign: 'center',
          position: 'relative',
          overflow: 'visible',
          maxWidth: 500,
          minWidth: 350,
          mx: 'auto',
          boxShadow: 'none',
          border: 'none',
        }}>
        {score >= 85 && (
          <Avatar sx={{ bgcolor: 'gold', width: 72, height: 72, position: 'absolute', top: -36, left: 'calc(50% - 36px)' }}>
            <EmojiEventsIcon fontSize="large" />
          </Avatar>
        )}
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>Your Resume Score</Typography>
        <Typography variant="h1" color={getScoreColor(score)} sx={{ my: 2, fontWeight: 900, fontSize: '4rem' }}>
          {displayScore}/100
        </Typography>
        <LinearProgress
          variant="determinate"
          value={score}
          color={getScoreColor(score)}
          sx={{
            height: 20,
            Radius: 10,
            mb: 3,
            background: score >= 70
              ? 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)'
              : 'linear-gradient(90deg, #f8576c 0%, #f58529 100%)',
          }}
        />
        <Typography variant="h5" sx={{ mt: 3, fontWeight: 500 }}>
          {getMessage(score)}
        </Typography>
        {score >= 90 && (
          <CelebrationIcon color="secondary" sx={{ fontSize: 56, mt: 3, animation: 'spin 1.5s linear infinite' }} />
        )}
      </Card>
    </Fade>
  );
};

export default ResumeScore;
