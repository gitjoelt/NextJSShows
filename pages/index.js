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

    deleteHandler = index => {
        const shows = [...this.state.shows];
        const filtered = shows.filter((show,findex) => {
            return findex !== index
        });
        this.setState({
            shows: filtered
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
                    {this.state.shows.map((show,index) => {
                        return (
                            <Show key={index} index={index} data={show} deleteShow={this.deleteHandler} />
                        );
                    })}
                </section>
            </Layout>
        );
    }
}

export default Index;