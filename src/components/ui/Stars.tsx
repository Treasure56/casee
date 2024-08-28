import { Star } from "lucide-react";

export default function Stars() {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
                <Star
                    key={i}
                    className="h-4 w-4 text-primary fill-primary"
                />
            ))}
        </div>
    );
}

