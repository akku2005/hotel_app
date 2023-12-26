import React from 'react'
import './Room.scss'
const Room = () => {
  return (
  <div id='room'>
    <div id='heading'>
      <p className='button-like'>ROOM TYPE</p>
      <h2>Check our Room Type <span>Room Type</span></h2>
      <p>We have varierty of rooms that are available there as per your requirement and in economical budget.</p>
      </div>
      <div class="card-container">
    <div class="card">
    <div className='popup'>
    <p id='icons'>
    <i class="ri-basketball-line"></i></p>
      <h2>Basic Room</h2>
        <p className='paragraph'>We have the basic rooms with all amenities starting from just INR 3000.</p>
        </div>
    </div>
    <div class="card">
    <div className='popup'>
    <p id='icons'><i class="ri-file-text-line"></i></p>
      <h2>Premium Rooms</h2>
        <p className='paragraph'>We have the premium rooms with all amenities starting from just INR 5000.</p>
        </div>
    </div>
    <div class="card">
    <div className='popup'>
    <p id='icons'><i class="ri-speed-up-line"></i></p>
      <h2>Business Suite</h2>
        <p className='paragraph'>Our business rooms with all amenities starting from just INR 10000.</p>
        </div>
    </div>
  </div>
      </div>
  )
}

export default Room
