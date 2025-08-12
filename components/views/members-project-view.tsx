export default function MembersProjectView() {
  return (
    <div className="my-8 flex w-full items-center justify-center gap-2 sm:gap-4 md:my-12 md:gap-8">
      <div className="flex flex-1 flex-col items-start gap-1 md:gap-2">
        <div className="h-[clamp(12px,2vw,16px)] w-full max-w-[clamp(200px,50vw,400px)] rounded-[4.8px] bg-pd-green opacity-80 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"></div>
        <div className="h-[clamp(20px,3vw,28px)] w-full max-w-[clamp(300px,75vw,600px)] rounded-[8.4px] bg-pd-green opacity-80 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"></div>
      </div>
      <span className="inline-block min-w-min flex-shrink-0 text-center font-extrabold leading-[1.1] tracking-[clamp(1px,0.5vw,2px)] bg-gradient-to-r from-[#c59be7] via-[#a259e7] to-[#7d3ae7] bg-clip-text px-[clamp(0.5rem,2vw,2rem)] py-0 text-transparent [font-size:clamp(2rem,8vw,6rem)] [text-shadow:0_2px_12px_rgba(0,0,0,0.18)]">
        MEMBER PROJECTS
      </span>
      <div className="flex flex-1 flex-col items-end gap-1 md:gap-2">
        <div className="h-[clamp(20px,3vw,28px)] w-full max-w-[clamp(300px,75vw,600px)] rounded-[8.4px] bg-pd-green opacity-80 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"></div>
        <div className="h-[clamp(12px,2vw,16px)] w-full max-w-[clamp(200px,50vw,400px)] rounded-[4.8px] bg-pd-green opacity-80 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"></div>
      </div>
    </div>
  )
}
