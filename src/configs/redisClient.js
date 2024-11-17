import Redis from "ioredis";

const RedisConfig = new Redis({
    host: 'localhost',
    port: 6379,
    password: null
});
RedisConfig.on('connect', ()=> console.log('Connected to Redis successfully.'))
RedisConfig.on('error', (err)=> console.error('Redis connection error:', err));

export default RedisConfig;