
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ed9fec02-7b0c-4a9e-861e-6955974d9beb

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ed9fec02-7b0c-4a9e-861e-6955974d9beb) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How to deploy this project to GitHub Pages

This project is configured to be deployed to GitHub Pages using GitHub Actions. Follow these steps:

1. **Push your changes to the main branch**:
   ```sh
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository settings**:
   - Go to your GitHub repository
   - Click on "Settings"
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select the "gh-pages" branch and save

3. **Monitor the deployment**:
   - Go to the "Actions" tab in your repository
   - You should see a workflow named "Deploy to GitHub Pages" running
   - Once completed, your site will be available at: `https://<YOUR_GITHUB_USERNAME>.github.io/<REPOSITORY_NAME>/`

4. **Subsequent deployments**:
   - Every push to the main branch will trigger a new deployment
   - You can also manually trigger a deployment by going to the "Actions" tab, selecting the "Deploy to GitHub Pages" workflow, and clicking "Run workflow"

## How can I deploy this project elsewhere?

You can also deploy this project using Lovable:

1. Open [Lovable](https://lovable.dev/projects/ed9fec02-7b0c-4a9e-861e-6955974d9beb) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
