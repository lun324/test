/*
 * 向控制台输出日志
 * @param  data data  要输出的日志
 * @return string
 */
function log(data){
	if(typeof data == 'string'){
		console.log(data);
	}else{
		console.log(JSON.stringify(data));
	}
}

/*
*  生成自动登录地址
*  通过此方法生成的地址，可以让用户免登录，进入积分兑换商城
*/
function buildCreditAutoLoginRequest(appKey, appSecret, credits, uid){
    var url = "http://www.duiba.com.cn/autoLogin/autologin?";
    var timestamp = new Date().getTime() + "";
    var s = sign(appKey, appSecret, credits, timestamp, uid);
    
    url = url + "uid=" + uid + "&credits=" + credits + "&appKey=" + appKey + "&sign=" + s + "&timestamp=" + timestamp;
    return url;
}

/*
*  md5签名，$array中务必包含 appSecret
*/
function sign(appKey, appSecret, credits, timestamp, uid){
    var string = appKey + appSecret + credits + timestamp + uid;
    return md5(string);
}
