import { AuthUser } from '../models/auth';

export class AuthService {
    static async signUp(email, password, fullName, location) {
        // TODO: Implement Firebase authentication
        return new AuthUser(email, fullName, location);
    }

    static async signIn(email, password) {
        // TODO: Implement Firebase authentication
        return new AuthUser(email, 'Test User', 'Cape Town');
    }

    static async signOut() {
        // TODO: Implement Firebase sign out
    }

    static async resetPassword(email) {
        // TODO: Implement Firebase password reset
    }
}