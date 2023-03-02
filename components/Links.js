import React from "react";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Links() {
    return (
        <section className="fixed bottom-10 right-10 w-20 hidden md:block">
            <div className="align-items flex justify-between anim invisible">
                <a href="mailto:taeseongkim@ucsb.edu">
                    <MdEmail
                        className= "cursor-pointer text-primary hover:scale-[1.1] duration-200"
                    />
                </a>
                <a href="https://github.com/taeseongk">
                    <BsGithub
                        className="cursor-pointer text-primary hover:scale-[1.1] duration-200"
                    />
                </a>
                <a href="https://www.linkedin.com/in/taeseong-kim/">
                    <BsLinkedin
                        className="cursor-pointer text-primary hover:scale-[1.1] duration-200"
                    />
                </a>
            </div>
        </section>
    )
}
