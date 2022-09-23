import {FcGoogle} from 'react-icons/fc'


const Form =()=>{

    

    return (
        <section className='form-main'>
            <div className='heading-1'>Join LinkedIn</div>
            <form>
                <input className='input-field' type='email' name="email" placeholder="Email or phone number" />
                <input className='input-field' type='password' name="password" placeholder="Password (8+ characters)" />
                <div className='agreement'>
                    By clicking Agree & Join, you agree to LinkedIn <span className='agreement-link'>User Agreement</span>,
                    <span className='agreement-link'>Privacy Policy</span>, and <span className='agreement-link'>Cookie Policy</span>.
                </div>
                <button className='btn join-btn'>
                    Agree & Join
                </button>
                <div className='divider'>
                    <div className='line'></div><div>or</div><div className='line'></div>
                </div>
            </form>
            <button className='btn google-btn'>
                <span className='google-icon'><FcGoogle /></span> Join with Google
            </button>
            <div className='signin-action'>Already on LinkedIn? <span className='signin'>Sign in</span></div>
        </section>
    )
}
export default Form