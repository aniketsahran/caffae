import React from 'react';
import './Community.css';
import image1 from '../../assets/group-chat_rafiki.png';
import image2 from '../../assets/hello.png';
const Community = () => {
    return (
        <div className="community-container" id='container'>
            <div className="community-title">Join Our Community</div>
            <div className="community-subheading">Unlock your potential with expert mentors in our WhatsApp group!</div>
            <div className='community-cards'>
                <div className='community-image'>
                    <img src={image1} className='community-sub_image' />
                </div>
                <div className='community-right'>
                    <div className='community-right-heading'>Having doubts and questions about college counselling?</div>
                    <div className='community-right-subheading'>Embark on a transformative journey of college counseling as our gurus illuminate your path to success. Discover personalized guidance, expert insights, and a supportive community eager to shape your future.</div>
                    <div className='button-space'></div>
                    <a href="https://www.google.com/" target='_blank'><button className='community-button'><img src={image2} className='button-image' />Join the group</button></a>
                </div>
                <div className='community-right second'>
                    <div className='community-right-heading'>Want to Know what skills to Explore before joining college?</div>
                    <div className='community-right-subheading'>Embark on a knowledge expedition with our expert gurus as they unveil a world of skills waiting to be explored. Join Us and ignite your curiosity, discover new talents, and unlock your full potential. </div>
                    <div className='button-space'></div>
                    <a href="https://www.google.com/" target='_blank'><button className='community-button'><img src={image2} className='button-image' />Join the group</button></a>
                </div>
            </div>
        </div>
    )
}
export default Community
