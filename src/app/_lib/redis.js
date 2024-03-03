import { createClient } from 'redis';

const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

client.on('error',(err) => console.log(err))

if (!client.isOpen){
    client.connect()
    console.log("Connected to Redis")
}

export {client}