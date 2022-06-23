import React from 'react';
import './style.css'
// import logo from '../../Assets/MGlogo.png'

export const Home = () => {
    
    return (
        <>
        <div className='bgimg'>
            <img src='https://a1industrialtrucks.co.uk/wp-content/uploads/2018/11/webplunder-background-image-technology-online-website-solutions.jpg' alt="background"/>
            <div className='topleft'>
            
            </div>
            
            <div className='middle'>
                <h1>COMING SOON</h1>
            <hr></hr>{/* horizontal rule */}
            <p>20 days left</p>
            </div>
            
            <div className='bottomleft'>
            <p>&copy; GM Dev</p>
            </div>
        </div>
        </>
    )
}
