import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faPlus,
    faDownload,
    faBrands
} from "@fortawesome/free-solid-svg-icons";

export default function LeftSidebar() {
    return (
        <div>
            <ul style={{ padding: "0", width: "72px", textAlign: "center", background: "#202225", height: "100vh" }}>
                <li className='pt-2' style={{ listStyleType: "none", paddingLeft: "0" }}>
                    <img src="https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg" alt="#ImgNotFound" width="48px" height="48px" style={{ borderRadius: "15px" }} />
                </li>
                <div className="px-3"><hr style={{ height: "3px", background: "#545454" }} /></div>
                <li className='pt-1' style={{ listStyleType: "none", paddingLeft: "0", marginTop: "-10px" }}>
                    <img src="https://i.pinimg.com/474x/02/c4/f8/02c4f809e38fbe0ea87875b536e340e5.jpg" alt="#ImgNotFound" width="48px" height="48px" style={{ borderRadius: "100%" }} />
                </li>
                <li className='pt-2' style={{ listStyleType: "none", paddingLeft: "0" }}>
                    {/* <img src="https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg" alt="#ImgNotFound" width="48px" height="48px" style={{ borderRadius: "15px" }} /> */}
                    <button type="button" class="LeftSideBtn" style={{height:"48px", width:"48px", border:"0"}}>
                        <FontAwesomeIcon
                            icon={faPlus}
                        />
                    </button>
                </li>
                <li className='pt-2' style={{ listStyleType: "none", paddingLeft: "0" }}>
                    {/* <img src="https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg" alt="#ImgNotFound" width="48px" height="48px" style={{ borderRadius: "15px" }} /> */}
                    <button type="button" className="LeftSideBtn" style={{height:"48px", width:"48px", border:"0"}}>
                        {/* <FontAwesomeIcon
                            icon={faBrands}
                        /> */}
                        &#xe87a;
                    </button>
                </li>
                <div className="px-3"><hr style={{ height: "3px", background: "#545454" }} /></div>
                <li className='pt-2' style={{ listStyleType: "none", paddingLeft: "0", marginTop: "-10px"  }}>
                    {/* <img src="https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg" alt="#ImgNotFound" width="48px" height="48px" style={{ borderRadius: "15px" }} /> */}
                    <button type="button" class="LeftSideBtn" style={{height:"48px", width:"48px", border:"0"}}>
                        <FontAwesomeIcon
                            icon={faDownload}
                        />
                    </button>
                </li>
            </ul>
        </div>
    )
}
