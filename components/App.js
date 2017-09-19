const btnAttribs = ['button', 'start', 'stop', 'reset'];

class App extends React.Component {
    render() {
        return (
            <div className={'app'}>
                <Controls attribs={btnAttribs} />
                <Timer />
            </div>
        )
    }
};