type Props = {
    title: string;
    description: string;
}

const Body = ({ title, description }: Props) => {
    return (
        <div className="mb-24 max-w-5xl m-auto text-center mt-32">
            <div className="font-bold text-2xl text-[#1A202C] md:text-4xl">{title}</div>
            <div className="font-normal text-sm text-[#718096] max-w-[70%] m-auto md:text-4xl">{description}</div>
        </div>
    );
}

export default Body;