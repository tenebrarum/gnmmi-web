import React from 'react';
import GodView from '../../components/godview/GodView';
import './MainPage.scss';

class MainPage extends React.Component{

  render(){
    return (
      <div className='gnmmi__main-page'>
        <GodView giphyUrl='https://media.giphy.com/media/EVnf7prY7J8Wc/giphy.gif' />
      </div>
    )
  }
}

export default MainPage;