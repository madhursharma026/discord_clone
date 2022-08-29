import Head from 'next/head'
import Image from 'next/image'
import MainContent from '../Components/Homepage/MainContent'
import LeftSidebar from '../Components/LeftSidebar/LeftSidebar'
import LeftSidebar2 from '../Components/LeftSidebar/LeftSidebar2'
import AllMenuData from '../Components/MenuDta/menuData'

export default function MenuData() {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <div style={{ position: "absolute" }}>
            <LeftSidebar />
          </div>
          <div style={{ position: "absolute", marginLeft: "72px" }}>
            <LeftSidebar2 />
          </div>
        </div>
        <div className="col-10" style={{ marginLeft: "302px", paddingRight:"0", marginRight:"0" }}>
          <div style={{maxWidth:"100%", width:"auto"}}>
          {/* <menuData /> */}
          <AllMenuData />
          </div>
        </div>
      </div>
    </>
  )
}
