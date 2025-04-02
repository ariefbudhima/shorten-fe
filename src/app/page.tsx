// src/app/page.tsx
"use client";

import Layout from "./components/Layout";
import Card from "./components/Card";
import URLShortenerForm from "./components/URLShortenerForm";

export default function Home() {
  return (
    <Layout>
      <Card>
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white">Make Long URLs Short</h1>
        <p className="text-center text-gray-300 mb-6 md:mb-8">Create short, memorable links in seconds</p>
        
        <URLShortenerForm />
      </Card>
    </Layout>
  );
}