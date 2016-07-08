const Sequelize = require('sequelize')
const db = require('../db.config.js')

const Temperature = db.define('temperature', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  type: { type: Sequelize.STRING },
  c: { type: Sequelize.FLOAT },
  f: { type: Sequelize.FLOAT },
  h: { type: Sequelize.FLOAT }
},
{ timestamps: true });

Temperature.sync().then(() => {
  Temperature.describe().then(table => console.log('\n', table));
});

module.exports = Temperature;
