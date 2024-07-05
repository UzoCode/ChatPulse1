const { Sequelize } = require('sequelize');
const sequelize = require('../models');

const migrate = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');
    process.exit(0);
  } catch (error) {
    console.error('Error synchronizing the database:', error);
    process.exit(1);
  }
};

const seed = async () => {
  // Add your seeding logic here
  console.log('Database seeded');
  process.exit(0);
};

const args = process.argv.slice(2);

if (args[0] === 'migrate') {
  migrate();
} else if (args[0] === 'seed') {
  seed();
}
