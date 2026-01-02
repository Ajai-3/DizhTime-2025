// ===============================================================================
// Admin Service Server - Main Entry Point
// ===============================================================================
// Purpose: Server startup and configuration for admin service
// Author: DizhTime Team <dizhtime@gmail.com>
// Lead: Ajai
// ===============================================================================

import app from './app';

const PORT = process.env.PORT || 3005;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Admin Service running on port ${PORT}`);
  console.log(`📊 Admin Dashboard: http://localhost:${PORT}`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Admin Service shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 Admin Service shutting down gracefully...');
  process.exit(0);
});
