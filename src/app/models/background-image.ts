export class BackgroundImage {
  url: string
  credit: string
  credit_url: string

  constructor(url: string = "", credit: string = "", credit_url: string = "") {
    this.url = url;
    this.credit = credit;
    this.credit_url = credit_url;
  }
}
