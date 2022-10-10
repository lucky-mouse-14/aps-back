module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      id: { // ID标识
        type: Sequelize.BIGINT,
        allowNull: false, // 是否允许为空
        primaryKey: true, // 是否为主键
        autoIncrement: true, // 是否自增
      },
      type: { // 类型（标记成品产品）
        type: Sequelize.STRING(255)
      },
      material_id: { // 物料ID
        type: Sequelize.BIGINT
      },
      material_no: { // 物料编号
        type: Sequelize.STRING(255)
      },
      material_barcode: { // 物料条码
        type: Sequelize.STRING(255)
      },
      material_name: { // 物料名称
        type: Sequelize.STRING(255)
      },
      specification: { // 规格型号
        type: Sequelize.STRING(255)
      },
      material_group: { // 物料分组
        type: Sequelize.STRING(255)
      },
      unit: { // 基本单位
        type: Sequelize.STRING(255)
      },
      is_purchase: { // 是否需要采购
        type: Sequelize.STRING(255)
      },
      gross_weight: { // 毛重
        type: Sequelize.FLOAT(53)
      },
      net_weight: { // 净重
        type: Sequelize.FLOAT(53)
      },
      weight_unit: { // 重量单位
        type: Sequelize.FLOAT(53)
      },
      use_org_id: { // 使用单位ID
        type: Sequelize.STRING(255)
      },
      length: { // 长
        type: Sequelize.FLOAT(53)
      },
      width: { // 宽
        type: Sequelize.FLOAT(53)
      },
      height: { // 高
        type: Sequelize.FLOAT(53)
      },
      volume: { // 体积
        type: Sequelize.STRING(255)
      },
      color: { // 颜色
        type: Sequelize.STRING(255)
      },
      material_source: { // 物料来源
        type: Sequelize.STRING(255)
      },
      forbid_status: { // 是否禁用/禁用状态
        type: Sequelize.STRING(255)
      },
      from_way: { // 数据库来源: 1-集团云·星空(cloud), 2-宙际杰, 3-捷顺(k3)
        type: Sequelize.INTEGER,
        allowNull: false
      },
      use_org_no: { // 使用单位编号
        type: Sequelize.STRING(255)
      },
      use_org_name: { // 使用单位名称
        type: Sequelize.STRING(255)
      },
      erp_cls_id: { // 物料属性内码。 对应的名称: 1-外购, 2-自制
        type: Sequelize.INTEGER
      },
      material_full_name: { // 物料全名
        type: Sequelize.STRING(255)
      },
      sync_update_time: { // 同步更新时间: YYYY-MM-DD hh:mm:ss
        type: Sequelize.STRING(255)
      },
      source_modify_time: { // 源数据编辑更新时间
        type: Sequelize.STRING(255)
      },
    },
    {
      timestamps: false, // 不启用时间戳
      createdAt: 'create_time', // 创建时间
      updatedAt: 'modify_time', // 更新时间
      tableName: 'aps_product', // 直接提供表名
    });
  
    return Product;
  };
  