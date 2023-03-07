
export const session = {
    createSession: () => localStorage.setItem("auth.user.status", "true"),

    checkSession: () => localStorage.getItem("auth.user.status"),

    revokeSession: () => localStorage.removeItem("auth.user.status")
};
