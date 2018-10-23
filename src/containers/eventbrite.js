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

   // Search for Events by their name or the location
   async searchEvents(searchParams) {
      // fetch the Events info
      const getResults = await fetch(
         `https://www.eventbriteapi.com/v3/events/search/?q=${searchParams}&token=${
            this.tokenAuth
         }`
      );
      // convert data into json format
      const data = await getResults.json();

      console.log("searching...", data);

      return { data };
   }
}
