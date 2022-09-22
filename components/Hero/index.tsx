import Link from "next/link";

type Props = {
    mainTitle: string;
    subTitle: string;
    subTitleColor: string;
    description: string;
    btnText: string;
    btnColor: string;
    btnLink: string;
}

const Hero = ({ mainTitle, subTitle, subTitleColor, description, btnText, btnColor, btnLink }: Props) => {
    return (
        <div className="flex bg-[#F7FAFC] justify-center mt-[140px] p-4 md:items-center md:h-[490px]">
            <div className="text-center">
                <div className="font-bold text-2xl text-[#1A202C] mb-6 md:text-5xl">{mainTitle}</div>
                <div className={`font-bold text-2xl text-[${subTitleColor}] mb-6 md:text-5xl`}>{subTitle}</div>
                <div className="font-normal text-xs text-[#718094] mb-6 md:text-2xl">{description}</div>
                <div className={`font-bold text-xs text-white bg-[#03A9F4] px-[60px] py-[25px] rounded-md ease-in-out duration-300 cursor-pointer w-[278px] m-auto hover:scale-105 md:text-xl md:w-[400px]`}>
                    <Link href={btnLink}>
                        <a>{btnText}</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;