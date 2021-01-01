import React from 'react'
import SmallFooter from '../components/Footer/SmallFooter';
import AuthNavbar from '../components/Navbars/AuthNavbar';
import authBg from '../assets/img/register_bg_2.png';

function AuthLayouts(props) {
    const { children } = props;
    return (
        <>
            {/* Navbar */}
            <AuthNavbar trasparent />
            <main>
                <section className="relative w-full h-full py-40 min-h-screen">
                    <div
                        className="absolute top-0 w-full h-full bg-purple-600 bg-no-repeat bg-full"
                        style={{
                            backgroundImage:
                                "url(" + authBg + ")",
                        }}
                    ></div>

                    {/* Page */}
                    { children }

                    {/* Footer */}
                    <SmallFooter absolute />
                </section>
            </main>
        </>
    )
}

export default AuthLayouts
