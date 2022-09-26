import Link from 'next/link';
import { ReactElement, SVGProps, useState } from 'react';
import { Menu } from '../../types/Menu';

type Props = {
    logo: ReactElement<SVGProps<SVGElement>>;
    title: string;
    menu: Menu[];
}

const Navbar = ({ logo, title, menu }: Props) => {
    const [showMobileMenu, setShowMobileMenu] = useState<Boolean>(false)

    return (
        <div className="fixed left-0 top-0 right-0 flex bg-[#F7FAFC] justify-around items-center py-12">
            <div className="flex items-center">
                <div>{logo}</div>
                <div className="text-[#1A202C] font-medium text-3xl">{title}</div>
            </div>
            <div>
                {/* Hamburger button */}
                <div onClick={() => setShowMobileMenu(!showMobileMenu)} className='`fixed left-0 top-0 flex flex-col p-4 items-center cursor-pointer z-20 lg:hidden'>
                    <div className={`w-4 h-0.5 bg-black m-px ease-in-out duration-300 ${showMobileMenu ? 'absolute rotate-45' : ''}`}></div>
                    <div className={`w-4 h-0.5 bg-black m-px ease-in-out duration-300 ${showMobileMenu ? 'absoulute -rotate-45' : ''}`}></div>
                    <div className={`w-4 h-0.5 bg-black m-px ease-in-out duration-200 ${showMobileMenu ? 'absolute bg-transparent' : ''}`}></div>
                </div>
                {/* Mobile menu */}
                <div className={`fixed left-0 mt-6 bg-[#F7FAFC] z-10 w-full shadow-lg shadow-gray-500/40 p-4 transition-all ${showMobileMenu ? '' : '-translate-y-full -z-10 opacity-0'} lg:hidden`}>
                    <ul className="list-none">
                        {menu.map((item, index) => (
                            <li key={index} className='mx-6 cursor-pointer ease-in-out duration-300 p-2 hover:text-slate-600 hover:bg-slate-100'>
                                <Link href={item.url}>
                                    <a>{item.menu}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Menu */}
                <ul className="hidden lg:flex list-none">
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