import React, { useState } from 'react';
import axios from 'axios';

export default function DeleteForm() {
    const baseUrl = "https://api.danielcordova.info";
    const [id, setId] = useState("");
    const del = (event) => {
        axios.delete(`${baseUrl}/api/movies`,{
            params: {
                id: id
            }
        }).then(res => console.log(res.data));
        return false;
    };
    return (
        <div className="request-form">
            <h1>DELETE</h1>
            <form onSubmit={del}>
                <label>
                    ID
                    <input
                    type="text"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};