import axios from "axios";

const BASE_URL = "http://localhost:3001";

class CrescendoEatsApi {

    //Generic Request Method, Method Arg Defaults to "GET"

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call To: ", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;

        const params = method === "get" ? data : {};

        try {
            return (await axios({ url, method, data, params })).data;
          } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
          }
    };

    //Individual API Routes

    /** Get All Recipes */

    static async getAllRecipes() {
        let res = await this.request(`recipes`);
        return res;
    };

    /**Get Recipe */

    static async getRecipe(id) {
        let res = await this.request(`recipes/${id}`);
        return res;    
    };

    /**Post Recipe */

    static async newRecipe(data) {
        await this.request(`recipes`, data, "post");
    };

    /**Edit recipe */

    static async editReciepe(uuid, data) {
        let res = await this.request(`recipes/${uuid}`, data, "patch");
        console.log(res);
        return res;
    };

    /**Get all ingredients */
    static async getAllIngredients() {
        let res = await this.request(`recipes`);
        let ingredientsArr = res.map(r => r.ingredients).flat();
        ingredientsArr.sort((a, b) => a.name.localeCompare(b.name))
        return ingredientsArr
    };

    static async getAllSpecials() {
        let res = await this.request(`specials`);
        return res;
    };

    static async getSpecial(id) {
        let res = await this.request(`specials/${id}`);
        return res;
    };

    static async newSpecial(data) {
        await this.request(`specials`, data, "post");
    };
};

export default CrescendoEatsApi;