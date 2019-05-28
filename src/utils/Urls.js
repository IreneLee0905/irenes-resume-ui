/**
 * this Util store all urls
 * @type {{REST_CUSTOMER_ADD: string}}
 */
import WebUtils from "./WebUtils";

export const CustomerUrls = {
  REGISTER_PAGE: WebUtils.url("/register"),
  REST_CUSTOMER_ADD: WebUtils.url("/customer-add"),

};