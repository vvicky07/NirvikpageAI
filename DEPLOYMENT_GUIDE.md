# Deployment Guide: Fix nirvikgroup.com Layout

## Step 1: Prepare Your Local Repository

Open your terminal/command prompt and navigate to your project folder, then run:

```bash
# Remove git lock if it exists
rm .git/index.lock

# Check current status
git status
```

## Step 2: Add All Updated Files

```bash
# Add all the fixed files
git add .

# Verify what will be committed
git status
```

## Step 3: Commit the Layout Fixes

```bash
git commit -m "Fix mobile layout and navigation issues

- Updated navbar with proper mobile responsiveness
- Fixed CSS fragmentation with corrected Tailwind config
- Improved hero section for mobile devices
- Added responsive spacing and typography
- Changed to light theme for better readability"
```

## Step 4: Deploy to GitHub Pages

```bash
# Push to your deployment branch
git push origin nirvik_page
```

## Step 5: Monitor Deployment

1. Go to your GitHub repository
2. Click on "Actions" tab
3. Watch the deployment workflow complete
4. Your website will be updated in 2-3 minutes

## Alternative: Manual File Updates

If git commands don't work, manually update these files in your GitHub repository:

### Key Files to Update:

1. **client/src/components/ui/navbar.tsx** - Fixed navigation component
2. **tailwind.config.ts** - Corrected CSS configuration
3. **client/src/index.css** - Updated base styles
4. **client/src/components/ui/hero-section.tsx** - Mobile-responsive hero

## Expected Results After Deployment:

✅ Proper navigation bar visible on mobile and desktop
✅ Clean, organized layout instead of fragmented content
✅ Responsive design that works on all screen sizes
✅ Professional appearance matching the development version
✅ Working mobile menu and smooth navigation

## Troubleshooting:

If deployment fails:
- Check GitHub Actions logs for errors
- Ensure all file paths are correct
- Verify Tailwind configuration is properly formatted

Your live website at nirvikgroup.com should display exactly like the working development version once deployment completes.