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
        await this.request(`recipes/${uuid}`, data, "patch");
    };

    /**Get all ingredients */
    static async getAllIngredients() {
        let res = await this.request(`recipes`);
        let ingredientsArr = res.map(r => r.ingredients).flat();
        ingredientsArr.sort((a, b) => a.name.localeCompare(b.name))
        return ingredientsArr
    };

    /**Returns all specials */
    static async getAllSpecials() {
        let res = await this.request(`specials`);
        return res;
    };

    /**Returns specified special */
    static async getSpecial(id) {
        let res = await this.request(`specials/${id}`);
        return res;
    };

    /**Posts new special to DB */
    static async newSpecial(data) {
        await this.request(`specials`, data, "post");
    };

    /**Updates special on BE */

    static async editSpecial(uuid, data) {
        await this.request(`specials/${uuid}`, data, "patch")
    }
};

export default CrescendoEatsApi;