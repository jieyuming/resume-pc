import xhr from "./xhr/";
export default {
    // 添加分类
    addCategory(data) {
        return xhr({
            url: `/category/addCategory`,
            method: "post",
            data: data
        });
    },
    // 添加内容
    addContent(data) {
        return xhr({
            url: `/category/addContent`,
            method: "post",
            data: data
        });
    },
    // 分类显隐
    displayCategory(data) {
        return xhr({
            url: `/category/displayCategory`,
            method: "post",
            data: data
        });
    },
    // 内容显隐 
    displayCategory(data) {
        return xhr({
            url: `/category/displayContent`,
            method: "post",
            data: data
        });
    },
    // 分类列表查询 
    getCategoryList(data) {
        return xhr({
            url: `/category/getCategoryList`,
            method: "get",
            data: data
        });
    },
    // 内容列表查询 
    getContentList(data) {
        return xhr({
            url: `/category/getContentList`,
            method: "get",
            data: data
        });
    },
    // 分类编辑接口 
    modifyCategory(data) {
        return xhr({
            url: `/category/modifyCategory`,
            method: "post",
            data: data
        });
    },
    // 内容编辑接口 
    modifyContent(data) {
        return xhr({
            url: `/category/modifyContent`,
            method: "post",
            data: data
        });
    },
    // 分类删除接口 
    removeCategory(data) {
        return xhr({
            url: `/category/removeCategory`,
            method: "post",
            data: data
        });
    },
    // 内容删除接口 
    removeContent(data) {
        return xhr({
            url: `/category/removeContent`,
            method: "post",
            data: data
        });
    },
    //  分类详情接口
    getCategoryDetail(data) {
        return xhr({
            url: `/category/getCategoryDetail`,
            method: "get",
            data: data
        });
    },
    //  分类ID名称查询接口
    getCategoryIdName(data) {
        return xhr({
            url: `/category/getCategoryIdName`,
            method: "get",
            data: data
        });
    },
    // 内容详情查询接口
    getContentDetail(data) {
        return xhr({
            url: `/category/getContentDetail`,
            method: "get",
            data: data
        });
    },
}