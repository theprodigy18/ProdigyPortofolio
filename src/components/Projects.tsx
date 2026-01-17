import MaxWidthWrapper from "./MaxWidthWrapper"
import type { ProjectCard } from "../interfaces/DataType"
import Project0Image from "../assets/project_0.png"
import Project1Image from "../assets/project_1.png"
import Project2Image from "../assets/project_2.png"
import Project3Image from "../assets/project_3.png"
import UseReveal from "./UseReveal"

const projectCards: ProjectCard[] = [
    {
        img: Project0Image,
        category: "Game Development",
        year: 2025,
        title: "The Almighty vs Book of the End",
        description: {
            paragraph: "A narrative-driven 2D pixel art platformer exploring temporal manipulation through three distinct time-based mechanics. Players control a character capable of rewriting cause and effect across past, present, and future timelines simultaneously."
        },
        techStacks: {
            stacks: [
                "Unity", "C#", "Pixel Art", "Platformer"
            ]
        },
        projectLink: "https://youtu.be/DHvOMkVdXtM?si=xf1rOwwXFHPLvmTv"
    },
    {
        img: Project1Image,
        category: "Low Level Programming",
        year: 2025,
        title: "Custom Mathematics Library (Drop Math)",
        description: {
            paragraph: "A dependency-free, performance-optimized mathematics library built from scratch, supporting cross-platform deployment and hardware-accelerated SIMD operations for graphics programming and game engines."
        },
        techStacks: {
            stacks: [
                "C++", "SIMD(SSE)", "Cross-Platform", "Header-Only"
            ]
        },
        projectLink: "https://github.com/theprodigy18/DropMath"
    },
    {
        img: Project2Image,
        category: "Full-Stack Web",
        year: 2025,
        title: "Mulia Kopi - Smart Coffee Shop System",
        description: {
            paragraph: "An intelligent point-of-sale and ordering system for coffee shops, featuring AI-powered mood-based menu recommendations through facial recognition technology. Designed to streamline operations while enhancing customer experience through personalized service."
        },
        techStacks: {
            stacks: [
                "Typescript", "React", "Node.js", "Express", "Python"
            ]
        },
        projectLink: "https://github.com/theprodigy18/MuliaKopi"
    },
    {
        img: Project3Image,
        category: "Deep Learning",
        year: 2025,
        title: "Image Captioning Research",
        description: {
            paragraph: "A comparative study evaluating three decoder architectures for image captioning tasks: LSTM, GRU, and Transformer. Built entirely from scratch using PyTorch on the Flickr30k dataset."
        },
        techStacks: {
            stacks: [
                "Python", "PyTorch", "Jupyter Notebook", "Academic Research"
            ]
        },
        projectLink: "https://github.com/theprodigy18/ImageCaptioning"
    }
]

function Projects() {
    const { ref, visible } = UseReveal(0.1);

    return (
        <div
            className="w-full flex items-center justify-center h-auto"
            id="projects"
            ref={ref}
        >
            <MaxWidthWrapper className="flex flex-col mt-30 md:mt-35 lg:mt-40 mb-20">
                <div className="flex flex-col md:flex-row items-start md:items-stretch md:justify-between w-full">
                    {/* LEFT */}
                    <div
                        className={`w-full md:w-[33%] flex justify-start items-start h-auto flex-col reveal d1
                        ${visible ? "is-visible" : ""}`}
                    >
                        <p className="tracking-[0.275em] text-(--text-color-3) font-family-2 text-sm">03 - WORK</p>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full md:w-[64%] flex flex-col items-start justify-center gap-y-4 md:gap-y-6 lg:gap-y-8 mt-8 md:mt-0">
                        <h1
                            className={`font-family-1 text-3xl md:text-[38px] lg:text-6xl text-(--text-color-1) font-semibold reveal d2
                            ${visible ? "is-visible" : ""}`}
                        >
                            Featured Projects
                        </h1>
                        <p
                            className={`font-family-2 text-base md:text-lg lg:text-xl text-(--text-color-3) reveal d3
                            ${visible ? "is-visible" : ""}`}
                        >
                            A curated collection of work spanning game development, systems programming, full-stack web applications, and deep learning research. Each project represents a deep dive into its domain.
                        </p>
                    </div>
                </div>

                {/* PROJECTS */}
                {projectCards.map((project, index) => {
                    return (
                        <a
                            key={index}
                            href={project.projectLink}
                            className={`project-item flex flex-col-reverse items-start md:items-stretch md:justify-between w-full mt-16 md:mt-22 lg:mt-30 transition-all duration-300 ease-in
                                ${index % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"}
                                reveal d${Math.min(index + 4, 6)} ${visible ? "is-visible" : ""}`}
                        >
                            <div className="w-full md:w-[33%] flex flex-col items-start justify-center mt-4 md:mt-0">
                                <div className="flex items-center justify-start font-family-2 text-xs lg:text-sm gap-x-2 lg:gap-x-4">
                                    <p className="text-(--text-color-3) tracking-widest uppercase">{project.category}</p>
                                    <p className="text-[color-mix(in_srgb,var(--text-color-3)_50%,transparent)]">•</p>
                                    <p className="text-[color-mix(in_srgb,var(--text-color-3)_50%,transparent)] text-[11px] lg:text-sm">{project.year}</p>
                                </div>

                                {/* TITLE */}
                                <h1 className="project-title font-family-1 text-3xl md:text-4xl lg:text-5xl text-(--text-color-1) font-semibold mt-4 md:mt-5 transition-all duration-300 ease-in">
                                    {project.title}
                                </h1>
                                <p className="font-family-2 text-sm lg:text-base text-(--text-color-3) mt-2 md:mt-3 lg:mt-5">
                                    {project.description.paragraph}
                                </p>

                                {/* TAG */}
                                <div className="flex items-center justify-start flex-wrap gap-2 font-family-2 text-(--text-color-4) font-medium mt-3 md:mt-4 lg:mt-6 text-[11px] lg:text-xs">
                                    {project.techStacks.stacks.slice(0, 3).map((stack, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className="px-2.5 py-1 bg-(--background-color-1) border border-[color-mix(in_srgb,var(--background-color-3)_30%,transparent)]"
                                            >
                                                {stack}
                                            </span>
                                        )
                                    })}
                                    {project.techStacks.stacks.length > 3 && (
                                        <p className="text-[color-mix(in_srgb,var(--text-color-3)_65%,transparent)] font-semibold ml-2 text-xs lg:text-sm">+{project.techStacks.stacks.length - 3}</p>
                                    )}
                                </div>

                                {/* VIEW PROJECT */}
                                <span className="flex items-center gap-x-2 font-family-2 text-(--text-color-2) md:text-sm lg:text-[15px] mt-3 md:mt-4 lg:mt-6 font-medium">
                                    <span
                                        className="nav-link"
                                        style={{ "--nav-underline-height": "1px" } as React.CSSProperties}
                                    >
                                        View Project
                                    </span>
                                    <svg
                                        className="project-arrow size-4 lg:size-5 transition-transform duration-300 ease-out"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path d="M7 17L17 7M17 7H8M17 7V16"
                                            stroke="currentColor"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </div>

                            <div className="project-image-wrapper w-full md:w-[64%] relative overflow-hidden">
                                <img
                                    src={project.img}
                                    className="w-full h-full object-fit transition-opacity duration-300"
                                />
                                <span className="project-image-overlay"></span>
                            </div>
                        </a>
                    )
                })}
            </MaxWidthWrapper>
        </div>
    )
}

export default Projects
