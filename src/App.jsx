import './App.css'
import { Sidebar } from './components/Sidebar'
import { Player } from './components/Player'
import { Display } from './components/Display'

function App() {

  return (
   
    <>
      <div className='h-screen w-screen bg-black m-0'>
        <div className='flex gap-2 h-[90vh]'>
            <Sidebar></Sidebar>
            <Display ></Display>
          </div>



            <Player ></Player>


      </div>
    </>
  )
}

export default App
