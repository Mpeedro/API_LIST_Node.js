import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  async init() {
    try {
      // Estabelece a conexão com o banco de dados
      this.connection = new Sequelize(databaseConfig);
      // Testa a conexão para garantir que está ativa
      await this.connection.authenticate();
      console.log('Conectado ao PostgreSQL com sucesso!');

      // Inicializa cada modelo com a conexão ativa
      models.forEach(model => model.init(this.connection));
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
    }
  }
}

export default new Database();
