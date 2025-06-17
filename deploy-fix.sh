#!/bin/bash

# Deploy fix script for nirvikgroup.com
# Addresses fragmented layout and CSS compilation issues

echo "Building Nirvik Group website..."

# Set production environment
export NODE_ENV=production

# Clean previous builds
rm -rf docs/

# Build the application with proper CSS compilation
npx vite build --config client/vite.config.ts --minify terser

# Verify build output
if [ -d "docs" ] && [ -f "docs/index.html" ]; then
    echo "Build completed successfully"
    echo "Files generated in docs/ directory:"
    ls -la docs/
else
    echo "Build failed - docs directory not created"
    exit 1
fi

echo "Ready for deployment to nirvikgroup.com"