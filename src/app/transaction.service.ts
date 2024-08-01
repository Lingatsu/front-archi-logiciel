import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  readonly baseUrl = 'https://images.unsplash.com';

  transactionList: Transaction[] = [
    {
      id: 0,
      name: 'Rose Bouquet Delight',
      city: 'Quito',
      state: 'Ecuador',
      photo: `${this.baseUrl}/photo-1496175362769-08a34d630326?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 40,
      color: 'Red',
      fragrance: 'Strong',
      season: 'Spring to Fall'
    },
    {
      id: 1,
      name: 'Tulip Treasures',
      city: 'Lisse',
      state: 'Netherlands',
      photo: `${this.baseUrl}/photo-1524386416438-98b9b2d4b433?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 0,
      color: 'Various',
      fragrance: 'Mild',
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Sunflower Sunshine',
      city: 'Gironde',
      state: 'France',
      photo: `${this.baseUrl}/photo-1526547541286-73a7aaa08f2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 15,
      color: 'Yellow',
      fragrance: 'None',
      season: 'Summer'
    },
    {
      id: 3,
      name: 'Daisy Dreams',
      city: 'California',
      state: 'USA',
      photo: `${this.baseUrl}/photo-1621767514321-4d4e6dc04555?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 25,
      color: 'White',
      fragrance: 'None',
      season: 'Spring to Fall'
    },
    {
      id: 4,
      name: 'Lily Love',
      city: 'Gower Peninsula',
      state: 'Wales',
      photo: `${this.baseUrl}/photo-1501973931234-5ac2964cd94a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 10,
      color: 'Various',
      fragrance: 'Strong',
      season: 'Summer'
    },
    {
      id: 5,
      name: 'Orchid Oasis',
      city: 'Chiang Mai',
      state: 'Thailand',
      photo: `${this.baseUrl}/photo-1534885320675-b08aa131cc5e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 8,
      color: 'Various',
      fragrance: 'Mild',
      season: 'Year-round'
    },
    {
      id: 6,
      name: 'Carnation Creations',
      city: 'Colombia',
      state: 'South America',
      photo: `${this.baseUrl}/photo-1617265178137-f22fec5badae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 12,
      color: 'Various',
      fragrance: 'Mild',
      season: 'Year-round'
    },
    {
      id: 7,
      name: 'Lavender Luxe',
      city: 'Provence',
      state: 'France',
      photo: `${this.baseUrl}/photo-1477511801984-4ad318ed9846?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 20,
      color: 'Purple',
      fragrance: 'Strong',
      season: 'Summer'
    },
    {
      id: 8,
      name: 'Peony Perfection',
      city: 'Luoyang',
      state: 'China',
      photo: `${this.baseUrl}/photo-1527960460253-fa03fbfd03f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 5,
      color: 'Various',
      fragrance: 'Strong',
      season: 'Spring'
    },
    {
      id: 9,
      name: 'Hydrangea Haven',
      city: 'Kyushu',
      state: 'Japan',
      photo: `${this.baseUrl}/photo-1546842931-886c185b4c8c?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 30,
      color: 'Various',
      fragrance: 'None',
      season: 'Summer'
    }
  ];

  getAllTransactions(): Transaction[] {
    return this.transactionList;
  }

  getTransactionById(id: number): Transaction | undefined {
    return this.transactionList.find(transaction => transaction.id === id);
  }

  constructor() { }
}
