import React, { Component } from 'react'

class Footercomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
    <div>
        <footer className="text-white text-center text-lg-start bg-primary  navbar-fixed-bottom">
       
          <div className="text-center p-3 " style={{backgroundColor: '#3e4551'}}>
          <h1>  © 2022 Copyright:
            <a className="text-white" href=""> S-Pharmacist.in</a></h1>
          </div>
        </footer>
      </div>           
            </div>
        )
    }
}

export default Footercomponent

