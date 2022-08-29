import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router'

// import the icons you need
import {
    faUser,
    faPlus,
    faAngleRight,
    faEdit,
    faAngleDown,
    faBullhorn
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

export default function LeftSidebar2() {

    const router = useRouter()
    const [showAccordionData1, setShowAccordionData1] = useState(true)
    const [showAccordionData2, setShowAccordionData2] = useState(true)
    const [showAccordionData3, setShowAccordionData3] = useState(true)

    function showAccordionDataValue1() {
        setShowAccordionData1(!showAccordionData1)
    }

    function showAccordionDataValue2() {
        setShowAccordionData2(!showAccordionData2)
    }

    function showAccordionDataValue3() {
        setShowAccordionData3(!showAccordionData3)
    }

    function ChangePageRoute() {
        router.push("menuData")
    }


    return (
        <div className='leftSidebar2' style={{ width: "230px", height: "100vh", background: "#2F3136", overflowY: "scroll" }}>
            {/* <div className="px-2 pt-3">
                <input type="text" className="form-control" placeholder='Find or start a conversation' style={{ height: "28px", width: "98%", borderRadius: "5px", background: "#202225", border: "0", color: "#C0C0C0", fontSize: "14px" }} />
            </div> */}
            <img src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg" alt="#ImgNotFound" width="100%" />

            <div className="row px-2 pt-2">
                <div className="col-6">
                    <p style={{ color: "white", fontSize: "12px", fontWeight: "600" }}>GOAL: LVL 3</p>
                </div>
                <div className="col-6" style={{ textAlign: "right" }}>
                    <p style={{ color: "#8EA793", fontSize: "12px", fontWeight: "600" }}>7/14 Boosts &nbsp;
                        <FontAwesomeIcon
                            icon={faAngleRight} className="addFriendBtnText"
                        /></p>
                </div>
            </div>
            <div className="mx-2">
                <div className="progress" style={{ height: "3px" }}>
                    <div className="progress-bar" role="progressbar" style={{ width: "55%", background: "#6673E5" }}></div>
                </div>
            </div>

            <hr style={{ height: "2px", background: "black" }} />

            {/* <button type="button" className="mx-2 btn addFriendBtn" style={{ width: "90%", textAlign: "left", border: "0" }}>
                <FontAwesomeIcon
                    icon={faEdit} className="addFriendBtnText" style={{ fontSize: "14px" }}
                /> <span className="addFriendBtnText" style={{ fontSize: "14px" }}> |
                    Friend</span>
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
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#ImgNotFound" style={{ width: "30px", height: "30px", borderRadius: "100%" }} />
                    &ensp;Username Details
                </button>
            </div> */}

            <button className="accordion1 w-100 addFriendBtn mt-2" onClick={() => showAccordionDataValue1()} style={{ textAlign: "left", background: "transparent", border: "0", color: "#DCDDDE" }}>
                {!showAccordionData1 ?
                    <FontAwesomeIcon
                        icon={faAngleRight} className="addFriendBtnText" style={{ fontSize: "12px" }}
                    />
                    :
                    <FontAwesomeIcon
                        icon={faAngleDown} className="addFriendBtnText" style={{ fontSize: "12px" }}
                    />
                }
                &nbsp;
                <span className="addFriendBtnText" style={{ fontSize: "15px" }}>
                    <FontAwesomeIcon
                        icon={faEdit} className="addFriendBtnText" style={{ fontSize: "14px", color: "white" }}
                    />
                    <span className="addFriendBtnText" style={{ fontSize: "14px" }}> | IMPORTANT </span>
                </span>
            </button>
            <div style={{ display: `${showAccordionData1 ? "block" : "none"}` }}>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
            </div>

            <button className="accordion2 w-100 addFriendBtn mt-2" onClick={() => showAccordionDataValue2()} style={{ textAlign: "left", background: "transparent", border: "0", color: "#DCDDDE" }}>
                {!showAccordionData2 ?
                    <FontAwesomeIcon
                        icon={faAngleRight} className="addFriendBtnText" style={{ fontSize: "12px" }}
                    />
                    :
                    <FontAwesomeIcon
                        icon={faAngleDown} className="addFriendBtnText" style={{ fontSize: "12px" }}
                    />
                }
                &nbsp;
                <span className="addFriendBtnText" style={{ fontSize: "15px" }}>
                    <FontAwesomeIcon
                        icon={faEdit} className="addFriendBtnText" style={{ fontSize: "14px", color: "white" }}
                    />
                    <span className="addFriendBtnText" style={{ fontSize: "14px" }}> | IMPORTANT </span>
                </span>
            </button>
            <div style={{ display: `${showAccordionData2 ? "block" : "none"}` }}>

                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
            </div>

            <button className="accordion3 w-100 addFriendBtn mt-2" onClick={() => showAccordionDataValue3()} style={{ textAlign: "left", background: "transparent", border: "0", color: "#DCDDDE" }}>
                {!showAccordionData3 ?
                    <FontAwesomeIcon
                        icon={faAngleRight} className="addFriendBtnText" style={{ fontSize: "12px" }}
                    />
                    :
                    <FontAwesomeIcon
                        icon={faAngleDown} className="addFriendBtnText" style={{ fontSize: "12px" }}
                    />
                }
                &nbsp;
                <span className="addFriendBtnText" style={{ fontSize: "15px" }}>
                    <FontAwesomeIcon
                        icon={faEdit} className="addFriendBtnText" style={{ fontSize: "14px", color: "white" }}
                    />
                    <span className="addFriendBtnText" style={{ fontSize: "14px" }}> | IMPORTANT </span>
                </span>
            </button>
            <div style={{ display: `${showAccordionData3 ? "block" : "none"}` }}>

                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
                <div className="mx-2 mt-1 userDetail mb-5">
                    <button type="button" className="btn btn-dark p-1 w-100" style={{ fontSize: "14px", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement
                    </button>
                </div>
            </div>
        </div>
    )
}
