import { ReactElement, SVGProps } from "react";

type Props = {
    title: string;
    text: string;
    img: ReactElement;
    imgSm: ReactElement;
    reverse?: boolean;
}

const BodyItem = ({ title, text, img, imgSm, reverse }: Props) => {
    return (
        <div className={`flex flex-col items-center justify-center mb-12 ${reverse ? 'md:flex-row-reverse' : ''} md:flex-row`}>
            <div className='text-center mx-12 lg:max-w-[20%]'>
                <div className='font-medium text-sm text-black mb-7 md:text-xl'>{title}</div>
                <div className='font-normal text-sm text-[#718096] mb-6 md:text-xl'>{text}</div>
            </div>
            <div className='mx-12 hidden md:block'>
                {img}
            </div>
            <div className='mx-12 md:hidden'>
                {imgSm}
            </div>
        </div>
    );
}

export default BodyItem;