import dotenv from "dotenv"
import { Elysia } from "elysia"
import { node } from "@elysiajs/node"
import cors from "@elysiajs/cors"
import { OrderRouter } from "./routes/OrderRouter"

class API {
  constructor() {
    dotenv.config()
    this.useMiddlewares()
    this.useRoutes()
    this.init().then(() => 
      console.log(`Server is running at: ${process.env.PORT}`) 
    )
  }

  private app = new Elysia({ adapter: node() })

  private useMiddlewares() {
    this.app.use(cors())
  }

  private useRoutes() {
    this.app.group("/order", (app) => app.use(OrderRouter))
  }

  async init() {
    this.app.listen(process.env.PORT || 5000)
  }
}

new API()