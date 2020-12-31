import BASE from "@/utils/http.js";

// 返回数据处理，判断成功失败
import {statusIntercept} from "@/utils/statusIntercept.js"

export default {
	/**
	 * 邀请函界面
	**/
	getInviteActivity(id, success, error){
		BASE.getReq(`/itcsaas/apps/mega_activity/api/v1/getInviteActivity/${id}`).then((data) => {
			statusIntercept(data, success, error);
		}).catch((err) => {
            error(err);
        });
	},
	
}