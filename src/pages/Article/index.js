import React from 'react';
import {articleService} from '../../services';

class Article extends React.Component {
    constructor(props) {
        super(props)

        if(!localStorage.getItem('token'))
            props.history.push('/');
        
        this.state = {
            article: null,
            error: null
        };
    }

    async componentDidMount() {
        const id = this.props.match.params.id;

        try {
            const response = await articleService.getById(id);
            this.setState({article: response.data.article});
        } catch (e) {
            this.setState({error: "erreur server"});
        }
    }

    render() {
        const article = this.state.article;
        return (
            <>
                {this.state.error && <p>{this.state.error}</p>}
                {article && 
                    <article>
                        <h3>{article.title}</h3>
                        <img src={article.img} alt={article.title}/>
                        <p>{article.content}</p>
                    </article>
                }
            </>
        )
    }
}

export default Article;