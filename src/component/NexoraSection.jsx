import React from 'react'
import statusImg from '../assets/status.jpeg'

const NexoraSection = () => {
    return (
        <section className="pb-20 md:pt-28 pt-0 px-2">
            <div className="container mx-auto">
                <div className="w-full max-w-[470px]">
                    <h1
                        className="xl:text-[60px] lg:text-[47px] md:text-[40px] text-[30px] font-serif leading-tight text-balance text-black"
                    >
                        What Does the Fawcett Name Represents?
                    </h1>
                    <p className="text-[17px] font-light text-[#BEBEBE] text-balance pt-3">
                        Captain Billy's bottom line was simple yet revolutionary: to offer value, entertainment, and quality content to his readers. He believed in the power of stories to inspire, entertain, and make a difference in people's lives. This belief drove him to expand his publishing empire, venturing into comic books, novels, and even motion pictures. Through his innovative spirit and unwavering dedication, **Fawcett Publications** became synonymous with captivating storytelling and unparalleled quality.
                    </p>
                    <div className="flex mt-10 space-x-3">
                        <img 
                            src={statusImg}
                            className="w-full object-cover object-center h-[70px] max-w-[70px] rounded-full" 
                            alt="Status"
                        />
                        <div>
                            <h2 className="xl:text-[24px] text-[20px] text-[#EB4209] font-semibold">
                                Emily Stone
                            </h2>
                            <p className="xl:text-[16px] lg:text-[14px] text-[13px] font-normal pt-1 text-[#BEBEBE]">
                                Chat Support At Nexora Publishers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NexoraSection;
