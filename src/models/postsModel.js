import conectarAoBanco from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão armazenada na variável de ambiente STRING_CONEXAO.

export default async function getTodosPosts() { // Define uma função assíncrona para buscar todos os posts.
    const db = conexao.db("imersao-instabytes"); // Seleciona o banco de dados "imersao-instabytes".
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray(); // Busca todos os documentos da coleção e retorna um array.
  }