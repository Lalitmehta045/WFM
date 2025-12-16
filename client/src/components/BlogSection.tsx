import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
// Using placeholder images from Unsplash - replace with your actual images
const blog1 = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const blog2 = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const blog3 = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const blogs = [
  {
    title: "Modern Office Space Management: Trends for 2025",
    excerpt:
      "Discover the latest trends in office space management that are transforming workplaces into more productive and employee-friendly environments.",
    image: blog1,
    date: "March 15, 2025",
    category: "Office Management",
  },
  {
    title: "Eco-Friendly Cleaning: A Guide to Green Facilities",
    excerpt:
      "Learn how sustainable cleaning practices can reduce environmental impact while maintaining high hygiene standards in commercial spaces.",
    image: blog2,
    date: "March 10, 2025",
    category: "Sustainability",
  },
  {
    title: "Smart Building Technologies for Efficient Facilities",
    excerpt:
      "Explore how IoT and smart technologies are revolutionizing facility management with real-time monitoring and automated maintenance solutions.",
    image: blog3,
    date: "March 5, 2025",
    category: "Technology",
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Updated News & Blogs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest insights and industry updates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift group cursor-pointer border-none shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4">
                  <span className="bg-[#800000] text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto text-xs sm:text-sm md:text-base font-semibold group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
