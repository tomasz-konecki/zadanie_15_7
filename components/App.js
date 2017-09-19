const btnAttribs = {'button', 'start', 'stop', 'reset'};

const App = React.createClass ({
    render() {
        return (
            <div className={'app'}>
                <Controls attribs={btnAttribs} />
                <Stopwatch />
            </div>
        )
    }
});