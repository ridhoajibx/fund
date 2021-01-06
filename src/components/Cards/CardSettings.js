import Button from "../Button/Button";

const CardSettings = (props) => {
    const { auth } = props;
    console.log(auth, 'cek auth');
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-gray-800 text-lg font-bold uppercase">My account</h6>
                        <Button 
                            color="btn-primary duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black" 
                            types="button" 
                            handleClick={(e) => e.preventDefault()} 
                            label="Settings"
                        />
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                        <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                            User Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition duration-150"
                                        value={auth.user.name ? auth.user.name : ""}
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="dateOfBirth"
                                    >
                                        Date of birth
                                    </label>
                                    <input
                                        type="date"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition duration-150"
                                        value={auth.user.dateOfBirth ? auth.user.dateOfBirth : ''}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CardSettings;
