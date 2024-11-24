import React from "react";
import { ExternalLink, Book, FileText, Globe, Newspaper } from "lucide-react";
import Link from "next/link";

/* Source represents a source of information for an article */
export interface Source {
  title: string;
  url: string;
  type: "web" | "book" | "journal" | "newspaper";
  blurb: string;
}

interface SourcesProps {
  sources: Source[];
}

const sourceIcons = {
  web: Globe,
  book: Book,
  journal: FileText,
  newspaper: Newspaper,
};

const sourceColors = {
  web: "from-blue-400 to-cyan-300",
  book: "from-purple-400 to-pink-300",
  journal: "from-green-400 to-emerald-300",
  newspaper: "from-orange-400 to-amber-300",
};

export function Sources({ sources }: SourcesProps) {
  return (
    <section className="py-8 mt-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Dive Deeper: Our Sources
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sources.map((source, index) => {
            const Icon = sourceIcons[source.type];
            const colorClass = sourceColors[source.type];

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-102 group"
              >
                <div
                  className={`p-4 h-full flex flex-col justify-between transition-colors duration-300 group-hover:bg-gradient-to-br ${colorClass}`}
                >
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div
                        className={`p-1.5 rounded-full bg-gradient-to-br ${colorClass}`}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-semibold text-base text-gray-800 dark:text-white group-hover:text-white transition-colors duration-300">
                        {source.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300 mb-2 line-clamp-3">
                      {source.blurb}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors duration-300 capitalize">
                      {source.type}
                    </p>
                    <Link
                      href={source.url}
                      className="inline-flex items-center justify-center space-x-1 px-3 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-xs rounded-full shadow-sm transition-all duration-300 ease-in-out group-hover:bg-opacity-90 group-hover:shadow-md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="font-medium">Read more</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
