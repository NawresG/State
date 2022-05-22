import "./counter.css"
import React, { Component} from 'react';
class Counter extends Component {
    constructor(props) {
        super();
        this.state = { person:{
            fullName:"Nawres ghressi",
            bio:"tak it easy",
          prefession:"Web developer",
          imgSrc:"../développeur-informatique_552022249-1600x900.jpg"},
          Time: 0,
          Shows: true,
        };
      }
      componentDidMount() {
        setInterval(() => {
          this.setState({ Time: this.state.Time + 1 });
        }, 1000);
      }
      Showing = () => {
        this.setState({ Shows: !this.state.Shows });
      };
    
      render() {
        return (
          <div className="bio">
           <div> <img className="pictureStyle"  src={this.state.person.imgSrc} alt="Img" /> </div>    
           
                  <h1 style={{ backgroundColor: 'gold',color:"red",  width: '400px', boxShadow: "10px 10px #edebe1", borderRadius: "5px", padding: "10px", margin: "10px auto" }}>{this.state.person.fullName}</h1>
            <h2 >{this.state.person.bio}</h2>
            <p calsssName="prof">{this.state.person.prefession}</p>
            <br />
            <h2 calsssName="prof">{`This component ${this.state.Time}`}</h2>
          </div>
        );
      }
    }

export default Counter;