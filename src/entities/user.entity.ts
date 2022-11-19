import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 40 })
  surname: string;

  @Column({ length: 40, unique: true })
  email: string;

  @Column()
  Telephone: string;

  @Column({ unique: true })
  Celphone: string;

  @Column()
  Birth_date: string;

  @Column()
  CEP: string;

  @Column()
  State: string;

  @Column()
  City: string;

  @Column()
  Street: string;

  @Column()
  District: string;

  @Column({ unique: true })
  Cpf_cnpj: string;

  @Column({ length: 300 })
  Meet_firgun: string;

  @Column({ length: 300 })
  Motive: string;

  @Column({ default: false })
  isAdm: boolean;
}

export { User };
