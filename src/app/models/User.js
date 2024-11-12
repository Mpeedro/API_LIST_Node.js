import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,   // Definindo o tipo da coluna id como INTEGER
          primaryKey: true,          // A coluna id é a chave primária
          autoIncrement: true,       // Garantindo que o id seja auto-incrementado
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
      }
    );
  }
}

export default User;
