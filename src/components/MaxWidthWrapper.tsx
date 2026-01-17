
function MaxWidthWrapper({ className, children }:
    {
        className?: string,
        children: React.ReactNode
    }
) {
    return (
        <div className={`max-w-7xl mx-auto w-full h-full px-6 md:px-0 md:w-10/12 ${className}`}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper
