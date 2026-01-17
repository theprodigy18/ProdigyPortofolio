import { useState } from "react"
import type { SkillDomain } from "../interfaces/DataType"
import MaxWidthWrapper from "./MaxWidthWrapper"
import UseReveal from "./UseReveal"


const skillDomains: SkillDomain[] = [
    {
        domainName: "Game Development",
        description: {
            paragraph: "Crafting immersive experiences with industry-standard engines and custom graphics solutions"
        },
        techStacks: {
            stacks: [
                "C#", "C++", "Unity", "DirectX11", "OpenGL", "UVCs", "Visual Studio", ".NET"
            ]
        }
    },
    {
        domainName: "Low-Level Programming",
        description: {
            paragraph: "Understanding the metal, systems programming and performance optimization at the instruction level"
        },
        techStacks: {
            stacks: [
                "C", "C++", "Assembly(x86_64)", "SIMD(SSE)", "MSVC", "GCC", "Clang", "Premake5", "CMake", "Make", "Ninja", "Bear", "clangd"
            ]
        }
    },
    {
        domainName: "Web Full-Stack",
        description: {
            paragraph: "Building modern, scalable web applications from database to browser with type-safe architectures"
        },
        techStacks: {
            stacks: [
                "TypeScript", "JavaScript", "React", "Vite", "Tailwind CSS", "Node.js", "Express", "C#", ".NET", "PostgreSQL", "MySQL", "Git"
            ]
        }
    },
    {
        domainName: "AI & Machine Learning",
        description: {
            paragraph: "Leveraging intelligent systems for practical applications, a tool wielded with understanding"
        },
        techStacks: {
            stacks: [
                "Python", "PyTorch", "TensorFlow", "Jupyter Notebook", "C++"
            ]
        }
    }
]

function Skiils() {
    const { ref, visible } = UseReveal(0.35);
    const [activeDomain, setActiveDomain] = useState<number>(0)

    return (
        <div
            className="w-full flex flex-col items-center justify-center bg-(--background-color-4)"
            id="skills"
            ref={ref}
        >
            <span
                className="w-px h-20 md:h-25 lg:h-30 bg-[linear-gradient(to_bottom,transparent_0%,var(--background-color-3)_50%,transparent_100%)] opacity-50">
            </span>

            <MaxWidthWrapper className="flex flex-col md:flex-row items-start md:items-stretch md:justify-between pt-12 pb-32">
                {/* LEFT */}
                <div
                    className={`w-full md:w-[33%] flex justify-start items-start h-auto flex-col reveal d1
                    ${visible ? "is-visible" : ""}`}
                >
                    <p className="tracking-[0.275em] text-(--text-color-3) font-family-2 text-sm">02 - EXPERTISE</p>
                    <p className="font-family-1 text-2xl md:text-3xl lg:text-4xl text-(--text-color-1) mt-3 md:mt-6 font-semibold">Technical Domains</p>
                </div>

                {/* RIGHT */}
                <div className="w-full md:w-[64%] flex flex-col items-start justify-center mt-8 md:mt-0">
                    <div
                        className={`w-full flex items-center justify-start gap-2 md:gap-4 flex-wrap text-xs md:text-sm lg:text-base reveal d2
                        ${visible ? "is-visible" : ""}`}
                    >
                        {skillDomains.map((domain, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`py-1.5 md:py-2 lg:py-2.25 px-3 md:px-3.5 lg:px-4 font-family-2 border cursor-pointer transition-all duration-300 ease-in 
                                    ${activeDomain === index ?
                                            "border-(--background-color-2) text-(--text-color-2) bg-[color-mix(in_srgb,var(--background-color-2)_5%,transparent)]" :
                                            "text-(--text-color-3) hover:text-(--text-color-1) border-[color-mix(in_srgb,var(--background-color-3)_30%,transparent)] hover:border-[color-mix(in_srgb,var(--background-color-3)_50%,transparent)]"}
                                    `}
                                    onClick={() => setActiveDomain(index)}
                                >
                                    {domain.domainName}
                                </button>
                            )
                        })}
                    </div>
                    {/* DESCRIPTION + STACK (RE-ANIMATE SMOOTH) */}
                    <div
                        className={`relative mt-6 md:mt-8 reveal d3
                        ${visible ? "is-visible" : ""}`}
                    >
                        {skillDomains.map((domain, index) => (
                            <div
                                key={domain.domainName}
                                className={`transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                                ${activeDomain === index
                                        ? "opacity-100 translate-y-0 relative"
                                        : "opacity-0 translate-y-3 absolute inset-0 pointer-events-none"
                                    }`}
                            >
                                {/* DESCRIPTION */}
                                <p className="text-(--text-color-4) font-family-2 text-base md:text-lg lg:text-xl">
                                    {domain.description.paragraph}
                                </p>

                                {/* TECH STACK */}
                                <div className="w-full flex items-center justify-start gap-2 lg:gap-4 flex-wrap font-family-2 mt-6 text-(--text-color-4) font-medium text-xs md:text-sm lg:text-base">
                                    {domain.techStacks.stacks.map((stack, stackIndex) => (
                                        <span
                                            key={stack}
                                            className="px-2 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 bg-(--background-color-1) border border-[color-mix(in_srgb,var(--background-color-3)_30%,transparent)] transition-opacity duration-300"
                                            style={{ transitionDelay: `${stackIndex * 40}ms` }}
                                        >
                                            {stack}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <span
                        className={`w-full h-px bg-[color-mix(in_srgb,var(--background-color-3)_20%,transparent)] mt-8 md:mt-12 lg:mt-16 reveal d4
                        ${visible ? "is-visible" : ""}`}
                    >
                    </span>
                    <div
                        className={`w-full flex items-center justify-between mt-8 md:mt-10 lg:mt-12 reveal d5
                        ${visible ? "is-visible" : ""}`}
                    >
                        {skillDomains.map((_, index) => {
                            return (
                                <div className="flex flex-col justify-center w-[23%] gap-y-2 md:gap-y-3 lg:gap-y-4" key={index}>
                                    <span
                                        className={`w-full h-0.75 lg:h-1 transition-colors duration-300 ease-in
                                    ${activeDomain === index ?
                                                "bg-(--background-color-2)"
                                                : "bg-[color-mix(in_srgb,var(--background-color-3)_35%,transparent)]"}`}
                                    >
                                    </span>
                                    <p
                                        className={`font-family-2 text-xs lg:text-sm
                                        ${activeDomain === index ?
                                                "text-(--text-color-2)"
                                                : "text-(--text-color-4)"}`}
                                    >
                                        0{index + 1}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default Skiils
