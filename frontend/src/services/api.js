const BASE_URL = "http://localhost:5000/api";

export const loginUser = async (userData) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    return res.json();
};