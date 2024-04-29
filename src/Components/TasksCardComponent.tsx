
"use client";

import { Card } from "flowbite-react";
import { Priority1 } from "./Priority1Component";

export function TaskCardComponent() {
    return (
        <Card href="#" className="w- w-72">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Task Name
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
                Task Info
            </p>

            <div className="inline-flex justify-between">
                <p className="font-bold inline-flex mt-3">
                    Priority Info - #
                </p>
                <Priority1/>
            </div>

        </Card>
    );
}
