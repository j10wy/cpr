import React from "react";
import { Sources, Source } from "@/components/Sources";

interface Article {
  title: string;
  content: string;
  sources: Source[];
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // This is a mock-up of how you might fetch article data
  // In a real application, you would fetch this data from your CMS or API
  const article: Article = {
    title: "The Future of Artificial Intelligence: Promises and Perils",
    content: "This is the main content of the article...",
    sources: [
      {
        title: "MIT Technology Review",
        url: "https://www.technologyreview.com/",
        type: "web",
        blurb:
          "MIT Technology Review is a world-renowned, independent media company whose insight, analysis, reviews, interviews and live events explain the newest technologies and their commercial, social and political impacts.",
      },
      {
        title: "AI: A Modern Approach",
        url: "https://aima.cs.berkeley.edu/",
        type: "book",
        blurb:
          "The leading textbook in Artificial Intelligence, used in over 1400 universities in over 125 countries. A comprehensive, up-to-date introduction to the theory and practice of artificial intelligence.",
      },
      {
        title: "Nature Machine Intelligence",
        url: "https://www.nature.com/natmachintell/",
        type: "journal",
        blurb:
          "Nature Machine Intelligence is a journal for research and perspectives from the fast-moving fields of artificial intelligence, machine learning and robotics.",
      },
      {
        title: "The New York Times - Technology",
        url: "https://www.nytimes.com/section/technology",
        type: "newspaper",
        blurb:
          "The New York Times provides in-depth coverage of technology's impact on business, science, and society, including the latest developments in AI and machine learning.",
      },
      {
        title: "OpenAI",
        url: "https://openai.com/",
        type: "web",
        blurb:
          "OpenAI is an AI research and deployment company dedicated to ensuring that artificial general intelligence benefits all of humanity. They regularly publish cutting-edge research in AI.",
      },
      {
        title: "Science Robotics",
        url: "https://www.science.org/journal/scirobotics",
        type: "journal",
        blurb:
          "Science Robotics covers the theory, design, and application of robotics, including AI applications in robotic systems. It provides a unique perspective on the intersection of robotics and AI.",
      },
    ],
  };

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        {article.title}
      </h1>
      <div className="prose dark:prose-invert max-w-none mb-12">
        {article.content}
      </div>
      <Sources sources={article.sources} />
    </article>
  );
}
