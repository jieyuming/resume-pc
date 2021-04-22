import Vue from 'vue';

Vue.directive('defaultSelect', {
    componentUpdated(el, bindings, vnode) {
        // values v-model 绑定值
        // options 下拉选项
        // prop 对应 options 中 的 value 属性
        // defaultValue 默认值判断值
        const [values, options, prop, defaultValue] = bindings.value
        // 需要隐藏的标签索引
        const indexs = []
        const tempData = values.map(a => options.find(op => op[prop] === a)) || []
        tempData.forEach((a, index) => {
            if (a && defaultValue && defaultValue.indexOf(a[prop]) > -1) indexs.push(index)
        })
        const dealStyle = function (tags) {
            tags.forEach((el, index) => {
                if (indexs.includes(index) && ![...el.classList].includes('select-tag-close-none')) {
                    el.classList.add('none')
                }
            })
        }
        // 设置样式 隐藏close icon
        const tags = el.querySelectorAll('.el-tag__close')
        if (tags.length === 0) {
            // 初始化tags为空处理
            setTimeout(() => {
                const tagTemp = el.querySelectorAll('.el-tag__close')
                dealStyle(tagTemp)
            })
        } else {
            dealStyle(tags)
        }
    }
})
