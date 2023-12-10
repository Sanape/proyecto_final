class BaseDao {
    constructor(model) {
      this.model = model;
    }
  
    async create(object) {
      try {
        const createdObject = await this.model.create(object);
  
        return createdObject;
      } catch (error) {
        throw error;
      }
    }
  
    async getAll(filter) {
      try {
        const foundObjects = await this.model.find(filter);
  
        return foundObjects;
      } catch (error) {
        throw error;
      }
    }
  
    async getById(id) {
      try {
        const foundObject = await this.model.findById(id);
  
        return foundObject;
      } catch (error) {
        throw error;
      }
    }
  
    async getByFilter(filter) {
      try {
        const foundObject = await this.model.findOne(filter);
  
        return foundObject;
      } catch (error) {
        throw error;
      }
    }
  
    async updateById(id, object) {
      try {
        const updatedObject = await this.model.findByIdAndUpdate(id, object, {
          new: true,
        });
  
        return updatedObject;
      } catch (error) {
        throw error;
      }
    }
  
    async updateByFilter(filter, object) {
      try {
        const updatedObject = await this.model.findOneAndUpdate(filter, object);
  
        return updatedObject;
      } catch (error) {
        throw error;
      }
    }
  
    async deleteById(id) {
      try {
        const deletedObject = await this.model.findByIdAndDelete(id);
  
        return deletedObject;
      } catch (error) {
        throw error;
      }
    }

    async deleteByFilter(filter) {
      try {
        const deletedObject = await this.model.deleteOne(filter);
  
        return deletedObject;
      } catch (error) {
        throw error;
      }
    }

    async deleteManyByFilter(filter) {
      try {
        const deletedObjects = await this.model.deleteMany(filter);
  
        return deletedObjects;
      } catch (error) {
        throw error;
      }
    }

    async aggregate(aggregateQuery) {
      try {
        const foundObjects = await this.model.aggregate(aggregateQuery);
  
        return foundObjects;
      } catch (error) {
        throw error;
      }
    }
  }
  
  export default BaseDao;
  