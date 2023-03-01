import mongoose from 'mongoose'
import Customer from './models/Customer';

mongoose.connect(process.env.CUSTOMCONNSTR_MONGODB_CONNECTION_STRING)