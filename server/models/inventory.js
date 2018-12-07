const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
  name: { type: 'String', required: false },
  unit: { type: 'String', required: false },
  value: { type: 'String', required: false },
  threshold: { type: 'String', required: false },
  pic:{type: 'String', required: false}
  });

module.exports = mongoose.model('inventorys', InventorySchema);
