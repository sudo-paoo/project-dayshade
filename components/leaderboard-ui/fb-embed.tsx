"use client";

import { FacebookEmbed } from "react-social-media-embed";
import { useEffect, useRef, useState } from "react";

export default function FacebookPostEmbed({
  className = "",
  url,
}: {
  className?: string;
  url: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [embedWidth, setEmbedWidth] = useState<number | undefined>(200);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Responsive width logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setEmbedWidth(undefined); // lg breakpoint
      } else if (window.innerWidth >= 512) {
        setEmbedWidth(400);
      } else {
        setEmbedWidth(295);
      }
    };

    handleResize(); // run once at mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lazy load with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-center"
    >
      {isVisible ? (
        <FacebookEmbed
          url={url}
          width={embedWidth}
          className={`mx-auto ${className}`}
        />
      ) : (
        // Skeleton placeholder
        <div className="w-full max-w-xl p-4 border rounded-lg shadow-sm animate-pulse bg-white">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div className="flex-1">
              <div className="h-3 bg-gray-200 rounded w-32 mb-2" />
              <div className="h-2 bg-gray-200 rounded w-20" />
            </div>
          </div>

          <div className="h-48 bg-gray-200 rounded mb-4" />

          <div className="flex space-x-4">
            <div className="h-3 bg-gray-200 rounded w-16" />
            <div className="h-3 bg-gray-200 rounded w-16" />
            <div className="h-3 bg-gray-200 rounded w-16" />
          </div>
        </div>
      )}
    </div>
  );
}
