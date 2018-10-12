export default class EventBrite {
   constructor() {
      this.tokenAuth = "CEZV7N6GZQYVCAS5NE42";
   }

   // Get categories from the Eventbrite API
   async getCategories() {
      // fetch categories data
      const categoriesResponse = await fetch(
         `https://www.eventbriteapi.com/v3/categories/?token=${this.tokenAuth}`
      );
      // convert data into json format
      const categories = await categoriesResponse.json();

      return { categories };
   }
}
