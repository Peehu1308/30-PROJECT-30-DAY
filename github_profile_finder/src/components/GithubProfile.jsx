import React from 'react'
import {useState} from 'react';
import axios from 'axios';

const GithubProfile = () => {
    const [username,setusername]=useState("");
    const [user,setuser]=useState(null);
    const [loading,setloading]=useState(false);
    const [error,seterror]=useState("");

    const fetchProfile=async()=>{
        if(!username)return;

        setloading(true);
        seterror("");
        setuser(null);

        try{
            const response=await axios.get(
                `https://api.github.com/users/${username}`
            );
            setuser(response.data);

        }
        catch(err){
            seterror("User not found");
        }
        finally{
            setloading(false);
        }
    }

  return (
    <div>
        <p>Github Profile Finder</p>
        <input type="text" value={username} placeholder='Enter Github username' onChange={(e)=>setusername(e.target.value)} />
        <button onClick={fetchProfile}>Search</button>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {user && (
            <div>
                <img src={user.avatar_url} alt="avatar" />
                <p>{user.name || user.login}</p>
                <p>{user.bio || "No bio available"}</p>
                <p>Followers:{user.followers}</p>
                <p>Repos:{user.public_repos}</p>
                 <a href={user.html_url} target="_blank">View Profile</a>
            </div>
        )}
    </div>
  )
}

export default GithubProfile