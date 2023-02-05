const Sequelize = require('sequelize');

class OrderItems extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        orders_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscore: false,
        modelName: 'OrderItems',
        tableName: 'orderitems',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
}
module.exports = OrderItems;