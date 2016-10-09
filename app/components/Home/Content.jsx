import React, { Component } from 'react';
import MasonryLayout from 'react-masonry-layout'

class Content extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      isLoading: false,
      items: Array(20).fill()
    }
  }

  getItems() {
    let { perPage } = this.props;

    if (this.state.count >= this.props.maxCount) return
        this.setState(Object.assign( {},
        this.state,
        { isLoading: true }
        ), () => {
        setTimeout(() => {
          this.setState(Object.assign(
            {},
            this.state,
            {
              isLoading: false,
              items: this.state.items.concat(
                Array(perPage).fill()
              )
            }
          ))
        })
        })
    }

  render () {
    let { items } = this.state;
    let size = [
      { columns: 1, gutter: 20 },
      { mq: '768px', columns: 2, gutter: 60 },
      { mq: '1024px', columns: 2, gutter: 60 }
    ]
    return (
      <div className="home-content">
        <MasonryLayout
          id="items"
          sizes={size}
          infiniteScroll={this.getItems.bind(this)}
          infiniteScrollLoading={this.state.isLoading}
          >
          {
            items.map((v, i) => {
              return (
                <div className="brick"
                  key={i}
                  style={{ height: `${i % 2 === 0 ? 200 : 100 }px` }}
                  />
                )
              }
            )
          }
        </MasonryLayout>
      </div>
    );
  }
}


export default Content;
