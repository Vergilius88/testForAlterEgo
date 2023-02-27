export interface AccessTokenPayload {
    iat: number;
    rttl: number | string;
    sub: string;
    exp: number;
    nbf: number;
}

export class SessionStorage {
    private static ACCESS_TOKEN_KEY: string = "auth.token.access";
    private static REFRESH_TOKEN_KEY: string = "auth.token.refresh";
    private static USER_KEY: string = "auth.user";
    private static EXPIRE_KEY: string = "auth.token.access.expire";
    private static USER_ROLE: string = "auth.user.role";

    public static createSession(token: string, refreshToken: string, tokenLife: number) {
        localStorage.setItem(this.ACCESS_TOKEN_KEY, token);
        localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
        localStorage.setItem(this.EXPIRE_KEY, String(tokenLife));
        //
        localStorage.setItem(this.USER_ROLE, token);
        //
    }

    public static revokeSession() {
        localStorage.removeItem(this.ACCESS_TOKEN_KEY);
        localStorage.removeItem(this.REFRESH_TOKEN_KEY);
        localStorage.removeItem(this.EXPIRE_KEY);
        localStorage.removeItem(this.USER_ROLE);
    }

    public static getRole(): string {
        return localStorage.getItem(this.USER_ROLE) as string;
    }

    public static getToken(): string {
        return localStorage.getItem(this.ACCESS_TOKEN_KEY) as string;
    }

    public static getExpirationTime(): number {
        return parseInt(localStorage.getItem(this.EXPIRE_KEY) as string);
    }

    public static getRefreshToken(): string {
        return localStorage.getItem(this.REFRESH_TOKEN_KEY) as string;
    }

    public static getUser(): any {
        return JSON.parse(localStorage.getItem(this.USER_KEY) as string);
    }

    public static exists(): boolean {
        return localStorage.getItem(this.ACCESS_TOKEN_KEY) !== null && localStorage.getItem(this.REFRESH_TOKEN_KEY) !== null;
    }
    public static getParsedAccessTokenPayload(): AccessTokenPayload | null {
        const token = this.getToken();
        if (!token) {
            return null;
        }

        const rawPayload = atob(token.split(".")[1]);
        return JSON.parse(rawPayload);
    }
}
