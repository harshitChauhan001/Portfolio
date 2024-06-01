import React from 'react'
import "./LeftSideBar.css"
import star from "../../assets/Full_Star_Blue.svg"
import Links_icon from "../../assets/Links_icon.webp"
import Projects_icon from "../../assets/Projects_icon.webp"
import Skills_icon from "../../assets/Skills_icon.webp"
import Resume_icon from "../../assets/Resume_icon.webp"
import Connect_icon from "../../assets/Connect_icon.webp"
import Aboute_Me_icon from "../../assets/About_me_icon.webp"

import { getImageSource } from '../../App'

function LeftSideBar() {
    const Lists = ["Skills", "Projects", "Resume", "Links", "About Me", "Connect"]

    return (
        <div className='left-side-bar'>
            <div className='quick-access'><img src={star} alt='star' />Desktop</div>
            {Lists.map((item) => (
                <div key={item} className='quick-access-options'><img src={getImageSource(item)} alt='folder' />{item}</div>
            ))}
        </div>
    );
}


export default LeftSideBar