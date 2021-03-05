import React, { Component } from 'react'
import './content.css'

export default class content extends Component {
    constructor(props)
    {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            isToggle:false
        }
    }
    handleClick(e)
    {
        this.setState({
            isToggle:!this.state.isToggle
        });
    }
    render() {
        let button;
        let show;
        if(this.state.isToggle)
        {
            button="fa fa-minus"
            show="ans active"
        }
        else
        {
            button="fa fa-plus"
            show="ans"
        }
        return (
            <div className="main-content">
                
                 <div className="line"></div>
                 <div className="question-container">
                    <p className="question">{this.props.question}</p><button onClick={this.handleClick}><i class={button}  aria-hidden="true"></i></button>
                 </div> 

                <p className={show}>{this.props.ans}</p>
            </div>
               
        )
    }
}
