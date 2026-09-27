"use client";

import React, { useState, useEffect } from "react";
import {
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Globe2,
  LayoutDashboard,
  PanelsTopLeft,
  Rocket,
  Send,
  ServerCog,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";

import SectionHeading from "@/components/section-heading";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Modern landing pages, company websites, service pages, catalogs, forms, and lead capture.",
    by: "Business Websites",
    icon: Globe2,
  },
  {
    tempId: 1,
    testimonial: "Custom CRM systems for clients, leads, statuses, tasks, and business workflows.",
    by: "CRM Systems",
    icon: BriefcaseBusiness,
  },
  {
    tempId: 2,
    testimonial: "Dashboards and internal tools for managing users, content, orders, analytics, and business data.",
    by: "Admin Panels",
    icon: LayoutDashboard,
  },
  {
    tempId: 3,
    testimonial: "Telegram bots for orders, notifications, customer communication, automation, and business workflows.",
    by: "Telegram Bots",
    icon: Send,
  },
  {
    tempId: 4,
    testimonial: "Fast MVP development from idea to working product with frontend, backend, database, and deployment.",
    by: "MVP Development",
    icon: Rocket,
  },
  {
    tempId: 5,
    testimonial: "Full-stack web applications using Next.js, React, TypeScript, FastAPI, PostgreSQL, and Docker.",
    by: "Web Applications",
    icon: PanelsTopLeft,
  },
  {
    tempId: 6,
    testimonial: "REST APIs, authentication, business logic, databases, integrations, and backend services.",
    by: "API & Backend",
    icon: ServerCog,
  },
  {
    tempId: 7,
    testimonial: "Business process automation, API integrations, notifications, webhooks, and internal tools.",
    by: "Automation & Integrations",
    icon: Workflow,
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute top-1/2 left-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "bg-primary text-primary-foreground border-primary z-10"
          : "bg-card text-card-foreground border-border hover:border-primary/50 z-0",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px hsl(var(--border))"
          : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="bg-border absolute block origin-top-right rotate-45"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <div
        aria-hidden="true"
        className="bg-muted text-foreground mb-4 flex h-14 w-12 items-center justify-center"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      >
        <testimonial.icon className="h-7 w-7" strokeWidth={1.75} />
      </div>
      <h3
        className={cn(
          "text-base font-medium sm:text-xl",
          isCenter ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {testimonial.testimonial}
      </h3>
      <p
        className={cn(
          "absolute right-8 bottom-8 left-8 mt-2 text-sm italic",
          isCenter ? "text-primary-foreground/80" : "text-muted-foreground",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <SectionHeading
      text="WHAT I CAN BUILD"
      id="testimonials"
      className="h-[600px] overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.06)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] bg-[size:18px_18px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)]" />
      </div>

      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-border hover:bg-primary hover:text-primary-foreground border-2",
            "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-border hover:bg-primary hover:text-primary-foreground border-2",
            "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </SectionHeading>
  );
};
