import {Address} from '../model/address-model';

// MyPlaceポイントのクラスです
// MyPlaceの名前と得点を持ちます。
export class MyPlacerPoint{
  name: string;
  point: number;
}

// MyPlaceクラスです。
// 複数のMyPlacePointを持ちます
export class MyPlace {
  address: Address;
  points: MyPlacerPoint[];

  private constructor(address: Address, points:MyPlacerPoint[]){
    this.address = address;
    this.points = points;
  }

  // 持っているMyPlaceポイントの点数を全て足し合わせて総合得点を返します
  get totalPoint(): number{
    if (this.points) {
      return this.points
      .map(p=>p.point)
      .reduce((accumulator, currentValue) => accumulator + currentValue) / 4;
    }
  }

  static create(address: Address, points: MyPlacerPoint[]): MyPlace{
    return new MyPlace(address, points);
  }

}