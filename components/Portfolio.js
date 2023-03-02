import {BsCircle, BsGithub} from "react-icons/bs";
import {FiBox} from "react-icons/fi";

export default function Portfolio() {
    const portfolios = [
        {
            id: 1,
            title: "Online Chess Web Application",
            desc: "2 player online chess game that allows players to find others in queue or play with friends",
            language: "MERN, Socket.io"
        },
        {
            id: 2,
            title: "MIPS Pipeline Processor",
            desc: "Implementation of a 32-bit 5 stage MIPS pipeline processor",
            language: "Verilog, Assembly, ModelSim"
        },
        {
            id: 3,
            title: "Digital Alarm Clock",
            desc: "An embedded systems implementation of a digital alarm clock with a software UI",
            language: "C++/C"
        },
        {
            id: 4,
            title: "Security Attack Simulations",
            desc: "A set of code simulating common software security attacks, including the Ping of Death",
            language: "Python"
        },
        {
            id: 5,
            title: "Linux-Based File System",
            desc: "A fully-functioning file system implemented using FUSE (File System in User Space) on a Linux machine",
            language: "C++/C"
        }
    ];

    return (
        <section className="w-full pt-1 mb-32">
            <div className="mx-auto flex flex-col h-full mt-20 md:mt-30">
                <div className="flex anim invisible">
                    <BsCircle
                        className="mr-4 text-tertiary"
                    />
                    <div className="md:text-4xl text-3xl text-grey font-NTR -mt-2 mr-4 text-primary">
                        portfolio
                    </div>
                </div>
                <p className="md:text-xl text-md text-secondary font-NTR my-7 anim invisible">
                    Listed below are some software creations and projects that I have made throughout
                    my career. My portfolio consists of creations that are based on my interests,
                    varying from full-stack development to system design and software security.
                </p>
                <div className="mx-auto w-full grid sm:grid-cols-2 lg:grid-cols-3 anim invisible">
                    {portfolios.map(({ id, title, desc, language }) => (
                        <Project key={id} title={title} desc={desc} language={language} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function Project(props) {
    const title = props.title;
    const desc = props.desc;
    const language = props.language;
    return (
            <div
                className="p-4 w-[95%] aspect-video mx-auto mt-4 bg-button opacity-90 rounded-xl shadow-lg
                hover:scale-105 duration-200 flex flex-col"
            >
                <div className="w-full h-1/4 flex justify-end align-items">
                    <FiBox className="text-white mr-4"/>
                    <a href="https://github.com/taeseongk">
                        <BsGithub className="text-white cursor-pointer hover:scale-[1.1] duration-200"/>
                    </a>
                </div>
                <div className="w-full h-1/4 font-NTR text-white text-2xl">
                    {title}
                </div>
                <div className="w-full h-1/2 font-NTR text-white">
                    {desc}
                </div>
                <div className="mt-2 w-full h-1/4 font-NTR text-white">
                    {language}
                </div>
            </div>
    )
}
