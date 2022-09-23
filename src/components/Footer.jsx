import {RiArrowDropDownLine} from 'react-icons/ri'

const Footer =()=>{

    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className='footer'>
                <div className='copyright'>
                    <img className="footer-logo" src='assets/linkedin-black-logo.png' alt="logo" />
                    <span>&copy; {year}</span>
                </div>
                <div  className='mobile-ul'>
                <ul>
                    <div>
                    <li><a href='https://.com' >About</a></li>
                    <li><a href='https://.com' >Accessibility</a></li>
                    <li><a href='https://.com' >User Agreement</a></li>
                    <li><a href='https://.com' >Privacy Policy</a></li>
                    <li><a href='https://.com' >Cookie Policy</a></li>
                    </div>
                    <div>
                    <li><a href='https://.com' >Copyright Policy</a></li>
                    <li><a href='https://.com' >Brand Policy</a></li>
                    <li><a href='https://.com' >Guest Controls</a></li>
                    <li><a href='https://.com' >Community Guidelines</a></li>
                    <li><a href='https://.com' >Language</a><span className='dropdown-icon'><RiArrowDropDownLine/></span></li>
                    </div>    
                </ul>
                </div>
                
                <div  className='tablet-ul'>
                <ul>
                    <li><a href='https://.com' >About</a></li>
                    <li><a href='https://.com' >Accessibility</a></li>
                    <li><a href='https://.com' >User Agreement</a></li>
                    <li><a href='https://.com' >Privacy Policy</a></li>
                    <li><a href='https://.com' >Cookie Policy</a></li>
                    <li><a href='https://.com' >Copyright Policy</a></li>
                    <li><a href='https://.com' >Brand Policy</a></li>
                    <li><a href='https://.com' >Guest Controls</a></li>
                    <li><a href='https://.com' >Community Guidelines</a></li>
                    <li><a href='https://.com' >Language</a><span className='dropdown-icon'><RiArrowDropDownLine/></span></li>
                </ul>
                </div>
        </footer>
    )
}
export default Footer