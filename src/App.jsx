import { useEffect, useState } from 'react'
import './App.css'
import Tab from './components/Tab'

import Links_icon from "./assets/Links_icon.webp"
import Projects_icon from "./assets/Projects_icon.webp"
import Skills_icon from "./assets/Skills_icon.webp"
import Resume_icon from "./assets/Resume_icon.webp"
import Connect_icon from "./assets/Connect_icon.webp"
import Aboute_Me_icon from "./assets/About_me_icon.webp"

import minimize from "./assets/window-minimize-2.png"
import maximize from "./assets/maximize.svg"
import close from "./assets/window-close.svg"
import background_wallpaper from "./assets/windows_11_wallpapers.png"


// DOUBLE CLICK ON THE ICON IMAGE ON THE DESKTOP IS NOT WORKING

// ADD DOWNLOAD RESSUME in the icons
// add date and time at the end

export const getImageSource = (item) => {
  switch (item) {
    case "About Me":
      return Aboute_Me_icon;
    case "Projects":
      return Projects_icon;
    case "Links":
      return Links_icon;
    case "Skills":
      return Skills_icon;
    case "Resume":
      return Resume_icon;
    case "Connect":
      return Connect_icon;
    default:
      return Links_icon; 
  }
};


function App() {
  const [selectedIcon, setSelectedIcon] = useState([]);
  const [minimizedList, setMinimizedList] = useState([]);
  const [maximizedList, setMaximizedList] = useState([]);
  const [topTab, setTopTab] = useState("");
  const [activeTab, setActiveTab] = useState(null);
  const [tabOffset, setTabOffset] = useState({ x: 0, y: 0 });


  const Lists = ["Skills", "Projects", "Resume", "Links", "About Me", "Connect"]



  const handleIconClick = (e, item) => {
    const element = e.target;

    const className = element.className;
    if (!selectedIcon.includes(className)) {
      const updateList = [...selectedIcon, className];
      setSelectedIcon(updateList)
      handleMaximize(item);

    }
    else {
      const tab = document.getElementsByClassName(`${item}-Tab`);
      if (tab[0].classList.contains("hide")) {
        tab[0].classList.remove("hide");
        
      }
    }
    setTopTab(item);
  }
  const handleChangeTopTab = (item) => {
    setTopTab(item);
  }
  const handleMinimize = (e, item) => {
    if (selectedIcon.includes(item)) {

      if (!minimizedList.includes(item)) {
        if (topTab !== item) {
          setTopTab(item)
        }
        else {

          const updatedList = [...minimizedList, item];
          const tabToHide = document.getElementsByClassName(`${item}-Tab`)
          tabToHide[0].classList.add("hide")
          setMinimizedList(updatedList);
        }
      }
      else if (minimizedList.includes(item)) {
        const updatedList = minimizedList.filter((icon) => icon !== item);
        const tabToShow = document.getElementsByClassName(`${item}-Tab`)
        tabToShow[0].classList.remove("hide")
        setTopTab(item);
        setMinimizedList(updatedList);
      }
    }
    else {
      
    }
  }

  const handleMaximize = async(item) => {
    await handleChangeTopTab(item);
    const tabToMaximize = document.getElementsByClassName(`${item}-Tab`);
    if (tabToMaximize.length !== 0) {
      const element = tabToMaximize[0];
      if (element.classList.contains("full-screen-Tab")) {
        element.classList.remove("full-screen-Tab");
        element.style.position = "absolute";
        element.style.left = `100px`
        element.style.top = `50px`;
        const updatedList = maximizedList.filter((tab) => tab !== item);
        setMaximizedList(updatedList);
      }
      else {
        element.classList.add("full-screen-Tab");
        const updatedList = [...maximizedList, item];
        setMaximizedList(updatedList);
        element.style.position = "absolute";
        element.style.left = `0px`;
        element.style.top = `0px`;
       
      }
    }

  }
  useEffect(() => {
    const iconsList = document.getElementsByClassName("icons-list");
    if (maximizedList.length === 0) {
      iconsList[0].classList.remove("hide");
    }
    else {
      let showIcon = true;
      maximizedList.map((tab) => {
        if (!minimizedList.includes(tab)) {
          showIcon = false;
        }
      })
      if (showIcon === false) {
        iconsList[0].classList.add("hide");
      }
      else {
        iconsList[0].classList.remove("hide");
      }
    }
  }, [maximizedList, minimizedList])
  const handleClose = (item) => {
    const updatedList = selectedIcon.filter((icon) => icon !== item)
    const updatedMaximizedList = maximizedList.filter((icon) => icon !== item)
    setMaximizedList(updatedMaximizedList)
    setSelectedIcon(updatedList)
  }
  const grabTab = async(e, item) => {

   await setTopTab(item)
    const element = e.target;
    const TabParentElement = element.parentElement.parentElement;
    setActiveTab(TabParentElement);
    const { left, top } = TabParentElement.getBoundingClientRect();
    setTabOffset({ x: e.clientX - left, y: e.clientY - top+15 });


  }
  const dragTab = (e) => {
    if (activeTab !== null && activeTab == e.target.parentElement.parentElement) {

      const tabWidth = activeTab.offsetWidth;
      const tabHeight = activeTab.offsetHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      let x = e.clientX - tabOffset.x;
      let y = e.clientY - tabOffset.y;
      if (x < -300) {
        x = -300;
      }
      if (y < 0) {
        y = 0;
      }
      if (x > windowWidth - tabWidth) {
        x = windowWidth - tabWidth;
      }
      if (y > windowHeight - tabHeight / 2) {
        y = windowHeight - tabHeight;
      }

      activeTab.style.position = "absolute";
      activeTab.style.left = `${x}px`;
      activeTab.style.top = `${y}px`;

    }

  }
  const dropTab = () => {
    console.log("dropped the tab")
    setActiveTab(null);
  }
   
  

  return (
    <div style={{width:"100%"}}>
      <div className='wallpaper'>
        <img src={background_wallpaper} alt="" />
      </div>
    <div className='window'  style={{zIndex:"2"}}>
      <div className='desktop'>
        <div className='icons-list'>
          {Lists.map((item) => (
            <div className={`${item}`} key={item} onDoubleClick={(e) => handleIconClick(e, item)} ><img className={`${item}`} onDoubleClick={(e) => handleIconClick(e, item)} src={getImageSource(item)} alt={`${item} icon`} />{item}</div>
          ))}
        </div>


        {Lists.map((item) => selectedIcon.includes(item) && (

          <div className={(item === topTab) ? `application-tab ${item}-Tab top-tab` : `application-tab ${item}-Tab`} key={item}  >
            <div className='tab-options'>
              <div onClick={() => handleChangeTopTab(item)}><img src={getImageSource(item)} alt='icon'/></div>
              <div onClick={() => handleChangeTopTab(item)} className={`${item} tab-title`} onDoubleClick={(e) => handleMaximize(item)} onMouseDown={(e) => (grabTab(e, item))} onMouseUp={dropTab} onMouseMove={(e) => dragTab(e)} onMouseLeave={dropTab}>{item}</div>
              <div className='resize-options'>
                <img onClick={(e) => handleMinimize(e, item)} src={minimize} />
                <img onClick={(e) => handleMaximize(item)} src={maximize} />
                <img onClick={() => handleClose(item)} src={close} />
              </div>
            </div>
            <div className='tab-details' onClick={() => handleChangeTopTab(item)}>
              <Tab  key={item}  name={ item} />
            </div>
          </div>
        )
        )}
      </div>
      <div className='task-bar'>
        {Lists.map((item) => (
          <div key={item} onClick={(e) => handleMinimize(e, item)} className={selectedIcon.includes(item) ? 'task-bar-icon opened-icon' : 'task-bar-icon '}><img src={getImageSource(item)} alt={`${item} icon`} /></div>
        ))
        }
      </div>
    </div>
    </div>
  )
}
export default App
