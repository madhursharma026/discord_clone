import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header/Header'
import LeftSidebar from '../Components/LeftSidebar/LeftSidebar'
import LeftSidebar2 from '../Components/LeftSidebar/LeftSidebar2'
import MainContent from '../Components/MainContent/MainContent'
import AllMenuData from '../Components/MenuDta/menuData'

export default function Home() {
  return (
    <div className='p-0 m-0'>
      <div style={{ position: "absolute" }}>
        <LeftSidebar />
      </div>
      <div style={{ marginLeft: "72px", position: "absolute" }}>
        <LeftSidebar2 />
      </div>
      <div style={{ marginLeft: "302px", paddingRight: "0", marginRight: "0" }}>
        <AllMenuData />
      </div>
    </div>
  )
}
