import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { faPlus, faFileArchive, faGift, faSmile } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import { useRef } from "react";
import { useEffect } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';


export default function MainContent() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setLoading(true)
        }, 2000)
    });

    const initialList = []
    const [chartData, setChartData] = useState(initialList);
    const [inputData, setInputData] = useState('')

    function SubmitInputForm(e) {
        e.preventDefault()
        if (inputData !== "") {
            const newList = chartData.concat(inputData);
            setChartData(newList);
            setInputData("");
        }
    }

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView();
    }, [chartData])


    return (
        <>
            <div className="fixed-top" style={{ marginLeft: "302px" }}>
                <Header />
            </div>
            <div style={{ background: "#35373F", marginTop: "65px", height: "100vh" }}>
                <div>
                    {(chartData.length === 0) ?
                        <>
                            {loading ?
                                <>
                                    <div className="fixed-bottom mb-5" style={{ marginLeft: "302px" }}>
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
                                    </div>
                                </>
                                :
                                <>
                                    <div className="fixed-bottom mb-5" style={{ marginLeft: "302px" }}>
                                        {/* <img className="mx-3" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#ImgNotFound" style={{ borderRadius: "100%", width: "100px", height: "100px" }} /> */}
                                        <Skeleton className="mx-3" animation="wave" variant="circular" width={100} height={100} />
                                        {/* <h2 className="mx-3 text-white">
                                            <b>Username</b>
                                        </h2> */}
                                        <Skeleton className="mx-3" animation="wave" height={50} width="150px" />
                                        {/* <div className="mx-2 row" style={{ maxWidth: "600px" }}>
                                            <p className="addFriendBtnText" style={{ fontSize: "16px" }}>This is the beginning of tour direct message history with @username</p>
                                        </div> */}
                                        <Skeleton className="mx-3" animation="wave" height={20} width="600px" />
                                        <div className="mx-2 row" style={{ maxWidth: "500px" }}>
                                            <div className="col-3 col-lg-1">
                                                {/* <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#ImgNotFOund" style={{ width: "25px", borderRadius: "100%" }} /> */}
                                                <Skeleton animation="wave" variant="circular" width={25} height={25} />
                                            </div>
                                            <div className="col-9 col-lg-3">
                                                {/* <p className="addFriendBtnText" style={{ fontSize: "14px" }}>1 Mutual Server</p> */}
                                                <Skeleton className="mx-3" animation="wave" height={20} width="150px" />
                                            </div>
                                            <div className="col-lg-3 hideAfterLGScrn">
                                                {/* <button type="button" className="btn w-100" style={{ background: '#4752C4', color: "white", fontSize: "10px" }}>Add Friend</button> */}
                                                <Skeleton className="mx-3" animation="wave" height={40} width="150px" />
                                            </div>
                                            <div className="col-lg-2 hideAfterLGScrn">
                                                {/* <button type="button" className="btn w-100" style={{ background: '#686D73', color: "white", fontSize: "10px" }}>Block</button> */}
                                                <Skeleton className="mx-3" animation="wave" height={40} width="150px" />
                                            </div>
                                            <div className="col-lg-3 hideAfterLGScrn">
                                                {/* <button type="button" className="btn w-100" style={{ background: '#8C565A', color: "white", fontSize: "10px" }}>Report Spam</button> */}
                                                <Skeleton className="mx-3" animation="wave" height={40} width="150px" />
                                            </div>
                                        </div>
                                        {/* <img src="https://c.tenor.com/l-ltKxPNF-gAAAAM/wumpus-discord.gif" alt="#ImgNotFound" width="120px" height="150px" style={{ marginLeft: "50px" }} /> */}
                                        <Skeleton className="mx-3" animation="wave" width={120} height={150}  />
                                        <br />
                                        {/* <button type="button" className="px-5 mx-2 mb-4 btn" style={{ background: '#4752C4', color: "white" }}>Wave to Username</button> */}
                                        <Skeleton className="mx-3" animation="wave" height={60} width={300} />
                                    </div>
                                </>
                            }
                        </>
                        :
                        <div className="fixed-bottom mb-5" style={{ marginLeft: "302px" }}>
                            <div className="mainContent" style={{ maxHeight: "88vh", overflowY: "scroll" }}>
                                {
                                    chartData.map((chartData, i) =>
                                        <>
                                            {/* <MenuItem>
                                                <ListItemIcon>
                                                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#ImgNotFOund" width="30px" style={{ borderRadius: '100%' }} />
                                                </ListItemIcon>
                                                <h6 className="text-white pt-1 chatData">{chartData}</h6>
                                            </MenuItem> */}
                                            <ListItem alignItems="flex-start">
                                                <ListItemAvatar>
                                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                                </ListItemAvatar>
                                                <ListItemText style={{ color: "white" }}
                                                    primary="ExoticFormula"
                                                    secondary={
                                                        <>
                                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                                {chartData}
                                                            </span>
                                                        </>
                                                    }
                                                />
                                            </ListItem>
                                        </>
                                    )
                                }
                                <div ref={messagesEndRef} />
                            </div>
                        </div>
                    }
                    <>
                        <div className="fixed-bottom" style={{ marginLeft: "308px", marginRight: "6px" }}>
                            <div className="input-group">
                                <span className="input-group-text" style={{ background: '#40444B', border: "0" }}>
                                    <FontAwesomeIcon
                                        icon={faPlus} style={{ background: "#DCDDDE", borderRadius: "100%", padding: "1px" }}
                                    />
                                </span>
                                <form onSubmit={(e) => SubmitInputForm(e)} className="form-control p-0" style={{ border: "0" }}>
                                    <input type="text" className="p-2 form-control" placeholder="Message @Username" style={{ background: '#40444B', border: '0', borderRadius: "0", color: "white" }} value={inputData} onChange={(e) => setInputData(e.target.value)} />
                                </form>
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
                    </>
                </div>
            </div>
        </>
    )
}





