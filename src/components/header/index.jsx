import "./style.scss";

const index = ({title, value}) => {
    return (
        <div className="bg-[#c13939] w-full py-8 px-8">
            <h1 className="text-[36px] text-center text-[#fff]">Header Component</h1>
            <h2>{title}{value}</h2>
        </div>
    );
};

export default index;