
const codeStatus = {
    // 通用错误
    'SUCCESS': {
        code: '0',
        message: '请求成功',
    },
    'FAIL': {
        code: '-1',
        message: '服务器错误',
    },
    'ERROR': {
        code: '1',
        message: '请求失败'
    },
    'NOT_FOUND': {
        code: '1005',
        message: '请求资源不存在'
    },

    // 业务异常
    'BUSINESS': {
        code: '1000',
        message: '业务异常'
    },
    'PARAMS_PARSE': {
        code: '1031',
        message: '参数转化异常'
    },
    'METHOD_NOT_ALLOWED': {
        code: '405',
        message: '不支持当前请求方法'
    },
    'BAD_REQUEST': {
        code: '400',
        message: '参数解析失败'
    },
    'SYS_ERROR': {
        code: '1001',
        message: '系统异常，请联系管理员'
    },
    'MAX_UPLOAD_SIZE': {
        code: '1001',
        message: '上传文件大小超出限制'
    },
    'NETWORK': {
        code: '1002',
        message: '网络异常'
    },
    'ENCRYPTION': {
        code: '1003',
        message: '加密异常'
    },
    'RSA_FAILURE': {
        code: '1003',
        message: 'RSA公钥失效，请刷新后重试'
    },
    'RSA_GEN_ERROR': {
        code: '1003',
        message: '生成RSA异常'
    },
    'RESUBMIT': {
        code: '1004',
        message: '请勿重复提交请求'
    },
    'NOT_SUBMIT_KEY': {
        code: '1024',
        message: '表单防重submitKey不能为空'
    },
    'NOT_AUTH_TOKEN': {
        code: '1024',
        message: '身份认证票据不允许为空'
    },
    'FILE_TYPE_OUT': {
        code: '1024',
        message: '文件类型超出限制'
    },

    // 登录、账号、权限错误
    'NO_LOGIN': {
        code: '9',
        message: '未登录或会话超时，请重新登录！'
    },
    'LOGIN_SECONDARY': {
        code: '1008',
        message: '您的账户在异地登录，如果不是本人操作，请及时修改密码！'
    },
    'LOGIN_NULL_USER': {
        code: '1009',
        message: '账号或密码不能为空'
    },
    'LOGIN_USER': {
        code: '1010',
        message: '账号或密码错误'
    },
    'LOGIN_ACCOUNT': {
        code: '1011',
        message: '账号不存在'
    },
    'LOGIN_INACTIVE': {
        code: '1012',
        message: '账号未激活，请联系管理员'
    },
    'LOGIN_PASSWORD': {
        code: '1013',
        message: '密码错误或加密异常'
    },
    'ACCOUNT_LOCK': {
        code: '1014',
        mssage: '30分钟内连续5次登录错误，您的账号暂时被锁定'
    },
    'LOGIN_SSO': {
        code: '1025',
        message: '单点登录认证失败'
    },
    'NOT_BIND': {
        code: '1030',
        message: '账号未绑定'
    },
    'NO_SEARCH': {
        code: '1006',
        message: '无查询权限'
    },
    'NO_SEARCH_ORG': {
        code: '1006',
        message: '无所属单位，不能进行操作'
    },
    'NO_SEARCH_AREA': {
        code: '1032',
        message: '五所属区域，不能进行操作'
    },
    'NO_SEARCH_DEPT': {
        code: '1006',
        message: '无所属部门，不能进行操作'
    },
    'NO_PERMISSIONS': {
        code: '1007',
        message: '对不起，您无{module}{type}权限，不能进行此操作！'
    },

    // 数据库错误
    'SQL_ERROR': {
        code: '1015',
        message: 'SQL执行异常，请联系管理员，请确认SQL参数或语句是否异常'
    },
    'SQL_TIME_OUT': {
        code: '1026',
        message: 'SQL执行时间过长,语句：{SQL}'
    },
    'QUERY_ERROR': {
        code: '1016',
        message: '查询条件异常，请修改查询条件后重试！'
    },
    'QUERY_ERROR_TIME': {
        code: '1017',
        message: '时间查询条件异常不支持此关系查询！'
    },
    'UPDATE_VES': {
        code: '1018',
        message: '更新失败，操作的记录已被更新'
    },
    'UPDATE_NOT_PK': {
        code: '1018',
        message: '更新失败，主键id不允许为空'
    },
    'UPDATE_NULL': {
        code: '1019',
        message: '更新失败，{filed}字段不允许为空】'
    },
    'UPDATE_PK': {
        code: '1020',
        message: '主键未标记'
    },
    'ADD': {
        code: '1021',
        message: '新增数据异常'
    },
    'UPDATE': {
        code: '1022',
        message: '修改数据异常'
    },
    'DELETE': {
        code: '1023',
        message: '删除数据异常'
    },
    'UPDATE_VES_NOT': {
        code: '1024',
        message: '乐观锁不允许为空'
    },
    'SUBMIT_PARAMS': {
        code: '1025',
        message: '非法操作，请求参数异常'
    },
}

/**
 * 返回的数据结构
 * @param {Number} status 返回状态码
 * @param {String|Number} code 返回提示码
 * @param {String} message 返回的提示信息，默认为空
 * @param {Object} data 返回的数据，默认为 null 
 */
function sendResult(status = 'SUCCESS', data = null, message = '') {
    return {
        code: codeStatus[status].code,
        message: message || codeStatus[status].message,
        data,
    }
}

/**
 * 获取总记录数
 */
async function getCount(model, condition) {
    return await model.count({
        where: condition
    })
}

/**
 * 分页获取列表
 */
async function getListByPage(model, condition, order) {}

/** 获取 body 体参数 */
function getBody(req) {
    // 分页
    const limit = req.body.limit || 10
    const offset = req.query.offset || 0

    // 条件
    const conditions = req.body.conditions || null

    // 排序
    const orders = req.body.orders || ['id', 'desc']

    return {
        where: conditions,
        order: orders
    }
}

/** 获取 query 参数 */
function getQuery(req) {
    // 分页
    const limit = req.query.limit || 10
    const offset = req.query.offset || 0
}

module.exports = {
    sendResult
};