import React from 'react'
// import MasonryLayout from 'react-masonry-layout'
import MasonryInfiniteScroller from 'react-masonry-infinite';


/*

      <MasonryLayout
        id="items"
        infiniteScroll={this.getItems}
        size={sizes}
        >

        {
          items.map((v, i) => {

            return (
              <div
                key={i}
                style={
                  {
                  width: '20 em',
                  height: `${i % 2 === 0 ? 4 * 50 : 50 }px`,
                  display: 'block',
                  background: 'rgba(0,0,0,0.6)'
                }
              }
              >
              <p>this is text</p>
              </div>
            )
          })
        }
      </MasonryLayout>
*/

class Content extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      isLoading: false,
      items: Array(20).fill()
    }
    this.getItems = this.getItems.bind(this)
  }
  //
  getItems() {
    let { perPage, maxCount } = this.props;
    let { count, items } = this.state;
    if (count >= maxCount) return
    this.setState(Object.assign(
      {},
      this.state,
      { isLoading: true }
    ), () => {
      setTimeout(() => {
        this.setState(Object.assign(
          {},
          this.state,
          {
            isLoading: false,
            items: items.concat(
              Array(perPage).fill()
            )
          }
        ))
      })
    })
  }

  render() {
    let { maxCount } = this.props
    let { items, isLoading } = this.state
    const sizes = [
      { columns: 2, gutter: 10 }
    ]
    const loadMore = () => {
      console.log('more')
      this.setState( { elements: this.state.items.push("Element") } )
    };

    return (
      <MasonryInfiniteScroller
        hasMore={ this.state.hasMore }
        loadMore={ loadMore }
        sizes={sizes}>
        {
            this.state.items.map((el, index) =>
                <div
                  key={index}
                  style={
                    {
                    width: '20 em',
                    height: `${index % 2 === 0 ? 4 * 50 : 50 }px`,
                    display: 'block',
                    background: 'rgba(0,0,0,0.6)'
                  }
                }
                >
                  <span>somestuff</span>
                </div>
            )
          }
      </MasonryInfiniteScroller>

    )
  }
}

export default Content
