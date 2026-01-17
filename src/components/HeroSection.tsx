import MaxWidthWrapper from "./MaxWidthWrapper"
import ProfilePicture from "../assets/profile_picture.png"

function HeroSection() {
    return (
        <div className="w-full bg-grid h-auto pt-16 md:pt-20 pb-8 md:pb-16 overflow-hidden">
            <MaxWidthWrapper className="flex flex-col-reverse md:flex-row justify-between items-stretch relative">
                <div className="md:absolute md:bottom-0 md:left-1/2 md:right-1/2 flex flex-col items-center justify-center gap-y-1 mt-8 md:mt-0 md:translate-y-12 hero-center entry hero-block">
                    <div className="scroll-indicator">
                        <p
                            className="font-family-2 text-xs lg:text-sm tracking-widest
                 text-[color-mix(in_srgb,var(--text-color-3)_55%,transparent)]
                 scroll-text"
                        >
                            SCROLL
                        </p>

                        <span className="scroll-line" />
                    </div>
                </div>


                <div className="w-full md:w-1/2 mt-5 md:mt-0 hero-left entry hero-block">
                    <p className="uppercase tracking-[0.275em] text-(--text-color-3) font-family-2 text-xs md:text-sm lg:text-[16px]">Game Developer & Low-Level Engineer</p>
                    <div className="mt-3 font-family-1 text-4xl md:text-7xl lg:text-[114px] text-(--text-color-1) font-semibold flex md:block gap-x-2">
                        <h1 className="text-(--text-color-1)">
                            Febri
                        </h1>
                        <h1 className="text-(--text-color-2)">
                            Andika
                        </h1>
                    </div>
                    <p className="font-family-2 text-sm md:text-lg lg:text-xl text-(--text-color-2) mt-2 md:mt-4 lg:mt-0">
                        @<span className="text-(--text-color-3)">TheProdigy18</span>
                    </p>

                    <p className="font-family-2 text-sm md:text-lg lg:text-2xl text-(--text-color-1) mt-4 md:mt-6 lg:mt-8">
                        Crafting Interactive Experiences from Low-Level Systems to AI-Powered Solutions,
                        <span className="text-(--text-color-2)"> where systems programming meets creative vision.</span>
                    </p>

                    {/* Social Media */}
                    <div className="flex justify-start items-center mt-6 md:mt-10 lg:mt-12 gap-x-4 md:gap-x-6 lg:gap-x-12 font-medium text-sm lg:text-[16px]">
                        {/* Email */}
                        <a
                            className="nav-item flex items-center gap-x-1 md:gap-x-2 lg:gap-x-3 cursor-pointer transition-colors duration-300"
                            style={{
                                "--nav-hover-color": "var(--text-color-2)",
                                "--nav-normal-color": "var(--text-color-3)",
                                "--nav-underline-height": "1px",
                            } as React.CSSProperties}
                            href="mailto:febriandika4567@gmail.com"
                        >
                            <svg viewBox="0 0 24 24" fill="none"
                                className="size-5 lg:size-6"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="nav-link">Email</p>
                        </a>

                        {/* GitHub */}
                        <a
                            className="nav-item flex items-center gap-x-1 md:gap-x-2 lg:gap-x-3 cursor-pointer transition-colors duration-300"
                            style={{
                                "--nav-hover-color": "var(--text-color-2)",
                                "--nav-normal-color": "var(--text-color-3)",
                                "--nav-underline-height": "1px",
                            } as React.CSSProperties}
                            href="https://github.com/theprodigy18"
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="size-5 lg:size-6">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.29183 21V18.4407L9.3255 16.6219C9.36595 16.0561 9.58639 15.5228 9.94907 15.11C9.95438 15.1039 9.95972 15.0979 9.9651 15.0919C9.9791 15.0763 9.96988 15.0511 9.94907 15.0485V15.0485C7.52554 14.746 5.0005 13.7227 5.0005 9.26749C4.9847 8.17021 5.3427 7.10648 6.00437 6.27215C6.02752 6.24297 6.05103 6.21406 6.07492 6.18545V6.18545C6.10601 6.1482 6.11618 6.09772 6.10194 6.05134C6.10107 6.04853 6.10021 6.04571 6.09935 6.04289C6.0832 5.9899 6.06804 5.93666 6.05388 5.88321C5.81065 4.96474 5.86295 3.98363 6.20527 3.09818C6.20779 3.09164 6.21034 3.08511 6.2129 3.07858C6.22568 3.04599 6.25251 3.02108 6.28698 3.01493V3.01493C6.50189 2.97661 7.37036 2.92534 9.03298 4.07346C9.08473 4.10919 9.13724 4.14609 9.19053 4.18418V4.18418C9.22901 4.21168 9.27794 4.22011 9.32344 4.20716C9.32487 4.20675 9.32631 4.20634 9.32774 4.20593C9.41699 4.18056 9.50648 4.15649 9.59617 4.1337C11.1766 3.73226 12.8234 3.73226 14.4038 4.1337C14.4889 4.1553 14.5737 4.17807 14.6584 4.20199C14.6602 4.20252 14.6621 4.20304 14.6639 4.20356C14.7174 4.21872 14.7749 4.20882 14.8202 4.17653V4.17653C14.8698 4.14114 14.9187 4.10679 14.967 4.07346C16.6257 2.92776 17.4894 2.9764 17.7053 3.01469V3.01469C17.7404 3.02092 17.7678 3.04628 17.781 3.07946C17.7827 3.08373 17.7843 3.08799 17.786 3.09226C18.1341 3.97811 18.1894 4.96214 17.946 5.88321C17.9315 5.93811 17.9159 5.9928 17.8993 6.04723V6.04723C17.8843 6.09618 17.8951 6.14942 17.9278 6.18875C17.9289 6.18998 17.9299 6.19121 17.9309 6.19245C17.9528 6.21877 17.9744 6.24534 17.9956 6.27215C18.6573 7.10648 19.0153 8.17021 18.9995 9.26749C18.9995 13.747 16.4565 14.7435 14.0214 15.015V15.015C14.0073 15.0165 14.001 15.0334 14.0105 15.0439C14.0141 15.0479 14.0178 15.0519 14.0214 15.0559C14.2671 15.3296 14.4577 15.6544 14.5811 16.0103C14.7101 16.3824 14.7626 16.7797 14.7351 17.1754V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 17C4.36915 17.0523 4.72159 17.1883 5.03065 17.3975C5.3397 17.6068 5.59726 17.8838 5.7838 18.2078C5.94231 18.4962 6.15601 18.7504 6.41264 18.9557C6.66927 19.161 6.96379 19.3135 7.27929 19.4043C7.59478 19.4952 7.92504 19.5226 8.25112 19.485C8.5772 19.4475 8.89268 19.3457 9.17946 19.1855" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                            </svg>
                            <p className="nav-link">Github</p>
                        </a>

                        {/* Itch.io */}
                        <a
                            className="nav-item flex items-center gap-x-1 md:gap-x-2 lg:gap-x-3 cursor-pointer transition-colors duration-300"
                            style={{
                                "--nav-hover-color": "var(--text-color-2)",
                                "--nav-normal-color": "var(--text-color-3)",
                                "--nav-underline-height": "1px",
                            } as React.CSSProperties}
                            href="https://itch.io/profile/childprodigy18"
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="size-5 lg:size-6">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.99999 8.5C7.99999 7.94772 7.55227 7.5 6.99999 7.5C6.4477 7.5 5.99999 7.94772 5.99999 8.5V9H5.49999C4.9477 9 4.49999 9.44771 4.49999 10C4.49999 10.5523 4.9477 11 5.49999 11H5.99999V11.5C5.99999 12.0523 6.4477 12.5 6.99999 12.5C7.55227 12.5 7.99999 12.0523 7.99999 11.5V11H8.49999C9.05227 11 9.49999 10.5523 9.49999 10C9.49999 9.44771 9.05227 9 8.49999 9H7.99999V8.5Z" fill="currentColor"></path> <path d="M18 8C18 8.55229 17.5523 9 17 9C16.4477 9 16 8.55229 16 8C16 7.44772 16.4477 7 17 7C17.5523 7 18 7.44772 18 8Z" fill="currentColor"></path> <path d="M17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13Z" fill="currentColor"></path> <path d="M16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44771 14.4477 9 15 9C15.5523 9 16 9.44771 16 10Z" fill="currentColor"></path> <path d="M19 11C19.5523 11 20 10.5523 20 10C20 9.44771 19.5523 9 19 9C18.4477 9 18 9.44771 18 10C18 10.5523 18.4477 11 19 11Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C10.1879 3 7.96237 3.25817 6.21782 3.5093C3.94305 3.83676 2.09096 5.51696 1.60993 7.7883C1.34074 9.05935 1.07694 10.5622 1.01649 11.8204C0.973146 12.7225 0.877981 13.9831 0.777155 15.1923C0.672256 16.4504 1.09148 17.7464 1.86079 18.6681C2.64583 19.6087 3.88915 20.2427 5.32365 19.8413C6.24214 19.5842 6.97608 18.9387 7.5205 18.3026C8.07701 17.6525 8.51992 16.9124 8.83535 16.3103C9.07821 15.8467 9.50933 15.5855 9.91539 15.5855H14.0846C14.4906 15.5855 14.9218 15.8467 15.1646 16.3103C15.4801 16.9124 15.923 17.6525 16.4795 18.3026C17.0239 18.9387 17.7578 19.5842 18.6763 19.8413C20.1108 20.2427 21.3541 19.6087 22.1392 18.6681C22.9085 17.7464 23.3277 16.4504 23.2228 15.1923C23.122 13.9831 23.0268 12.7225 22.9835 11.8204C22.923 10.5622 22.6592 9.05935 22.39 7.7883C21.909 5.51696 20.0569 3.83676 17.7821 3.5093C16.0376 3.25817 13.8121 3 12 3ZM6.50279 5.48889C8.22744 5.24063 10.3368 5 12 5C13.6632 5 15.7725 5.24063 17.4972 5.4889C18.965 5.70019 20.1311 6.77489 20.4334 8.20267C20.6967 9.44565 20.9332 10.8223 20.9858 11.9164C21.0309 12.856 21.1287 14.1463 21.2297 15.3585C21.2912 16.0956 21.0342 16.8708 20.6037 17.3866C20.1889 17.8836 19.7089 18.0534 19.2153 17.9153C18.8497 17.8129 18.4327 17.509 17.9989 17.0021C17.5771 16.5094 17.2144 15.9131 16.9362 15.3822C16.4043 14.3667 15.3482 13.5855 14.0846 13.5855H9.91539C8.65178 13.5855 7.59571 14.3667 7.06374 15.3822C6.78558 15.9131 6.42285 16.5094 6.00109 17.0021C5.56723 17.509 5.15027 17.8129 4.78463 17.9153C4.29109 18.0534 3.81102 17.8836 3.39625 17.3866C2.96576 16.8708 2.70878 16.0956 2.77024 15.3585C2.87131 14.1463 2.96904 12.856 3.01418 11.9164C3.06675 10.8223 3.30329 9.44565 3.56653 8.20267C3.86891 6.77489 5.03497 5.70019 6.50279 5.48889Z" fill="currentColor"></path> </g>
                            </svg>
                            <p className="nav-link">Itch.io</p>
                        </a>
                    </div>
                </div>

                <div className="flex w-full md:w-1/2 relative items-center justify-center hero-right entry hero-block">
                    <div className="md:absolute md:left-1/2 md:bottom-0 -translate-x-9 md:translate-x-[-50%] md:translate-y-6 lg:translate-y-10">
                        <img
                            src={ProfilePicture}
                            alt="Profile Picture"
                            className="w-80 md:w-100 lg:w-115 h-auto max-w-none opacity-75"
                            style={{
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                            }}
                        />
                    </div>
                    <div className="rounded-full size-30 md:size-42 lg:size-50 bg-transparent absolute md:right-0 bottom-0 border border-[color-mix(in_srgb,var(--background-color-2)_15%,transparent)] flex items-center justify-center">
                        <span className="rounded-full size-20 md:size-28 lg:size-33 bg-[color-mix(in_srgb,var(--background-color-2)_5%,transparent)]">
                        </span>
                    </div>
                    <div className="absolute md:right-0 translate-x-8 md:translate-x-12 lg:translate-x-18 translate-y-12">
                        {/* circle */}
                        <div className="rounded-full size-40 md:size-52 lg:size-68 border border-[color-mix(in_srgb,var(--text-color-3)_10%,transparent)]"></div>

                        {/* text */}
                        <p className="absolute inset-0 flex items-center justify-center font-family-2 text-[color-mix(in_srgb,var(--text-color-3)_35%,transparent)] tracking-[0.275em] rotate-90 origin-center font-light translate-x-4 text-xs md:text-sm lg:text-[16px]">
                            SINCE 2023
                        </p>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default HeroSection
