
const VerticleDivider = ({ adjustedTopLargeScreen, adjustedTopMobile }) => {
    return (
        <div className={`h-[100px] w-[1px] bg-slate-300 dark:bg-white mx-auto relative   ${adjustedTopLargeScreen && adjustedTopMobile || "top-20 lg:top-[108px]"} `} />
    )
}

export default VerticleDivider