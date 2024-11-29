import ToC from "@/components/articles/toc";
import { Card, CardContent } from "@/components/ui/card";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardContent>{children}</CardContent>
            </Card>
          </div>
          <Card>
            <CardContent className="my-6">
              <ToC />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
