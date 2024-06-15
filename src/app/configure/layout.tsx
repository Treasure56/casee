import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <MaxWidthWrapper className="flex flex-1 flex-col">
            {children}
        </MaxWidthWrapper>
    );
}