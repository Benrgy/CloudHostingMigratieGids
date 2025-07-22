import { Calendar, User, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  excerpt?: string;
  date: string;
  category: string;
  author?: string;
  href: string;
  featured?: boolean;
}

const BlogCard = ({ title, excerpt, date, category, author = "KimiSEO Team", href, featured = false }: BlogCardProps) => {
  return (
    <Card 
      className={`group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-premium transition-all duration-500 transform hover:-translate-y-2 ${
        featured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
    >
      <a href={href} className="block p-6 h-full">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
            {category}
          </Badge>
          {featured && (
            <Badge className="bg-gradient-primary text-primary-foreground shadow-glow">
              Featured
            </Badge>
          )}
        </div>

        {/* Title */}
        <h2 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}>
          {title}
        </h2>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {excerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
          </div>
          
          {/* Read More Arrow */}
          <div className="flex items-center space-x-1 text-primary group-hover:translate-x-1 transition-transform duration-300">
            <span className="font-medium">Read More</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
      </a>
    </Card>
  );
};

export default BlogCard;