"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

// THIS IS BROKEN BECAUSE THE HEADINGS DO NOT HAVE IDS.

export default function ToC() {
  const [
    //activeId,
    setActiveId,
  ] = useState<string>("");
  const [toc, setToc] = useState<TableOfContentsItem[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const doc = document.getElementById("article");
    const headings = doc?.querySelectorAll<HTMLHeadingElement>("h2, h3, h4");
    if (!headings) return;

    for (const heading of headings) {
      heading.id = crypto.getRandomValues(new Uint32Array(1))[0].toString();
    }

    const tocItems: TableOfContentsItem[] = Array.from(headings).map(
      (heading) => ({
        id: heading.id,
        title: heading.textContent || "",
        level: parseInt(heading.tagName.charAt(1)),
      })
    );
    setToc(tocItems);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    headings.forEach((heading) => observerRef.current?.observe(heading));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleTOCClick = (id: string) => {
    console.log(id);
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (toc.length === 0) return <></>;

  return (
    <>
      <aside className="w-full">
        <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
        <ScrollArea>
          <nav>
            <ul className="space-y-1">
              {toc.map((item) => (
                <li key={item.id}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "text-left"
                      // activeId === item.id
                      //   ? "bg-accent text-accent-foreground"
                      //   : ""
                    )}
                    onClick={() => handleTOCClick(item.id)}
                  >
                    {item.title.length > 50
                      ? `${item.title.substring(0, 40)}...`
                      : item.title}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollArea>
      </aside>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-2"
        size="icon"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-4 w-4" />
      </Button>
    </>
  );
}
