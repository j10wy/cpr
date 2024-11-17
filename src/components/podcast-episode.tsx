import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export function PodcastEpisodeComponent() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Mount Diablo Parents Podcast</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  Episode 42: Navigating School Choice in Mount Diablo USD
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Published on May 15, 2023 | Duration: 45 minutes
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    Episode Details
                  </h2>
                  <p>
                    In this episode, we dive deep into the process of school
                    choice within the Mount Diablo Unified School District. We
                    discuss the various options available to parents, the
                    application process, and factors to consider when making
                    this important decision.
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    Podcast Player
                  </h2>
                  <div id="buzzsprout-player-16119831"></div>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-4">Blog Article</h2>
                  <article className="prose prose-stone dark:prose-invert max-w-none">
                    <p>
                      The Mount Diablo Unified School District offers a variety
                      of educational options for families. From traditional
                      neighborhood schools to specialized programs and charter
                      schools, parents have the opportunity to choose the best
                      fit for their children&apos;s needs and interests.
                    </p>
                    <h3>Understanding Your Options</h3>
                    <p>
                      Before making a decision, it&apos;s crucial to understand
                      the different types of schools available within the
                      district:
                    </p>
                    <ul>
                      <li>Neighborhood Schools</li>
                      <li>Magnet Programs</li>
                      <li>Charter Schools</li>
                      <li>Alternative Education Programs</li>
                    </ul>
                    <p>
                      Each option has its own unique features, curriculum focus,
                      and admission requirements. We recommend visiting the
                      schools you&apos;re interested in and speaking with
                      current parents and staff to get a better feel for each
                      environment.
                    </p>
                    <h3>The Application Process</h3>
                    <p>
                      The school choice application process typically begins in
                      the fall for the following school year. Key dates and
                      deadlines are announced on the district&apos;s website, so
                      be sure to mark your calendars and submit your
                      applications on time.
                    </p>
                    <p>
                      Remember, while choice is available, placement in a school
                      other than your neighborhood school is not guaranteed and
                      depends on factors such as available space and program
                      requirements.
                    </p>
                  </article>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-secondary mt-12 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-secondary-foreground">
            © 2023 Mount Diablo Parents Podcast. All rights reserved.
          </p>
        </div>
      </footer>
      <script
        defer
        src="https://www.buzzsprout.com/2425181/episodes/16119831-shhh-the-library-s-closed-tales-from-a-district-that-knows-best.js?container_id=buzzsprout-player-16119831&player=small"
        type="text/javascript"
      />
    </div>
  );
}
