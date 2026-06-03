const Badge = ({ text, variant = "white" }: { text: string; variant?: "black" | "white" }) => {
    return (
        <div className="flex items-center gap-2 mb-4 border px-3 py-2 rounded-full w-fit border-[rgba(0,0,0,0.10)] mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#168DCA]" />
            <span className={`md:text-sm text-xs font-medium ${variant == "black" ? "text-black" : "text-white"} tracking-widest`}>
                {text}
            </span>
        </div>
    )
} 

export default Badge
