"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Wipeout has transformed our office maintenance. Their attention to detail and eco-friendly approach aligns perfectly with our corporate values. Highly professional team!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Rajesh Kumar",
    role: "Facility Manager"
  },
  {
    text: "Outstanding service quality! The mechanized housekeeping solution has significantly improved our facility's cleanliness standards. Their staff is well-trained and reliable.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Priya Sharma",
    role: "Operations Director"
  },
  {
    text: "We've been working with Wipeout for 3 years now. Their consistency, professionalism, and commitment to excellence make them our trusted facility management partner.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Amit Patel",
    role: "Property Manager"
  },
  {
    text: "The deep cleaning and pest control services are exceptional. Wipeout understands the hygiene requirements of healthcare facilities and delivers beyond expectations.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Sneha Reddy",
    role: "Admin Head"
  },
  {
    text: "Their eco-friendly cleaning solutions have helped us achieve our sustainability goals while maintaining impeccable hygiene standards throughout our facility.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Rahul Verma",
    role: "Sustainability Officer"
  },
  {
    text: "Wipeout's team is professional, punctual, and thorough. They've become an essential part of our facility's operations.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Neha Gupta",
    role: "Office Manager"
  },
  {
    text: "The customized cleaning plan they created for our manufacturing facility has significantly reduced downtime and improved our overall efficiency.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Vikram Singh",
    role: "Plant Manager"
  },
  {
    text: "Their attention to detail in high-traffic areas has made a noticeable difference in our facility's appearance and hygiene levels.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Anjali Mehta",
    role: "Facilities Coordinator"
  },
  {
    text: "Wipeout's use of advanced cleaning technology has set a new standard for cleanliness in our corporate offices.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Arjun Kapoor",
    role: "CEO"
  }
];

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-6 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-card hover:shadow-xl transition-shadow duration-300" 
                  key={`${index}-${i}`}
                >
                  <div className="text-foreground/90 mb-4">{text}</div>
                  <div className="flex items-center gap-3 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border-2 border-primary/20"
                      loading="lazy"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-foreground">{name}</div>
                      <div className="leading-5 text-muted-foreground text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section 
      ref={ref}
      id="testimonials" 
      className={`py-16 bg-background relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Hear from businesses that trust Wipeout for their facility management needs
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Join our growing list of satisfied clients. <a href="#contact" className="text-primary hover:underline font-medium">Get in touch</a> to learn more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
