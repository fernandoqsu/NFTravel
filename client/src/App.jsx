import {Navbar, Footer} from './components';

const App = () => {
  return (
    <div className="App">
       <div className='min-h-screen'>
          <div className='gradient-bg-welcome'>
              <Navbar />
          </div>
          <Footer />
       </div>
    </div>
  )
}

export default App
