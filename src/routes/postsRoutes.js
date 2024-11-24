import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json()); // Habilita o middleware para analisar o corpo das requisições JSON.
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost)//rota para criar um post
}

export default routes;
