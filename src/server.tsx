import { createServer } from "miragejs";
import { classics, proffessional, sport, theme } from "./data";

export default function makeServer() {
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/classics", () => {
        return { classics };
      });
      // this.get("/classics/:id", (schema, request) => {
      //   let id = request.params.id;
      //   return classics.watches.find((watch) => watch.id === id);
      // });
      this.get("/proffessional", () => {
        return { proffessional };
      });
      this.get("sport", () => {
        return { sport };
      });
      this.get("/theme" , () => {
        return { theme };
      })
      this.get("/watches", () => {
        return { watches: [...classics.watches, ...proffessional.watches, ...sport.watches] };
      } )
    },
  });
}
