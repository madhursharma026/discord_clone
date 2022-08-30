import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faMugHot, faUserFriends, faThumbTack, faBellSlash, faInbox, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";


export default function Header() {

    return (
        <div style={{ height: "65px", background: "#35373F" }}>
            <div className="px-2 pt-3">
                <div className="row">
                    <div className="col-lg-4 leftOptions">
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "20px" }}
                        /> &ensp;<span className="addFriendBtnText" style={{ fontSize: "18.5px", color: "white" }}>
                            <FontAwesomeIcon
                                icon={faMugHot} className="addFriendBtnText" style={{ fontSize: "16px", color: "white" }}
                            /> general</span>
                    </div>
                    <div className="col-lg-8">
                        <div className="rightOptionShifting">
                            <div className="row rightOptions">
                                <div className="col-6 col-lg-4">
                                    <FontAwesomeIcon
                                        icon={faHashtag} className="addFriendBtnText faHashtag" style={{ fontSize: "18px", color: "#DCDDDE" }}
                                    />&nbsp;&nbsp;
                                    <FontAwesomeIcon
                                        icon={faBellSlash} className="addFriendBtnText faBellSlash" style={{ fontSize: "18px", color: "#DCDDDE" }}
                                    />&nbsp;&nbsp;
                                    <FontAwesomeIcon
                                        icon={faThumbTack} className="addFriendBtnText faThumbTack" style={{ fontSize: "18px", color: "#DCDDDE" }}
                                    />&nbsp;&nbsp;
                                    <FontAwesomeIcon
                                        icon={faUserFriends} className="addFriendBtnText faUserFriends" style={{ fontSize: "18px", color: "#DCDDDE" }}
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ height: "2px", background: "black" }} />
            </div>
        </div >
    )
}



