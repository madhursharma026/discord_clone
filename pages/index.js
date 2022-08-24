import Head from 'next/head'
import Image from 'next/image'
import MainContent from '../Components/Homepage/MainContent'
import LeftSidebar from '../Components/LeftSidebar/LeftSidebar'
import LeftSidebar2 from '../Components/LeftSidebar/LeftSidebar2'

export default function Home() {
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
        <div className="col-10" style={{ marginLeft: "302px", width: "85%" }}>
          <MainContent />
        </div>
      </div>
    </>
  )
}
