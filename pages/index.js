import Layout from '../Components/layout';
import '../sass/main.scss';
import Show from '../Components/show';
import fetch from 'isomorphic-fetch';

class Index extends React.Component {
    
    state = {
        text: '',
        shows: []
    }

    handleText = event => {
        this.setState({
            text: event.target.value
        });
    }

    getShows = async () => {
        const res = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.text}`)
        const data = await res.json();
        this.setState({
            shows: data
        });
    }

    render(){
        return (
            <Layout>
                <section className='enter'>
                    <input type='text' onChange={this.handleText} />
                    <button onClick={this.getShows}>Search</button>
                </section>
                <section className='show-grid'>
                    {this.state.shows.map(show => {
                        return (
                            <Show data={show} />
                        );
                    })}
                </section>
            </Layout>
        );
    }
}

export default Index;