import React from 'react';

//components

class AdminPage extends React.Component {
  constructor(){
    super()
    // content is a flag for stories or users
    this.state = {
      content: 'stories'
    }
  }
  onClick(e){
    e.preventDefault();
    let get = e.target.name;
    // make axios request with get
  }
  render (){
    return (
      <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2" id="admin">
        <div className="panel panel-login">
          <div className="panel-heading">
            <button name="stories" onClick={this.onClick.bind(this)} className="btn btn-primary btn-lg">Stories</button>
            <button name="users" onClick={this.onClick.bind(this)} className="btn btn-primary btn-lg">Users</button>
          </div>
          <hr />
          <div className="panel-body">
            <div>
              <span>clicking on this will let you see the whole article</span> <span>shows username and date posted</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminPage;
