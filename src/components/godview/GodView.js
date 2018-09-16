import React from 'react';
import './GodView.scss';

class GodView extends React.Component{

  render(){
    return (
      <div className='gnmmi__gif-of-the-day-view'>
        <img src={this.props.giphyUrl} />
      </div>
    )
  }
}

export default GodView;