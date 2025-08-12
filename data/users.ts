import { User, Address } from './types';

export const users: User[] = [
  {
    id: 'user-1',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    avatar: '/images/avatars/john-doe.jpg',
    phone: '+1-555-0123',
    dateOfBirth: '1990-05-15',
    isEmailVerified: true,
    createdAt: '2023-01-15T10:30:00Z',
    updatedAt: '2024-01-15T12:00:00Z'
  },
  {
    id: 'user-2',
    email: 'jane.smith@example.com',
    firstName: 'Jane',
    lastName: 'Smith',
    avatar: '/images/avatars/jane-smith.jpg',
    phone: '+1-555-0124',
    dateOfBirth: '1988-12-03',
    isEmailVerified: true,
    createdAt: '2023-02-20T14:20:00Z',
    updatedAt: '2024-01-10T16:30:00Z'
  },
  {
    id: 'user-3',
    email: 'mike.johnson@example.com',
    firstName: 'Mike',
    lastName: 'Johnson',
    avatar: '/images/avatars/mike-johnson.jpg',
    phone: '+1-555-0125',
    dateOfBirth: '1992-08-22',
    isEmailVerified: true,
    createdAt: '2023-03-10T09:15:00Z',
    updatedAt: '2024-01-12T11:45:00Z'
  },
  {
    id: 'user-4',
    email: 'sarah.wilson@example.com',
    firstName: 'Sarah',
    lastName: 'Wilson',
    avatar: '/images/avatars/sarah-wilson.jpg',
    phone: '+1-555-0126',
    dateOfBirth: '1995-03-18',
    isEmailVerified: true,
    createdAt: '2023-04-05T16:45:00Z',
    updatedAt: '2024-01-08T18:20:00Z'
  },
  {
    id: 'user-5',
    email: 'david.brown@example.com',
    firstName: 'David',
    lastName: 'Brown',
    avatar: '/images/avatars/david-brown.jpg',
    phone: '+1-555-0127',
    dateOfBirth: '1987-11-30',
    isEmailVerified: true,
    createdAt: '2023-05-12T11:20:00Z',
    updatedAt: '2024-01-14T13:15:00Z'
  },
  {
    id: 'user-6',
    email: 'emily.davis@example.com',
    firstName: 'Emily',
    lastName: 'Davis',
    avatar: '/images/avatars/emily-davis.jpg',
    phone: '+1-555-0128',
    dateOfBirth: '1993-07-14',
    isEmailVerified: true,
    createdAt: '2023-06-08T13:30:00Z',
    updatedAt: '2024-01-11T15:30:00Z'
  },
  {
    id: 'user-7',
    email: 'alex.taylor@example.com',
    firstName: 'Alex',
    lastName: 'Taylor',
    avatar: '/images/avatars/alex-taylor.jpg',
    phone: '+1-555-0129',
    dateOfBirth: '1991-09-25',
    isEmailVerified: true,
    createdAt: '2023-07-22T15:45:00Z',
    updatedAt: '2024-01-09T17:45:00Z'
  }
];

export const addresses: Address[] = [
  {
    id: 'addr-1',
    userId: 'user-1',
    type: 'shipping',
    firstName: 'John',
    lastName: 'Doe',
    company: 'Tech Solutions Inc.',
    addressLine1: '123 Main Street',
    addressLine2: 'Apt 4B',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
    country: 'US',
    phone: '+1-555-0123',
    isDefault: true
  },
  {
    id: 'addr-2',
    userId: 'user-1',
    type: 'billing',
    firstName: 'John',
    lastName: 'Doe',
    addressLine1: '123 Main Street',
    addressLine2: 'Apt 4B',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
    country: 'US',
    phone: '+1-555-0123',
    isDefault: true
  },
  {
    id: 'addr-3',
    userId: 'user-2',
    type: 'shipping',
    firstName: 'Jane',
    lastName: 'Smith',
    addressLine1: '456 Oak Avenue',
    city: 'Los Angeles',
    state: 'CA',
    postalCode: '90210',
    country: 'US',
    phone: '+1-555-0124',
    isDefault: true
  },
  {
    id: 'addr-4',
    userId: 'user-2',
    type: 'billing',
    firstName: 'Jane',
    lastName: 'Smith',
    addressLine1: '456 Oak Avenue',
    city: 'Los Angeles',
    state: 'CA',
    postalCode: '90210',
    country: 'US',
    phone: '+1-555-0124',
    isDefault: true
  },
  {
    id: 'addr-5',
    userId: 'user-3',
    type: 'shipping',
    firstName: 'Mike',
    lastName: 'Johnson',
    company: 'Creative Studios',
    addressLine1: '789 Pine Street',
    addressLine2: 'Suite 200',
    city: 'Chicago',
    state: 'IL',
    postalCode: '60601',
    country: 'US',
    phone: '+1-555-0125',
    isDefault: true
  },
  {
    id: 'addr-6',
    userId: 'user-4',
    type: 'shipping',
    firstName: 'Sarah',
    lastName: 'Wilson',
    addressLine1: '321 Elm Street',
    city: 'Houston',
    state: 'TX',
    postalCode: '77001',
    country: 'US',
    phone: '+1-555-0126',
    isDefault: true
  },
  {
    id: 'addr-7',
    userId: 'user-5',
    type: 'shipping',
    firstName: 'David',
    lastName: 'Brown',
    addressLine1: '654 Maple Drive',
    addressLine2: 'Unit 15',
    city: 'Miami',
    state: 'FL',
    postalCode: '33101',
    country: 'US',
    phone: '+1-555-0127',
    isDefault: true
  },
  {
    id: 'addr-8',
    userId: 'user-6',
    type: 'shipping',
    firstName: 'Emily',
    lastName: 'Davis',
    addressLine1: '987 Cedar Lane',
    city: 'Seattle',
    state: 'WA',
    postalCode: '98101',
    country: 'US',
    phone: '+1-555-0128',
    isDefault: true
  },
  {
    id: 'addr-9',
    userId: 'user-7',
    type: 'shipping',
    firstName: 'Alex',
    lastName: 'Taylor',
    addressLine1: '147 Birch Road',
    city: 'Denver',
    state: 'CO',
    postalCode: '80201',
    country: 'US',
    phone: '+1-555-0129',
    isDefault: true
  }
];

export const getAddressesByUserId = (userId: string): Address[] => {
  return addresses.filter(address => address.userId === userId);
};

export const getDefaultAddressesByUserId = (userId: string): Address[] => {
  return addresses.filter(address => address.userId === userId && address.isDefault);
};
