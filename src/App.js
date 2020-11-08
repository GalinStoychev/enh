import './App.css';
import calendarVector from './vectors/calendar.svg';
import locationPinVector from './vectors/pin.svg';
import locationCircleVector from './vectors/circle.svg';

function App() {
  return (
    <div className='body'>
       <div className='block-wrapper'>
          <div className='header'>
            <span className='header-title'>EXPERIENCE</span>
            <div className='header-rect'></div>
          </div>

          <div className='content'>
            <div className='content-inner'>
              <span className='content-title'>Title</span>
              <div className='content-meta'>
                <div className='content-meta-inner'>
                  <div className='location-period-wrapper'>
                    <div className='period-wrapper'>
                      <div className='period-vector-wrapper'>
                        <div className='period-vector-inner-wrapper'>
                          <img className='period-vector' src={calendarVector} alt='calendar picker icon' />
                        </div>
                      </div>
                      <span className='period-span'>Date period</span>
                    </div>

                    <div className='location-wrapper'>
                      <div className='location-vector-wrapper'>
                        <div className='location-vector-inner-wrapper'>
                          <img className='location-pin-vector' src={locationPinVector} alt='location icon' />
                          <img className='location-circle-vector' src={locationCircleVector} alt='location icon' />
                        </div>
                      </div>
                      <span className='location-name'>New York, NY</span>
                    </div>
                  </div>
                  <span className='content-meta-title'>Company Name</span>
                </div>
              </div>
              <div className='content-description-wrapper'>
                <span className='content-description-title'>Company Description</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
