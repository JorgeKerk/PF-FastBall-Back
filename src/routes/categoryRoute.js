const express = require('express');
const Category=require('./../handlers/categoryHandler');
// const validatorHandler = require('./../middleware/validatorHandler');
const router=express.Router();
const {getAllCategories,createCategory,getCategoryById,deleteCategory,reactivateCategory}=new Category();
// const {updateCategorySchema, createCategorySchema, getCategorySchema } = require('./../schemas/categoryShema');

// router.get('/', getAllCategories);
// router.post('/', validatorHandler(createCategorySchema, 'body'), createCategory);
// router.get('/:id', validatorHandler(getCategorySchema, 'params'), getCategoryById);
// router.delete('/:id', validatorHandler(getCategorySchema, 'params'), deleteCategory);
// router.put('/:id',validatorHandler(getCategorySchema, 'params'), reactivateCategory);

router.get('/', getAllCategories);
router.post('/', createCategory);
router.get('/:id', getCategoryById);
router.delete('/:id', deleteCategory);
router.put('/:id', reactivateCategory);
  

module.exports=router;
