import React from "react";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ThumbsUp } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t pt-8 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <ThumbsUp className="mr-2 h-4 w-4" />
            Like
          </Button>
          <Button variant="outline" size="sm">
            <BookOpen className="mr-2 h-4 w-4" />
            Save
          </Button>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Published on May 15, 2023</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {/* <Image
          src="https://placehold.co/40x40"
          alt="Author avatar"
          className="rounded-full"
          width={40}
          height={40}
        /> */}
        <div>
          <p className="font-semibold">Dr. Jane Smith</p>
          <p className="text-sm text-muted-foreground">
            AI Researcher and Ethicist
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 pt-4">
        <span className="text-sm font-medium">Share this article:</span>
        <Button variant="outline" size="sm">
          Twitter
        </Button>
        <Button variant="outline" size="sm">
          LinkedIn
        </Button>
        <Button variant="outline" size="sm">
          Facebook
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
