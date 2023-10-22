import Manager from './manager.js';
import message from '../models/message.js';

class chatManager extends Manager {
  constructor() {
    super(message);
  }
}

export default new chatManager();
