import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import React, { useEffect } from "react";
import Image from "next/image";

export default function Main() {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            console.log(typeof(entries))
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('invisible');
                    entry.target.classList.add('lineUp');
                }
            });
        });
        let elements = document.querySelectorAll('.anim');
        [].forEach.call(elements, function(div) {
            observer.observe(div);
        })
    })

    return (
        <section className="w-full pt-1">
            <div className="flex md:h-screen">
                <div className="mx-auto md:my-auto flex flex-col">
                    <div
                        className="flex flex-col items-center justify-center md:items-start
                        lg:items-start"
                    >
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-center">
                                <div className="sm:text-left md:text-left lg:text-left md:text-8xl text-5xl
                                    text-primary font-small font-NTR mt-10 text-center anim invisible waviy">
                                    <span style={{ "--i":1 }}>T</span>
                                    <span style={{ "--i":2 }}>I</span>
                                    <span style={{ "--i":3 }}>M&nbsp;</span>
                                    <span style={{ "--i":4 }}>K</span>
                                    <span style={{ "--i":5 }}>I</span>
                                    <span style={{ "--i":6 }}>M</span>
                                </div>
                                <h2
                                    className="md:text-4xl text-2xl text-secondary font-small font-NTR mt-5 leading-7 text-center
                                    sm:mr-7 md:mr-7 lg:mr-7 sm:text-left md:text-left lg:text-left anim invisible"
                                >
                                    I create things and solve problems using code.
                                </h2>
                            </div>
                            <div className="w-[25%] aspect-square flex rounded-full hidden sm:block md:visible lg:visible xl:visible anim invisible">
                                <Image
                                    alt=""
                                    className="block mx-auto rounded-full shadow-md shadow-primary hover:scale-[1.025] duration-200"
                                    src={require("../public/cute_pic.png")}
                                />
                            </div>
                        </div>


                        <p
                            className="text-center sm:text-left md:text-left lg:text-left md:text-xl text-md text-secondary font-NTR leading-6 mt-10
                            anim invisible"
                        >
                            I am a fourth-year undergraduate student at
                            <span className="text-tertiary"> UCSB </span>
                            undertaking a Bachelor&apos;s of Science in
                            <span className="text-tertiary"> Computer Engineering</span>
                            . I have particular
                            interests in software development, computer security, artifical intelligence, and
                            operating systems. Currently, I am looking for internship opportunities to further my
                            knowledge and experience of these specific fields.
                        </p>
                        <Links state={false}/>
                        <a href="mailto:taeseongkim@ucsb.edu">
                            <div
                                className="bg-button w-28 text-center py-3 rounded-xl mt-7
                                cursor-pointer hover:scale-105 duration-200 opacity-90 anim invisible"
                            >
                                <span className="text-white">Contact me!</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}

function Links() {
    return (
        <div className="flex align-items justify-between w-20 md:hidden lg:hidden mt-7 anim invisible">
            <a href="mailto:taeseongkim@ucsb.edu">
                <MdEmail
                    className= "cursor-pointer text-primary hover:scale-[1.1] duration-200"
                    size={20}
                />
            </a>
            <a href="https://github.com/taeseongk">
                <BsGithub
                    className="cursor-pointer text-primary hover:scale-[1.1] duration-200"
                    size={20}
                />
            </a>
            <a href="https://www.linkedin.com/in/taeseong-kim/">
                <BsLinkedin
                    size={20}
                    className="cursor-pointer text-primary hover:scale-[1.1] duration-200"
                />
            </a>
        </div>
    )
}
