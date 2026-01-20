import React from 'react'

const withHOCClass = (OriginalComponent) => {
    class NewComponent extends React.Component{
        constructor(props) {
          super(props)
        
          this.state = {
             counter : 0
          }
        }
        handleIncrement = () => {
            this.setState({
                counter : this.state.counter + 1
            })
        }
        handleDecrement = () => {
            if(this.state.counter>0){
                this.setState({
                    counter : this.state.counter - 1
                })
            }         
        }
        render(){
            return(
                <OriginalComponent 
                    counter = {this.state.counter}
                    handleIncrement = {this.handleIncrement}
                    handleDecrement = {this.handleDecrement}
                />
            )
        }
    }
    return NewComponent;
}

export default withHOCClass