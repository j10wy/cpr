import React from "react";
import { Badge } from "@/components/ui/badge";

interface BlogHeaderProps {
  badgeText: string;
  readTime: string;
  title: string;
  description: string;
}

const Header: React.FC<BlogHeaderProps> = ({
  badgeText,
  readTime,
  title,
  description,
}) => {
  return (
    <header className="space-y-4">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-3xl">
        {title}
      </h1>
      <p className="text-xl text-muted-foreground">{description}</p>
      <div className="flex items-center space-x-2">
        <Badge variant="secondary">{badgeText}</Badge>
        <span className="text-sm text-muted-foreground">{readTime}</span>
      </div>
    </header>
  );
};

export default Header;
