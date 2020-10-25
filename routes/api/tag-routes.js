const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get all tags
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

// Get single tag by id
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

// Create new tag
router.post('/', (req, res) => {
  // create a new tag
});

// Update tag
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

// Delete tag
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
