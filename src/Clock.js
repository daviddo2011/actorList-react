import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date : this.props.date,
            text: 'abc'
        }
    }

    componentDidMount() {
        var that = this;
        setInterval(
        //   () => this.tick(),
          function change() {
            that.setState(
                {date:new Date()}
            )
          },
          1000
        );
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render() {
        return (
            <p>{this.state.date.toLocaleTimeString()}</p>
        )
    }
}

export default Clock;