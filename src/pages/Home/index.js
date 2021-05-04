import React, {useState, useEffect, useContext} from 'react';
import {articleService} from '../../services';
import {ItemsList} from './Items';
import appContext from '../../store';

const Home = (props) => {

    const store = useContext(appContext);

    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        const getArticles = async () => {
            try {
                const response = await articleService.getAll();
                setArticles(response.data.articles);
            } catch (e) {
                if (e.response.status === 403) {
                    localStorage.removeItem('token');
                    props.history.push('/');
                    store.setAuth(false);
                }
                else
                    setError(e.response.data.error)
            }
        }
        getArticles();
        
    }, [props.history, store]);

    return (
        <>
            {error && <p>{error}</p>}
            <h1>Home page</h1>
            <ItemsList data={articles} />
        </>
    )

}

export default Home;