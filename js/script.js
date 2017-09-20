// ----- Controls -----

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

// ----- Timer -----

class Timer extends React.Component{
    render() {
        return (
            <div className={'stopwatch'} />
        )
    }
};

// ----- App -----

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

// ----- rendering -----

const app = <App />;
ReactDOM.render(app, document.getElementById('app'));

// ----- Stopwatch -----

class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }

    print() {
        this.display.innerText = this.format(this.times);
    }

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }

    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }

}

const stopwatch = new Stopwatch(
    document.querySelector('.stopwatch')),
    startButton = document.getElementById('start'),
    stopButton = document.getElementById('stop'),
    resetButton = document.getElementById('reset');

startButton.addEventListener('click', () => stopwatch.start());
stopButton.addEventListener('click', () => stopwatch.stop());
resetButton.addEventListener('click', () => 
{    stopwatch.reset();
    stopwatch.print();
});

function pad0(value) {
    let result = value.toString();
    return result.length < 2 ? '0' + result : result;
}
