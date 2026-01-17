import type { Paragraph } from "../interfaces/DataType"
import MaxWidthWrapper from "./MaxWidthWrapper"
import UseReveal from "./UseReveal"

type Experience = {
    period: string,
    title: string,
    category: string,
    description: Paragraph,
    badge: React.ReactNode
}

type Achievement = {
    period: string,
    title: string,
    achieved: string,
    category: string,
    description: Paragraph
}

const experiences: Experience[] = [
    {
        period: "August 2023 - July 2027 (Expected)",
        title: "Bachelor of Informatics Engineering",
        category: "Universitas Negeri Malang",
        description: {
            paragraph: "GPA: 3.85/4.00 (Semester 1-5). Currently in 6th Semester. Relevant coursework includes Game Development, Deep Learning (NLP, Computer Vision), Database Systems, Data Structures & Algorithms, Computer Graphics, and Software Engineering."
        },
        badge: <span className="inline-block text-(--text-color-5) font-family-2 text-xs mt-4 border border-(--text-color-5) px-3 py-1 font-medium">
            Education
        </span>
    },
    {
        period: "February 2025 - May 2025",
        title: "Database Systems Laboratory Assistant",
        category: "Universitas Negeri Malang",
        description: {
            paragraph: "Supporting 2nd-semester students in understanding relational database concepts, SQL operations, and database design principles. Conducting lab sessions, evaluating assignments, and mentoring students through practical database implementation projects."
        },
        badge: <span className="inline-block text-(--text-color-3) font-family-2 text-xs mt-4 border border-[color-mix(in_srgb,var(--background-color-3)_20%,transparent)] px-3 py-1 font-medium">
            Work
        </span>
    },
    {
        period: "Late 2024 - Present",
        title: "Freelance Developer",
        category: "Independent Contractor",
        description: {
            paragraph: "Delivering custom software solutions across web development, algorithm implementation, and educational technology platforms. Projects include educational gamification platforms with interactive quiz systems, C++ simulation systems for algorithm visualization, and custom web applications for client-specific requirements."
        },
        badge: <span className="inline-block text-(--text-color-3) font-family-2 text-xs mt-4 border border-[color-mix(in_srgb,var(--background-color-3)_20%,transparent)] px-3 py-1 font-medium">
            Work
        </span>
    }
]

const achievements: Achievement[] = [
    {
        period: "Semester 1-5 (2023-2025)",
        title: "Dean's List",
        achieved: "GPA 3.85/4.00",
        category: "Universitas Negeri Malang",
        description: {
            paragraph: "Consistent academic performance across foundational computer science coursework."
        }
    },
    {
        period: "July-2025",
        title: "Gold Medal - Departmental Capstone Competition",
        achieved: "1st Place, Informatics Engineering Department",
        category: "Universitas Negeri Malang",
        description: {
            paragraph: 'Awarded for "Mulia Kopi Smart Coffee Shop System," recognized for innovative AI integration in business applications.'
        }
    },
    {
        period: "August-2024",
        title: "Intellectual Property Registration",
        achieved: "Copyright Certificate - UTBK Online Booking System",
        category: "Directorate General of Intellectual Property, Indonesia",
        description: {
            paragraph: 'Registered intellectual property rights for educational technology platform enabling online tutoring session management.'
        }
    }
]

function Experience() {
    const { ref, visible } = UseReveal(0.12);

    return (
        <div
            className="w-full flex flex-col items-center justify-center bg-(--background-color-4)"
            id="experience"
            ref={ref}
        >
            <span
                className="w-px h-20 md:h-25 lg:h-30 bg-[linear-gradient(to_bottom,transparent_0%,var(--background-color-3)_50%,transparent_100%)] opacity-50">
            </span>

            <MaxWidthWrapper className="flex flex-col md:flex-row items-start md:items-stretch md:justify-between pt-12 pb-40">
                {/* LEFT */}
                <div
                    className={`w-full md:w-[33%] flex justify-start items-start h-auto flex-col reveal d1
                    ${visible ? "is-visible" : ""}`}
                >
                    <p className="tracking-[0.275em] text-(--text-color-3) font-family-2 text-sm">04 - JOURNEY</p>
                    <p className="font-family-1 text-2xl md:text-3xl lg:text-4xl text-(--text-color-1) mt-3 md:mt-6 font-semibold">Experience & Education</p>
                </div>

                {/* RIGHT */}
                <div className="w-full md:w-[64%] flex flex-col items-start justify-center mt-8 md:mt-0">
                    <div className="grid grid-cols-[1%_99%] md:grid-cols-[5%_95%] relative">
                        {/* timeline column */}
                        <div
                            className={`relative flex justify-start reveal d2
                            ${visible ? "is-visible" : ""}`}
                        >
                            {/* vertical line (continuous) */}
                            <span className="absolute top-0 bottom-0 w-px bg-[color-mix(in_srgb,var(--background-color-3)_20%,transparent)]"></span>
                        </div>

                        {/* content column */}
                        <div className="flex flex-col gap-y-12 md:gap-y-20">
                            {experiences.map((experience, index) => {
                                return (
                                    <div
                                        className={`relative pl-8 reveal d${Math.min(index + 3, 6)}
                                        ${visible ? "is-visible" : ""}`}
                                        key={index}
                                    >
                                        {/* dot */}
                                        <span className="absolute left-[calc(-1%-0.25px)] md:left-[calc(-5%-1.25px)] top-0 size-2.5 rounded-full bg-(--background-color-2) -translate-x-1/2"></span>

                                        <p className="text-(--text-color-3) font-family-2 text-xs lg:text-sm tracking-widest uppercase">
                                            {experience.period}
                                        </p>

                                        <h1 className="font-family-1 text-3xl md:text-4xl lg:text-[42px] text-(--text-color-1) font-semibold mt-3">
                                            {experience.title}
                                        </h1>

                                        <p className="font-family-2 text-(--text-color-2) md:text-base lg:text-lg mt-2">
                                            {experience.category}
                                        </p>

                                        <p className="font-family-2 text-(--text-color-3) mt-3 lg:mt-4 md:text-sm lg:text-[17px]">
                                            {experience.description.paragraph}
                                        </p>

                                        {experience.badge}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <span
                        className={`bg-[color-mix(in_srgb,var(--background-color-3)_20%,transparent)] w-full h-px mt-16 lg:mt-24 reveal d6
                        ${visible ? "is-visible" : ""}`}
                    >
                    </span>

                    <div
                        className={`flex items-center justify-start gap-x-4 mt-10 lg:mt-16 reveal d6
                        ${visible ? "is-visible" : ""}`}
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="size-5 lg:size-6 text-(--text-color-2)">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="7" stroke="currentColor" stroke-width="1.5"></circle> <path d="M7.35111 15L6.71424 17.323C6.0859 19.6148 5.77173 20.7607 6.19097 21.3881C6.3379 21.6079 6.535 21.7844 6.76372 21.9008C7.41635 22.2331 8.42401 21.7081 10.4393 20.658C11.1099 20.3086 11.4452 20.1339 11.8014 20.0959C11.9335 20.0818 12.0665 20.0818 12.1986 20.0959C12.5548 20.1339 12.8901 20.3086 13.5607 20.658C15.576 21.7081 16.5837 22.2331 17.2363 21.9008C17.465 21.7844 17.6621 21.6079 17.809 21.3881C18.2283 20.7607 17.9141 19.6148 17.2858 17.323L16.6489 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> </g>
                        </svg>
                        <p className="font-family-1 text-(--text-color-1) text-xl lg:text-[22px] font-semibold">
                            Achievements & Recognition
                        </p>
                    </div>

                    {
                        achievements.map((achievement, index) => {
                            return (
                                <div
                                    className={`flex flex-col items-start justify-center w-full bg-(--background-color-1) px-6 py-4 lg:p-8 mt-10 lg:mt-12 border border-[color-mix(in_srgb,var(--background-color-3)_25%,transparent)] reveal d6
                                    ${visible ? "is-visible" : ""}`}
                                    key={index}
                                >
                                    <div className="flex justify-between items-center w-full">
                                        <h2 className="font-family-1 text-xl lg:text-2xl text-(--text-color-1) font-semibold">{achievement.title}</h2>
                                        <p className="font-family-2 text-xs lg:text-sm text-[color-mix(in_srgb,var(--text-color-3)_50%,transparent)] text-right">{achievement.period}</p>
                                    </div>
                                    <p className="font-family-2 text-(--text-color-2) mt-1 font-medium text-sm lg:text-base">
                                        {achievement.achieved}
                                    </p>
                                    <p className="font-family-2 text-(--text-color-3) mt-2 text-sm lg:text-base">
                                        {achievement.category}
                                    </p>
                                    <p className="font-family-2 text-(--text-color-4) mt-2 text-sm lg:text-base">
                                        {achievement.description.paragraph}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div >

            </MaxWidthWrapper >
        </div >
    )
}

export default Experience
