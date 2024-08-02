import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url = 'http://localhost:8080/fleurs';

  async getAllTransactions(): Promise<Transaction[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getTransactionById(id: number): Promise<Transaction | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}
