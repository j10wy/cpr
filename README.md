# MDUSD

## Table of Contents

- [Next.js](#nextjs)
  - [Getting Started](#getting-started)
  - [Learn More](#learn-more)
  - [Deploy on Vercel](#deploy-on-vercel)
- [Supabase](#supabase)
  - [Local Development Notes](#local-development-notes)
    - [Benefits of Local Development](#benefits-of-local-development)
    - [Requirements for Local Development](#requirements-for-local-development)
    - [Setting Up Local Development](#setting-up-local-development)
    - [Local Development with Schema Migrations](#local-development-with-schema-migrations)
  - [Supabase CLI](#supabase-cli)
    - [Supabase Commands](#supabase-commands)

## Next.js

### Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Supabase

### Local Development Notes

#### Benefits of Local Development

1. **Faster Development**  
   - Instant results from changes without waiting for remote deployments.

2. **Offline Work**  
   - Continue working without an internet connection.

3. **Cost-Effective**  
   - Local development is free and doesn't impact your project's quota.

4. **Enhanced Privacy**  
   - Sensitive data stays on your local machine during development.

5. **Easy Testing**  
   - Experiment with configurations and features without risking your production environment.

#### Requirements for Local Development

1. **Supabase CLI**  
   - Used to start and manage the local Supabase stack.

2. **Docker**  
   - Runs the necessary services for Supabase.

#### Setting Up Local Development

1. **Install Supabase CLI and Docker Desktop**  
   - Ensure both tools are installed on your machine.

2. **Initialize a New Supabase Project**  
   - Use the CLI to create a project locally.

3. **Start the Local Stack**  
   - Launch all necessary Supabase services locally.

4. **Available Local Services**  
   - **PostgreSQL Database**
   - **Auth**
   - **Storage**
   - Other core Supabase features.

#### Local Development with Schema Migrations

- Flexible Development Options:
  - Use the Supabase Dashboard directly for quick setup.
  - Alternatively, use a proper local setup with the Supabase CLI.

- Recommended Workflow:
  - Develop locally using the CLI to run a local Supabase stack.
  - Use the integrated Supabase Studio Dashboard to make changes.
  - Capture changes in schema migration files.
  - Save migration files in version control (e.g., Git) for tracking and collaboration.

- Alternative Approach:
  - If comfortable with migration files and SQL:
  - Write migration files manually.
  - Push them to the local database for testing before sharing changes.

- Deploying Changes:
  - After developing and testing locally, deploy changes to a linked project on the Supabase Platform.
  - Version Control:
  - Keep all migration files and changes under version control to maintain history and enable collaboration.

### Supabase CLI

The Supabase CLI is a powerful tool for managing Supabase projects directly from the terminal. Key features include:

- Setting up and managing local development environments: Quickly create and control a self-contained local Supabase stack.
- Generating TypeScript types for your database schema: Helps ensure type safety in your code.
- Handling database migrations: Manage schema changes efficiently.
- Managing environment variables and secrets: Centralize and simplify sensitive configuration management.
- Deploying your project to the Supabase platform: Push changes to production with ease.

With the CLI, you can streamline your development workflow, automate repetitive tasks, and maintain consistency across different environments. It’s essential for local development and useful in CI/CD pipelines.

For further details, refer to the CLI Getting Started Guide.

#### Supabase Commands

1. Install the Supabase CLI
`brew install supabase/tap/supabase`

2. Initialize the Supabase Project
`supabase init`

3. Start the Supabase Stack
`supabase start`

4. Stop the Supabase Stack
`supabase stop`
