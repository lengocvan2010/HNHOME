import Navbar from "@/components/Navbar"
import ImageCarousel from "@/components/ImageCarousel"
import AboutUsSection from "@/components/AboutUsSection"
import  People from "@/components/People"
import WhyChooseUs from "@/components/WhyChooseUs"
import DesignedProducts from "@/components/DesignedProducts"
import XHomeSystem from "@/components/XHomeSystem"

export default function Home() {
  return (
    <div>
      <Navbar /> {/* ✅ Navbar nằm phía trên carousel */}
      <ImageCarousel />
      <AboutUsSection />
      <People/>
      <WhyChooseUs/>
      <DesignedProducts />
      <XHomeSystem /> 
    </div>
  )
}
