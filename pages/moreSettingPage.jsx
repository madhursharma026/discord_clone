import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLinked, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function MoreSettingPage() {

    const router = useRouter()

    function openProfilePage() {
        router.push('profile')
    }

    function BackToHome() {
        router.push('/')
    }

    function GoToMorePage() {
        router.push('moreSettingPage')
    }

    return (
        <div className="row">
            <div className="col-5 pt-5 ProfileLeftMenu" style={{ background: "#2F3136", height: '100vh', overflowY: "scroll" }}>
                <div className="menuLeftMarginShift">
                    <h6 style={{ color: "#96989D", fontSize: "12px", paddingLeft: "12px" }}><b>USER SETTINGS</b></h6>
                    <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => GoToMorePage()}>My Account</button>
                    <button type="button" className="btn menu-btn w-100 mt-1" style={{ color: "#96989D", textAlign: "left", fontWeight: "600", border: "0" }} onClick={() => openProfilePage()}>Profile</button>
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
            <div className="col-7 pt-5" style={{ background: "#36393F", height: '100vh', paddingLeft: "40px" }}>
                <div className="menuRightMarginShift">
                    <h5 className="text-light">
                        New Page
                        <span style={{ fontSize: "14px", cursor: "pointer", float: "right", color: "white" }}>
                            <FontAwesomeIcon onClick={() => BackToHome()} span style={{ fontSize: "25px" }}
                                icon={faTimesCircle} className="addFriendBtnText"
                            /> <br />
                            ESC
                        </span>
                    </h5>
                    <h1 className='mt-5 pt-5 text-center text-light'>No Data</h1>
                </div>
            </div>
        </div>
    )
}
