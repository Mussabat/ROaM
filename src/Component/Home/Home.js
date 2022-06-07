
import React from 'react'
import bidesh from './a.jpg';
export default function Home() {
  return (
    <div>
       <div class="navbar">
          <ul>
            <li><a href="z">Home</a></li>
            <li><a href="z">Destinations</a></li>
            <li><a href="z">Tours</a></li>
            <li><a href="z">Features</a></li>
            <li><a href="z">Gallery</a></li>
            <li><a href="z">Blog</a></li>
            <li><a href="z">Purchase</a></li>
            <li><a href="z">About</a></li>

          </ul>
        </div>
        <div>
        <img src = {bidesh} className = "img" alt = "hi"/>
        </div>

        <div>
          <div className='box'>
          <lebel for="name" class="txt"> Email </lebel>
          <input
              type="email"
              id="name"
              class="name"
              size="55"
              placeholder="  Enter E-mail address"
            />
          <button class = "btn">Submit</button>

          </div>
        </div>
    </div>
  )
}
