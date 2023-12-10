import productService from "../services/Product.service.js";
import messageService from "../services/Message.service.js";

async function getAllProductsHandler(io, socket) {
  socket.on("getAllProducts", async () => {
    const products = await productService.getProducts();
    io.sockets.emit("updatedProducts", products.payload);
  });
}

async function messagesHandler(io, socket) {
  socket.on("messageSent", async (message) => {
    await messageService.create(message);
    const messages = await messageService.getAll();
    io.sockets.emit("newMessages", messages);
  });

  socket.on("getMessages", async () => {
    const messages = await messageService.getAll();
    io.sockets.emit("newMessages", messages);
  });
}

export { getAllProductsHandler, messagesHandler };
