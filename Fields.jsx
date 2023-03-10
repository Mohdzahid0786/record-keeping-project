import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


const Fields = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [data, setData] = useState([]);

    const addData = () => {
        setData([...data, { name, email }]);
        setName('');
        setEmail('');
    }

    const removeItem = (index) => {
        let arr = data;
        arr.splice(index, 1);
        setData([...arr]);
    }
    return (
        <>
            <div className="App">
                <h1>Welcome to Record Keeping</h1>
            </div>
            <div className='fields'>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button onClick={addData} variant="contained"><AddIcon /></Button>
            </div>

            <div className='data'>
                <div className='data-list'>
                    <h1>Name</h1>
                    <h1>Email</h1>
                    <h1>Remove</h1>
                </div>
                {
                    data.map((item, index) => {
                        return (
                            <div className='data-list' key={index}>
                                <h1>{item.name}</h1>
                                <h1>{item.email}</h1>
                                <Button onClick={() => removeItem(index)} variant="contained" color="error">
                                    <DeleteIcon />
                                </Button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Fields;