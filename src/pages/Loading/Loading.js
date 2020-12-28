import LoadingBg from '../../assets/img/loading_bg.svg';
import LoadingSvg from '../../assets/img/loading.svg';

const Loading = () => {
    return (
        <section className="relative w-full h-full py-40 min-h-screen">
            <div
                className="absolute top-0 w-full h-full bg-white bg-no-repeat bg-full"
                style={{
                    backgroundImage:
                        "url(" + LoadingBg + ")",
                }}
            ></div>
            <div className="container px-4">
                <div className="flex content-center items-center justify-start h-full">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col items-center min-w-0 p-10 break-words w-full text-gray-700">
                            <img src={LoadingSvg} alt="loading..." className="w-24 h-24" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Loading;
