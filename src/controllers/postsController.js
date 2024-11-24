import {getTodosPosts , criarPost} from "../models/postsModel.js";

export async function listarPosts (req, res) { // Define uma rota GET para a URL "/posts".
    const posts = await getTodosPosts; // Chama a função assíncrona para buscar os posts.
    res.status(200).json(posts); // Envia uma resposta HTTP com status 200 (OK) e o array de posts no formato JSON.
}

export async function postarNovoPost(req, res){
  const novoPost = req.body;
  try {
    const postCriado = await criarPosts(novoPost);
    res.status(200).json(postCriado);
  } catch(erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"})
  }
}