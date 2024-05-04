import React from 'react'
import "./footer.scss"
import { ICDiscord, ICFacebook, ICGithub, ICInstagram, ICTelegram, ICTwitter, Logo } from '../../../assets'


const Icon =({img}) =>{
    return (
        <div className='icon-wrapper'>
            <img className='icon-medsos' src={img} alt='icon'/>
        </div>
    )
}
 

const Footer = () => {
  return (
    <div>
        <div className="footer"> 
            <div>
                <img className="logo" src={Logo}  alt='logo'/>
            </div>
            <div className='social-wrapper'>
                <Icon img={ICFacebook} />
                <Icon img={ICInstagram} />
                <Icon img={ICTwitter} />
                <Icon img={ICTelegram} />
                <Icon img={ICGithub} />
                <Icon img={ICDiscord} />
            </div>
        </div>
        <div className='copyright'>
            <p>Copyright</p>
        </div>
    </div>
  )
}

export default Footer