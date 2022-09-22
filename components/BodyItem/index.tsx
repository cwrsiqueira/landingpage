import { ReactElement, SVGProps } from "react";

type Props = {
    title: string;
    text: string;
    svg: ReactElement<SVGProps<SVGElement>>;
    reverse?: boolean | false;
}

const BodyItem = ({ title, text, svg, reverse }: Props) => {
    return (
        <div className={`flex items-center justify-center mb-24 ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className='max-w-[20%] text-center mx-12'>
                <div className='font-medium text-xl text-black mb-7'>{title}</div>
                <div className='font-normal text-xl text-[#718096]'>{text}</div>
            </div>
            <div className='mx-12'>
                {svg}
            </div>
        </div>
    );
}

export default BodyItem;