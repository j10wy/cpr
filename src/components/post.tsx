import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { PodcastPlayer } from "@/components/podcast/podcast-player";

export function Post() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  Episode 1: &quot;Shhh... The Library’s Closed: Tales from a
                  District That &apos;Knows Best&apos;&quot;
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Published on November 16, 2024 | Duration: 19 minutes
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <PodcastPlayer />

                  <h2 className="text-2xl font-semibold mb-4">
                    Episode Details
                  </h2>
                  <p className="space-y-4 text-base">
                    Closing a school library might seem like a straightforward
                    way to save money, but the consequences can be far-reaching.
                    This episode goes beyond the headlines to uncover the
                    often-overlooked impacts of school library closures. We
                    explore research that suggests libraries play a crucial role
                    in fostering literacy, bridging the digital divide, and
                    supporting students&apos; academic and social-emotional
                    growth. We also examine the potential for these closures to
                    exacerbate existing inequities, leaving disadvantaged
                    students with even fewer resources. Join us as we shed light
                    on the true cost of silencing school libraries.
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    Empty Shelves, Empty Promises? Mount Diablo&apos;s Library
                    Closures Leave Students in the Dark.
                  </h2>
                  <p className="space-y-4 text-base">
                    The Mount Diablo Unified School District (MDUSD) is facing a
                    crisis–a crisis of silence. The school board&apos;s decision
                    to close middle and high school libraries, without a clear
                    explanation to the community, has left parents and students
                    reeling, wondering how this void will impact their
                    education. This decision, made amidst a $20 million budget
                    deficit, has ignited a firestorm of debate about the value
                    of libraries and the district&apos;s commitment to its
                    students, especially those from disadvantaged backgrounds.
                  </p>
                  <p className="space-y-4 text-base">
                    While the sources point to financial pressures as the
                    primary driver for the closures, the lack of transparency
                    surrounding the decision-making process has fueled suspicion
                    and distrust among parents. The sources don&apos;t detail
                    the specific criteria used to determine which programs to
                    cut or why libraries were deemed expendable.
                  </p>
                  <p className="space-y-4 text-base">
                    This lack of communication has left parents feeling unheard
                    and questioning whether the district truly understands the
                    vital role libraries play in education.
                  </p>
                  <h3 className="text-lg leading-3 my-2">
                    The Effects of Library Closures: A Ripple Effect Across the
                    District
                  </h3>
                  <p className="space-y-4 text-base">
                    The sources highlight a range of potential consequences that
                    could arise from shutting down school libraries:
                  </p>
                  <ul className="indent-1 list-disc list-inside">
                    <li>
                      Reduced Access to Essential Resources: Libraries provide
                      students with access to a wealth of materials, including
                      books, computers, and online databases. For students who
                      lack these resources at home, school libraries are a
                      lifeline. Closing these spaces could widen the digital
                      divide and limit opportunities for learning, especially
                      for low-income students.
                    </li>
                    <li>
                      Impact on Academic Performance: Research suggests a strong
                      correlation between access to well-stocked and staffed
                      school libraries and improved student achievement,
                      particularly in reading. Libraries support curriculum
                      goals, foster a love of reading, and teach essential
                      research skills. Without them, students may struggle
                      academically and lose valuable opportunities for
                      intellectual growth.
                    </li>
                    <li>
                      Loss of Safe and Supportive Spaces: Libraries are more
                      than just repositories of books; they are sanctuaries for
                      students seeking a quiet space to study, read, or simply
                      decompress. For students from unstable home environments,
                      libraries can offer a sense of belonging and stability.
                      Closing them removes a crucial support system for
                      vulnerable students.
                    </li>
                    <li>
                      Erosion of Literacy and Information Literacy: Librarians
                      play a critical role in fostering a love of reading and
                      equipping students with the skills to navigate the complex
                      world of information. They curate collections that expose
                      students to diverse perspectives and genres, and they
                      teach students how to evaluate sources and identify
                      misinformation. In a world awash in information, these
                      skills are essential for academic success and informed
                      citizenship.
                    </li>
                  </ul>
                  <h3 className="text-lg leading-3 my-2">
                    The Human Cost: Voices from the Mount Diablo Community
                  </h3>
                  <p className="space-y-4 text-base">
                    The sources capture the raw emotion and frustration felt by
                    MDUSD parents grappling with the loss of their
                    children&apos;s libraries. One parent, Cora Mitchell,
                    questioned the district&apos;s rationale at a school board
                    meeting, stating, &quot;Libraries were the number one
                    requested topic by parents... Parents want to know:
                    What&apos;s happening with the libraries?&quot; Her words
                    echo the sentiments expressed by other parents in online
                    forums, many of whom fondly recall libraries as safe havens
                    during their own school years.
                  </p>
                  <p className="space-y-4 text-base">
                    These voices underscore the human cost of budget cuts that
                    prioritize short-term financial gains over the long-term
                    well-being of students. The absence of libraries will be
                    felt most acutely by those who rely on them the
                    most—students from low-income families, students with
                    limited resources at home, and students seeking a safe and
                    supportive space to learn and grow.
                  </p>
                  <h3 className="text-lg leading-3 my-2">
                    A Call to Action: Rethinking Priorities and Embracing
                    Transparency
                  </h3>
                  <p className="space-y-4 text-base">
                    The closure of MDUSD libraries raises critical questions
                    about the district&apos;s priorities and its commitment to
                    equitable educational opportunities for all students. The
                    sources offer insights into how other districts have tackled
                    budget challenges while preserving essential programs,
                    including implementing hiring freezes, consolidating
                    underutilized resources, and seeking additional funding
                    sources.
                  </p>
                  <p className="space-y-4 text-base">
                    However, the sources also emphasize the importance of
                    stakeholder engagement and transparency. The MDUSD school
                    board&apos;s failure to adequately communicate with parents
                    about the rationale behind the closures has created a rift
                    between the district and the community it serves. Rebuilding
                    trust will require open and honest dialogue, a willingness
                    to consider alternative solutions, and a commitment to
                    placing student needs at the forefront of every decision.
                  </p>
                  <p className="space-y-4 text-base">
                    The silence of empty library shelves should serve as a
                    wake-up call—a reminder that budget cuts have real
                    consequences, and that preserving access to education, in
                    all its forms, is essential for a thriving community.
                  </p>
                  <article className="prose prose-stone dark:prose-invert max-w-none"></article>
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
            © 2024 Mount Diablo Parents Podcast. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
