import React, { useState } from 'react';

const SignupForm = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleGoogleSignup = () => {
        // Implement your Google sign-in logic here
        // This can include using the Google Sign-In API or a library like react-google-login
        // After successful sign-in, you can handle the user data as required
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform any additional form validation or submission logic here
        // For this example, we will log the email value to the console
        console.log(email);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-[70%] space-y-8">


            <button
                onClick={handleGoogleSignup}
                className="p-2 rounded-full bg-blue text-white font-bold cursor-pointer mb-4 w-full h-[50px]"
            >
                Sign Up with Your Google account
            </button>
            <label className="flex flex-col items-start mb-4 w-[100%]">
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="p-1 !rounded-full bg-blue text-white font-bold cursor-pointer  !border-blue w-full h-[50px]"
                />
            </label>
            <button
                type="submit"
                className="p-2 !rounded-full bg-blue-500 text-white font-bold cursor-pointer w-full h-[50px]"
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignupForm;
