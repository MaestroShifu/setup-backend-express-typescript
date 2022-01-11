export interface AuthContract<T = unknown> {
  passwordEncrypt(password: string): string;
  passwordValidate(password: string, hash: string): boolean;
  tokenGenerate(payload: T): string;
  tokenVerify(hash: string): T;
}
