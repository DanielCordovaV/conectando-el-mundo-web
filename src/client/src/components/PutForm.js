import React, { useState } from 'react';
import axios from 'axios';

export default function PutForm() {
    const baseUrl = "https://api.danielcordova.info";
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const put = (event) => {
        axios.put(`${baseUrl}/api/movies`,null,{params: {
            "id": id,
            "name": name,
            "year": year,
            "genre": genre
        }}).then(res => console.log(res.data));
    };
    return (
        <div className="request-form">
            <h1>PUT</h1>
            <form onSubmit={put}>
                <label>
                    ID
                    <input
                    type="text"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                </label>
                <label>
                    Name
                    <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </label>
                <label>
                    year
                    <input
                    type="text"
                    value={year}
                    onChange={e => setYear(e.target.value)}
                    />
                </label>
                <label>
                    genre
                    <input
                    type="text"
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};