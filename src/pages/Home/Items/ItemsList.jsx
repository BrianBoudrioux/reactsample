import React from 'react';
import Item from './Item';

class ArticlesList extends React.Component {

    render() {
        return (
            <section>
                {this.props.data.map((article, i) => (
                    <Item key={i} title={article.title} img={article.img} id={article.id} />
                ))}
            </section>
        )
    }
}

export default ArticlesList;