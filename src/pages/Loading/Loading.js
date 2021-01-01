import styles from './loading.module.css';

const Loading = () => {
    return (
        <>
            <div
                className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <section className="bg-white relative w-full h-full py-40 min-h-screen">
                    <div className="container px-4 mx-auto">
                        <div className="flex content-center items-center justify-center align-middle h-full">
                            <div className="w-full lg:w-8/12 px-4">
                                <div className="relative flex flex-col items-center min-w-0 p-10 break-words w-full text-gray-700">
                                    <span className={styles.loader}><span className={styles.loaderInner}></span></span>
                                    <div className="animate-pulse mt-4 uppercase text-2xl font-bold text-purple-700">
                                        Loading
                                        <span className="relative inline-flex rounded-full h-1 w-1 bg-purple-700 ml-1">
                                            <span className="animate-ping inline-flex h-full w-full rounded-full bg-purple-600 opacity-75"></span>
                                        </span>
                                        <span className="relative inline-flex rounded-full h-1 w-1 bg-purple-700 mx-2">
                                            <span className="animate-ping inline-flex h-full w-full rounded-full bg-purple-600 opacity-75"></span>
                                        </span>
                                        <span className="relative inline-flex rounded-full h-1 w-1 bg-purple-700">
                                            <span className="animate-ping inline-flex h-full w-full rounded-full bg-purple-600 opacity-75"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Loading;
