This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# NextJS

## What is NextJS ?

NextJS allows pre-hydrating the html code. This enables SEO - Search Engine optimization. When search engines like Google tries to scrape through website if it hits a certain endpoint the page generally returns an empty <script> tag which does not convey anything about the website.

## Migrating to NextJS

In React we had App.js with all the routes which helps us navigate. In NextJS instead of routes we have a pages directory and the file name acts like routes

## getServerSideProps() in ssr.tsx files inside pages

It is important to have the function getServerSideProps() in the ssr files of pages. This is an asynchronous function. When this particular page is hit the control directly goes to this function and waits for the response from the request. Once the reqest is obtained we send it as props to the default function for the initial rendering

### Next - 13 aritce - https://nextjs.org/blog/next-13
