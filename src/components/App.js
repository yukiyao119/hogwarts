import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {

  state = {
    // filterStatus: false
    filtered: false,
    sortName: false,
    sortWeight: false
    // sortMethod: ""
    // selected: {}
  }

  // handleSelected = (pigObject) => {
  //   this.setState({
  //     selected: pigObject
  //   })
  // }

  // toggleFilter function
  filterGreased = () => {
    this.setState({
      filtered: !this.state.filtered,
      sortName: !this.state.sortName,
      sortWeight: !this.state.sortWeight
    }) 
  }

  // filterHogs function, usually we use [...hogs] if the method mutates the original array
  handleFilter = (hogs) => {
    return this.state.filtered ? 
      hogs.filter(hog => hog.greased === true) :
         hogs
  }


  // handleSort = (e) => {
  //   // console.log(e.target.value);
  //   this.setState({
      // sortMethod: e.target.value
  //   })
  // }


  sortHogs = (hogs) => {
    if(this.state.sortMethod === "name"){
      return [...hogs].sort((a, b) => (a.name.localeCompare(b.name)))
    }else if (this.state.sortMethod === "weight"){
      return [...hogs].sort((a, b) => (a.weight - b.weight))
    } else {
      return hogs
    }
  }

  // sortByName = (hogs) => {
  //   return this.state.sortName ? 
  //     hogs.sort((a, b) => (a.name.localeCompare(b.name))) :
  //        hogs
  // }

  // sortByWeight = () => {
  //   console.log(hogs.sort((a, b) => (a.weight - b.weight)))
  // }

  render() {
    return (
      <div className="App">
          <Nav 
            filter={this.filterGreased} 
            sortByName={this.sortByName} 
            sortByWeight={this.sortByWeight}
          />
          <HogContainer hogs={this.handleFilter(hogs)}/>
          {/* <HogContainer hogs={this.sortHogs(this.handleFilter(hogs))}/> */}
      </div>
    )
  }
}

export default App;

/*  
or we can create a new component FilterComponent, can put three btns there
<div>
<select onChange={handleSort}>
  <option>All
  <option>Sort by Name
  <option>Sort by Weight
</select>
</div>
*/