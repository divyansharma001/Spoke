export interface User {
    id: number;
    fullname: string;
    username: string;
    email: string;
    password: string;
    profilephoto?: string;
    gender: 'MALE' | 'FEMALE' | 'OTHER';
}


