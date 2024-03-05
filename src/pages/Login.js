import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className={'row'}>
            <div className={'offset-3 col-6 mt-5'}>
                <h1 style={{textAlign: 'center', fontSize: '50px'}}>Login</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type={'text'} className={'form-control'}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type={'password'} className={'form-control'}/>
                    </div>
                    <button type="submit" className="btn btn-primary form-control">Submit<br/></button>
                    <Link to={'register'}>Create account</Link>
                </form>
            </div>
        </div>
    )
}
