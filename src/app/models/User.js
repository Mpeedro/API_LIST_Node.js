import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,   
          primaryKey: true,          
          autoIncrement: true,       
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: {
          type: Sequelize.VIRTUAL,  
          allowNull: true,
        },
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
      }
    );
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
