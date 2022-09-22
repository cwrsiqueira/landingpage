import Link from "next/link";

type Props = {
    sentence: string;
    call: string;
    btnText: string;
    btnColor: string;
}

const CallAction = ({ sentence, call, btnText, btnColor }: Props) => {
    return (
        <div className="max-w-5xl m-auto text-center bg-[#E6F6FE] my-32 p-14 rounded-xl">
            <div className="flex">
                <div className="text-left">
                    <div className="font-medium text-2xl mb-4">{sentence}</div>
                    <div className="font-medium text-2xl text-[#03A9F4]">{call}</div>
                </div>
                <div className="flex justify-center items-center flex-1">
                    <div className={`w-[164px] bg-[#03A9F4] px-7 py-3 rounded-xl text-bold text-xl text-white ease-in-out duration-300 hover:scale-105`}>
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