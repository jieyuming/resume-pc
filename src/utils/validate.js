const emojiReg = new RegExp("\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]") //检测表情
const amountReg = /^[-]{0,1}\d{1,}$|^[-]{0,1}\d{1,}\.{1}\d{1,2}$/ //检测金额(可以是负数)
// let rechangeReg = /^\d{1,}$|^\d{1,}\.{1}\d{1,2}$/ //检测比例
let integralReg = /^[1-9]\d*$/ // 检查联通积分
let rechargeMoneyReg = /^\d{1,}$|^\d{1,}\.{1}\d{1,2}$/ //检查联通积分兑换rmb金额（可精确到后2位小数）
export const phoneReg = /^1\d{10}$/ // 匹配手机号码
export const accountReg = /^[0-9a-zA-Z]{1,12}$/ //匹配公司账户
export const userNameReg = /^[0-9a-zA-Z]{1,15}$/ //匹配用户名
// export const concatWayReg = /^((0\d{2,3}-?\d{7,8})|(1\d{10}))$/; //检测联系方式 包括手机号 和 固话
// 检查手机号码
export function checkPhone(rule, value, callback) {
    if (!value) {
        return callback(new Error('请输入手机号'))
    } else if (!phoneReg.test(value)) {
        return callback(new Error('请输入正确的手机号码'))
    }
    else {
        callback()
    }
}
// 检查联系方式
export function checkConcatWay(rule, value, callback) {
    if (!value) {
        return callback(new Error('请输入联系方式'))
    } else if (value.length > 20) {
        return callback(new Error('请输入正确的联系方式'))
    }
    else {
        callback()
    }
}

// 检查充值金额
export function checkRechargeAmount(rule, value, callback) {
    if (!value) {
        return callback(new Error('请输入充值金额'))
    } else if (!amountReg.test(value)) {
        return callback(new Error('充值金额必须是数字（可精确到小数点后2位）'))
    } else if (-100000000 >= parseFloat(value) || parseFloat(value) >= 100000000) {
        return callback(new Error('充值金额范围(-1亿,1亿)'))
    } else if (Math.abs(parseFloat(value)) === 0) {
        return callback(new Error('充值金额不能为0'))
    }
    else {
        callback()
    }
}

// 检查密码
export function checkPassword(rule, value, callback) {
    const chinessReg = new RegExp("[\u4e00-\u9fa5]")
    if (!value) {
        return callback(new Error('请输入密码'))
    } else if (emojiReg.test(value)) {
        return callback(new Error('密码不支持表情'))
    } else if (chinessReg.test(value)) {
        return callback(new Error('密码不支持中文'))
    } else if (value.length < 6 || value.length > 30) {
        return callback(new Error('密码长度6-30位'))
    }
    else {
        callback()
    }
}

// 检查预警金额
export function checkWarnAmount(rule, value, callback) {
    if (!value) {
        return callback(new Error('请输入金额'))
    } else if (!amountReg.test(value)) {
        return callback(new Error('金额必须是数字（可精确到小数点后2位）'))
    } else if (-100000000 >= parseFloat(value) || parseFloat(value) >= 100000000) {
        return callback(new Error('金额范围(-1亿, 1亿)'))
    }
    else {
        callback()
    }
}

// 检查姓名
export function checkUserName(rule, value, callback) {
    if (!value) {
        return callback(new Error('请输入姓名'))
    } else if (value.length > 20) {
        return callback(new Error('姓名长度最多20'))
    }
    else {
        callback()
    }
}

// 检查部门
export function checkDepartment(rule, value, callback) {
    if (!value) {
        return callback(new Error('请输入部门'))
    } else if (value.length > 20) {
        return callback(new Error('部门长度最多20'))
    }
    else {
        callback()
    }
}

// 检查职位
export function checkPosition(rule, value, callback) {
    if (!value) {
        return callback(new Error('请输入职位'))
    } else if (value.length > 20) {
        return callback(new Error('职位长度最多20'))
    }
    else {
        callback()
    }
}

// 检查公司名称 
export function checkCompanyName(rule, value, callback) {
    if (!value) {
        return callback(new Error('公司名称不能为空'))
    } else if (emojiReg.test(value)) {
        return callback(new Error('不支持表情符号'))
    } else if (value.length > 60) {
        return callback(new Error('公司名称最多60'))
    }
    else {
        callback()
    }
}

// 检查短信验证码（4位）
export function checkCode(rule, value, callback) {
    const codeReg = /^\d{4}$/
    if (!value) {
        return callback(new Error('验证码不能为空'))
    } else if (!codeReg.test(value)) {
        return callback(new Error('请输入4位短信验证码'))
    }
    else {
        callback()
    }
}

// 检查商户账号
export function checkCompanyAccount(rule, value, callback) {
    if (!value) {
        return callback(new Error('商户账户不能为空'))
    } else if (!accountReg.test(value)) {
        return callback(new Error('仅支持字母和数字，最多12位'))
    }
    else {
        callback()
    }
}

// 检查用户名
export function checkUserNick(rule, value, callback) {
    if (!value) {
        return callback(new Error('用户名不能为空'))
    } else if (!userNameReg.test(value)) {
        return callback(new Error('仅支持字母和数字，最多15位'))
    }
    else {
        callback()
    }
}
// 检查电子券
export function checkCoupon(rule, value, callback) {
    const accountReg = /^[1-9]{1}\d{0,}$/
    if (!value) {
        return callback(new Error('消耗值不能为空'))
    } else if (!accountReg.test(value)) {
        return callback(new Error('仅支持正整数'))
    }
    else {
        callback()
    }
}

// 检查联通积分的合法性
export function checkIntegral(rule, value, callback) {
    if (!value) {
        return callback(new Error('积分不能为空'))
    }
    else if (!integralReg.test(value)) {
        return callback(new Error('积分值必须是正整数'))
    } else if (Math.abs(parseFloat(value)) === 0) {
        return callback(new Error('积分不能为0'))
    }
    else {
        callback()
    }
}

// 检查兑换金额
export function checkRechargeMoney(rule, value, callback) {
    if (!value) {
        return callback(new Error('金额不能为空'))
    }
    else if (!rechargeMoneyReg.test(value)) {
        return callback(new Error('金额必须是数字（可精确到小数点后2位）'))
    } else if (Math.abs(parseFloat(value)) === 0) {
        return callback(new Error('金额不能为0'))
    }
    else {
        callback()
    }
}
// 补发或者扣减电子琴的数目

export function checkoutCouponCount(rule, value, callback) {
    let reg = /^[-]{0,1}\d{1,}$/
    if (!value) {
        return callback(new Error('数值不能为空'))
    }
    else if (!reg.test(value)) {
        return callback(new Error('数值必须是整数'))
    }
    else {
        callback()
    }
}
