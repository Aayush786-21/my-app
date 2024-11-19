import React, { useState } from 'react';
import ItemCount from './ItemCount';
import AddItem from './AddItem';

const App = () => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <ItemCount count={number} />
            <AddItem setNumber={setNumber} />
        </div>
    );
};

export default App;