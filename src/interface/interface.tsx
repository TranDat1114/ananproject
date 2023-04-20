interface HoatDong {
    projectId: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    targetAmount: number;
    currentAmount: number;
    userId: number;
    user: User;
    donations: Donation[];
}

interface Donation {
    donationId: number;
    amount: number;
    donationDate: Date;
    userId: number;
    projectId: number;
    user: null;
    project: null;
}

interface User {
    id: number;
    userName: string;
    email: string;
    address: string;
    password: string;
    phoneNumber: string;
    accountRoleId: number;
    accountRole: null;
    donations: null;
    projects: null;
}
