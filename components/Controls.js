const Controls = React.createClass({
    propTypes: {
        attribs: React.PropTypes.array.isRequired
    }
},

    render() {
        return (
            <nav className={'controls'}>
                <a href={'#'} class={this.props.attribs[0]} id={this.props.attribs[1]}>Start</a>
                <a href={'#'} class={this.props.attribs[0]} id={this.props.attribs[2]}>Stop</a>
                <a href={'#'} class={this.props.attribs[0]} id={this.props.attribs[3]}>Reset</a>

            </nav>
        )
    }


)