import { initializeApp, getApps, cert, ServiceAccount } from 'firebase-admin/app';
import credentials from './credentials.json';

const firebaseAdminConfig = {
    credential: cert(credentials as ServiceAccount)
}

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}