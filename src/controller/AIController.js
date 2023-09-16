import AbstractManagerController from '../core/AbstractManagerController';
import DeviceEntity from '../entities/DeviceEntity';
import AIService from '../services/AIService';
import Constants from '../utils/Constants';

class AIController extends AbstractManagerController {

    /**
     * @description Get List DEVICE
     * @author Long.Pham
     * @since 10/07/2019
     * @param {} res 
     * @param {*} postData 
     */
     getListDevice(res, postData) {
        try {
            let service = new AIService();
            let entity = new DeviceEntity();
            entity = Object.assign({}, entity, postData);
            if(Libs.isBlank(entity.appId) || entity.appId != Constants.AI.appId || Libs.isBlank(entity.secretKey) || entity.secretKey != Constants.AI.secretKey){
                var resData = {};
                resData = Libs.returnJsonResult(false, i18n.__('ERR_SYSTEM'), { }, 0);
                res.send(resData);
                return;
            }

            service.getListDevice(entity, function (err, rs) {
                if (!err) {
                    service.getListDeviceSize(entity, function (err1, rs1) {
                        if (!err1) {
                            resData = Libs.returnJsonResult(true, i18n.__("ACTION.SUCCESS"), rs, rs1.totalRow);
                        } else {
                            resData = Libs.returnJsonResult(false, i18n.__("ACTION.FAIL"), {}, 0);
                        }
                        res.send(resData);
                    });
                } else {
                    resData = Libs.returnJsonResult(false, i18n.__("ACTION.FAIL"), {}, 0);
                    res.send(resData);
                }
            });
        } catch (e) {
            this.logger.error("Lỗi: " + e);
            var resData = {};
            resData = Libs.returnJsonResult(false, i18n.__('ERR_SYSTEM'), { "error": e + "" }, 0);
            res.send(resData);
        }

    }


    
     /**
     * @description Get List data by device
     * @author Long.Pham
     * @since 10/07/2019
     * @param {} res 
     * @param {*} postData 
     */
      getDataDeviceToday(res, postData) {
        try {
            let service = new AIService();
            let entity = new DeviceEntity();
            entity = Object.assign({}, entity, postData);
            if(Libs.isBlank(entity.appId) || entity.appId != Constants.AI.appId || Libs.isBlank(entity.secretKey) || entity.secretKey != Constants.AI.secretKey){
                var resData = {};
                resData = Libs.returnJsonResult(false, i18n.__('ERR_SYSTEM'), { }, 0);
                res.send(resData);
                return;
            }
            service.getDataDeviceToday(entity, function (err, rs) {
                if (!err) {
                    resData = Libs.returnJsonResult(true, i18n.__("ACTION.SUCCESS"), rs, 0);
                } else {
                    resData = Libs.returnJsonResult(false, i18n.__("ACTION.FAIL"), {}, 0);
                }
                res.send(resData);
            });
        } catch (e) {
            this.logger.error("Lỗi: " + e);
            var resData = {};
            resData = Libs.returnJsonResult(false, i18n.__('ERR_SYSTEM'), { "error": e + "" }, 0);
            res.send(resData);
        }

    }

    /**
     * @description Get List item
     * @author Long.Pham
     * @since 10/07/2019
     * @param {} res 
     * @param {*} postData 
     */
    getList(res, postData) {
        // try {
        //     let service = new AIService();
        //     let entity = new AIEntity();
        //     entity = Object.assign({}, entity, postData);

            
            
        //     service.getList(entity, function (err, rs) {
        //         if (!err) {
        //             service.getSize(entity, function (err1, rs1) {
        //                 if (!err1) {
        //                     resData = Libs.returnJsonResult(true, i18n.__("ACTION.SUCCESS"), rs, rs1.totalRow);
        //                 } else {
        //                     resData = Libs.returnJsonResult(false, i18n.__("ACTION.FAIL"), {}, 0);
        //                 }
        //                 res.send(resData);
        //             });
        //         } else {
        //             resData = Libs.returnJsonResult(false, i18n.__("ACTION.FAIL"), {}, 0);
        //             res.send(resData);
        //         }
        //     });
        // } catch (e) {
        //     this.logger.error("Lỗi: " + e);
        //     var resData = {};
        //     resData = Libs.returnJsonResult(false, i18n.__('ERR_SYSTEM'), { "error": e + "" }, 0);
        //     res.send(resData);
        // }

    }


    /**
     * @description Get detail item
     * @author Long.Pham
     * @since 11/07/2019
     * @param {*} res 
     * @param {*} postData 
     */
    getDetail(res, postData) {
        // try {
        //     var service = new AIService();
        //     let entity = new AIEntity();
        //     entity = Object.assign({}, entity, postData);
        //     service.getDetail(entity, function (err, rs) {
        //         var resData = {};
        //         if (!err) {
        //             resData = Libs.returnJsonResult(true, i18n.__("ACTION.SUCCESS"), rs, 0);
        //         } else {
        //             resData = Libs.returnJsonResult(false, i18n.__("ACTION.FAIL"), {}, 0);
        //         }
        //         res.send(resData);
        //     });
        // } catch (e) {
        //     var resData = {};
        //     resData = Libs.returnJsonResult(false, i18n.__('ERR_SYSTEM'), { "error": e + "" }, 0);
        //     res.send(resData);
        // }
    }

    /**
     * @description Delete item
     * @author thanh.bay
     * @since 11/07/2018
     * @param {*} res 
     * @param {*} postData 
     */
    deleteAction(res, postData) {
        // try {
        //     let service = new AIService();
        //     let entity = new AIEntity();
        //     entity = Object.assign({}, entity, postData);
        //     if (Libs.isBlank(entity.id)) {
        //         var resData = {};
        //         resData = Libs.returnJsonResult(true, i18n.__("NOT_EXIST"), {}, 0);
        //         res.send(resData);
        //         return;
        //     }
        //     Sync(function () {
        //         service.delete(entity, function (err, rsupdate) {
        //             try {
        //                 if (!rsupdate) {
        //                     let resData = Libs.returnJsonResult(false, i18n.__('ACTION.DELETE_FAIL'), { "error": err }, 0);
        //                     res.send(resData);
        //                     return;
        //                 }
        //                 let resData = Libs.returnJsonResult(true, i18n.__('ACTION.DELETE_SUCCESS'), entity, 0);
        //                 res.send(resData);
        //             } catch (error) {
        //                 let resData = Libs.returnJsonResult(false, i18n.__('ERR_SYSTEM'), { "error": error }, 0);
        //                 res.send(resData);
        //             }
        //         });
        //     });
        // } catch (e) {
        //     var resData = {};
        //     resData = Libs.returnJsonResult(false, i18n.__('ERR_SYSTEM'), { "error": e + "" }, 0);
        //     res.send(resData);
        // }
    }

    /**
     * @description Save action
     * @author Long.Pham
     * @since 11/07/2019
     * @param {*} res 
     * @param {*} postData 
     */
    updateStatus(res, postData) {
        // try {
        //     let service = new AIService();
        //     let entity = Object.assign({}, new AIEntity(), postData);
        //     entity.status = (!entity.status || entity.status == -1) ? 0 : 1;

        //     if (Libs.isBlank(entity.id)) {
        //         var resData = {};
        //         resData = Libs.returnJsonResult(true, i18n.__("NOT_EXIST"), {}, 0);
        //         res.send(resData);
        //         return;
        //     }

        //     Sync(function () {
        //         service.updateStatus(entity, function (err, rsupdate) {
        //             try {
        //                 if (!rsupdate) {
        //                     let resData = Libs.returnJsonResult(false, i18n.__('ACTION.UPDATE_FAIL'), { "error": err }, 0);
        //                     res.send(resData);
        //                     return;
        //                 }
        //                 let resData = Libs.returnJsonResult(true, i18n.__('ACTION.UPDATE_SUCCESS'), entity, 0);
        //                 res.send(resData);
        //             } catch (error) {
        //                 let resData = Libs.returnJsonResult(false, i18n.__('ERR_SYSTEM'), { "error": error }, 0);
        //                 res.send(resData);
        //             }
        //         });
        //     });

        // } catch (e) {
        //     var resData = Libs.returnJsonResult(false, i18n.__('ERR_SYSTEM'), { "error": e + "" }, 0);
        //     res.send(resData);
        // }
    }

    /**
     * @description Save action
     * @author Long.Pham
     * @since 11/07/2019
     * @param {*} res 
     * @param {*} postData 
     */
    async saveAction(res, postData) {
        // try {
        //     let self = this;
        //     let service = new AIService();
        //     let entity = Object.assign({}, new AIEntity(), postData);
        //     entity.status = (!entity.status || entity.status == -1) ? 0 : 1;
        //     let validate = new AIValidate();

        //     let errors = await validate.FLValidationAll(entity);
        //     if (errors != null) {
        //         errors.validate = false;
        //         res.send(Libs.returnJsonResult(false, "", errors, 0));
        //         return;
        //     }


        //     if (entity.hasOwnProperty('screen_mode') && entity.screen_mode == Constants.screen_mode.insert) {
        //         Sync(function () {
        //             service.insertAI(entity, function (err, rs) {
        //                 if (rs && err) {
        //                     let resData = Libs.returnJsonResult(true, i18n.__('ACTION.SAVE_SUCCESS'), entity, 0);
        //                     res.send(resData);
        //                 } else {
        //                     let resData = Libs.returnJsonResult(false, i18n.__('ACTION.SAVE_FAIL'), { "error": err }, 0);
        //                     res.send(resData);
        //                 }
        //             });
        //         });
        //     } else if (entity.hasOwnProperty('screen_mode') && entity.screen_mode == Constants.screen_mode.update) {
        //         service.updateAI(entity, function (err, rs) {
        //             if (rs) {
        //                 let resData = Libs.returnJsonResult(true, i18n.__('ACTION.SAVE_SUCCESS'), entity, 0);
        //                 res.send(resData);
        //             } else {
        //                 let resData = Libs.returnJsonResult(false, i18n.__('ACTION.SAVE_FAIL'), { "error": err }, 0);
        //                 res.send(resData);
        //             }
        //         });
        //     }
        // } catch (e) {
        //     var resData = Libs.returnJsonResult(false, i18n.__('ERR_SYSTEM'), { "error": e + "" }, 0);
        //     res.send(resData);
        // }
    }

    /**
	 * @description Get all
	 * @author Long.Pham
	 * @since 10/07/2019
	 * @param {} res 
	 * @param {*} postData 
	 */
     getDropDownList(res, postData) {
        // try {
        //     let service = new AIService();
        //     let entity = new AIEntity();
        //     entity = Object.assign({}, entity, postData);
        //     service.getDropDownList(entity, function (err, rs) {
        //         if (!err) {
        //             resData = Libs.returnJsonResult(true, i18n.__("ACTION.SUCCESS"), rs, 0);
        //             res.send(resData);
        //         } else {
        //             resData = Libs.returnJsonResult(false, i18n.__("ACTION.FAIL"), {}, 0);
        //             res.send(resData);
        //         }
        //     });
        // } catch (e) {
        //     this.logger.error("Lỗi: " + e);
        //     var resData = {};
        //     resData = Libs.returnJsonResult(false, i18n.__('ERR_SYSTEM'), { "error": e + "" }, 0);
        //     res.send(resData);
        // }
    }

}
export default AIController;