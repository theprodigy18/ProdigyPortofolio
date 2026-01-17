import MaxWidthWrapper from "./MaxWidthWrapper"

function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="w-full h-auto">
            <span className="h-px w-full bg-[color-mix(in_srgb,var(--background-color-3)_25%,transparent)] flex mt-16 md:mt-20"></span>

            <MaxWidthWrapper className="flex items-center justify-between py-10 md:py-12">
                <div className="flex items-center justify-start gap-x-2">
                    <span className="font-family-1 text-xl lg:text-2xl text-(--text-color-1) font-semibold flex items-center justify-center">
                        FA<p className="text-(--text-color-2)">.</p>
                    </span>
                    <p className="font-family-2 text-(--text-color-3) text-xs lg:text-sm font-medium">&copy; {year}</p>
                </div>
                <p className="font-family-2 text-[color-mix(in_srgb,var(--background-color-3)_60%,transparent)] text-xs lg:text-sm font-medium">
                    Designed & built with precision and care.</p>
            </MaxWidthWrapper>
        </div>
    )
}

export default Footer
