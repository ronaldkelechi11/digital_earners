import { TypeAnimation } from "react-type-animation"

const ComingSoon = () => {
    var logoImage = "/src/assets/logo.JPG";
    return (
        <div className='bg-white w-screen h-screen flex items-center justify-center text-8xl p-5'>
            <div className="fixed top-0 left-0 m-2 lg:m-5 animate-swing">
                <img className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px]" src={logoImage} alt="" />
            </div>
            <h1 className="text-primary font-roman text-center text-2xl lg:text-5xl">
                <TypeAnimation
                    sequence={[
                        "Are you ready to make some money ??", 3000,
                        "From Digital Earners??", 1000,
                        "Anticipate", 1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
        </div>
    )
}

export default ComingSoon
