# GitHub Pages Configuration

This file provides deployment information for GitHub Pages.

## Quick Start - GitHub Pages Deployment

### Step 1: Create a GitHub Repository

Option A - Personal Site:
```
Repository name: YOUR-USERNAME.github.io
```

Option B - Project Repository:
```
Repository name: portfolio (or any name)
```

### Step 2: Upload Files to GitHub

```bash
# Navigate to your project directory
cd Portfolio_Page

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under "Source", select **main** branch
5. Click **Save**

Your site will be published at:
- `https://YOUR-USERNAME.github.io` (for YOUR-USERNAME.github.io repo)
- `https://YOUR-USERNAME.github.io/REPO-NAME` (for other repos)

## Configuration for Non-Root Deployment

If deploying to a non-root path (e.g., `https://username.github.io/portfolio`):

Update `index.html` links if needed:
```html
<!-- Add this in the <head> tag if using a sub-path -->
<base href="/portfolio/">
```

## Custom Domain Setup (Optional)

1. Create a `CNAME` file in the root with your domain:
   ```
   yourdomain.com
   ```

2. In GitHub repository Settings > Pages:
   - Add your custom domain
   - Enable "Enforce HTTPS"

3. Update DNS records with your domain registrar to point to GitHub Pages

## CI/CD with GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        run: echo "Deployed to GitHub Pages"
```

## Troubleshooting

- **Site not appearing**: Wait 5-10 minutes for deployment
- **Old content showing**: Clear browser cache (Ctrl+Shift+Delete)
- **HTTPS not working**: Check GitHub Pages settings
- **Custom domain issues**: Verify DNS records

## Site Statistics

- Static files only (no server required)
- Instant deployment
- Free HTTPS certificate
- Global CDN distribution

## Next Steps

1. Customize all content with your information
2. Update contact email
3. Add your actual projects
4. Deploy to GitHub Pages
5. Share your portfolio!

For more information: https://pages.github.com/
