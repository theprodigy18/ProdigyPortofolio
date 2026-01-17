import MaxWidthWrapper from "./MaxWidthWrapper"
import type { Paragraph, Quote } from "../interfaces/DataType"
import UseReveal from "./UseReveal"

const backStories: Paragraph[] = [
    {
        paragraph: "My relationship with technology began long before I wrote my first line of code, it started with a controller in hand. Having played over 1,000 games since before kindergarten, I've witnessed gaming's evolution from genre-defining masterpieces to today's increasingly formulaic releases. This deep connection drove me to ask: why have so few modern games recaptured that magic? The answer led me to development."
    },
    {
        paragraph: "Web development marked my formal entry into software engineering in early 2023 during my final high school semester. What began with HTML and CSS evolved into a comprehensive understanding of full-stack architecture by early 2024. But it was game development, which I pursued in late 2023, that truly ignited my passion, the immediate visual feedback, the marriage of technical challenge and creative expression, the ability to craft experiences rather than just solutions."
    },
    {
        paragraph: "By early 2025, my curiosity descended into the machine itself. Graphics programming opened the door to low-level systems, memory management, SIMD optimizations, compiler design, and the architecture of game engines. There's a profound satisfaction in understanding systems at their foundation, in building from principles rather than abstractions. This pursuit led me to create custom mathematics libraries and explore graphics APIs at their core."
    },
    {
        paragraph: "Machine learning entered my toolkit not from passion, but from pragmatic necessity. Starting mid-2025, coursework in NLP and computer vision forced me to move beyond surface-level understanding. What I discovered was that AI, stripped of its hype, is simply another tool, powerful when applied correctly, but still just a means to an end. I became proficient not because I love ML, but because I respect what it can accomplish when wielded with understanding."
    }
]

const quote: Quote = {
    quote: "A developer doesn't just create, they create something that resonates.",
    Paragraph: {
        paragraph: "I believe engineering excellence means nothing if the result doesn't connect with its users. Whether it's a game mechanic that makes someone pause in appreciation, a web interface that feels effortless, or a system that runs efficiently at the silicon level, the goal remains constant: build something meaningful, even if it speaks to just one person."
    }
}

const currentStatuses: Paragraph[] = [
    {
        paragraph: "Pursuing Bachelor's in Informatics Engineering at Universitas Negeri Malang (2023-2027), currently in 6th semester with a 3.85 GPA. My focus remains on the intersection of game development and low-level systems programming, working toward custom engine architectures that push both creative and technical boundaries."
    },
    {
        paragraph: "Outside of academics, I take on selective freelance projects that challenge my understanding across multiple domains, balancing practical client work with continued exploration of game engines and systems programming."
    }
]

function About() {
    const { ref, visible } = UseReveal(0.19);

    return (
        <div
            className="w-full h-auto pt-30 md:pt-35 lg:pt-40 pb-20"
            id="about"
            ref={ref}
        >
            <MaxWidthWrapper className="flex flex-col md:flex-row items-start md:items-stretch md:justify-between">
                {/* LEFT */}
                <div className={`w-full md:w-[33%] flex justify-start items-start h-auto reveal d1 ${visible ? "is-visible" : ""}`}>
                    <p className="tracking-[0.275em] text-(--text-color-3) font-family-2 text-sm">01 - ABOUT</p>
                </div>

                {/* RIGHT */}
                <div className="w-full md:w-[64%] flex flex-col items-start justify-center mt-8 md:mt-0">
                    <h1
                        className={`font-family-1 text-3xl md:text-[38px] lg:text-6xl text-(--text-color-1) reveal d2 
                        ${visible ? "is-visible" : ""}`}
                    >
                        Building at the intersection of <i className="text-(--text-color-2)">craft</i> and <i className="text-(--text-color-2)">code</i>
                    </h1>
                    <h2
                        className={`font-family-1 text-xl lg:text-2xl text-(--text-color-1) font-bold mt-4 md:mt-6 lg:mt-12 mb-2 lg:mb-4 reveal d3 
                        ${visible ? "is-visible" : ""}`}
                    >
                        The Journey
                    </h2>
                    {backStories.map((paragraph, index) => {
                        return (
                            <p
                                key={index}
                                className={`font-family-2 md:text-lg lg:text-xl text-(--text-color-4) mt-2 lg:mt-4 reveal
                                d${Math.min(index + 4, 6)} ${visible ? "is-visible" : ""}`}
                            >
                                {paragraph.paragraph}
                            </p>
                        )
                    })}
                    <div
                        className={`w-full mt-6 lg:mt-8 flex items-stretch justify-between reveal d6 
                        ${visible ? "is-visible" : ""}`}
                    >
                        <span className="w-[1.5px] lg:w-0.5 h-auto bg-(--background-color-2)">
                        </span>
                        <div className="w-[95%] py-2 md:py-4 lg:py-6 flex flex-col items-start justify-center gap-y-4">
                            <p className="font-family-1 text-lg md:text-xl lg:text-2xl text-(--text-color-1)">
                                <i>"{quote.quote}"</i>
                            </p>
                            <p className="font-family-2 lg:text-lg text-(--text-color-3)">
                                {quote.Paragraph.paragraph}
                            </p>
                        </div>
                    </div>

                    <h2
                        className={`font-family-1 text-xl lg:text-2xl text-(--text-color-1) font-bold mt-4 md:mt-6 lg:mt-12 mb-2 lg:mb-4 reveal d6 
                        ${visible ? "is-visible" : ""}`}
                    >
                        Current Status
                    </h2>
                    {currentStatuses.map((paragraph, index) => {
                        return (
                            <p
                                key={index}
                                className={`font-family-2 md:text-lg lg:text-xl text-(--text-color-4) mt-2 lg:mt-4 reveal d6 
                                ${visible ? "is-visible" : ""}`}
                            >
                                {paragraph.paragraph}
                            </p>
                        )
                    })}
                    <span
                        className={`w-full h-[0.25px] bg-(--background-color-2) mt-8 md:mt-10 lg:mt-16 opacity-35 reveal d6 
                        ${visible ? "is-visible" : ""}`}
                    >
                    </span>

                    <div
                        className={`flex items-center justify-start mt-8 md:mt-12 gap-x-8 md:gap-x-16 lg:gap-x-35 reveal d6
                        ${visible ? "is-visible" : ""}`}
                    >
                        <div className="flex flex-col items-start justify-center gap-y-2 md:gap-y-3 lg:gap-y-5">
                            <p className="font-family-1 text-3xl md:text-4xl lg:text-5xl text-(--text-color-2)">3.85</p>
                            <p className="font-family-2 text-(--text-color-3) font-medium text-xs md:text-sm lg:text-[16px]">GPA (Semester 1-5)</p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-y-2 md:gap-y-3 lg:gap-y-5">
                            <p className="font-family-1 text-3xl md:text-4xl lg:text-5xl text-(--text-color-2)">4</p>
                            <p className="font-family-2 text-(--text-color-3) font-medium text-xs md:text-sm lg:text-[16px]">Core Domains</p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-y-2 md:gap-y-3 lg:gap-y-5">
                            <p className="font-family-1 text-3xl md:text-4xl lg:text-5xl text-(--text-color-2)">6th</p>
                            <p className="font-family-2 text-(--text-color-3) font-medium text-xs md:text-sm lg:text-[16px]">Semester</p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default About
