import prisma from "../prisma";

export class OrderController {
  static async create({ title, price }: { title: string; price: number }) {
    try {
      const order = await prisma.order.create({
        data: { title, price }
      })
      return order
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async getById({ id }: { id: number }) {
    try {
      const order = await prisma.order.findUnique({
        where: { id }
      })
      return order
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async getAll() {
    try {
      const orders = await prisma.order.findMany()
      return orders
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async delete({ id }: { id: number }) {
    try {
      const order = await prisma.order.delete({
        where: { id }
      })
      return order
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}