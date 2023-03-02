import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { BsCircle } from "react-icons/bs";
import Image from 'next/image';

export default function About() {
    return (
        <section className="w-full pt-1">
            <div className="mx-auto flex flex-col h-full mt-20">
                <div className="flex justify-start anim invisible">
                    <BsCircle
                        className="mr-4 text-tertiary"
                    />
                    <div className="md:text-4xl text-3xl text-primary font-NTR -mt-2 w-44">
                        about me
                    </div>
                </div>
                <div className="flex sm:mr-7 md:mr-7 lg:mr-7">
                    <div className="flex flex-col mt-5">
                        <p className="md:text-xl text-md text-secondary font-NTR anim invisible">
                            Hi, my name is Taeseong Kim, but I go by my nickname Tim. I am a fourth-year
                            undergraduate student who is studying Computer Engineering at
                            <span className="text-tertiary"> UCSB. </span>
                            As of now, I plan on continuing my studies for an extra year in the Department of Computer Science
                            for the 5-year BS/MS program at UCSB.
                        </p>
                        <p className="md:text-xl text-md text-secondary font-NTR mt-6 anim invisible">
                            I have experience working with different technologies throughout school and personal
                            projects. Here are some I have been working with:
                        </p>
                        <div className="flex mt-5 mx-auto text-primary anim invisible">
                            <div className="mr-14">
                                <div className="flex items-center">
                                    <VscDebugBreakpointDataUnverified size={20} />
                                    <h2 className="text-lg font-NTR ml-2">C++/C</h2>
                                </div>
                                <div className="flex items-center">
                                    <VscDebugBreakpointDataUnverified size={20} />
                                    <h2 className="text-lg font-NTR ml-2">Python</h2>
                                </div>
                                <div className="flex items-center">
                                    <VscDebugBreakpointDataUnverified size={20} />
                                    <h2 className="text-lg font-NTR ml-2">Java</h2>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <VscDebugBreakpointDataUnverified size={20} />
                                    <h2 className="text-lg font-NTR ml-2">HTML/CSS</h2>
                                </div>
                                <div className="flex items-center">
                                    <VscDebugBreakpointDataUnverified size={20} />
                                    <h2 className="text-lg font-NTR ml-2">Javascript</h2>
                                </div>
                                <div className="flex items-center">
                                    <VscDebugBreakpointDataUnverified size={20} />
                                    <h2 className="text-lg font-NTR ml-2">React.js</h2>
                                </div>
                            </div>
                        </div>
                        <p className="md:text-xl text-md font-NTR mt-6 text-secondary anim invisible">
                            Apart from school and work, I enjoy music like jazz, rap, and ballad.
                            I also love playing basketball and doing puzzles.
                        </p>
                    </div>
                    <div className="hidden md:block lg:visible w-[800px] my-auto anim invisible">
                        <Image
                            alt=""
                            src={require("../public/profile.png")}
                            className="rounded-xl shadow-md shadow-primary hover:scale-[1.025] duration-200"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
