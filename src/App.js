import React, {  useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import data from './data';
import List from './List';


function App() {
  
  const [people, setPeople] = useState(data)
  const [isClick, setClick] = useState(false);

  const handleClick = () => {

    setClick(!isClick)

   
    if(!isClick) {
        setPeople([])
    } else {
        setPeople(data)
    }
}
  
  return(
  <Fragment>
  <main>
    <section className='container'>
      <h3>{people.length} birthday today</h3>
      <List people={people} />
      <button onClick={handleClick}>
                {
                    isClick ? (
                        <span>See Again</span>
                    ): (
                        <span>Clear All</span>
                    )
                }
  
      </button>
  
    </section>
  </main>;

  </Fragment>
  )
}

export default App;