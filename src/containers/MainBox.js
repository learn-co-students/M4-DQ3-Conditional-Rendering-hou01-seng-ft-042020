import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    // profile: Profile,
    // photos: Photos,
    // cocktails: Cocktails,
    // pokemon: Pokemon,
    display: " "
  }

  displayMenu = (e) => {
    // console.log("Hi", e)
  
    this.setState({
      display: e
    })
  }

  render() {
      // console.log(this.state)
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
   
    const detailsToDisplay = () => {
      if (this.state.display == "profile"){

        return <Profile/>
      } else if (this.state.display == "cocktail"){
        return <Cocktails  className= "item active"/>
      } else if (this.state.display == "photo"){
        return <Photos />
      } else if (this.state.display == "pokemon"){
        return <Pokemon/>
      } else{
        return "Click on Icon"
      }
    }

    return (
      <div>
        <MenuBar menu = {this.state} displayMenu={this.displayMenu}/>
        {detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
