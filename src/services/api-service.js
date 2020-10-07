export default class ApiService {
  getData = async () => {
    const result = await fetch(
      "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
    );

    if (!result.ok) {
      throw new Error("Server Error");
    }
    return await result.json();
  };

  // getDollarSale = async () => {
  //   const res = await this.getData();
  //   let sale;
  //   res.forEach((obj) => {
  //     if (obj.ccy === "USD") {
  //       sale = obj.sale;
  //     }
  //   });
  //   return +sale;
  // };

  getDollarSale = async () => {
    const res = await this.getData();
    const dollar = res.find((item) => item.ccy === "USD");
    return +dollar.sale;

    // let sale;
    // res.forEach((obj) => {
    //   if (obj.ccy === "USD") {
    //     sale = obj.sale;
    //   }
    // });
    // return +sale;
  };
}
