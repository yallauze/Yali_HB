export class Article {
    /* id: number;
    titre: string;
    contenu: string;
    image: string;
    constructor(p_id: number, p_titre: string, p_contenu: string, p_image: string){
        this.id = p_id;
        this.titre = p_titre;
        this.contenu = p_contenu;
        this.image = p_image;
    } */
    constructor(
    public id: number,
    public titre: string,
    public contenu: string,
    public image: string,
    public category: string,
    ){}

}
