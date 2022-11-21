import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

const isValidCpfOrCpnj = (req: Request, res: Response, next: NextFunction) => {
  const numbers = req.body.cpf_cnpj;

  if (numbers.length < 11 || numbers.length > 14) {
    throw new AppError("Invalid CPF or CNPJ", 400);
  }

  if (numbers.length === 11) {
    if (isValidCpf(numbers) == false) {
      throw new AppError("Invalid CPF", 400);
    }
  }

  if (numbers.length === 14) {
    if (isValidCnpj(numbers) == false) {
      throw new AppError("Invalid CNPJ", 400);
    }
  }

  next();
};

const isValidCpf = (cpf: any) => {
  if (cpf.length != 11 || !!cpf.match(/(\d)\1{10}/)) {
    return false;
  }

  cpf = cpf.split("").map((el: string | number) => +el);

  let sum = 0;
  let checker;

  for (let i = 1; i <= 9; i++) {
    sum += cpf[i - 1] * (11 - i);
  }
  checker = (sum * 10) % 11;

  if (checker == 10 || checker == 11) {
    checker = 0;
  }

  if (checker != cpf[9]) {
    return false;
  }

  sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum += cpf[i - 1] * (12 - i);
  }
  checker = (sum * 10) % 11;

  if (checker == 10 || checker == 11) {
    checker = 0;
  }
  if (checker != cpf[10]) {
    return false;
  }

  return true;
};

const isValidCnpj = (cnpj: any) => {
  if (cnpj.length != 14) {
    return false;
  }

  cnpj = cnpj.split("").map((el: string | number) => +el);

  let multiplier = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  let checker;

  for (let i = 0; i < 12; i++) {
    sum += cnpj[i] * multiplier[i];
  }
  checker = sum % 11;

  if (checker < 2) {
    checker = 0;
  } else if (checker > 2) {
    checker = 11 - checker;
  }

  if (checker != cnpj[12]) {
    return false;
  }

  let multiplier2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  sum = 0;

  for (let i = 0; i < 13; i++) {
    sum += cnpj[i] * multiplier2[i];
  }
  checker = sum % 11;

  if (checker < 2) {
    checker = 0;
  } else if (checker > 2) {
    checker = 11 - checker;
  }

  if (checker != cnpj[13]) {
    return false;
  }

  return true;
};

export default isValidCpfOrCpnj;
