import Footer from "@/components/articles/footer";
import Header from "@/components/articles/header";
import { PodcastPlayer } from "@/components/podcast/podcast-player";
import { Source, Sources } from "@/components/source-list";
import { Card } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";
import React from "react";
import Markdown from "react-markdown";
import { Article, Post, ServerSource, UrlProps } from "./models";

function getSourceType(type: string): "web" | "book" | "journal" | "newspaper" {
  switch (type) {
    case "web":
      return "web";
    case "book":
      return "book";
    case "journal":
      return "journal";
    case "newspaper":
      return "newspaper";
    default:
      return "web";
  }
}

function makeSource({ source }: ServerSource): Source {
  const s = {
    title: source.title,
    url: source.url,
    type: getSourceType(source.category),
    blurb: source.description,
  };
  return s;
}

function RenderMarkdown({
  content,
}: Readonly<{ content: string }>): JSX.Element {
  return (
    <Markdown
      components={{
        h1: "h2",
        ul({ children }) {
          return <ul className="list-disc pl-6">{children}</ul>;
        },
        p({ children }) {
          return (
            <p className="leading-6 my-4 text-base font-normal">{children}</p>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
}

export default async function ArticlePage({ params }: UrlProps) {
  const slug = (await params).slug;
  const supabase = await createClient();
  const { data: articles } = await supabase
    .from("articles")
    .select<string, Article>(
      `
    *,
    podcast:podcasts (
      id,
      title,
      description,
      audio_url,
      image_url
    )
  `
    )
    .eq("slug", slug)
    .limit(1);

  const data = articles?.[0];
  const articleId = data?.id ?? 0;
  const content = data?.content;
  const podcast = data?.podcast;

  // Fetch the sources associated with the article
  const { data: sources } = await supabase
    .from("article_sources")
    .select<string, ServerSource>(
      `
        source:sources (
          id,
          title,
          category,
          description,
          url
        )
      `
    )
    .eq("article_id", articleId);

  const sourcesData = (sources ?? []).map((source) => makeSource(source));

  // This is a mock-up of how you might fetch article data
  // In a real application, you would fetch this data from your CMS or API
  const article: Post = {
    title: `Empty Shelves, Empty Promises? Mount Diablo's Library Closures Leave Students in the Dark.`,
    content: "This is the main content of the article...",
  };

  return (
    <article className="container mx-auto px-4 py-8">
      <Header
        badgeText="Technology"
        readTime="5 min read"
        title={article.title}
        description="Exploring the potential impact of AI on society, economy, and human interaction"
      />

      <div id="article-content">
        {podcast && <PodcastPlayer />}
        {content && <RenderMarkdown content={content} />}

        <Card className="p-6 my-8 bg-primary/5 border-primary/10">
          <h3 className="text-lg font-semibold mb-2">Did you know?</h3>
          <p className="text-sm text-muted-foreground">
            According to a recent study by PwC, AI could contribute up to $15.7
            trillion to the global economy by 2030, more than the current output
            of China and India combined.
          </p>
        </Card>
        {!!sourcesData.length && <Sources sources={sourcesData} />}
        <Footer />
      </div>
    </article>
  );
}
