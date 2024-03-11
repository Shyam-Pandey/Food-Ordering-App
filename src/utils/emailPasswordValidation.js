export const emailPasswordValidation = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if (!emailRegex) {
        return "Invalid Email Address!";
    } else if (!passwordRegex) {
        return 'Password should be at least 8';
    } else {
        return null;
    }

};