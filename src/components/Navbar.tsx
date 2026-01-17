import { useEffect, useState } from "react"
import MaxWidthWrapper from "./MaxWidthWrapper"

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 8)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-btn')) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isMenuOpen])

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            <div
                className={`
                fixed top-0 z-10 w-full pt-7 pb-4 font-family-1
                transition-all duration-300 ease-out
                ${isScrolled
                        ? "backdrop-blur-md bg-[color-mix(in_srgb,var(--background-color-1)_75%,transparent)] border-b border-[color-mix(in_srgb,var(--background-color-3)_25%,transparent)]"
                        : "bg-transparent border-b border-transparent"}
            `}
            >
                <MaxWidthWrapper className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="/"
                        className="text-2xl md:text-xl lg:text-2xl text-(--text-color-1) font-semibold flex items-center justify-center transition-colors duration-300 ease-in-out hover:text-(--text-color-2)"
                    >
                        FA<p className="text-(--text-color-2)">.</p>
                    </a>

                    {/* Desktop Navigation */}
                    <div
                        className="hidden md:flex items-center md:gap-x-4 lg:gap-x-8 md:text-[13px] lg:text-[15px] font-normal"
                        style={{ "--nav-underline-color": "var(--text-color-2)" } as React.CSSProperties}
                    >
                        <a href="/#about" className="nav-item">
                            <span className="nav-link">About</span>
                        </a>
                        <a href="/#skills" className="nav-item">
                            <span className="nav-link">Skills</span>
                        </a>
                        <a href="/#projects" className="nav-item">
                            <span className="nav-link">Projects</span>
                        </a>
                        <a href="/#experience" className="nav-item">
                            <span className="nav-link">Experience</span>
                        </a>
                        <a href="/#contact" className="nav-item">
                            <span className="nav-link">Contact</span>
                        </a>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="hamburger-btn md:hidden flex flex-col gap-1.5 w-5 h-4 justify-center items-center transition-all duration-300"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-full h-0.5 bg-(--text-color-1) transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''
                                }`}
                        ></span>
                        <span
                            className={`w-full h-0.5 bg-(--text-color-1) transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                        ></span>
                        <span
                            className={`w-full h-0.5 bg-(--text-color-1) transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                                }`}
                        ></span>
                    </button>
                </MaxWidthWrapper>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`
                    fixed inset-0 z-9 bg-[color-mix(in_srgb,var(--background-color-1)_95%,transparent)] backdrop-blur-md
                    transition-all duration-300 ease-in-out md:hidden
                    ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}
            >
                <div
                    className={`
                        mobile-menu
                        flex flex-col items-center justify-center h-full gap-8 font-family-1
                        transition-all duration-300 ease-out
                        ${isMenuOpen ? 'translate-y-0' : '-translate-y-4'}
                    `}
                >
                    <a
                        href="/#about"
                        onClick={closeMenu}
                        className="text-2xl text-(--text-color-1) transition-colors duration-300 hover:text-(--text-color-2)"
                    >
                        About
                    </a>
                    <a
                        href="/#skills"
                        onClick={closeMenu}
                        className="text-2xl text-(--text-color-1) transition-colors duration-300 hover:text-(--text-color-2)"
                    >
                        Skills
                    </a>
                    <a
                        href="/#projects"
                        onClick={closeMenu}
                        className="text-2xl text-(--text-color-1) transition-colors duration-300 hover:text-(--text-color-2)"
                    >
                        Projects
                    </a>
                    <a
                        href="/#experience"
                        onClick={closeMenu}
                        className="text-2xl text-(--text-color-1) transition-colors duration-300 hover:text-(--text-color-2)"
                    >
                        Experience
                    </a>
                    <a
                        href="/#contact"
                        onClick={closeMenu}
                        className="text-2xl text-(--text-color-1) transition-colors duration-300 hover:text-(--text-color-2)"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar