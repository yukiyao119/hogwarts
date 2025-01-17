import React from 'react'

class HogTile extends React.Component {
  
  state = {
    name: this.props.name,
    image: this.props.image 
    // clicked: false
  }

  handleClick = (event) => {
    this.setState({
      ...this.state,
      specialty: this.props.specialty,
      greased: this.props.greased,
      weight: this.props.weight,
      medal: this.props.medal
    //   clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>{this.props.name}</h1>
        <img src={this.state.image} alt={this.state.name}></img>
        {/* {
            {this.state.clicked ? 
            <div>
                <p>Weight: {this.props.hog.weight}</p>
                <p>Specialty: {this.props.hog.specialty}</p>      
            </div>
        }
        } */}
        {this.state.weight ? <p>Weight: {this.state.weight}</p> : null}
        {this.state.specialty ? <p>Specialty: {this.state.specialty}</p> : null}
        {this.state.medal ? <p>Highest Medal Achieved: {this.state.medal}</p> : null}
        {this.state.greased ? <p>GREASED</p> : null}
      </div>
    )
  }
}

export default HogTile