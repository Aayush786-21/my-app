// App.js
import React, { useState } from 'react';
import ItemCount from './ItemCount';
import AddItem from './AddItem';

const App = () => {
    // State to keep track of the item count
    const [number, setNumber] = useState(0);

    return (
        <div>
            <h1>Item Management</h1>
            {/* Display the current item count */}
            <ItemCount count={number} />
            {/* Button to add an item, passing setNumber as a prop */}
            <AddItem setNumber={setNumber} />
        </div>
    );
};

export default App;