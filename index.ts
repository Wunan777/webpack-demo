import { MongoClient } from './src/MongoClient';

// Usage
const dbUri = 'mongodb://127.0.0.1:27017/test';
const client = new MongoClient(dbUri);
client.connect();