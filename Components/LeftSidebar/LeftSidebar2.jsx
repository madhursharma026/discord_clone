import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router'

// import the icons you need
import {
    faUser,
    faAngleRight,
    faEdit,
    faAngleDown,
    faBullhorn,
    faNewspaper,
    faBookOpen,
    faHashtag,
    faQuestion,
    faBook,
    faRobot,
    faMessage,
    faMugHot,
    faFire,
    faEarth,
    faSmile,
    faSuitcase,
    faDollar,
    faShield,
    faFileAudio,
    faLaptop,
    faUserPlus
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

    function ChangeTopHomepageRoute() {
        router.push("/")
    }


    return (
        <div className='leftSidebar2' style={{ width: "230px", height: "100vh", background: "#2F3136", overflowY: "scroll" }}>
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
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; announcement

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faBullhorn} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faNewspaper} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; javascript-news

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faNewspaper} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faUser} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; rules

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBookOpen} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; Information

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faQuestion} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; qotd

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faBook} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; resources

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faRobot} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; bot-updates

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
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
                        icon={faMessage} className="addFriendBtnText" style={{ fontSize: "14px", color: "white" }}
                    />
                    <span className="addFriendBtnText" style={{ fontSize: "14px" }}> | Chat </span>
                </span>
            </button>
            <div style={{ display: `${showAccordionData2 ? "block" : "none"}` }}>

                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangeTopHomepageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faMugHot} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; general

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faFire} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; off-topic

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faEarth} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; global-chat

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faSmile} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; memes

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faRobot} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; bot-commands

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faSuitcase} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; projects

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
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
                        icon={faLaptop} className="addFriendBtnText" style={{ fontSize: "14px", color: "white" }}
                    />
                    <span className="addFriendBtnText" style={{ fontSize: "14px" }}> | Suggestion </span>
                </span>
            </button>
            <div style={{ display: `${showAccordionData3 ? "block" : "none"}` }}>

                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faDollar} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; Looking-for-jobs

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faDollar} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; recruiting

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faShield} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; gateway

                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; data-general
                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; discord-js
                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
                <div className="mx-2 mt-1 menuBtn mb-5" style={{ borderRadius: "5px" }}>
                    <button type="button" className="btn p-1 menuBtnData w-100" style={{ fontSize: "14px", color: "#b9b9b9", borderRadius: "5px", border: "0", fontWeight: '600', textAlign: "left" }} onClick={() => ChangePageRoute()}>
                        <FontAwesomeIcon
                            icon={faHashtag} className="addFriendBtnText" style={{ fontSize: "12px" }}
                        />
                        &ensp;
                        <FontAwesomeIcon
                            icon={faFileAudio} className="addFriendBtnText" style={{ fontSize: "12px", color: "white" }}
                        />
                        &nbsp; voice
                        <FontAwesomeIcon
                            icon={faUserPlus} className="userplus pt-1" style={{ fontSize: "12px", color: "white", float: "right" }}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
