export default class ApiConstant {
  static baseUrl: string = "https://portfolio-backend-w1kw.onrender.com/api";

  static portfolio = "/portfolio";
  static getUserDetail = this.baseUrl + "/user/detail/";
  static getSkill = this.baseUrl + "/portfolio/skills/";
  static getExperiance = this.baseUrl + this.portfolio + "/work-experience";
  static getMyWorkUrl = this.baseUrl + this.portfolio + "/mywork/";
  static getProjectUrl = this.baseUrl + this.portfolio + "/projects";
  static getCertificateUrl = this.baseUrl + this.portfolio + "/certifications";
}
