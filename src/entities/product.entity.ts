import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum ModelType {
  NFCE = 65,
  NFE = 55,
}

@Entity("product")
class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 30 })
  operation: string;

  @Column({ length: 7 })
  movement: string;

  @Column({ length: 10 })
  situation: string;

  @Column({ type: "enum", enum: ModelType, default: ModelType.NFCE })
  model: ModelType;

  @Column({ type: "integer" })
  series: number;

  @Column({ type: "integer" })
  number: number;

  @Column({ length: 30 })
  supplier: string;

  @Column({ type: "date" })
  issueDate: string | Date;

  @Column({ type: "date" })
  genDate: string | Date;

  @Column({ length: 30 })
  employee: string;

  @Column({ type: "integer" })
  freight: number;

  @Column({ type: "integer" })
  totalValue: number;

  @Column({ length: 20 })
  product: string;

  @Column({ type: "integer" })
  quantity: number;

  @Column({ type: "integer" })
  unit: number;

  @Column({ type: "integer" })
  unitaryValue: number;

  @Column({ type: "integer" })
  total: number;

  @Column({ type: "integer" })
  discount: number;

  @Column({ type: "integer" })
  productFreight: number;

  @Column({ type: "integer" })
  expenses: number;

  @Column({ type: "integer" })
  insurance: number;

  @Column({ type: "integer" })
  icms: number;

  @Column({ type: "integer" })
  icmsST: number;

  @Column({ type: "integer" })
  ipi: number;

  @Column({ type: "integer" })
  pis: number;

  @Column({ type: "integer" })
  cofins: number;

  @Column({ length: 10 })
  reweighing: string;

  @Column({ type: "integer" })
  weight: number;

  @Column({ type: "integer" })
  reweighingValue: number;

  @Column({ length: 10 })
  method: string;

  @Column({ type: "integer" })
  finalTotal: number;

  @Column({ length: 20 })
  account: string;

  @Column({ length: 10 })
  condition: string;

}

export default Product;
