/* eslint-disable react/prefer-stateless-function */
// == Import

import Main from './Main/Main'
import data from '../../data/tasks';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
    tasks: data,
    };
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

    return (
        <div className="app">
        <form className="form">
          <input type="text" class="form-item" placeholder="Ajouter une tâche">
        </form>
       
        <p className="counter">{count}</p>
       
        <button onClick={incrementCount}>Click Here</button>
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

