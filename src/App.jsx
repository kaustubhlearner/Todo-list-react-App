
import './App.css'
import { useState } from 'react'
function App() {

  const [inputdata, setInputdata] = useState("")

  const handleInputdata = (value) => {
    setInputdata(value)
  }
  const handleformsubmit =()=>{
    
  }
  return (
    <>
      <section>
        <header>
          <h1>Todo List</h1>
        </header>
        <section>
          <form className="form" onSubmit={handleformsubmit}>
            <div >
              <input className="input-data" type="text" autoComplete='off' value={inputdata} onChange={(event) => handleInputdata(event.target.value)} />
            </div>
            <div>
              <button className='todo-button' type='Submit'>Add Data</button>
            </div>
          </form>
        </section>
      </section>
    </>
  )
}

export default App
