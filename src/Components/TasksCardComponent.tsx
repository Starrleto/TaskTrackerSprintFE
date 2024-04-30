
"use client";

import { Card } from "flowbite-react";
import { Priority1 } from "./Priority1Component";

export function TaskCardComponent() {
    return (
        <div className="px-4">

        <Card style={{fontFamily: 'Hammersmith'}} href="#" className=" w-72 h-44 rounded-xl">
            <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
                Task Name
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
                Task Info
            </p>

            <div className="inline-flex justify-between">
                <p className=" inline-flex mt-3">
                    Priority Info - #
                </p>
                <Priority1/>
            </div>

        </Card>
        </div>

    );
}
