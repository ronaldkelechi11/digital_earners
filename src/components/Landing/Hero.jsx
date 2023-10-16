import { TypeAnimation } from "react-type-animation"

const Hero = () => {
    return (
        <div className='h-screen bg-primary flex justify-center flex-col md:flex-row p-5'>
            <div className="md:w-[90%] p-2 flex flex-col gap-4 justify-center md:flex-col items-center">
                <div className="text-white text-center font-poppins md:text-5xl">
                    <TypeAnimation
                        sequence={[
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dicta.", 1000,
                            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, totam!", 1000
                        ]}
                        speed={50}
                        repeat={Infinity}

                    />

                </div>
                <div className="text-white text-center hidden md:flex font-poppins text-[10px] md:text-[14px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dicta.
                </div>

                <div className="flex gap-2 justify-center md:gap-3">
                    <button
                        className="bg-white cursor-pointer font-poppins text-primary rounded-3xl p-[10px_30px]">
                        Register
                    </button>
                    <button
                        className="text-white cursor-pointer font-poppins border-white rounded-3xl border border-solid p-[10px_30px]">
                        Login
                    </button>
                </div>
            </div>


            {/* Holds the Hero Image */}
            <div className=""></div>
        </div>
    )
}

export default Hero
