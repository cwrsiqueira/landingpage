import Image from "next/image";
import Link from "next/link";
import { ReactElement, SVGProps } from "react";
import { Menu } from "../../types/Menu";
import { Social } from "../../types/Social";

type Props = {
    logo: ReactElement<SVGProps<SVGElement>>;
    title: string;
    menu: Menu[];
    sociais: Social[];
}

const Footer = ({ logo, title, menu, sociais }: Props) => {
    return (
        <div className="flex flex-col justify-center items-center bg-[#F7FAFC] pt-16 pb-9">
            <div className="mb-8 flex">
                <div>{logo}</div>
                <div className="font-mediu text-xl color-black self-end">{title}</div>
            </div>
            <div className="mb-8 hidden md:flex">
                {menu.map((item, index) => (
                    <li key={index} className='mx-6 cursor-pointer ease-in-out duration-300 hover:text-slate-400 list-none'>
                        <Link href={item.url}>
                            <a>{item.menu}</a>
                        </Link>
                    </li>
                ))}
            </div>
            <div className="mb-8 flex flex-wrap items-center justify-center">
                {sociais.map((item, index) => (
                    <li key={index} className='mx-6 cursor-pointer ease-in-out duration-300 hover:text-slate-400 list-none'>
                        <Link href={item.url}>
                            <a>
                                <Image src={item.img} alt="" width={'24px'} height={'24px'} />
                            </a>
                        </Link>
                    </li>
                ))}
            </div>
            <div className="flex flex-col items-center mb-8 text-sm text-[#718096] md:flex-row">
                © Copyright 2021 {title} - Powered with ♥ by {' '}
                <div className="text-[#03A9F4]">
                    <Link href={'#'}>
                        <a>Carlos Wagner Dev</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;