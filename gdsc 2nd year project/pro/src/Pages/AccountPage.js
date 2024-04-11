import React from "react";
import { Header } from "../Components/Header"
import { Footer } from '../Components/Footer.js'

export const AccountPage = () => {

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            currentpass: "",
            newpass: "",
            cnfpass: ""
        }
    )

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

    <form onSubmit={handleSubmit}></form>




    return (
        <>

            <Header />
            <div className="main">
                <div className="header">
                    <div className="left">
                        <span> Home / </span> MyAccount
                    </div>
                    <div className="right">
                        Welcome! <span>Md Rimel </span>
                    </div>
                </div>


                <div className="content">
                    <div className="left_1">
                        <h2>Manage My Account</h2>
                        <div className="upperHalf">
                            <span>My Profile</span>
                            <p>Address Book</p>
                            <p>Payment Options</p>
                        </div>

                        <h2>My Orders</h2>
                        <div className="lowerHalf">
                            <p>My Returns</p>
                            <p>My Cancellations</p>
                        </div>
                        <h2>My WishList</h2>
                    </div>
                    <div className="right_1">
                        <div className="title">Edit Your Profile</div>

                        <form>
                            <div className="name_email_address">
                                <div className="name">
                                    <div className="form-row">
                                        <label for="firstName">First Name:</label>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            onChange={handleChange}
                                            name="firstName"
                                            value={formData.firstName}
                                        />
                                    </div>

                                    <div className="form-row">
                                        <label for="last-name">Last Name:</label>
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            onChange={handleChange}
                                            name="lastName"
                                            value={formData.lastName}
                                        />
                                    </div>
                                </div>

                                <div className="email_address">
                                    <div className="form-row">
                                        <label for="email">Email:</label>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            name="email"
                                            value={formData.email}
                                        />
                                    </div>

                                    <div className="form-row">
                                        <label for="address">Address:</label>
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            name="address"
                                            value={formData.address}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-section">
                                <div className="form-row">
                                    <label for="current-password">Password Changes</label>
                                    <input
                                        type="text"
                                        placeholder="currentpass"
                                        onChange={handleChange}
                                        name="currentpass"
                                        value={formData.currentpass}
                                    />
                                </div>
                                <div className="form-row">
                                    <label for="new-password"></label>
                                    <input
                                        type="text"
                                        placeholder="newpass"
                                        onChange={handleChange}
                                        name="newpass"
                                        value={formData.newpass}
                                    />
                                </div>
                                <div className="form-row">
                                    <label for="confirm-new-password"></label>
                                    <input
                                        type="text"
                                        placeholder="cnfpass"
                                        onChange={handleChange}
                                        name="cnfpass"
                                        value={formData.cnfpass}
                                    />
                                </div>
                            </div>

                            <div className="form-row-last">
                                <button type="button" className="cancel-button">
                                    Cancel
                                </button>
                                <button type="submit" className="save">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AccountPage;