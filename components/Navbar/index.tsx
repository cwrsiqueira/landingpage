import Link from 'next/link';
import { ReactElement, SVGProps } from 'react';
import { Menu } from '../../types/Menu';

type Props = {
    logo: ReactElement<SVGProps<SVGElement>>;
    title: string;
    menu: Menu[];
}

const Navbar = ({ logo, title, menu }: Props) => {
    return (
        <div className="flex bg-[#F7FAFC] justify-around items-center py-12">
            <div className="flex items-center">
                <div>{logo}</div>
                <div className="text-[#1A202C] font-medium text-3xl">{title}</div>
            </div>
            <div>
                <ul className="flex list-none">
                    {menu.map((item, index) => (
                        <li key={index} className='mx-6 cursor-pointer ease-in-out duration-300 hover:text-slate-400'>
                            <Link href={item.url}>
                                <a>{item.menu}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;