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
    <footer className='w-full bg-blue-500 mt-[50px]'>
      <Footer />
    </footer>
    </>
  )
}

export default App
