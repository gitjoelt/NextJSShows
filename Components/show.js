const show = props => {
    return (
        <div className='show'>
            <h2>{props.data.show.name}</h2>
            <img src={props.data.show.image.medium} />
            {props.data.show.summary.replace(/<[/]?p>/g, '').replace(/<[/]?b>/g, '')}
            <button onClick={() => props.deleteShow(props.index)}>Delete</button>
        </div>
    );
}

export default show;