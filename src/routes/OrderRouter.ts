import { Elysia, t } from "elysia"
import { OrderController } from "../controllers/OrderController"

export const OrderRouter = new Elysia({ prefix: '/orders' })
  .post('/', 
    ({ body: { title, price } }) => OrderController.create({ title, price }),
    {
      body: t.Object({
        title: t.String(),
        price: t.Number(),
      }),
    }
  )
  .get('/:id', 
    ({ params: { id } }) => OrderController.getById({ id: Number(id) }),
    {
      params: t.Object({
        id: t.String(),
      }),
    }
  )
  .get('/', () => OrderController.getAll())
  .delete('/:id', 
    ({ params: { id } }) => OrderController.delete({ id: Number(id) }),
    {
      params: t.Object({
        id: t.String(),
      }),
    }
  )