import developerDao from "../dao/DBSystem/Developer.dao.js";
import BaseService from "./base.service.js";
import { deleteImageInCloud } from "../middlewares/uploadImages.middleware.js";
import { Product } from "../models/product.js";

class DeveloperService extends BaseService {
  constructor() {
    super(developerDao);
  }

  async getById(id) {
    try {
      const foundObject = await this.dao.getByFilter({
        where: {
          id: id,
        },
        include: [
          {
            model: Product,
          },
        ],
      });

      return foundObject;
    } catch (error) {
      throw error;
    }
  }

  async updateById(id, object) {
    try {
      const foundObject = await this.getById(id);

      if (object.logo_developer_public_id) {
        await deleteImageInCloud(foundObject.logo_developer_public_id);
      }

      return super.updateById(id, object);
    } catch (error) {
      throw error;
    }
  }
}

export default new DeveloperService();
