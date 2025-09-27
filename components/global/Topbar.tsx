import Link from "next/link";
import React from "react";
import { IoCallOutline } from "react-icons/io5";

const Topbar = () => {
    return (
        <div className="h-12 w-full bg-linear-to-r from-cyan-100 to-blue-100">
            <div className="container h-12 mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <IoCallOutline color="#525252" size={20} />
                    <p className="text-base font-semibold text-neutral-600">
                        +1 (234) 567-8901
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {[
                        "Order Tracking",
                        "Blogs",
                        "Gift",
                        "EMi Policy",
                        "Store Location",
                    ].map((item) => (
                        <Link
                            href="/"
                            key={item}
                            className="text-xs font-semibold uppercase text-neutral-600 hover:text-amber-500 transition-all tracking-wider"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Topbar;
