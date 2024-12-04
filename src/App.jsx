import Feature from "./sections/Feature"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Pricing from "./sections/Pricing"
function App() {

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Feature/>
      <Pricing/>
    </main>
  )
}

export default App
