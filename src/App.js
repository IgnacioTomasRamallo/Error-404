import './App.css';
import error from './assets/img/error.png'

function App() {
  return (
    <>
    <div className='inconsolata text-uppercase m-4'>404 error not found</div>
      <div className='  d-flex justify-content-center align-items-center'>
        <div className="font-monospace d-flex justify-content-center align-items-center flex-wrap m-5">
          <img src={error} alt='...' className='img-fluid imagen'/>
          <div>
            <h1 className='fw-bold '>I have bad news for you</h1>
            <p>The page you are looking for might be removed or is temporality unavailable</p>
            <button className='text-uppercase btn btn-block btn-dark m-5 '>Back to homepage</button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
