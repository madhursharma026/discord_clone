import Header from "../Header/Header";
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Skeleton from '@mui/material/Skeleton';

export default function AllMenuData() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setLoading(true)
        }, 2000)
    });

    return (
        <>
            <div className="fixed-top" style={{ marginLeft: "302px" }}>
                <Header />
            </div>
            <div style={{ background: "#35373F", marginTop: "65px", height: "100vh", overflowY: "scroll", height: "100vh", paddingBottom: "65px" }}>
                <div className="px-2 pt-3">
                    {loading ?
                        <>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className="mt-2" alt="Remy Sharp" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <>
                                            <span component="span" style={{ color: "#DCDBD4" }}>
                                                If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)If you are a developer trying to find a job, please use 💲looking-for-jobs  now. 💲recruiting  is now only for job offers (of course, you could also just use 💲recruiting  to try to find jobs by contacting people with interesting job offers)
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                        </>
                        :
                        <div style={{ overflow: "hidden" }}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}>
                                    <Skeleton animation="wave" height={20} width="100%" />
                                    <Skeleton animation="wave" height={60} width="100%" />
                                </ListItemText>
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}>
                                    <Skeleton animation="wave" height={20} width="100%" />
                                    <Skeleton animation="wave" height={60} width="100%" />
                                </ListItemText>
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}>
                                    <Skeleton animation="wave" height={20} width="100%" />
                                    <Skeleton animation="wave" height={60} width="100%" />
                                </ListItemText>
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}>
                                    <Skeleton animation="wave" height={20} width="100%" />
                                    <Skeleton animation="wave" height={60} width="100%" />
                                </ListItemText>
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}>
                                    <Skeleton animation="wave" height={20} width="100%" />
                                    <Skeleton animation="wave" height={60} width="100%" />
                                </ListItemText>
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}>
                                    <Skeleton animation="wave" height={20} width="100%" />
                                    <Skeleton animation="wave" height={60} width="100%" />
                                </ListItemText>
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                </ListItemAvatar>
                                <ListItemText style={{ color: "#B26F22" }}>
                                    <Skeleton animation="wave" height={20} width="100%" />
                                    <Skeleton animation="wave" height={60} width="100%" />
                                </ListItemText>
                            </ListItem>
                            <hr style={{ height: "2px", background: "gray" }} />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
