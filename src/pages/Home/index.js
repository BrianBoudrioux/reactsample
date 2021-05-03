import React from 'react';
import {articleService} from '../../services';
import {ItemsList} from './Items';

class Home extends React.Component {
    constructor(props) {
        super(props)

        if(!localStorage.getItem('token'))
            props.history.push('/');
        
        this.state = {
            articles: [],
            error: null
        };
    }

    async componentDidMount() {
        try{
            const response = await articleService.getAll();
            this.setState({articles: response.data.articles});

        }catch(e) {
            this.setState({error: e.message});
        }
    }

    render() {
        const articles = this.state.articles;
        return (
            <>
                {this.state.error && <p>{this.state.error}</p>}
                <h1>Home page</h1>
                <ItemsList data={articles} />
            </>
        )
    }
}

export default Home;