export type Paragraph = {
    paragraph: string
}

export type Quote = {
    quote: string
    Paragraph: Paragraph
}

export type TechStacks = {
    stacks: string[]
}

export type SkillDomain = {
    domainName: string,
    description: Paragraph,
    techStacks: TechStacks
}

export type ProjectCard = {
    img: string
    category: string,
    year: number,
    title: string,
    description: Paragraph,
    techStacks: TechStacks,
    projectLink: string
}
