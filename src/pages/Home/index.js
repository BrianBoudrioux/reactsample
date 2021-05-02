import React from 'react';
import {articleService} from '../../services';
import {ItemsList} from '../../components/Items';
import appContext from '../../stores';

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
        if (!this.context.isAuth)
            this.props.history.push('/');
        else {
            try{
                const response = await articleService.getAll();
                this.setState({articles: response.data.articles});
    
            }catch(e) {
                this.setState({error: e.message});
            }
        }
    }

    render() {
        const articles = this.state.articles;
        return (
            <appContext.Consumer>
                {(context) => (
                    <>
                        {this.state.error && <p>{this.state.error}</p>}
                        <h1>Home page - {console.log(context)}</h1>
                        <ItemsList data={articles} />
                    </>
                )}
            </appContext.Consumer>
        )
    }
}

export default Home;