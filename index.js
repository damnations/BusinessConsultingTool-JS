import mongoose from 'mongoose'
import Customer from './models/Customer';

mongoose.connect(process.env.CONNECTION_STRING)