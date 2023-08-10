import { useState } from "react";
import './Contact.css'


const Contact = () => {
    const [data, setdata] = useState({
        fullname: '',
        number: '',
        emailid: '',
        msg: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setdata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
 const formsubmite =(e) =>{
    e.preventDefault();
    alert(`Your Name is ${data.fullname}, Your Number is ${data.number} , and your emailid is ${data.emailid}` )
 }
    return (
        <>
            <div className='container'>
                <div>
                    <h1 className='text-center mb-5'>Contact Us</h1>
                </div>
                <div className=''>
                    <div className='w-50 mx-auto contactwidth' >
                        <form onSubmit={formsubmite}>
                            <div className="mb-3">
                                <label className='form-label'>Full Name</label>
                                <input
                                    onChange={handleChange}
                                    value={data.fullname}
                                    name='fullname'
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter Your Full Name'
                                />
                                <br />
                                <label className='form-label'>Phone No.</label>
                                <input
                                    onChange={handleChange}
                                    value={data.number}
                                    name='number'
                                    className='form-control'
                                    type='text'
                                    placeholder='Mobile Number'
                                />
                                <br />
                                <label className="form-label">Email address</label>
                                <input
                                    onChange={handleChange}
                                    value={data.emailid}
                                    name="emailid"
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <br />
                            <div className="mb-3">
                                <label className="form-label">Enter Msg.</label>
                                <textarea
                                    onChange={handleChange}
                                    name='msg'
                                    value={data.msg}
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    placeholder='Message'
                                    rows="3"
                                />
                            </div>
                            <div>
                                <button
                                    className='btn btn-outline-primary'
                                    style={{ borderRadius: "5rem", fontSize: "1rem", padding: "0.2rem 0.8rem 0.2rem 0.9rem" }}
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
