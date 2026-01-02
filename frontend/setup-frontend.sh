#!/bin/bash

# ===============================================================================
# DizhTime Frontend Setup Script
# ===============================================================================
# Purpose: Install all required dependencies for the frontend
# Author: DizhTime Team <dizhtime@gmail.com>
# Lead: Ajai
# ===============================================================================

echo "🚀 Setting up DizhTime Frontend..."

# Install core dependencies
echo "📦 Installing core dependencies..."
npm install react-router-dom @heroicons/react

# Install UI and styling
echo "🎨 Installing UI and styling packages..."
npm install @headlessui/react lucide-react clsx
npm install react-toastify

# Install state management (optional for now)
echo "🔄 Installing state management..."
npm install @reduxjs/toolkit react-redux

# Install API and data fetching
echo "🌐 Installing API packages..."
npm install @tanstack/react-query axios

# Install forms and validation
echo "📝 Installing form packages..."
npm install react-hook-form @hookform/resolvers yup

# Install real-time features
echo "⚡ Installing real-time packages..."
npm install socket.io-client

# Install maps (for delivery tracking)
echo "🗺️ Installing maps packages..."
npm install @googlemaps/react-wrapper

# Install date handling
echo "📅 Installing date utilities..."
npm install date-fns

# Install dev dependencies
echo "🛠️ Installing dev dependencies..."
npm install -D @types/react-router-dom

# Create folder structure
echo "📁 Creating folder structure..."
mkdir -p src/components/{common,forms,layout,restaurant,order,delivery}
mkdir -p src/pages/{auth,customer,restaurant,delivery,admin}
mkdir -p src/store/{slices,api}
mkdir -p src/services
mkdir -p src/hooks
mkdir -p src/utils
mkdir -p src/types
mkdir -p src/styles
mkdir -p public/images/{logo,restaurants,food-items}

# Create environment file
echo "🔧 Creating environment file..."
cat > .env << 'EOF'
VITE_API_BASE_URL=http://localhost:3000/api
VITE_SOCKET_URL=http://localhost:3004
VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-key
EOF

echo "✅ Frontend setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Update the API keys in .env file"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Visit http://localhost:5173 to see your app"
echo ""
echo "🎯 Your frontend structure is now ready for development!"
