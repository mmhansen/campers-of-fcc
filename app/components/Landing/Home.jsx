import React from 'react'
import Content from './Content'

class Home extends React.Component {
  render(){
    return (
      <div className="container home-page">
        <div className="row">
          <div className="col-sm-12 col-md-10 offset-col-md-1">

            <h1>Home Page</h1>
            <Content
              maxCount={ 5 }
              perPage={ 5 } />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
