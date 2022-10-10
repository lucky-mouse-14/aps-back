module.exports = app => {
    const product = require('../controllers/product.controller.js');
  
    var router = require('express').Router();
  
    /**
     * 查询产品列表
     * @route POST /api/product/list
     * @group 商品管理 - product
     * @returns {object}
     */
    router.post('/list', product.findAll);

    /**
     * 创建单个产品
     * @route POST /api/product/create
     * @group 商品管理 - product
     * @returns {object}
     */
    // router.post('/create', product.create)

    /**
     * 查询单个产品
     * @route GET /api/product/:id
     * @group 商品管理 - product
     * @returns {object}
     */
    router.get('/:id', product.findOne)

    /**
     * 更新单个产品
     * @route POST /api/product/update
     * @group 商品管理 - product
     * @param {number} id - 商品id
     * @returns {object}
     */
    router.post('/update', product.update)

    /**
     * 删除单个产品
     * @route DELETE /api/product/:id
     * @group 商品管理 - product
     * @returns {object}
     */
    // router.delete('/:id', product.delete)

    /**
     * 删除全部产品
     * @route DELETE /api/product/deleteAll
     * @group 商品管理 - product
     * @returns {object}
     */
    // router.delete('/deleteAll', product.deleteAll)
  
    app.use('/api/product', router);
  };
  