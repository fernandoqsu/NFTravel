import {Navbar, Footer, Welcome, incaCollection, nftSection, roadMap, toursCollection} from './components';

const App = () => {
  return (
    <div className="App">
       <div className='min-h-screen'>
          <div className='gradient-bg-welcome'>
              <Navbar />
              <Welcome />
              <incaCollection />
          </div>
          <nftSection />
          <toursCollection />
          <roadMap />
          <Footer />
       </div>
    </div>
  )
}

export default App
