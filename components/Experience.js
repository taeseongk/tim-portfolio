import React, { useEffect } from "react";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import {BsCircle} from "react-icons/bs";

export default function Experience() {
    useEffect(() => {
        document.getElementById('btn1').onclick = function() {
            document.getElementById('exp1').style.visibility = "visible";
            document.getElementById('exp2').style.visibility = "hidden";
            document.getElementById('exp3').style.visibility = "hidden";
        }

        document.getElementById('btn2').onclick = function() {
            document.getElementById('exp1').style.visibility = "hidden";
            document.getElementById('exp2').style.visibility = "visible";
            document.getElementById('exp3').style.visibility = "hidden";
        }

        document.getElementById('btn3').onclick = function() {
            document.getElementById('exp1').style.visibility = "hidden";
            document.getElementById('exp2').style.visibility = "hidden";
            document.getElementById('exp3').style.visibility = "visible";
        }
    })

    return (
        <section className="w-full pt-1">
            <div className="mx-auto flex flex-col h-full mt-20">
                <div className="flex anim invisible">
                    <BsCircle
                        className="mr-4 text-tertiary"
                    />
                    <div className="md:text-4xl text-3xl text-primary font-NTR -mt-2 mr-4">
                        experience
                    </div>
                </div>
                <div className="flex anim invisible">
                    <div className="flex flex-col mt-5 w-full">
                        <div className="flex w-11/12 mx-auto justify-between text-secondary">
                            <div className="ml-1">1</div>
                            <div className="">2</div>
                            <div className="mr-1">3</div>
                        </div>
                        <div className="bg-button opacity-90 h-0.5 w-11/12 mx-auto mt-6"/>
                        <div className="flex w-11/12 mx-auto justify-between">
                            <div
                                id="btn1"
                                className="bg-button w-3.5 h-3.5 rounded-xl -mt-2
                                cursor-pointer hover:scale-[1.3] duration-200"
                            />
                            <div
                                id="btn2"
                                className="bg-button w-3.5 h-3.5 rounded-xl -mt-2
                                cursor-pointer hover:scale-[1.3] duration-200"
                            />
                            <div
                                id="btn3"
                                className="bg-button 90 w-3.5 h-3.5 rounded-xl -mt-2
                                cursor-pointer hover:scale-[1.3] duration-200"
                            />
                        </div>
                        <div className="w-full ml-5 relative">
                            <div className="h-[400px] sm:h-[300px]">
                                <div
                                    id="exp1"
                                    className="w-11/12 mx-auto mt-10 absolute lineUp"
                                >
                                    <h2 className="md:text-3xl font-NTR text-2xl text-primary leading-6">Team Leader at DSA CS Camp @
                                        <span className="text-tertiary"> Pepperdine University </span>
                                    </h2>
                                    <h3 className="md:text-lg font-NTR text-md text-secondary mt-2">June 2018 - August 2018</h3>
                                    <div className="mt-4 flex">
                                        <VscDebugBreakpointDataUnverified
                                            size={20}
                                            className="text-tertiary"
                                        />
                                        <p className="md:text-xl text-md font-NTR w-full ml-2 text-secondary">
                                            Directed a team of engineers to win a competition based on a group research project
                                            presentation
                                        </p>
                                    </div>
                                    <div className="mt-2 flex">
                                        <VscDebugBreakpointDataUnverified
                                            size={20}
                                            className="text-tertiary"
                                        />
                                        <p className="md:text-xl text-md font-NTR w-full ml-2 text-secondary">
                                            Designed an efficient algorithm to process sampled Twitter data and establish relevant
                                            trends to address a research topic based on sentiment analysis
                                        </p>
                                    </div>
                                    <div className="mt-2 flex">
                                        <VscDebugBreakpointDataUnverified
                                            size={20}
                                            className="text-tertiary"
                                        />
                                        <p className="md:text-xl text-md font-NTR w-full ml-2 text-secondary">
                                            Implemented backend method which employed language processing tool NLTK and search API
                                            Tweepy to effectively filter Twitter data based on positive or negative sentiment
                                        </p>
                                    </div>
                                </div>
                                <div
                                    id="exp2"
                                    className="w-11/12 mx-auto mt-10 absolute invisible"
                                >
                                    <h2 className="md:text-3xl font-NTR text-2xl text-primary leading-6">Computer Science/Math Tutor @
                                        <span className="text-tertiary"> Torrance, CA </span>
                                    </h2>
                                    <h3 className="md:text-lg font-NTR text-md text-secondary mt-2">Jun 2020 - PRESENT</h3>
                                    <div className="mt-4 flex">
                                        <VscDebugBreakpointDataUnverified
                                            size={20}
                                            className="text-tertiary"
                                        />
                                        <p className="md:text-xl text-md font-NTR w-full ml-2 text-secondary">
                                            Tutored varying topics in computer science, from object-oriented programming to data
                                            structures/algorithms to high school and college students
                                        </p>
                                    </div>
                                    <div className="mt-2 flex">
                                        <VscDebugBreakpointDataUnverified
                                            size={20}
                                            className="text-tertiary"
                                        />
                                        <p className="md:text-xl text-md font-NTR w-full ml-2 text-secondary">
                                            Assisted students to succeed in their courses by dedicating specific teaching plans for students
                                            based on courses such as AP Computer Science or Intro to Computer Science
                                        </p>
                                    </div>
                                    <div className="mt-2 mb-5 flex">
                                        <VscDebugBreakpointDataUnverified
                                            size={20}
                                            className="text-tertiary"
                                        />
                                        <p className="md:text-xl text-md font-NTR w-full ml-2 text-secondary">
                                            Demonstrated to students on creating a basic software project using technologies such as VS Code,
                                            Git, and full software stacks
                                        </p>
                                    </div>
                                </div>
                                <div
                                    id="exp3"
                                    className="w-11/12 mx-auto mt-10 absolute invisible"
                                >
                                    <h2 className="md:text-3xl font-NTR text-2xl text-primary leading-6">Mathematics Tutor @
                                        <span className="text-tertiary"> Mathnasium </span>
                                    </h2>
                                    <h3 className="md:text-lg font-NTR text-md text-secondary mt-2">Jul 2021 - Oct 2021</h3>
                                    <div className="mt-4 flex">
                                        <VscDebugBreakpointDataUnverified
                                            size={20}
                                            className="text-tertiary"
                                        />
                                        <p className="md:text-xl text-md font-NTR w-full ml-2 text-secondary">
                                            Tutored varying topics in mathematics, from basic arithmetic operations to differential
                                            equations and linear algebra to elementary through college students
                                        </p>
                                    </div>
                                    <div className="mt-2 flex">
                                        <VscDebugBreakpointDataUnverified
                                            size={20}
                                            className="text-tertiary"
                                        />
                                        <p className="md:text-xl text-md font-NTR w-full ml-2 text-secondary">
                                            Designed an elaborate teaching plan dedicated to each student
                                        </p>
                                    </div>
                                    <div className="mt-2 flex">
                                        <VscDebugBreakpointDataUnverified
                                            size={20}
                                            className="text-tertiary"
                                        />
                                        <p className="md:text-xl text-md font-NTR w-full ml-2 text-secondary">
                                            Monitored and recorded each student&apos;s performance on a data sheet
                                        </p>
                                    </div>
                                    <div className="mt-2 flex">
                                        <VscDebugBreakpointDataUnverified
                                            size={20}
                                            className="text-tertiary"
                                        />
                                        <p className="md:text-xl text-md font-NTR w-full ml-2 text-secondary">
                                            Created a reward system to incentivize students
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
