import React from 'react';
import axios from 'axios';

export default function PostForm() {
    const baseUrl = "https://api.danielcordova.info";
    const post = () => axios.post(`${baseUrl}/api/movies`).then(res => console.log(res.data));
    return (
        <div className="request-form">
            <h1>POST</h1>
            <form onSubmit={post}>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};