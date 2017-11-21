
// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
//         this.handleChooseOption = this.handleChooseOption.bind(this)
//         this.handleAddOption = this.handleAddOption.bind(this)
//         this.handleDeleteIndividual = this.handleDeleteIndividual.bind(this)
//         this.state = {
//             option: "Add options: Select what to do:",
//             optionz: []
//         }
//     }

//     handleDeleteOptions() {
//         this.setState(() => ({ optionz: [] }))      // single line setState
//     }

//      handleDeleteIndividual(chosen) {
//          this.setState((prevState) => ({
//                 optionz: prevState.optionz.filter((option) => {
//                     return (chosen !== option)
//                 })
//          }))
//     }
    
//     handleChooseOption() {
//         const randomNumber = Math.floor(Math.random() * this.state.optionz.length)
//         const option = this.state.optionz[randomNumber]
//         this.setState(() => {
//             return {
//                 option: option
//             }
//         })
//     }

//     handleAddOption(option) {
//         if (!option) {
//             return "Enter valid option"
//         } else if (this.state.optionz.indexOf(option) > -1) {
//             return "This option exists already"
//         } else {
//             this.setState((prevState) => {
//                 return {
//                     optionz: prevState.optionz.concat(option)
//                 }
//             })
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <Header title="my title" subtitle="second line"/>
//                 <Counter />
//                 <Action hasOptions={!(this.state.optionz.length > 0) }
//                     choice = {this.state.option}/>
//                 <Options options={this.state.optionz}
//                     handleDeleteOptions={this.handleDeleteOptions}
//                     handleDeleteIndividual={this.handleDeleteIndividual}
//                     handleChooseOption={this.handleChooseOption}>
//                 </Options>
//                 <AddOption handleAddOption={this.handleAddOption}/>
//             </div>
//         )
//     }
// }
// class Counter extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handlePlus = this.handlePlus.bind(this)
//         this.handleMinus = this.handleMinus.bind(this)
//         this.handleReset = this.handleReset.bind(this)
//         this.state = {
//             count: 0
//         }
//     }
//     handlePlus() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//         //      console.log(this)
//     }
//     handleMinus() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count - 1
//             }
//         })
//     }
//     handleReset() {
//         this.setState(() => {
//             return {
//                 count: 0
//             }
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <span>Count: {this.state.count}</span>
//                 <button onClick={this.handlePlus}>+1</button>
//                 <button onClick={this.handleMinus}>-1</button>
//                 <button onClick={this.handleReset}>reset</button>
//             </div>
//         )
//     }
// }
// const Header = (props) => {
//         return (
//             <div>
//                 <h1> {props.title}</h1>
//                 <h2> {props.subtitle}</h2>
//             </div>
//         )
// }

// const Option = (props) => {
//         return (
//             <div>
//                 <li>{props.text}
//                 <button onClick={(e) => {
//                     props.handleDeleteOption(props.text)
//                 }}>Remove</button>
//                 </li>
//             </div>
//         )
// }

// const Options = (props) => {
//         return (
//             <div>
//                 <button onClick={props.handleDeleteOptions}>CLEAR ALL</button>
//                 <button onClick={props.handleChooseOption}>WHAT TO DO</button>
//                 <ul>
//                     {props.options.map((entry) => (
//                         <Option text={entry} 
//                             key={entry} 
//                             handleDeleteOption={props.handleDeleteIndividual}
//                         />
//                     ))
//                 }
//                 </ul>
//             </div>
//         )
//     }

// class Action extends React.Component {
//     constructor(props) {
//         super(props)
//         this.toggleIt = this.toggleIt.bind(this)
//         this.state = {
//             visibility: true
//         }
//     }
//     toggleIt() {
//         this.setState((prevState) => {
//             return {
//                 visibility: !prevState.visibility
//             }
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.toggleIt}
//                     disabled={this.props.hasOptions}>
//                     {this.state.visibility ? "Hide detail" : "Show detail"}
//                 </button>
//                 {this.state.visibility && (
//                     <div>
//                         {this.props.choice}
//                     </div>
//                 ) }
//             </div>
//         )
//     }
// }
// class AddOption extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleAddOption = this.handleAddOption.bind(this)
//         this.state = {
//             error : undefined
//         }
//     }

//     handleAddOption(e) {
//         e.preventDefault()
//         const option = e.target.elements.option.value.trim()
//         const error = this.props.handleAddOption(option)
//         this.setState(() => {
//             return {
//                 error
//             }
//         })
//         if (!error) {
//             e.target.elements.option.value = ""
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.handleAddOption}>
//                     <input type="text" name="option" />
//                     <button>Add option</button>
//                 </form>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<App />, document.getElementById("app"))
