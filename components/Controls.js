class Controls extends React.Component {
    propTypes: {
        attribs: React.PropTypes.array.isRequired
    };

    render() {
        return (
            <nav className={'controls'}>
                <a href={'#'} className={this.props.attribs[0]} id={this.props.attribs[1]}>Start</a>
                <a href={'#'} className={this.props.attribs[0]} id={this.props.attribs[2]}>Stop</a>
                <a href={'#'} className={this.props.attribs[0]} id={this.props.attribs[3]}>Reset</a>
            </nav>
        )
    }

};