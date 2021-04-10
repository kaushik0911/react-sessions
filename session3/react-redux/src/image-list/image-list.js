import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { imageList: state.imageReducer.imageList }
}

class ImageList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <ul>
          {
            this.props.imageList.map(item => {
              return (
                <img src={item.imageURL}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ImageList);
