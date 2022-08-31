import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLinked, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';

export default function Profile() {

    const router = useRouter()

    function openProfilePage() {
        router.push('profile')
    }

    function BackToHome() {
        setClosePageStyle(false)
        router.push('/')
    }

    function GoToMorePage() {
        router.push('moreSettingPage')
    }

    const [openPageStyle, setOpenPageStyle] = useState(true)
    const [closePageStyle, setClosePageStyle] = useState(true)
    useEffect(() => {
        const interval = setInterval(() => {
            setOpenPageStyle(false)
        }, 10)
    });

    return (
        <div className="profilePage">
            <div className={`row ${openPageStyle ? "transformOpenYes" : "transformOpenNo"} ${closePageStyle ? "transformCloseNo" : "transformCloseYes"}`}>
                <div className="col-5 pt-5 ProfileLeftMenu" style={{ background: "#2F3136", height: '100vh', overflowY: "scroll" }}>
                    {/* <div className={`${style ? "transformOpenYes" : "transformOpenNo"}`}> */}
                    <div className="menuLeftMarginShift">
                        <h6 style={{ color: "#96989D", fontSize: "12px", paddingLeft: "12px" }}><b>USER SETTINGS</b></h6>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>My Account</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#fff", textAlign: "left", fontWeight: "600", border: "0", background: "#3C3F45" }} onClick={() => openProfilePage()}>Profile</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Provacy & Safety</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Devices</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Connections</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Friend Requests</button>
                        <hr style={{ height: "2px", background: "gray" }} />
                        <h6 style={{ color: "#96989D", fontSize: "13px", paddingLeft: "12px" }}><b>BILLING SYSTEMS</b></h6>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Nitro</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Server Boost</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Subscriptions</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Gift Inventory</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Billing</button>
                        <hr style={{ height: "2px", background: "gray" }} />
                        <h6 style={{ color: "#96989D", fontSize: "13px", paddingLeft: "12px" }}><b>APP SETTINGS</b></h6>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Appearance</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Accessibility</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Voices & Videos</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Text & Images</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Motifications</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Keybinds</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Languages</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Stremers Mode</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Advanced</button>
                        <hr style={{ height: "2px", background: "gray" }} />
                        <h6 style={{ color: "#96989D", fontSize: "13px", paddingLeft: "12px" }}><b>ACTIVITY SETTING</b></h6>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Activity Privacy</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Registered Games</button>
                        <hr style={{ height: "2px", background: "gray" }} />
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>What's New</button>
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>HypeSquad</button>
                        <hr style={{ height: "2px", background: "gray" }} />
                        <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>Logout</button>
                        <hr style={{ height: "2px", background: "gray" }} />
                        <div className="row mb-2">
                            <div className="col-2">
                                <FontAwesomeIcon
                                    icon={faUser} className="addFriendBtnText" style={{ fontSize: "14px", color: "white" }}
                                />
                            </div>
                            <div className="col-2">
                                <FontAwesomeIcon
                                    icon={faUser} className="addFriendBtnText" style={{ fontSize: "14px", color: "white" }}
                                />
                            </div>
                            <div className="col-2">
                                <FontAwesomeIcon
                                    icon={faUser} className="addFriendBtnText" style={{ fontSize: "14px", color: "white" }}
                                />
                            </div>
                        </div>
                        <p style={{ fontSize: "12px", color: "gray" }}>Stable 144494 (22d9861) Windows 10 64-Bit</p>
                    </div>
                </div>
                {/* </div> */}
                <div className="col-7 pt-5" style={{ background: "#36393F", height: '100vh', paddingLeft: "40px" }}>
                    {/* <div className={`${style ? "transformOpenYes" : "transformOpenNo"}`}> */}
                    <div className="menuRightMarginShift">
                        <h5 className="text-light">
                            Profile
                            <span style={{ fontSize: "14px", cursor: "pointer", float: "right", color: "white" }}>
                                <FontAwesomeIcon onClick={() => BackToHome()} span style={{ fontSize: "25px" }}
                                    icon={faTimesCircle} className="addFriendBtnText"
                                /> <br />
                                ESC
                            </span>
                        </h5>
                        <div className="row pt-4">
                            <div className="col-5 col-md-4 col-xl-3">
                                <h6 className='text-light pb-3' style={{ borderBottom: "2px solid #949CF7", position: "absolute" }}>User Profile</h6>
                            </div>
                            <div className="col-5 col-md-4 col-xl-3">
                                <h6 className='text-light' style={{ position: "absolute" }}>User Profile</h6>
                            </div>
                            <hr style={{ height: "2px", background: "gray", marginTop: "35px", width: "100%" }} />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h6 style={{ color: '#B9BBBE', fontSize: '12px' }}>AVATAR</h6>
                                <button type="button" className="btn btn-primary">Change Avatar</button>
                                <hr style={{ height: "2px", background: "gray", marginTop: "35px", width: "100%" }} />
                                <h6 style={{ color: '#B9BBBE', fontSize: '12px' }}>BANNER COLOR</h6>
                                <div className="row text-center">
                                    <div className="col-6 col-lg-3">
                                        <input type="color" value="#747C8C" className='w-100' style={{ height: "40px" }} />
                                        <span style={{ fontSize: "14px", color: 'gray' }}>Default</span>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <input type="color" value="#36393F" className='w-100' style={{ height: "40px" }} />
                                        <span style={{ fontSize: "14px", color: 'gray' }}>Custom</span>
                                    </div>
                                </div>
                                <hr style={{ height: "2px", background: "gray", marginTop: "35px", width: "100%" }} />
                                <h6 style={{ color: '#B9BBBE', fontSize: '12px' }}>PROFILE BANNER</h6>
                                <p style={{ color: '#B9BBBE', fontSize: '12px' }}>We recommend an mahe of at least 600X240. You can upload a PNG, JPG, or an animated GIF under 10 MB</p>
                                <button type="button" className="btn btn-success" style={{ fontSize: "14px" }}>Unclock With Nitro</button>
                                <hr style={{ height: "2px", background: "gray", marginTop: "35px", width: "100%" }} />
                                <h6 style={{ color: '#B9BBBE', fontSize: '12px' }}>ABOUT ME</h6>
                                <p style={{ color: '#B9BBBE', fontSize: '12px' }}>You can use markdown and links if you'd like.</p>
                                <textarea style={{ width: "100%", height: "150px", background: "#202225" }} className='p-3 text-light'></textarea>

                            </div>
                            <div className="col-6">
                                <h6 style={{ color: '#B9BBBE' }}>Preview</h6>
                                <div className="card" style={{ border: "0" }}>
                                    <div className="card-body p-0 m-0 bg-dark">
                                        <h5 className="card-title bg-secondary p-4"><br /></h5>
                                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#ImgNotFound" style={{ width: "100px", height: "100px", borderRadius: "100%", marginTop: "-60px", marginLeft: "20px" }} />
                                        <h5 className="card-subtitle mb-2 text-white pt-3 px-2" style={{ fontWeight: "600" }}>Username<span style={{ color: '#B9BBBE' }}>#1024</span></h5>
                                        <h6 className="card-subtitle mb-2 pt-2 px-2" style={{ fontSize: "14px", fontWeight: "600", color: "#B9BBBE" }}>CUSTOMISING MY PROFILE</h6>
                                        <div className="row px-2 mb-2 text-center">
                                            <div className="col-xl-5 col-xxl-4">
                                                <img src="https://images.clipartlogo.com/files/istock/previews/9955/99553897-blue-pencil-drawing-on-the-blue-background-simply-geometry-shap.jpg" alt="#ImgNotFound" style={{ width: "70px", height: "70px", borderRadius: "10px" }} />
                                            </div>
                                            <div className="col-xl-7 col-xxl-8">
                                                <h6 className="card-subtitle mb-2 pt-3 px-2" style={{ fontSize: "14px", fontWeight: "600", color: "#B9BBBE" }}>User Profile</h6>
                                                <h6 className="card-subtitle mb-2 px-2" style={{ fontSize: "14px", fontWeight: "600", color: "#B9BBBE" }}>3:36 elapsed</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}


