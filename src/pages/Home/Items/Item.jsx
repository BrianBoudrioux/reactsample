import React from 'react';
import {withRouter} from 'react-router-dom';

class Article extends React.Component {

    render() {
        return (
            <article onClick={(e) => this.props.history.push('/article/' + this.props.id)}>
                <h5>{this.props.title}</h5>
                <img src={this.props.img} alt={this.props.title} />
            </article>
        )
    }
}

export default withRouter(Article);