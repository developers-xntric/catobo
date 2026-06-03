const Typography = ({ text }: { text: string }) => {
    return <h2 className="text-[20px] md:text-3xl lg:text-[40px] font-medium leading-[1.2] text-balance text-[#0a0f1e] mb-10 text-center">
        {text}
    </h2>

}

export default Typography;
