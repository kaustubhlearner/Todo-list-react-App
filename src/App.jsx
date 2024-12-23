
import './App.css'
import { useState } from 'react'
function App() {

  const [inputdata, setInputdata] = useState("")
  const [datastore, setdatastore] = useState([])

  const handleInputdata = (value) => {
    setInputdata(value)
  }
  const handleformsubmit = (event) => {
    event.preventDefault()

    if (!inputdata) return

    if (datastore.includes(inputdata)) {
      setInputdata("")
      return
    }

    setdatastore((prev) => [...prev, inputdata])
    setInputdata("")
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
        <section>
          <ul>
            {
              datastore.map((curvalue, index) => (
                <li key={index}>
                  <span>{curvalue}</span>
                </li>
              ))
            }
          </ul>
        </section>
      </section>
    </>
  )
}

export default App
