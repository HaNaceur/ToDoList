/* eslint-disable react/prefer-stateless-function */
// == Import
import data from '../../data/tasks';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
    tasks: data,
    };

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  componentDidMount(){
    const {tasks} = this.state;

  }


  render() {

  const {tasks} = this.state ;
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  const [checked, setChecked] = React.useState(false);
  const placeholder = 'Add a task';

const handleChange = () => {
  setChecked(!checked);
};

    return (
        <div className="app">
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
         <input type="text" className="form-item" placeholder={placeholder}
         value={this.state.value} onChange={this.handleChange}
         />
         <input type="submit" value="Submit" />
         </label>
        </form>
       
        <p className="counter">{count} Tâches en cour {count > 1 && 's'}</p>
        <label> 
        <input type="checkbox" checked={checked}
          onChange={handleChange} onClick={incrementCount} 
        />
        </label>
        <ul className="list">
               {tasks.map((task, index) => ( 
            <li
              key={task} 
            >
              {tasks}
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

// == Export
export default App;

