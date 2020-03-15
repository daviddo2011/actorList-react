import React from 'react';
import Actor from './actor';
import Seed from './seed';

class ActorList extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         actors: [],
    //     };

    //     // this.handleActorUpLike = this.handleActorUpLike.bind(this);
    // }
    state = {
        actors: []
    }

    componentDidMount() {
        this.setState({actors: Seed.actors})
    }



    handleActorUpLike = (actorId) => {
        const nextActors = this.state.actors.map((actor) => {
            if (actor.id == actorId) {
                return Object.assign({}, actor, {
                    likes: actor.likes + 1,
                });
            } else {
                return actor;
            }
        });

        this.setState({
            actors: nextActors,
        });
    }

    render () {

        const actors = this.state.actors.sort((a,b) => (
            b.likes - a.likes
        ));

        const actorComponents = actors.map((actor) => {
            return (
                <Actor
                    key = {'actorId-' + actor.id}
                    id = {actor.id}
                    name = {actor.name}
                    films = {actor.films}
                    likes = {actor.likes}
                    description = {actor.description}
                    url = {actor.url}
                    actorImageUrl = {actor.actorImageUrl}
                    onLike = {this.handleActorUpLike}
                />
                )
        });

        return(
            <div className='ui unstackable items'>
                {actorComponents}
            </div>
        )
    }
}

export default ActorList;