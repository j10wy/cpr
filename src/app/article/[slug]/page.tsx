import React from "react";
import { Card } from "@/components/ui/card";
import { PodcastPlayer } from "@/components/podcast/podcast-player";
import Header from "@/components/articles/header";
import Footer from "@/components/articles/footer";
import { Source, Sources } from "@/components/source-list";

interface Article {
  title: string;
  content: string;
  sources: Source[];
}

//Props > {params}: {params: { slug: string };}
export default async function ArticlePage() {
  // This is a mock-up of how you might fetch article data
  // In a real application, you would fetch this data from your CMS or API
  const article: Article = {
    title: `Empty Shelves, Empty Promises? Mount Diablo's Library Closures Leave Students in the Dark.`,
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
      <Header
        badgeText="Technology"
        readTime="5 min read"
        title={article.title}
        description="Exploring the potential impact of AI on society, economy, and human interaction"
      />

      <div id="article-content">
        <PodcastPlayer />

        <p className="leading-6 my-4 text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          maxime. Accusamus assumenda magnam, at maiores iusto quod maxime
          earum, blanditiis totam, quasi aut tempore amet adipisci error facere!
          Sit, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni animi perferendis, mollitia voluptatum doloribus numquam
          expedita in vel corporis quo nemo incidunt saepe corrupti excepturi
          ratione a illum odit ad.
        </p>

        <ul className="list-disc pl-6">
          <li>
            Developing robust ethical guidelines for AI development and
            deployment
          </li>
          <li>Investing in AI education and re-skilling programs</li>
          <li>Encouraging interdisciplinary collaboration in AI research</li>
          <li>Implementing transparent and accountable AI systems</li>
          <li>
            Fostering public dialogue and understanding of AI technologies
          </li>
        </ul>

        <p className="leading-6 my-4 text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          maxime. Accusamus assumenda magnam, at maiores iusto quod maxime
          earum, blanditiis totam, quasi aut tempore amet adipisci error facere!
          Sit, rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Distinctio nemo nisi dolor non numquam hic voluptatum animi tempora
          cupiditate aperiam voluptates praesentium minus enim ipsa atque
          maiores, nobis quas iste!
        </p>

        <p className="leading-6 my-4 text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          maxime. Accusamus assumenda magnam, at maiores iusto quod maxime
          earum, blanditiis totam, quasi aut tempore amet adipisci error facere!
          Sit, rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus porro, omnis dicta explicabo suscipit vero, ad iusto
          quam quisquam error hic sed dolores eum quidem debitis, sequi
          laudantium perferendis quia!
        </p>

        <p className="leading-6 my-4 text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          maxime. Accusamus assumenda magnam, at maiores iusto quod maxime
          earum, blanditiis totam, quasi aut tempore amet adipisci error facere!
          Sit, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni modi, explicabo tempora tempore officiis fugiat, dolores quae
          numquam unde voluptate blanditiis perferendis recusandae nobis ratione
          repellat, enim facilis atque dolorum?
        </p>

        <Card className="p-6 my-8 bg-primary/5 border-primary/10">
          <h3 className="text-lg font-semibold mb-2">Did you know?</h3>
          <p className="text-sm text-muted-foreground">
            According to a recent study by PwC, AI could contribute up to $15.7
            trillion to the global economy by 2030, more than the current output
            of China and India combined.
          </p>
        </Card>

        <Sources sources={article.sources} />
        <Footer />
      </div>
    </article>
  );
}
