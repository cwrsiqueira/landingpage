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
        <div className="flex bg-[#F7FAFC] h-[490px] justify-center items-center">
            <div className="text-center">
                <div className="font-bold text-5xl text-[#1A202C] mb-6">{mainTitle}</div>
                <div className={`font-bold text-5xl text-[${subTitleColor}] mb-6`}>{subTitle}</div>
                <div className="font-normal text-2x1 text-[#718094] mb-6">{description}</div>
                <div className={`font-bold text-x1 text-white bg-[#03A9F4] px-[60px] py-[25px] rounded-md ease-in-out duration-300 cursor-pointer w-[364px] m-auto hover:scale-105`}>
                    <Link href={btnLink}>
                        <a>{btnText}</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;