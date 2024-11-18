"use client";

import Header from "@/components/articles/header";
import Footer from "@/components/articles/footer";

export function Article({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      <Header
        badgeText="Technology"
        readTime="5 min read"
        title="The Future of Artificial Intelligence: Promises and Perils"
        description="Exploring the potential impact of AI on society, economy, and human interaction"
      />

      {children}

      <Footer />
    </article>
  );
}
