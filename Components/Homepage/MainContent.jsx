import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faAt,
    faUserPlus,
    faThumbTack,
    faVideoCamera,
    faVolumeControlPhone,
    faInbox,
    faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

export default function MainContent() {
    return (
        <div style={{ width: "100%", height: "100vh", background: "#36393F" }}>
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
                                <div className="col-5 col-lg-4">
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
                                <div className="col-7 col-lg-8">
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
            </div>
        </div >
    )
}
