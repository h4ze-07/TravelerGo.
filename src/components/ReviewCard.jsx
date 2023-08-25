const ReviewCard = ({img, name, text}) => {
    return (
        <div className="max-w-[400px] sm:max-w-[550px] lg:max-w-[400px] flex flex-col justify-center items-center gap-[20px] border-4 border-white relative mt-[70px] shadow-[0px_0px_3px_5px_rgba(0,0,0,0.1)] rounded-3xl">
            <img src={img} alt={name} width={120} height={100} className="content-box rounded-full border-[15px] border-white absolute -top-[70px] shadow-[0px_-3px_0px_1px_rgba(0,0,0,0.1)]" />
            <p className="mt-[70px] mx-[18px] text-[16px] sm:text-[20px]">{text}</p>
            <a href="/" className="text-blue-500 hover:text-blue-400 text-[19px] sm:text-[25px] font-bold uppercase">{name}</a>
        </div>
    );
}

export default ReviewCard;
