
"use client";

import { Button } from "flowbite-react";

export function Priority2() {
    return (
        <div className="px-2">

        <Button className="bg-prioRed rounded-full w-12 h-12 border border-black" color="prioBlue">
            <div className="hidden">
                priority-1
            </div>
        </Button>
        </div>

    );
}