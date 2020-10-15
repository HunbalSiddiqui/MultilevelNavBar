import React from 'react'
import "./PersonalizedNavBar.css"
function PersonalizedNavBar() {
    const showDropdownMenu = (reference) =>{
        document.querySelector(`.${reference}`).style.display = "grid"
        setTimeout(() => {
            document.querySelector(`.${reference}`).style.opacity="1"
        }, 10);
    }

    const showMultilevelDrop = (reference) =>{
        document.querySelector(`.${reference}`).style.display = "grid"
        setTimeout(() => {
            document.querySelector(`.${reference}`).style.opacity="1"
        }, 10);
    }
    return (
        <div className="pnb flex">
            <div className="pnb-item white fbb f1-5 flex-col">
                <div className="png-dropdown pointer" onClick={()=>{showDropdownMenu("menuref1")}}  >Item1</div>
                <div className="pnb-dropdown-menu menuref1"> <h1>ABCEDEF</h1> <h1 className="multilevel-png-dropdown">ABCEDEF</h1> <h1 onClick={
                    ()=>{showMultilevelDrop('multiref1')}
                }>ABCEDEF   
                    <div className="multilevel-png-menu multiref1">   <h1>abc</h1> <h1>Beauty</h1>   </div>    </h1></div>
            </div>
            <div className="pnb-item white fbb f1-5 flex-col">
                <div className="png-dropdown pointer" onClick={()=>{showDropdownMenu("menuref2")}}  >Item1</div>
                <div className="pnb-dropdown-menu menuref2"> <h1>ABCEDEF</h1> <h1 className="multilevel-png-dropdown">ABCEDEF</h1> <h1 onClick={
                    ()=>{showMultilevelDrop('multiref2')}
                }>ABCEDEF   
                    <div className="multilevel-png-menu multiref2">   <h1>abc</h1> <h1>Beauty</h1>  </div>    </h1></div>
            </div>
            <div className="pnb-item white fbb f1-5 flex-col">
                <div className="png-dropdown pointer" onClick={()=>{showDropdownMenu("menuref3")}}  >Item1</div>
                <div className="pnb-dropdown-menu menuref3"> <h1>ABCEDEF</h1> <h1 className="multilevel-png-dropdown">ABCEDEF</h1> <h1 onClick={
                    ()=>{showMultilevelDrop('multiref3')}
                }>ABCEDEF   
                    <div className="multilevel-png-menu multiref3">   <h1>abc</h1> <h1>Beauty</h1></div>    </h1></div>
            </div>
            <div className="pnb-item white fbb f1-5 flex-col">
                <div className="png-dropdown pointer" onClick={()=>{showDropdownMenu("menuref4")}}  >Item1</div>
                <div className="pnb-dropdown-menu menuref4"> <h1>ABCEDEF</h1> <h1 className="multilevel-png-dropdown">ABCEDEF</h1> <h1 onClick={
                    ()=>{showMultilevelDrop('multiref4')}
                }>ABCEDEF   multi
                    <div className="multilevel-png-menu multiref4">   <h1>abc</h1> <h1>Beauty</h1></div>    </h1></div>
            </div>
        </div>
    )
}

export default PersonalizedNavBar
