import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { PodcastPlayer } from "@/components/podcast/podcast-player";
import { Article } from "@/components/article";
import ToC from "@/components/articles/toc";

export function Post() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              {/* <CardHeader>
                <CardTitle>
                  Episode 1: &quot;Shhh... The Library’s Closed: Tales from a
                  District That &apos;Knows Best&apos;&quot;
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Published on November 16, 2024 | Duration: 19 minutes
                </p>
              </CardHeader> */}
              <CardContent>
                <PodcastPlayer />
                <Article>
                  <div id="article">
                    <h3 className="text-2xl font-extrabold tracking-tight">
                      Empty Shelves, Empty Promises? Mount Diablo&apos;s Library
                      Closures Leave Students in the Dark.
                    </h3>

                    <ul className="list-disc pl-6">
                      <li>
                        Developing robust ethical guidelines for AI development
                        and deployment
                      </li>
                      <li>Investing in AI education and reskilling programs</li>
                      <li>
                        Encouraging interdisciplinary collaboration in AI
                        research
                      </li>
                      <li>
                        Implementing transparent and accountable AI systems
                      </li>
                      <li>
                        Fostering public dialogue and understanding of AI
                        technologies
                      </li>
                    </ul>

                    <Card className="p-6 my-8 bg-primary/5 border-primary/10">
                      <h3 className="text-lg font-semibold mb-2">
                        Did you know?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        According to a recent study by PwC, AI could contribute
                        up to $15.7 trillion to the global economy by 2030, more
                        than the current output of China and India combined.
                      </p>
                    </Card>
                  </div>
                </Article>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Sources and Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] rounded-md border p-4">
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      Mount Diablo USD School Choice Information
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      California Department of Education: School Choice
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      National School Choice Week
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      EdSource: Understanding School Choice in California
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      Mount Diablo USD Magnet Programs Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      Charter Schools in Mount Diablo USD
                    </Link>
                  </li>
                </ul>
              </ScrollArea>
              <ToC />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
