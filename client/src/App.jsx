import {Navbar, Footer, Welcome, Collection, Nfts, Roadmap, Tours} from './components';

const App = () => {
  return (
    <div className="App">
       <div className='min-h-screen'>
          <div className='gradient-bg-welcome'>
              <Navbar />
              <Welcome />
              <Collection />
          </div>
          <Nfts/>
          <Tours />
          <Roadmap />
          <Footer />
       </div>
    </div>
  )
}

export default App
