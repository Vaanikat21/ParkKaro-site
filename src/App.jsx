import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import BlobCursor from "./components/BlobCursor";

function App() {

  return (
    <>
    <BlobCursor
  blobType="circle"
  fillColor="#5227FF"
  trailCount={3}
  sizes={[60, 125, 75]}
  innerSizes={[20, 35, 25]}
  innerColor="rgba(255,255,255,0.8)"
  opacities={[0.6, 0.6, 0.6]}
  shadowColor="rgba(0,0,0,0.75)"
  shadowBlur={5}
  shadowOffsetX={10}
  shadowOffsetY={10}
  filterStdDeviation={30}
  useFilter={true}
  fastDuration={0.1}
  slowDuration={0.5}
  zIndex={100}
/>
      <NavBar />
      <HeroSection />
      <Features />
      <Reviews />
    </>
  )
}

export default App
