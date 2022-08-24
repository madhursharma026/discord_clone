import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faUser,
    faPlus
} from "@fortawesome/free-solid-svg-icons";

export default function LeftSidebar2() {
    return (
        <div style={{ width: "230px", height: "100vh", background: "#2F3136" }}>
            <div className="px-2 pt-3">
                <input type="text" className="form-control" placeholder='Find or start a conversation' style={{ height: "28px", width: "98%", borderRadius: "5px", background: "#202225", border: "0", color: "#C0C0C0", fontSize: "14px" }} />
            </div>

            <hr style={{ height: "2px", background: "black" }} />

            <button type="button" className="mx-2 btn addFriendBtn" style={{ width: "90%", textAlign: "left", border: "0" }}>
                <FontAwesomeIcon
                    icon={faUser} className="addFriendBtnText"
                /> <span className="addFriendBtnText">Friend</span>
            </button>

            <div className="mx-2 mt-3 row" style={{ fontSize: "12px" }}>
                <div className="col-10 addFriendBtnText">
                    DIRECT MESSAGES
                </div>
                <div className="col-2 addFriendBtnText" style={{ fontSize: "12px" }}>
                    <FontAwesomeIcon
                        icon={faPlus} className="addFriendBtnText"
                    />
                </div>
            </div>

            <div className="mx-3 mt-2 userDetail">
                <button type="button" className="btn btn-dark">
                    {/* <div className="row"> */}
                        {/* <div className="col-2"> */}
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#ImgNotFound" style={{ width: "30px", height: "30px", borderRadius: "100%" }} />
                        {/* </div> */}
                        {/* <div className="text-white col-10"> */}
                        &ensp;Username Details
                        {/* </div> */}
                    {/* </div> */}
                </button>
            </div>
        </div>
    )
}
