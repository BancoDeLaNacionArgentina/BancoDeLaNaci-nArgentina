import { type User, type InsertUser, type Transaction, type InsertTransaction } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getTransactions(userId: string): Promise<Transaction[]>;
  createTransaction(transaction: InsertTransaction): Promise<Transaction>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private transactions: Map<string, Transaction>;

  constructor() {
    this.users = new Map();
    this.transactions = new Map();
    
    const demoUserId = randomUUID();
    const demoUser: InsertUser = {
      username: "demo",
      password: "demo",
      name: "Mirian Elizabeth",
      accountNumber: "**** 67496",
      balance: "0.00"
    };
    const user: User = { ...demoUser, id: demoUserId };
    this.users.set(demoUserId, user);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getTransactions(userId: string): Promise<Transaction[]> {
    return Array.from(this.transactions.values()).filter(
      (transaction) => transaction.userId === userId
    );
  }

  async createTransaction(insertTransaction: InsertTransaction): Promise<Transaction> {
    const id = randomUUID();
    const transaction: Transaction = {
      ...insertTransaction,
      id,
      timestamp: new Date()
    };
    this.transactions.set(id, transaction);
    return transaction;
  }
}

export const storage = new MemStorage();
