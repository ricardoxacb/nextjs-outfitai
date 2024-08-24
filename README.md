# OutfitAI

## Getting Started

First, set the environment variables `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_ANON_KEY`.

You can do this by creating a `.env` file in the root of your project with the following
content:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
```

Then, build and start the production server:

```bash
pnpm build
# then
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
