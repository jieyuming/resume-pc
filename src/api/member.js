import xhr from "./xhr/";
export default {
    // 禁启用
    disable(data) {
        return xhr({
            url: `/member/disable`,
            method: "post",
            data: data
        });
    },
    // 会员详情
    getDetail(data) {
        return xhr({
            url: `/member/getDetail`,
            method: "get",
            data: data
        });
    },
    // 分页查询
    pageList(data) {
        return xhr({
            url: `/member/pageList`,
            method: "get",
            data: data
        });
    },
}
