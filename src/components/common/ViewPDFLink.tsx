export function ViewPDFLink({ label }: { label: string }) {
    return (
        <a
            href="#"
            className="text-[#168DCA] font-semibold underline underline-offset-2 hover:text-[#116a9a] transition-colors"
            onClick={(e) => e.preventDefault()}
        >
            {label}
        </a>
    );
}
