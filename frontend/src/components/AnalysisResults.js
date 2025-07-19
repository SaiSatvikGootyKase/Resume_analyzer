import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Chip,
  CircularProgress,
  Alert,
} from '@mui/material';
import {
  Star as StarIcon,
} from '@mui/icons-material';

const AnalysisResults = ({ results, loading, error }) => {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        {error}
      </Alert>
    );
  }

  const renderSection = (title, items, icon) => (
    <Paper sx={{ p: 3, height: '100%' }} elevation={0}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {icon}
        <Typography variant="h6" component="h3" sx={{ ml: 1 }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {items.map((item, index) => (
          <Chip
            key={index}
            label={item}
            variant="outlined"
            color="primary"
          />
        ))}
      </Box>
    </Paper>
  );

  return (
    <Box sx={{ mt: 4, fontSize: '1.35rem', textAlign: 'left', width: '100%' }}>
      <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 700, mb: 4 }}>
        Resume Analysis Results
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          {renderSection('Skills', results.skills, <StarIcon color="primary" />)}
        </Grid>
      </Grid>
      {results.recommendations && results.recommendations.length > 0 && (
        <Paper sx={{ p: 3, mt: 4, fontSize: '1.15rem' }} elevation={0}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            Recommended job
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {results.recommendations.map((recommendation, index) => (
              <Typography key={index} variant="body1">
                • {recommendation}
              </Typography>
            ))}
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default AnalysisResults; 