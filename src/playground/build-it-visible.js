
class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.showDtail = this.showDtail.bind(this);
        this.state = {
            display : false,
           
        }
    }
    showDtail() {
        this.setState((preState) => {
            return {
                display : !preState.display
            }
        });
    }
    render() {
        return (
            <div>
            <h1>VisibilityToggle</h1>
            <button onClick={this.showDtail}>
            {this.state.display ? 'Hide details' : 'Show details'}
            </button>
            {
                this.state.display && (
                    <div>
                    <p> Hey I am here</p>
                    </div>
                )  
            }
            </div>
        )
    };
}

ReactDOM.render(<Visibility />,document.getElementById("app"));

// let visibilty = false;

// const showdetail=() => {
//     visibilty = !visibilty;
//     render();
// };
// const appRoot = document.getElementById('app');
// const render = () => {
//     const template = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick = {showdetail}>
//         {visibilty ? 'Hide details' : 'Show details'}
//         </button>
//         {visibilty && (
//             <div>
//             <p>Hey, I am here!</p>
//             </div>
//         )}
//         </div>
//     );
//     ReactDOM.render(template,appRoot);
// }

// render();