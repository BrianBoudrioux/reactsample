import React from 'react';
import {articleService} from '../../services';
import {ItemsList} from './Items';
import appContext from '../../store';

class Home extends React.Component {

    static contextType = appContext;

    constructor(props) {
        super(props)
        
        this.state = {
            articles: [],
            error: null
        };
    }

    async componentDidMount() {
        try {
            const response = await articleService.getAll();
            this.setState({ articles: response.data.articles });
        } catch (e) {
            if (e.response.status === 403) {
                localStorage.removeItem('token');
                this.props.history.push('/');
                this.context.setAuth(false);
            }
            this.setState({ error: e.message });
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