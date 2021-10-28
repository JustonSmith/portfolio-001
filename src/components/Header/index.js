import React from 'react'
import "./style.css"

const Header = (props) => {
    return (
        <div>
            <nav className=" text-center ls-1 uppercase font-20 navbar menuLink">
                <a className=" mlr-10 menuLink" href="#"> Home </a>
                <a className=" mlr-10 menuLink" href="#"> Skills </a>
                <a className=" mlr-10 menuLink" href="#"> About Me </a>
                <a className=" mlr-10 menuLink" href="#"> Projects </a>
                <a className=" mlr-10 menuLink" href="#"> Education </a>
                <a className=" mlr-10 menuLink" href="#"> References </a>
                <a className=" mlr-10 menuLink" href="#"> Contact </a>
            </nav>
        </div>
    )
}

export default Header
