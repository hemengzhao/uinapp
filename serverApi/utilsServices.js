import BASE from "@/utils/http.js";
// 返回数据处理，判断成功失败
import {statusIntercept} from "@/utils/statusIntercept.js"

export default {
	
	/**
	 * 用户信息
	 */
	userIfon(success, error){
		BASE.getReq(`/meetingcloud/apps/department/api/v1/self`).then((data) => {
			statusIntercept(data, success, error);
		}).catch((err) => {
		    error(err);
		});
	},

	
}