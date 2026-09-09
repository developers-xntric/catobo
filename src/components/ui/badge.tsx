const Badge = ({ text, variant = "white", className = "" }: { text: string; variant?: "black" | "white"; className?: string }) => {
    return (
        <div className={`flex items-center gap-2 mb-4 border px-3 py-2 rounded-full w-fit border-[rgba(0,0,0,0.10)] ${className}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#168DCA]" />
            <span className={`md:text-[13px] text-xs  ${variant == "black" ? "text-black" : "text-white"} `}>
                {text}
            </span>
        </div>
    )
}


export default Badge
