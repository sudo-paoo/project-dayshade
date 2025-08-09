export default function MembersProjectView() {
  return (
    <div className="flex justify-center items-center w-full my-8 md:my-12 gap-2 sm:gap-4 md:gap-8">
      <div className="flex flex-col gap-1 md:gap-2 items-start flex-1">
        <div
          style={{
            height: "clamp(12px, 2vw, 16px)",
            width: "100%",
            maxWidth: "clamp(200px, 50vw, 400px)",
            borderRadius: "4.8px",
            background: "var(--color-pd-green)",
            opacity: 0.8, 
            boxShadow: "0 2px 8px rgba(0, 0,0, 0.1)",
          }}
        ></div>
        <div
          style={{
            height: "clamp(20px, 3vw, 28px)",
            width: "100%",
            maxWidth: "clamp(300px, 75vw, 600px)",
            borderRadius: "8.4px",
            background: "var(--color-pd-green)",
            opacity: 0.8, 
            boxShadow: "0 2px 8px rgba(0, 0,0, 0.1)",
          }}
        ></div>
      </div>
      <span
        className="font-extrabold flex-shrink-0 text-center"
        style={{
          fontSize: "clamp(2rem, 8vw, 6rem)",
          background: "linear-gradient(90deg, #c59be7 0%, #a259e7 40%, #7d3ae7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "clamp(1px, 0.5vw, 2px)",
          textShadow: "0 2px 12px rgba(0,0,0,0.18)",
          padding: "0 clamp(0.5rem, 2vw, 2rem)",
          display: "inline-block",
          minWidth: "min-content",
          lineHeight: "1.1",
        }}
      >
        MEMBER PROJECTS
      </span>
      <div className="flex flex-col gap-1 md:gap-2 items-end flex-1">
        <div
          style={{
            height: "clamp(20px, 3vw, 28px)",
            width: "100%",
            maxWidth: "clamp(300px, 75vw, 600px)",
            borderRadius: "8.4px",
            background: "var(--color-pd-green)",
            opacity: 0.8,
            boxShadow: "0 4px 12px rgba(0, 0,0, 0.1)",
          }}
        ></div>
        <div
          style={{
            height: "clamp(12px, 2vw, 16px)",
            width: "100%",
            maxWidth: "clamp(200px, 50vw, 400px)",
            borderRadius: "4.8px",
            background: "var(--color-pd-green)",
            opacity: 0.8, 
            boxShadow: "0 2px 8px rgba(0, 0,0, 0.1)",
          }}
        ></div>
      </div>
    </div>
  )
}
