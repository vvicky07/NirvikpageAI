#!/bin/bash

# Deployment script to fix nirvikgroup.com layout issues
echo "Preparing to deploy layout fixes to nirvikgroup.com..."

# Remove git lock if it exists
if [ -f .git/index.lock ]; then
    echo "Removing git lock file..."
    rm .git/index.lock
fi

# Add all changes
echo "Adding updated files..."
git add .

# Commit with descriptive message
echo "Committing layout fixes..."
git commit -m "Fix mobile layout and navigation issues

- Updated navbar with proper mobile responsiveness
- Fixed CSS fragmentation with corrected Tailwind config
- Improved hero section for mobile devices
- Added responsive spacing and typography
- Changed to light theme for better readability"

# Push to nirvik_page branch
echo "Deploying to GitHub Pages..."
git push origin nirvik_page

echo "Deployment initiated! GitHub Actions will rebuild your site."
echo "Your website at nirvikgroup.com will be updated in 2-3 minutes."