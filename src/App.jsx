import {Intro, Navbar, StickyNav, Hero,  Tours, Testimonials, Contact, Footer} from './sections'

function App() {

  return (
    <>
    <header>
      <section>
        <Intro />
      </section>
      <section>
        <Navbar />
      </section>
    </header>
    <StickyNav />
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <Tours />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Contact />
      </section>
    </main>
    <footer>
      <section>
        <Footer />
      </section>
    </footer>
    </>
  )
}

export default App
