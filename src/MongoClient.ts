const mongoose = require('mongoose');

class MongoClient {
    constructor(private dbUri: string) {}
  
    async connect() {
      try {
        console.log('Connecting to database...');
        await mongoose.connect(this.dbUri);
        console.log('Database connected successfully!');
      } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
      }
    }
  
    async disconnect() {
      try {
        await mongoose.disconnect();
        console.log('Database disconnected successfully!');
      } catch (error) {
        console.error('Database disconnection failed:', error);
      }
    }
}

export { MongoClient };
  
