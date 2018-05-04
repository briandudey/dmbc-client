import React, { Component } from 'react';


//will be a prop later
import Background from '../../assets/barPlaceHolder.jpg'

class ExpandedContent extends Component{

  render(){
    return(
      <div>
        <div className='cardBody'>
          <span className='blurbHeader'>Description</span>
          <span className='cardBlurb'>
            DESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPT
            DESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPTDESCRIPT

          </span>
          <span className='placeHours'>hours</span>
          <span className='cardAuthor'>author</span>
          <span>rating</span>
          <span>tips</span>

        </div>
        <div className='cardControls'>
          <button className='confirm-location'>Lock in</button>
        </div>
      </div>
    )
  }
}

class PlaceCard extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    //DUMMY PROPS FOR DESIGN
    const isExpanded = this.props.isExpanded  // dummy boolean, for telling the component to display extra stuff or not
    const apiTags = ['Family Friendly', 'Crowd Friendly', 'No Pets'];
    //END DUMMY PROPS
    const expandedContent =  isExpanded ? <ExpandedContent /> : undefined;
    const placeTags = apiTags.map((tag,index) => {
      return (<li key={index}>{tag}</li>)
    })

    return (
      <div className={isExpanded ? 'cardContainer-expanded' : 'cardContainer-minimized'}>
        <div
          className='cardHeader'
          style={{'backgroundImage':`url(${Background})`}}
        >
          <span className='placeAddress'>ADDRESS</span>
          <span className='placeName'>NAME</span>
        </div>
        <div className='placeTags'>
          <ul>
          {placeTags}
          </ul>
        </div>
        <div>
        {expandedContent}
        </div>
      </div>
    );
  }
}

//moving to own css and own component
const SpreadStyle = {
  'display':'flex',
  'justify-content':'space-around',
  'background-color':'grey',
  'width':'1200px',
  'height':'400px',
  'align-items':'center',

}

class Spread extends Component {
  render(){
    return(
      //
      <div>
        <div style={SpreadStyle}>
          <p>Brunch</p>
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div style={SpreadStyle}>
          <p>Brunch</p>
          <PlaceCard isExpanded={true} />
          <PlaceCard isExpanded={true} />
          <PlaceCard isExpanded={true} />

        </div>
      </div>
    )
  }
}

export default Spread;
