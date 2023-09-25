import Banner from "../shared/Banner"
import BannerImg from "../assets/newslatter.png"


const Newslatter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
        {/* use our banner components and pass props */}
        <Banner  banner={BannerImg} heading="Each student an share their discount code for friends" subheading={"A simple paragarph is comprised of three major components. The which is often a declarative sentence"} btn1={"I have a code"} btn2={""}/>
    </div>
  )
}

export default Newslatter