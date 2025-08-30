import * as React from "react";

export function MonthlyShowcase() {
  const currentShowcase = {
    title: "Simple Timer",
    description:
      "A simple timer with optional custom audio upload built with HTML, CSS, and JavaScript.",
    is_monthly: true,
    is_featured: false,
    yt_id: "bne750Ylf0Y",
    published_date: new Date("2025-08-01"),
    tags: ["Web App", "Timer", "JavaScript"],
    devs: ["Mennard Ezekiel M. Manlutac"],
  };

  return (
    <section className="w-full md:min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl lg:text-5xl italic font-bold text-pd-green">
            Monthly Project Showcase
          </h2>
        </div>
        {/* Project Card */}
        <div className="bg-pd-black rounded-2xl p-6 md:p-8 border border-gray-800">
          <div className="text-center">
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              {currentShowcase.title}
            </h3>
          </div>

          {/* Project Youtube Embed */}
          <div className="relative w-full mx-auto mb-6 rounded-lg overflow-hidden">
            <div className="w-full h-[400px] md:h-[500px]">
              <iframe
                src={`https://www.youtube.com/embed/${currentShowcase.yt_id}`}
                title={currentShowcase.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Credits */}
          <p className="text-white text-sm text-left mb-4 leading-relaxed">
            <span className="font-medium">Developer:</span>{" "}
            {currentShowcase.devs.join(", ")}
          </p>

          {/* Description */}
          <p className="text-white text-left">
            {currentShowcase.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {currentShowcase.tags.map((tag) => (
              <span
                key={tag}
                className="bg-pd-purple/20 text-pd-purple px-3 py-1 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
