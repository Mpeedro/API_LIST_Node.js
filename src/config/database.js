module.exports = {
    dialect: 'postgres',
    host: '167.xxx.xxx.x9',
    username: 'xxx',
    password: 'xxx',
    database: 'tasklist',
    define: {
        // Ativa a criação automática dos campos 'createdAt' e 'updatedAt' para registrar as datas de criação e atualização dos registros.
        timestamps: true,

        // Converte os nomes das colunas para 'snake_case' (com underscores) ao invés de 'camelCase'.
        underscored: true,

        // Converte tanto os nomes das colunas quanto os nomes das tabelas para 'snake_case' = tabela: produtod_importados coluna: nome_do_produto.
        underscoredALL: true,
    },
};
