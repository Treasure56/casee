import { Suspense } from "react";
import ThankYou from "./ThanYou";

export default function Page() {
    return (
        <Suspense> 
            <ThankYou />
        </Suspense>
    );
}