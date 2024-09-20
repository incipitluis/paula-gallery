"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./card";
import projectsData from "@/data/projects.json";

export default function CardCarousel() {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
    "vertical"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOrientation("horizontal");
      } else {
        setOrientation("vertical");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto -mt-14 md:-mt-0">
      <Carousel
        key={orientation}
        orientation={orientation}
        className="relative w-full"
        opts={{
          align: "start",
          loop: false,
        }}
      >
        <CarouselContent
          className={`${orientation === "vertical" ? "" : "-ml-4"} `}
        >
          {projectsData.map((project, index) => (
            <CarouselItem
              key={index}
              className={`${
                orientation === "vertical" ? "pt-4" : "pl-4"
              } shrink-0 grow-0 basis-1/3`}
            >
              <div className="p-2">
                <Card
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="dark:invert" />
        <CarouselNext className="dark:invert" />
      </Carousel>
    </div>
  );
}
