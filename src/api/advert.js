import xhr from "./xhr/";
export default {
    // 添加广告
    addAdvert(data) {
        return xhr({
            url: `/advert/addAdvert`,
            method: "post",
            data: data
        });
    },
    // 添加广告位
    addAdvertSpace(data) {
        return xhr({
            url: `/advert/addAdvertSpace`,
            method: "post",
            data: data
        });
    },
    // 广告禁启用
    disableAdvert(data) {
        return xhr({
            url: `/advert/disableAdvert`,
            method: "post",
            data: data
        });
    },
    // 广告位禁启用
    disableAdvertSpace(data) {
        return xhr({
            url: `/advert/disableAdvertSpace`,
            method: "post",
            data: data
        });
    },
    // 广告列表
    getAdvertList(data) {
        return xhr({
            url: `/advert/getAdvertList`,
            method: "get",
            data: data
        });
    },
    // 广告位列表
    getAdvertSpaceList(data) {
        return xhr({
            url: `/advert/getAdvertSpaceList`,
            method: "get",
            data: data
        });
    },
    // 广告编辑
    modifyAdvert(data) {
        return xhr({
            url: `/advert/modifyAdvert`,
            method: "post",
            data: data
        });
    },
    // 广告位编辑
    modifyAdvertSpace(data) {
        return xhr({
            url: `/advert/modifyAdvertSpace`,
            method: "post",
            data: data
        });
    },
    // 广告删除
    removeAdvert(data) {
        return xhr({
            url: `/advert/removeAdvert`,
            method: "post",
            data: data
        });
    },
    // 广告位删除
    removeAdvertSpace(data) {
        return xhr({
            url: `/advert/removeAdvertSpace`,
            method: "post",
            data: data
        });
    },
    // 广告详情接口
    getAdvertDetail(data) {
        return xhr({
            url: `/advert/getAdvertDetail`,
            method: "get",
            data: data
        });
    },
    // 广告位详情
    getAdvertSpaceDetail(data) {
        return xhr({
            url: `/advert/getAdvertSpaceDetail`,
            method: "get",
            data: data
        });
    },
    // 广告位IdName查询
    getAdvertSpaceIdName(data) {
        return xhr({
            url: `/advert/getAdvertSpaceIdName`,
            method: "get",
            data: data
        });
    },
}
