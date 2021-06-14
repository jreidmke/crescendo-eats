import axios from "axios";

const BASE_URL = "http://localhost:3001";

class CrescendoEatsApi {

    //Generic Request Method, Method Arg Defaults to "GET"

    static async request(endpoint, data = {}, method = "get") {
        console.debug("Api Call To: ", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;

        const params = method === "get" ? data : {};

        try {
            return (await axios({ url, method, data, params })).data;
          } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        };
    };

    //Individual API Routes

    /** Get All Recipes => RETURNS an Array of Recipe Objects*/

    static async getAllRecipes() {
        let res = await this.request(`recipes`);
        return res;
    };

    /**Get Recipe => Accepts Recipe UUID as argument and RETURNS a Recipe Object*/

    static async getRecipe(id) {
        let res = await this.request(`recipes/${id}`);
        return res;    
    };

    /**Post Recipe => Accepts Recipe Data (including ingredients and instructions arrays) and posts it to BE */

    static async newRecipe(data) {
        await this.request(`recipes`, data, "post");
    };

    /**Edit recipe => Accepts Recipe UUID & Recipe Data (including ingredients and instructions arrays) and patches it to BE */

    static async editRecipe(uuid, data) {
        await this.request(`recipes/${uuid}`, data, "patch");
    };

    /**Get all ingredients => RETURNS an Array of Ingredient Objects*/
    static async getAllIngredients() {
        let res = await this.request(`recipes`);
        let ingredientsArr = res.map(r => r.ingredients).flat();
        ingredientsArr.sort((a, b) => a.name.localeCompare(b.name))
        return ingredientsArr
    };

    /**Get all specials => RETURNS an Array of Special Objects */
    static async getAllSpecials() {
        let res = await this.request(`specials`);
        return res;
    };

    /**Returns specified special => Accepts Special UUID as argument and RETURNS a Recipe Special */
    static async getSpecial(id) {
        let res = await this.request(`specials/${id}`);
        return res;
    };

    /**Post Special => Accepts Special Data (including potential ingredient ids) and posts it to BE */
    static async newSpecial(data) {
        await this.request(`specials`, data, "post");
    };

    /**Edit Special => AAccepts Special Data (including potential ingredient ids) and posts it to BE */

    static async editSpecial(uuid, data) {
        await this.request(`specials/${uuid}`, data, "patch")
    }
};

export default CrescendoEatsApi;