import { Ingredientes } from "./ingredientes";
import { Preparo } from "./preparo";

export interface Receitas {
    "id": string,
    "titulo": string,
    "resumo": string,
    "rendimento": number,
    "tempoPreparo": number,
    "dificuldade": number,
    "categoria": number,
    "destaque": true,
    "imagem": string,
    "dataPublicacao": string,
    "ingredientes": Ingredientes [],
    "modoPreparo": Preparo [],
}
    