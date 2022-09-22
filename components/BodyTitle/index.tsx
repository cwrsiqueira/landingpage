type Props = {
    title: string;
    description: string;
}

const Body = ({ title, description }: Props) => {
    return (
        <div className="mt-32 mb-24 max-w-5xl m-auto text-center">
            <div className="font-bold text-4xl text-[#1A202C]">{title}</div>
            <div className="font-normal text-x1 text-[#718096] max-w-[70%] m-auto">{description}</div>
        </div>
    );
}

export default Body;