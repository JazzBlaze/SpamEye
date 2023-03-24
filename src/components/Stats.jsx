import './Stats.css';
import CountUp from 'react-countup';
import {AppearSensor} from './AppearSensor.jsx';

function Stats (){
    return (
        <>
        <div className='stats'>
            <div className='stats-container'>
                <div className='stats-comp'>
                    <AppearSensor>
                        {({ hasBeenVisible }) =>
                            hasBeenVisible
                                ? <CountUp className='stats-comp_h1' start={0} end={120} suffix={'+'} enableScrollSpy /> : <span className='stats-comp_h1'>0</span>
                        }
                    </AppearSensor>
                    <p>Tracked spam SMS</p>
                </div>
                <div className='stats-comp'>
                    <AppearSensor>
                        {({ hasBeenVisible }) =>
                            hasBeenVisible
                                ? <CountUp className='stats-comp_h1' start={0} end={9} enableScrollSpy /> : <span className='stats-comp_h1'>0</span>
                        }
                    </AppearSensor>
                    <p>Tracked spam Numbers</p>
                </div>
                <div className='stats-comp'>
                    <AppearSensor>
                        {({ hasBeenVisible }) =>
                            hasBeenVisible
                                ? <CountUp className='stats-comp_h1' start={0} end={500} enableScrollSpy /> : <span className='stats-comp_h1'>0</span>
                        }
                    </AppearSensor>
                    <p>Tracked spam Links</p>
                </div>
            </div>
        </div>

        </>
    )

}

export default Stats