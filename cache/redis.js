const redis = require('redis');
const config = require('../config');

const client = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password,
});

const list = (table) => new Promise((resolve, reject) => {
  client.get(`${table}`, (err, data) => {
    if (err) return reject(err);
    let res = data || null;
    if (data) {
      res = JSON.parse(data);
    }
    return resolve(res);
  });
});

async function get(table, id) {
  const search = `${table}_${id}`;
  return list(search);
}

const remove = async (key) => {
  client.del(key);
  return true;
};

const upsert = async (table, data) => {
  let key = table;
  if (data && data.dna) {
    key = `${key}_${JSON.stringify(data.dna)}`;
  }
  client.setex(key, 360, JSON.stringify(data));
  return true;
};

module.exports = {
  list,
  get,
  upsert,
  remove,
};
