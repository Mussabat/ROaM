import bidesh from './a.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

<header>
        <div class="navbar">
          <ul>
            <li><a href="z">Home</a></li>
            <li><a href="z">Post</a></li>
            <li><a href="z">Features</a></li>
            <li><a href="z">Gallery</a></li>
            <li><a href="z">Blog</a></li>
            <li><a href="z">Purchase</a></li>
            <li><a href="z">About</a></li>

          </ul>
        </div>
      </header>
        <div>
        <img src = {bidesh} className = "img" alt = "hi"/>
        </div>

        <div>
          <div className='box'>
          <lebel for="name" class="txt"> Email </lebel>
          <input
              type="email"
              id="name"
              class="name"
              size="55"
              placeholder="  Enter E-mail address"
            />
          <button class = "btn">Submit</button>

          </div>
        </div>
      </header>
    </div>

    
  );
}


export default App;
