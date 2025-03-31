import { useState } from 'react'
import tabs from './data/content-data.js'

export default function App() {

  console.log(tabs)

  const [activeTab, setActiveTab] = useState(0)

  function handleClick(id) {

    console.log(id)

    for (let i = 0; i < tabs.length; i++) {

      if (id === tabs[i].id) {
        setActiveTab(i);
        break;
      }
    }
  }

  return (
    <>
      <h1 className='text-center my-3'>Learn Web Development</h1>

      <div className='container'>

        <div className='d-flex justify-content-center gap-3 mt-5'>

          {tabs.map((tab, index) => (
            <button
              key={`tab-${tab.name}`}
              className={`btn ${activeTab === index ? 'btn-warning' : 'btn-primary'}`}
              onClick={() => handleClick(tab.id)}
            >
              {tab.name}
            </button>
          ))}

        </div>

        <div className='content mt-3 p-3 border border-secondary'>
          {tabs[activeTab].description}
        </div>

      </div>
    </>
  )
}

