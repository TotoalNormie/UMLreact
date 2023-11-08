import Elementi from './components/Elementi'
import Stuktura from './components/Stuktura'
import Izmanto from './components/Izmanto'
import Diagramma from './components/Diagramma'
import Piemers from './components/Piemers'
import Uzdevums from './components/Uzdevums'
import Titlus from './components/Titlus'

function App() {

  return (
    <>
      <main>
        <Titlus />
        <Stuktura />
        <Izmanto />
        <Elementi />
        <Piemers />
        <Diagramma />
        <Uzdevums />
      </main>
    </>
  )
}

export default App
