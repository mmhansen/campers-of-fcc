import React from 'react'
import Content from './Content'

class Home extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-col-md-4">
            
            <h1>Home Page</h1>
            <Content
              maxCount={ 5 }
              perPage={ 20 } />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
