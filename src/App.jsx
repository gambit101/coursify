
import Banner from "./components/banner/Banner"
import Blog from "./components/blog/Blog"
import CountUpPage from "./components/countUp/CountUpPage"
import Feedback from "./components/feedback/Feedback"
import Footer from "./components/footer/Footer"
import Slider from "./components/marquee/slider"
import Navbar from "./components/navbar/Navbar"
import Values from "./components/values/Values"


function App() {

  return (
    <>
      <div className="bg-[#faefaa]">
        <Navbar></Navbar>
        <Banner></Banner>
        <CountUpPage></CountUpPage>
        <Slider></Slider>
        <Values></Values>
        <Blog></Blog>
        <Feedback></Feedback>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
