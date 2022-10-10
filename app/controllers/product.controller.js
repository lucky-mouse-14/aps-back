const db = require("../models")
const Product = db.products
const Op = db.Sequelize.Op

const chalk = require('chalk')
const apiResponse = require('./handler/apiResponse')

/**
 * Create and Save a new Product
 * @param {*} req 路由匹配的访问路径
 * @param {*} res 路由被访问时执行的函数
 */
exports.create = (req, res) => {
    // Validate request
    if (!req.body.from_way) {
        const rData = {
            ...apiResponse.sendResult('QUERY_ERROR'),
        }
        res.status(200).json(rData)
        return
    }

    // Create a Product
    const product = {
        type: req.body.type,
        material_id: req.body.material_id,
        material_no: req.body.material_no,
        material_barcode: req.body.material_barcode,
        material_name: req.body.material_name,
        specification: req.body.specification,
        material_group: req.body.material_group,
        unit: req.body.unit,
        is_purechase: req.body.is_purechase,
        gross_weight: req.body.gross_weight,
        weight_unit: req.body.weight_unit,
        use_org_id: req.body.use_org_id,
        length: req.body.length,
        width: req.body.width,
        height: req.body.height,
        volume: req.body.volume,
        color: req.body.color,
        material_source: req.body.material_source,
        forbid_status: req.body.forbid_status,
        from_way: req.body.from_way,
        use_org_no: req.body.use_org_no,
        use_org_name: req.body.use_org_name,
        erp_cls_id: req.body.erp_cls_id,
        material_full_name: req.body.material_full_name,
        sync_update_time: req.body.sync_update_time,
    }

    // Save Product in the datebase
    Product.create(product)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Product"
        })
    })
}

/**
 * Retrieve all Products from database
 * @param {*} req 路由匹配的访问路径
 * @param {*} res 路由被访问时执行的函数
 */
exports.findAll = async (req, res) => {
    // 分页
    const limit = req.body.limit || 10
    const offset = req.body.offset || 0

    // 条件
    const conditions = req.body.conditions || null

    // 排序
    const orders = req.body.orders || [
        ['id', 'desc']
    ]

    const count = await Product.count()

    Product.findAll({
        where: conditions,
        order: orders,
        limit,
        offset
    }).then(data => {
        const rData = {
            ...apiResponse.sendResult('SUCCESS', data),
            pageable: {
                limit,
                offset,
                count
            },
        }
        res.status(200).json(rData)
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving product."
        })
    })
}

/**
 * Find a single Product with an id
 * @param {*} req 路由匹配的访问路径
 * @param {*} res 路由被访问时执行的函数
 */
exports.findOne = (req, res) => {
    const id = req.params.id || null
    // Validate request
    if (!id) {
        const rData = {
            ...apiResponse.sendResult('QUERY_ERROR'),
        }
        res.status(200).json(rData)
        return
    }

    Product.findOne({where: {id}}).then(data => {
        const rData = {
            ...apiResponse.sendResult('SUCCESS', data),
        }
        res.status(200).json(rData)
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving product."
        })
    })
}

/**
 * Update a single Product with an id
 * @param {*} req 路由匹配的访问路径
 * @param {*} res 路由被访问时执行的函数
 */
exports.update = async (req, res) => {
    // 判断ID
    const id = req.body.id || null
    if (!id) {
        const rData = {
            ...apiResponse.sendResult('QUERY_ERROR'),
        }
        res.status(200).json(rData)
        return
    }

    // 待提交的 修改的键值对
    const params = {...req.body}
    delete params.id

    Product.update(params, {
        where: {
            id: id
        }
    }).then(data => {
        const rData = {
            ...apiResponse.sendResult('SUCCESS'),
        }
        res.status(200).json(rData)
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving product."
        })
    })
}

