import Link from "next/link";

type Props = {
    sentence: string;
    call: string;
    btnText: string;
    btnColor: string;
}

const CallAction = ({ sentence, call, btnText, btnColor }: Props) => {
    return (
        <div className="max-w-4xl text-center bg-[#E6F6FE] m-6 p-6 rounded-xl md:m-4 lg:m-auto lg:mb-4">
            <div className="flex flex-col md:flex-row">
                <div className="text-left">
                    <div className="font-medium text-xl mb-4 md:text-2xl">{sentence}</div>
                    <div className="font-medium text-xl mb-4 text-[#03A9F4] md:text-2xl">{call}</div>
                </div>
                <div className="flex justify-center items-center flex-1">
                    <div className={`w-[164px] ${btnColor} px-7 py-3 rounded-xl text-bold text-xl text-white ease-in-out duration-300 hover:scale-105`}>
                        <Link href={'#'}>
                            <a>{btnText}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallAction;