import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faAt,
    faUserPlus,
    faThumbTack,
    faVideoCamera,
    faVolumeControlPhone,
    faInbox,
    faQuestionCircle,
    faPlus,
    faFileArchive,
    faGift,
    faSmile
} from "@fortawesome/free-solid-svg-icons";

export default function MainContent() {
    return (
        <div style={{ width: "100%", height: "100vh", background: "#35373F" }}>
            <div className="px-2 pt-3">
                <div className="row">
                    <div className="col-lg-4 leftOptions">
                        <FontAwesomeIcon
                            icon={faAt} className="addFriendBtnText" style={{ fontSize: "20px" }}
                        /> <span className="addFriendBtnText" style={{ fontSize: "18.5px", color: "white" }}>Username</span>
                    </div>
                    <div className="col-lg-8">
                        <div className="rightOptionShifting">
                            <div className="row rightOptions">
                                <div className="col-6 col-lg-4">
                                    <FontAwesomeIcon
                                        icon={faVolumeControlPhone} className="addFriendBtnText" style={{ fontSize: "18px", color: "#DCDDDE" }}
                                    />&nbsp;&nbsp;
                                    <FontAwesomeIcon
                                        icon={faVideoCamera} className="addFriendBtnText" style={{ fontSize: "18px", color: "#DCDDDE" }}
                                    />&nbsp;&nbsp;
                                    <FontAwesomeIcon
                                        icon={faThumbTack} className="addFriendBtnText" style={{ fontSize: "18px", color: "#DCDDDE" }}
                                    />&nbsp;&nbsp;
                                    <FontAwesomeIcon
                                        icon={faUserPlus} className="addFriendBtnText" style={{ fontSize: "18px", color: "#DCDDDE" }}
                                    />&nbsp;&nbsp;
                                </div>
                                <div className="col-6 col-lg-8">
                                    <div className="row">
                                        <div className="col-md-8 inputBox">
                                            <input type="text" className="form-control" placeholder='Search' style={{ height: "28px", borderRadius: "5px", background: "#202225", border: "0", color: "#C0C0C0", fontSize: "14px" }} />
                                        </div>
                                        <div className="col-md-4 moreMenu">
                                            <FontAwesomeIcon
                                                icon={faInbox} className="addFriendBtnText" style={{ fontSize: "18px", color: "#DCDDDE" }}
                                            />&nbsp;&nbsp;
                                            <FontAwesomeIcon
                                                icon={faQuestionCircle} className="addFriendBtnText" style={{ fontSize: "18px", color: "#DCDDDE" }}
                                            />&nbsp;&nbsp;
                                        </div>
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ height: "2px", background: "black" }} />
                <div className="fixed-bottom" style={{ marginLeft: "302px" }}>
                    <img className="mx-3" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#ImgNotFound" style={{ borderRadius: "100%", width: "100px", height: "100px" }} />

                    <h2 className="mx-3 text-white">
                        <b>Username</b>
                    </h2>

                    <div className="mx-2 row" style={{ maxWidth: "600px" }}>
                        <p className="addFriendBtnText" style={{ fontSize: "16px" }}>This is the beginning of tour direct message history with @username</p>
                    </div>

                    <div className="mx-2 row" style={{ maxWidth: "500px" }}>
                        <div className="col-3 col-lg-1">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#ImgNotFOund" style={{ width: "25px", borderRadius: "100%" }} />
                        </div>
                        <div className="col-9 col-lg-3">
                            <p className="addFriendBtnText" style={{ fontSize: "14px" }}>1 Mutual Server</p>
                        </div>
                        <div className="col-lg-3 hideAfterLGScrn">
                            <button type="button" className="btn w-100" style={{ background: '#4752C4', color: "white", fontSize: "10px" }}>Add Friend</button>
                        </div>
                        <div className="col-lg-2 hideAfterLGScrn">
                            <button type="button" className="btn w-100" style={{ background: '#686D73', color: "white", fontSize: "10px" }}>Block</button>
                        </div>
                        <div className="col-lg-3 hideAfterLGScrn">
                            <button type="button" className="btn w-100" style={{ background: '#8C565A', color: "white", fontSize: "10px" }}>Report Spam</button>
                        </div>
                    </div>

                    <img src="https://c.tenor.com/l-ltKxPNF-gAAAAM/wumpus-discord.gif" alt="#ImgNotFound" width="120px" height="150px" style={{ marginLeft: "50px" }} />
                    <br />

                    <button type="button" className="px-5 mx-2 mb-4 btn" style={{ background: '#4752C4', color: "white" }}>Wave to Username</button>

                    <div className="mx-2 mb-3">
                        {/* <input type="text" className="form-control" placeholder="Message @Username" style={{background:'#40444B', border:'0'}} /> */}
                        <div className="input-group">
                            <span className="input-group-text" style={{ background: '#40444B', border: "0" }}>
                                <FontAwesomeIcon
                                    icon={faPlus} style={{ background: "#DCDDDE", borderRadius: "100%", padding: "1px" }}
                                />
                            </span>
                            {/* <input type="text" className="form-control is-invalid" placeholder="Username" /> */}
                            <input type="text" className="p-2 form-control" placeholder="Message @Username" style={{ background: '#40444B', border: '0' }} />
                            <span className="input-group-text" style={{ background: '#40444B', border: "0" }}>
                                <FontAwesomeIcon
                                    icon={faGift} style={{ color: "#FFFFFF" }}
                                />
                            </span>
                            <span className="input-group-text" style={{ background: '#40444B', border: "0" }}>
                                <FontAwesomeIcon
                                    icon={faFileArchive} style={{ color: "#FFFFFF" }}
                                />
                            </span>
                            <span className="input-group-text" style={{ background: '#40444B', border: "0" }}>
                                <FontAwesomeIcon
                                    icon={faSmile} style={{ color: "#FFFFFF" }}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
