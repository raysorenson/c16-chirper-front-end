import React, { useState } from 'react';
import Chirp from './components/Chirp';


const App = () => {
    
    const [chirp, setChirp] = useState('');
    const [uid, setUid] = useState('');
    
    return (
        <>
            <div>
                <input className='text-center' value={chirp} onChange={e => setChirp(e.target.value)} />
            </div>
            <div>
                <input className='text-center' value={uid} onChange={e => setUid(e.target.value)} />
            </div>
        </>
    );




}

export default App;