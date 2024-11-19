// AddItem.js
import React from 'react';

const AddItem = ({ setNumber }) => {
    const handleAddItem = () => {
        setNumber(prevCount => prevCount + 1);
    };

    return (
        <div>
            <center><button onClick={handleAddItem}>Add Item</button></center>
        </div>
    );
};

export default AddItem;