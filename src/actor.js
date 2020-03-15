import React from 'react';


class Actor extends React.Component {

    constructor(props) {
        super(props);
        // this.handleUpLike = this.handleUpLike.bind(this);
    }

    handleUpLike = () => {
        return this.props.onLike(this.props.id);
    }
    

    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.actorImageUrl} alt=''></img>
                </div>
                <div className='middle aligned content'> 
                    <div>
                        <h3>{this.props.name}</h3>
                        <a onClick={this.handleUpLike}><i className='fa fa-thumbs-up'></i></a>&nbsp;
                        {this.props.likes}
                    </div>

                    <div className='description'>
                        <p>{this.props.description}</p>    
                    </div>

                    <div>
                        Movies:
                        <ul>
                            <li>{this.props.films[0]}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Actor;