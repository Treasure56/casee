import { db } from "@/db";
import { notFound } from "next/navigation";

export type PageProps = {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
}
export default async function Page({searchParams}: PageProps) {
    const {id} = searchParams

    if(!id || typeof id !== "string") {
        return notFound()
    }

    const configuration = await db.configuration.findUnique({
        where: {id},
    })
    
    if(!configuration){
        return notFound()}
    
    return (
        <div></div>
    );
}