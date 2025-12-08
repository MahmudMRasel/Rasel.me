# How to Deploy to Netlify

## Method 1: Deploy via Netlify Website (Easiest)

### Step 1: Build Your Project
1. Open terminal in your project folder
2. Run: `npm run build`
3. This creates a `dist` folder with your production files

### Step 2: Deploy via Netlify Drop
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop your `dist` folder onto the page
3. Your site will be live in seconds!

---

## Method 2: Deploy via Netlify CLI (Recommended)

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```
This will open your browser to authenticate.

### Step 3: Deploy
```bash
# Build the project first
npm run build

# Deploy to Netlify
netlify deploy --prod
```

### Step 4: Follow the Prompts
- If it's your first time, Netlify will ask you to create a new site
- Choose a site name or let Netlify generate one
- Your site will be live at: `https://your-site-name.netlify.app`

---

## Method 3: Deploy via Git (Best for Continuous Deployment)

### Step 1: Push to GitHub/GitLab
1. Create a repository on GitHub or GitLab
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub/GitLab)
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Step 3: Automatic Deployments
- Every time you push to your repository, Netlify will automatically rebuild and deploy
- You can also set up branch previews for pull requests

---

## Important Notes

### Build Settings (Already Configured in netlify.toml)
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18

### Environment Variables (if needed)
If you need environment variables:
1. Go to Site settings → Environment variables
2. Add your variables there

### Custom Domain
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure DNS

### Form Handling
Your contact form is already configured with `data-netlify="true"`. After deployment:
1. Go to Site settings → Forms
2. You'll see form submissions there

---

## Troubleshooting

### Build Fails
- Make sure all dependencies are in `package.json`
- Check that Node version is compatible (18+)
- Review build logs in Netlify dashboard

### 404 Errors on Routes
- The `netlify.toml` file includes redirect rules to handle React Router
- All routes redirect to `index.html` (SPA routing)

### Images Not Loading
- Make sure images in `public/` folder are included
- Check image paths are correct

---

## Quick Deploy Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Deploy to Netlify (first time)
netlify deploy --prod

# Update deployment
npm run build && netlify deploy --prod
```

---

## Your Site URL
After deployment, your site will be available at:
- `https://your-site-name.netlify.app`
- You can customize the site name in Netlify dashboard

