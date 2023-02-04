const Sequelize = require('sequelize');

module.exports = class Sauce extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        sauce_id: {
          //소스식별자(PK)
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        sauce_name: {
          // 소스 이름
          type: Sequelize.STRING,
          allowNull: false,
        },
        sauce_img: {
          // 소스 이미지
          type: Sequelize.STRING,
          allowNull: false,
        },
        sauce_price: {
          //결제수단이름
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Sauce',
        tableName: 'sauce',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
};